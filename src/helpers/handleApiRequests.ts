import { IHandleApiRequestArgs } from "./types";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type ApiErrorLike = {
	message: string | string[];
};

function apiError(message: string | string[]): ApiErrorLike {
	return { message };
}

function normalizePath(pathname: string) {
	return pathname.replace(/^\/+/, "").replace(/\/+$/, "");
}

function slugify(value: string) {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)+/g, "");
}

function mapProfileToUser(profile: any, extras?: Partial<any>) {
	return {
		id: profile.id,
		email: extras?.email ?? "",
		role: profile.role,
		image: profile.image,
		cover: profile.cover,
		occupation: profile.occupation,
		roadmapsSubscribers: profile.roadmaps_subscribers ?? 0,
		fullName: profile.full_name ?? "",
		userName: profile.user_name ?? "",
		description: profile.description ?? "",
		socialMedia: extras?.socialMedia ?? [],
		experiences: extras?.experiences ?? [],
		_count: extras?._count ?? { followers: 0, following: 0, reviews: 0 },
		isFollowed: extras?.isFollowed ?? false,
		phone: extras?.phone ?? "",
	};
}

function mapRoadmap(row: any, opts: { isSubscribed?: boolean } = {}) {
	const steps = (row.steps ?? []).map((s: any) => ({
		id: s.id,
		title: s.title ?? "",
		duration: s.duration ?? "",
		description: s.description ?? "",
		tags: (s.tags ?? []).map((t: any) => ({
			id: t.id,
			name: t.name,
			color: t.color,
			roadmapStepId: t.roadmap_step_id ?? t.roadmapStepId,
		})),
		attachments: (s.attachments ?? []).map((a: any) => ({
			id: a.id,
			type: a.type,
			key: a.key,
			url: a.url ?? "",
			roadmapStepId: a.roadmap_step_id ?? a.roadmapStepId,
		})),
		verifications: (s.verifications ?? []).map((v: any) => ({
			id: v.id,
			title: v.title,
			link: v.link,
		})),
		order: s.order ?? s["order"] ?? 0,
	}));

	const tags = (row.tags ?? []).map((t: any) => ({
		id: t.id,
		roadmapStepId: t.roadmap_step_id ?? "",
		name: t.name,
		color: t.color,
	}));

	const price = row.price
		? {
				currency: row.price.currency,
				amount: row.price.amount,
				perks: row.price.perks ?? [],
		  }
		: null;

	return {
		id: row.id,
		description: row.description ?? "",
		category: row.category ?? null,
		createdAt: row.created_at,
		userId: row.user_id,
		title: row.title,
		duration: row.duration ?? "",
		flag: row.flag ?? "",
		primaryColor: row.primary_color ?? "#506CF0",
		secondaryColor: row.secondary_color ?? "#FF9900",
		cover: row.cover ?? null,
		subscribersCount: row.subscribers_count ?? 0,
		urlIdentifier: row.url_identifier,
		price,
		user: row.user ? mapProfileToUser(row.user) : null,
		steps,
		tags: (row.roadmap_tags ?? row.tags ?? []).map((rt: any) => ({
			id: rt.id,
			roadmapStepId: rt.roadmap_step_id ?? "",
			name: rt.name,
			color: rt.color,
		})),
		_count: {
			steps: (row.steps ?? []).length,
			tags: (row.tags ?? []).length,
		},
		isSubscribed: Boolean(opts.isSubscribed),
		status: row.status,
	};
}

class HandleApiRequests {
	public static handleApiRequest = async <Data>({
		method,
		body,
		endpoint,
	}: IHandleApiRequestArgs<Data>) => {
		if (!endpoint) throw apiError("Missing endpoint");

		const supabase = createSupabaseBrowserClient();
		const u = new URL(endpoint, "http://local");
		const path = normalizePath(u.pathname);
		const segments = path.split("/").filter(Boolean);

		const {
			data: { user: authUser },
		} = await supabase.auth.getUser();

		// -------------------------
		// ROADMAPS
		// -------------------------
		if (segments[0] === "roadmap") {
			// GET roadmap/?page=&pageSize=&duration=&category=&search=&search_creator=
			if (method === "GET" && (segments.length === 1 || segments[1] === "")) {
				const page = Number(u.searchParams.get("page") || "1");
				const pageSize = Number(u.searchParams.get("pageSize") || "10");

				let q = supabase
					.from("roadmaps")
					.select(
						`id, description, category, created_at, user_id, title, duration, flag, primary_color, secondary_color, cover, subscribers_count, url_identifier, status,
             user:profiles(id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description),
             price:roadmap_prices(amount, currency, perks),
             steps:roadmap_steps(id),
             tags:roadmap_tags(id, name, color)`
					)
					.order("created_at", { ascending: false })
					.range((page - 1) * pageSize, page * pageSize - 1);

				// Only published on public list
				q = q.eq("status", "PUBLISHED");

				const durations = u.searchParams.getAll("duration");
				const categories = u.searchParams.getAll("category");
				const userId = u.searchParams.get("userId");
				const search = u.searchParams.get("search");
				const searchCreator = u.searchParams.get("search_creator");

				if (durations.length) q = q.in("duration", durations);
				if (categories.length) q = q.in("category", categories);
				if (userId) q = q.eq("user_id", userId);
				if (search) q = q.ilike("title", `%${search}%`);

				if (searchCreator) {
					// Filter by creator username/full name. Requires joining user profiles first.
					// Supabase doesn't support arbitrary server-side join filters cleanly here,
					// so we fallback to filtering after fetch.
				}

				const { data, error } = await q;
				if (error) throw apiError(error.message);

				const roadmapIds = (data ?? []).map((r: any) => r.id);
				let subscribedSet = new Set<string>();
				if (authUser && roadmapIds.length) {
					const { data: subs } = await supabase
						.from("subscriptions")
						.select("roadmap_id")
						.eq("user_id", authUser.id)
						.in("roadmap_id", roadmapIds);
					(subs ?? []).forEach((s: any) => subscribedSet.add(s.roadmap_id));
				}

				let mapped = (data ?? []).map((r: any) =>
					mapRoadmap(r, { isSubscribed: subscribedSet.has(r.id) })
				);

				if (searchCreator) {
					const term = searchCreator.toLowerCase();
					mapped = mapped.filter((r: any) => {
						const u = r.user;
						return (
							u?.userName?.toLowerCase().includes(term) ||
							u?.fullName?.toLowerCase().includes(term)
						);
					});
				}

				return mapped as any;
			}

			// GET roadmap/myroadmaps
			if (method === "GET" && segments[1] === "myroadmaps") {
				if (!authUser) throw apiError("Not authenticated");

				const { data, error } = await supabase
					.from("roadmaps")
					.select(
						`id, description, category, created_at, user_id, title, duration, flag, primary_color, secondary_color, cover, subscribers_count, url_identifier, status,
             user:profiles(id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description),
             price:roadmap_prices(amount, currency, perks),
             steps:roadmap_steps(id),
             tags:roadmap_tags(id, name, color)`
					)
					.eq("user_id", authUser.id)
					.order("created_at", { ascending: false });

				if (error) throw apiError(error.message);

				return (data ?? []).map((r: any) =>
					mapRoadmap(r, { isSubscribed: true })
				) as any;
			}

			// GET roadmap/mysubscriptions
			if (method === "GET" && segments[1] === "mysubscriptions") {
				if (!authUser) throw apiError("Not authenticated");

				const { data: subs, error: subsErr } = await supabase
					.from("subscriptions")
					.select("roadmap_id")
					.eq("user_id", authUser.id);
				if (subsErr) throw apiError(subsErr.message);

				const roadmapIds = (subs ?? []).map((s: any) => s.roadmap_id);
				if (!roadmapIds.length) return [] as any;

				const { data, error } = await supabase
					.from("roadmaps")
					.select(
						`id, description, category, created_at, user_id, title, duration, flag, primary_color, secondary_color, cover, subscribers_count, url_identifier, status,
             user:profiles(id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description),
             price:roadmap_prices(amount, currency, perks),
             steps:roadmap_steps(id),
             tags:roadmap_tags(id, name, color)`
					)
					.in("id", roadmapIds)
					.order("created_at", { ascending: false });

				if (error) throw apiError(error.message);

				return (data ?? []).map((r: any) =>
					mapRoadmap(r, { isSubscribed: true })
				) as any;
			}

			// POST roadmap (create)
			if (method === "POST" && segments.length === 1) {
				if (!authUser) throw apiError("Not authenticated");
				const payload: any = body ?? {};
				const title = payload.title ?? "Untitled roadmap";
				const urlIdentifier =
					payload.urlIdentifier ??
					payload.url_identifier ??
					`${slugify(title)}-${crypto.randomUUID().slice(0, 8)}`;

				const insertData: any = {
					user_id: authUser.id,
					title,
					description: payload.description ?? "",
					category: payload.category ?? null,
					duration: payload.duration ?? "",
					cover: payload.cover ?? null,
					flag: payload.flag ?? "Start your journey",
					primary_color: payload.primaryColor ?? payload.primary_color ?? "#506CF0",
					secondary_color:
						payload.secondaryColor ?? payload.secondary_color ?? "#FF9900",
					url_identifier: urlIdentifier,
					status: payload.status ?? "DRAFT",
				};

				const { data, error } = await supabase
					.from("roadmaps")
					.insert(insertData)
					.select(
						`id, description, category, created_at, user_id, title, duration, flag, primary_color, secondary_color, cover, subscribers_count, url_identifier, status,
             user:profiles(id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description),
             price:roadmap_prices(amount, currency, perks),
             steps:roadmap_steps(id),
             tags:roadmap_tags(id, name, color)`
					)
					.single();

				if (error) throw apiError(error.message);
				return mapRoadmap(data, { isSubscribed: true }) as any;
			}

			// roadmap/:id (GET/PATCH)
			if (segments.length >= 2 && segments[1] && !["step"].includes(segments[1])) {
				const roadmapId = segments[1];

				// POST roadmap/:id/subscribe
				if (method === "POST" && segments[2] === "subscribe") {
					if (!authUser) throw apiError("Not authenticated");

					const { data: existing } = await supabase
						.from("subscriptions")
						.select("user_id, roadmap_id")
						.eq("user_id", authUser.id)
						.eq("roadmap_id", roadmapId)
						.maybeSingle();

					if (existing) {
						await supabase
							.from("subscriptions")
							.delete()
							.eq("user_id", authUser.id)
							.eq("roadmap_id", roadmapId);
						return { subscribed: false } as any;
					}

					const { error } = await supabase.from("subscriptions").insert({
						user_id: authUser.id,
						roadmap_id: roadmapId,
						amount: 0,
						currency: "USD",
					});
					if (error) throw apiError(error.message);
					return { subscribed: true } as any;
				}

				// POST roadmap/:id/publish
				if (method === "POST" && segments[2] === "publish") {
					if (!authUser) throw apiError("Not authenticated");
					const { data, error } = await supabase
						.from("roadmaps")
						.update({ status: "PUBLISHED" })
						.eq("id", roadmapId)
						.select()
						.single();
					if (error) throw apiError(error.message);
					return data as any;
				}

				// POST roadmap/:id/archive
				if (method === "POST" && segments[2] === "archive") {
					if (!authUser) throw apiError("Not authenticated");
					const { data, error } = await supabase
						.from("roadmaps")
						.update({ status: "ARCHIVED" })
						.eq("id", roadmapId)
						.select()
						.single();
					if (error) throw apiError(error.message);
					return data as any;
				}

				// POST roadmap/:id/price (upsert roadmap plan)
				if (method === "POST" && segments[2] === "price") {
					if (!authUser) throw apiError("Not authenticated");
					const payload: any = body ?? {};
					const { data, error } = await supabase
						.from("roadmap_prices")
						.upsert(
							{
								roadmap_id: roadmapId,
								amount: Number(payload.amount ?? 0),
								currency: payload.currency ?? "USD",
								perks: payload.perks ?? [],
							},
							{ onConflict: "roadmap_id" }
						)
						.select("amount, currency, perks")
						.single();
					if (error) throw apiError(error.message);
					return data as any;
				}

				// POST roadmap/:id/reorder-steps
				if (method === "POST" && segments[2] === "reorder-steps") {
					if (!authUser) throw apiError("Not authenticated");
					const payload: any = body ?? {};
					const steps = payload.steps ?? [];
					if (!Array.isArray(steps)) throw apiError("Invalid steps payload");

					await Promise.all(
						steps.map((s: any) =>
							supabase
								.from("roadmap_steps")
								.update({ order: Number(s.order) })
								.eq("id", s.stepId)
						)
					);

					return { success: true } as any;
				}

				if (method === "GET" && segments.length === 2) {
					const { data, error } = await supabase
						.from("roadmaps")
						.select(
							`id, description, category, created_at, user_id, title, duration, flag, primary_color, secondary_color, cover, subscribers_count, url_identifier, status,
               user:profiles(id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description),
               price:roadmap_prices(amount, currency, perks),
               steps:roadmap_steps(id, title, duration, description, order,
                 tags:step_tags(id, name, color, roadmap_step_id),
                 attachments:step_attachments(id, type, key, url, roadmap_step_id),
                 verifications:step_verifications(id, title, link, roadmap_step_id)
               ),
               tags:roadmap_tags(id, name, color)`
						)
						.eq("id", roadmapId)
						.single();

					if (error) throw apiError(error.message);

					let isSubscribed = false;
					if (authUser) {
						const { data: sub } = await supabase
							.from("subscriptions")
							.select("roadmap_id")
							.eq("user_id", authUser.id)
							.eq("roadmap_id", roadmapId)
							.maybeSingle();
						isSubscribed = Boolean(sub);
					}

					return mapRoadmap(data, { isSubscribed }) as any;
				}

				if (method === "PATCH" && segments.length === 2) {
					if (!authUser) throw apiError("Not authenticated");
					const payload: any = body ?? {};
					const updateData: any = {};
					const allowed = [
						"title",
						"description",
						"category",
						"duration",
						"cover",
						"flag",
						"primaryColor",
						"secondaryColor",
						"status",
					];

					allowed.forEach(key => {
						if (typeof payload[key] !== "undefined") updateData[key] = payload[key];
					});

					// map camel -> snake
					if ("primaryColor" in updateData) {
						updateData.primary_color = updateData.primaryColor;
						delete updateData.primaryColor;
					}
					if ("secondaryColor" in updateData) {
						updateData.secondary_color = updateData.secondaryColor;
						delete updateData.secondaryColor;
					}

					const { data, error } = await supabase
						.from("roadmaps")
						.update(updateData)
						.eq("id", roadmapId)
						.select()
						.single();
					if (error) throw apiError(error.message);
					return data as any;
				}
			}

			// ROADMAP STEPS
			if (segments[1] === "step") {
				// POST roadmap/step
				if (method === "POST" && segments.length === 2) {
					if (!authUser) throw apiError("Not authenticated");
					const payload: any = body ?? {};
					const insertData: any = {
						roadmap_id: payload.roadmapId ?? payload.roadmap_id,
						title: payload.title ?? "",
						duration: payload.duration ?? "",
						description: payload.description ?? "",
						order: Number(payload.order ?? payload["order"] ?? 0),
					};
					const { data, error } = await supabase
						.from("roadmap_steps")
						.insert(insertData)
						.select()
						.single();
					if (error) throw apiError(error.message);
					return {
						id: data.id,
						title: data.title ?? "",
						duration: data.duration ?? "",
						description: data.description ?? "",
						order: data.order ?? 0,
						tags: [],
						attachments: [],
						verifications: [],
					} as any;
				}

				// PATCH/DELETE roadmap/step/:id
				if (segments[2]) {
					const stepId = segments[2];

					if (method === "PATCH") {
						if (!authUser) throw apiError("Not authenticated");
						const payload: any = body ?? {};
						const updateData: any = {};
						if (typeof payload.title !== "undefined") updateData.title = payload.title;
						if (typeof payload.duration !== "undefined")
							updateData.duration = payload.duration;
						if (typeof payload.description !== "undefined")
							updateData.description = payload.description;
						if (typeof payload.order !== "undefined")
							updateData.order = Number(payload.order);

						const { data, error } = await supabase
							.from("roadmap_steps")
							.update(updateData)
							.eq("id", stepId)
							.select()
							.single();
						if (error) throw apiError(error.message);
						return data as any;
					}

					if (method === "DELETE") {
						if (!authUser) throw apiError("Not authenticated");
						const { error } = await supabase
							.from("roadmap_steps")
							.delete()
							.eq("id", stepId);
						if (error) throw apiError(error.message);
						return { success: true } as any;
					}
				}

				// step tags
				if (segments[2] === "tag") {
					// POST roadmap/step/tag
					if (method === "POST" && segments.length === 3) {
						if (!authUser) throw apiError("Not authenticated");
						const payload: any = body ?? {};
						const { data, error } = await supabase
							.from("step_tags")
							.insert({
								name: payload.name,
								color: payload.color ?? "#FE7860",
								roadmap_step_id: payload.roadmapStepId ?? payload.roadmap_step_id,
							})
							.select()
							.single();
						if (error) throw apiError(error.message);
						return {
							id: data.id,
							name: data.name,
							color: data.color,
							roadmapStepId: data.roadmap_step_id,
						} as any;
					}

					// DELETE roadmap/step/tag/:tagId
					if (method === "DELETE" && segments[3]) {
						if (!authUser) throw apiError("Not authenticated");
						const { error } = await supabase
							.from("step_tags")
							.delete()
							.eq("id", segments[3]);
						if (error) throw apiError(error.message);
						return { success: true } as any;
					}
				}

				// step verification
				if (segments[2] === "verification") {
					// POST roadmap/step/verification
					if (method === "POST" && segments.length === 3) {
						if (!authUser) throw apiError("Not authenticated");
						const payload: any = body ?? {};
						const { data, error } = await supabase
							.from("step_verifications")
							.insert({
								title: payload.title,
								link: payload.link,
								roadmap_step_id: payload.roadmapStepId ?? payload.roadmap_step_id,
							})
							.select()
							.single();
						if (error) throw apiError(error.message);
						return {
							id: data.id,
							title: data.title,
							link: data.link,
							roadmapStepId: data.roadmap_step_id,
						} as any;
					}

					// DELETE roadmap/step/verification/:id
					if (method === "DELETE" && segments[3]) {
						if (!authUser) throw apiError("Not authenticated");
						const { error } = await supabase
							.from("step_verifications")
							.delete()
							.eq("id", segments[3]);
						if (error) throw apiError(error.message);
						return { success: true } as any;
					}

					// PATCH roadmap/step/verification/:id
					if (method === "PATCH" && segments[3]) {
						if (!authUser) throw apiError("Not authenticated");
						const payload: any = body ?? {};
						const { data, error } = await supabase
							.from("step_verifications")
							.update({
								title: payload.title,
								link: payload.link,
							})
							.eq("id", segments[3])
							.select()
							.single();
						if (error) throw apiError(error.message);
						return {
							id: data.id,
							title: data.title,
							link: data.link,
							roadmapStepId: data.roadmap_step_id,
						} as any;
					}
				}

				// step attachment
				if (segments[2] === "attachment") {
					// POST roadmap/step/attachment
					if (method === "POST" && segments.length === 3) {
						if (!authUser) throw apiError("Not authenticated");
						const payload: any = body ?? {};
						const bucket = "step-attachments";
						const key = payload.key;
						let url = "";
						if (key) {
							const { data: signed } = await supabase.storage
								.from(bucket)
								.createSignedUrl(key, 60 * 60);
							url = signed?.signedUrl ?? "";
						}
						const { data, error } = await supabase
							.from("step_attachments")
							.insert({
								type: payload.type,
								key,
								url,
								roadmap_step_id: payload.roadmapStepId ?? payload.roadmap_step_id,
							})
							.select()
							.single();
						if (error) throw apiError(error.message);
						return {
							id: data.id,
							type: data.type,
							key: data.key,
							url: data.url ?? "",
							roadmapStepId: data.roadmap_step_id,
						} as any;
					}

					// DELETE roadmap/step/attachment/:attachmentId
					if (method === "DELETE" && segments[3]) {
						if (!authUser) throw apiError("Not authenticated");
						const attachmentId = segments[3];
						const { data: att } = await supabase
							.from("step_attachments")
							.select("id, key")
							.eq("id", attachmentId)
							.maybeSingle();
						if (att?.key) {
							await supabase.storage.from("step-attachments").remove([att.key]);
						}
						const { error } = await supabase
							.from("step_attachments")
							.delete()
							.eq("id", attachmentId);
						if (error) throw apiError(error.message);
						return { success: true } as any;
					}
				}
			}
		}

		// -------------------------
		// POSTS / COMMENTS / VOTES
		// -------------------------
		if (segments[0] === "posts") {
			// GET posts/?roadmapId=&page=&pageSize=
			if (method === "GET" && segments.length === 1) {
				const roadmapId = u.searchParams.get("roadmapId");
				const page = Number(u.searchParams.get("page") || "1");
				const pageSize = Number(u.searchParams.get("pageSize") || "10");
				if (!roadmapId) throw apiError("Missing roadmapId");

				const { data: posts, error } = await supabase
					.from("posts")
					.select(
						`id, title, content, roadmap_id, author_id, created_at,
             author:profiles(id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description)`
					)
					.eq("roadmap_id", roadmapId)
					.order("created_at", { ascending: false })
					.range((page - 1) * pageSize, page * pageSize - 1);

				if (error) throw apiError(error.message);

				// Fallback counts per post via extra queries if needed.
				const mapped = await Promise.all(
					(posts ?? []).map(async (p: any) => {
						const { count: cCount } = await supabase
							.from("comments")
							.select("*", { count: "exact", head: true })
							.eq("post_id", p.id);
						const { count: vCount } = await supabase
							.from("votes")
							.select("*", { count: "exact", head: true })
							.eq("post_id", p.id);

						let isVoted = false;
						if (authUser) {
							const { data: v } = await supabase
								.from("votes")
								.select("id")
								.eq("user_id", authUser.id)
								.eq("post_id", p.id)
								.maybeSingle();
							isVoted = Boolean(v);
						}

						return {
							id: p.id,
							title: p.title,
							content: p.content,
							roadmapId: p.roadmap_id,
							authorId: p.author_id,
							createdAt: p.created_at,
							author: mapProfileToUser(p.author),
							_count: { comments: cCount ?? 0, votes: vCount ?? 0 },
							isVoted,
						};
					})
				);

				return mapped as any;
			}

			// POST posts/
			if (method === "POST" && segments.length === 1) {
				if (!authUser) throw apiError("Not authenticated");
				const payload: any = body ?? {};
				const { data: post, error } = await supabase
					.from("posts")
					.insert({
						title: payload.title,
						content: payload.content,
						roadmap_id: payload.roadmapId ?? payload.roadmap_id,
						author_id: authUser.id,
					})
					.select(
						`id, title, content, roadmap_id, author_id, created_at,
             author:profiles(id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description)`
					)
					.single();
				if (error) throw apiError(error.message);

				return {
					id: post.id,
					title: post.title,
					content: post.content,
					roadmapId: post.roadmap_id,
					authorId: post.author_id,
					createdAt: post.created_at,
					author: mapProfileToUser(post.author),
					_count: { comments: 0, votes: 0 },
					isVoted: false,
				} as any;
			}

			// POST posts/:postId/comments
			if (method === "POST" && segments[2] === "comments" && segments[1]) {
				if (!authUser) throw apiError("Not authenticated");
				const postId = segments[1];
				const payload: any = body ?? {};

				const { data: comment, error } = await supabase
					.from("comments")
					.insert({
						content: payload.content,
						post_id: postId,
						author_id: authUser.id,
						parent_id: payload.parentId ?? payload.parent_id ?? null,
					})
					.select(
						`id, content, post_id, author_id, parent_id, created_at,
             author:profiles(id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description)`
					)
					.single();

				if (error) throw apiError(error.message);

				return {
					id: comment.id,
					content: comment.content,
					postId: comment.post_id,
					authorId: comment.author_id,
					parentId: comment.parent_id,
					createdAt: comment.created_at,
					author: mapProfileToUser(comment.author),
					_count: { replies: 0, votes: 0 },
					isVoted: false,
				} as any;
			}

			// GET posts/:postId/comments?page=&pageSize=
			if (method === "GET" && segments[2] === "comments" && segments[1]) {
				const postId = segments[1];
				const page = Number(u.searchParams.get("page") || "1");
				const pageSize = Number(u.searchParams.get("pageSize") || "10");

				const { data: comments, error } = await supabase
					.from("comments")
					.select(
						`id, content, post_id, author_id, parent_id, created_at,
             author:profiles(id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description)`
					)
					.eq("post_id", postId)
					.is("parent_id", null)
					.order("created_at", { ascending: false })
					.range((page - 1) * pageSize, page * pageSize - 1);

				if (error) throw apiError(error.message);

				const mapped = await Promise.all(
					(comments ?? []).map(async (c: any) => {
						const { count: repliesCount } = await supabase
							.from("comments")
							.select("*", { count: "exact", head: true })
							.eq("parent_id", c.id);

						const { count: votesCount } = await supabase
							.from("votes")
							.select("*", { count: "exact", head: true })
							.eq("comment_id", c.id);

						let isVoted = false;
						if (authUser) {
							const { data: v } = await supabase
								.from("votes")
								.select("id")
								.eq("user_id", authUser.id)
								.eq("comment_id", c.id)
								.maybeSingle();
							isVoted = Boolean(v);
						}

						return {
							id: c.id,
							content: c.content,
							postId: c.post_id,
							authorId: c.author_id,
							parentId: c.parent_id,
							createdAt: c.created_at,
							author: mapProfileToUser(c.author),
							_count: { replies: repliesCount ?? 0, votes: votesCount ?? 0 },
							isVoted,
						};
					})
				);

				return mapped as any;
			}

			// POST posts/:id/upvote|downvote
			if (method === "POST" && segments.length === 3 && segments[1]) {
				const postId = segments[1];
				const action = segments[2];
				if (!authUser) throw apiError("Not authenticated");

				if (action === "upvote") {
					const { error } = await supabase
						.from("votes")
						.insert({ user_id: authUser.id, post_id: postId });
					if (error) throw apiError(error.message);
					return { success: true } as any;
				}

				if (action === "downvote") {
					const { error } = await supabase
						.from("votes")
						.delete()
						.eq("user_id", authUser.id)
						.eq("post_id", postId);
					if (error) throw apiError(error.message);
					return { success: true } as any;
				}
			}

			// POST posts/comments/:id/upvote|downvote
			if (method === "POST" && segments[1] === "comments" && segments[2]) {
				const commentId = segments[2];
				const action = segments[3];
				if (!authUser) throw apiError("Not authenticated");

				if (action === "upvote") {
					const { error } = await supabase
						.from("votes")
						.insert({ user_id: authUser.id, comment_id: commentId });
					if (error) throw apiError(error.message);
					return { success: true } as any;
				}

				if (action === "downvote") {
					const { error } = await supabase
						.from("votes")
						.delete()
						.eq("user_id", authUser.id)
						.eq("comment_id", commentId);
					if (error) throw apiError(error.message);
					return { success: true } as any;
				}
			}
		}

		// -------------------------
		// USERS
		// -------------------------
		if (segments[0] === "users") {
			// GET users/username/:username
			if (method === "GET" && segments[1] === "username" && segments[2]) {
				const username = segments[2];
				const { data: profile, error } = await supabase
					.from("profiles")
					.select(
						`id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description,
             experiences:user_experiences(id, title, description),
             links:social_media(id, platform, link)`
					)
					.eq("user_name", username)
					.single();
				if (error || !profile) throw apiError(error?.message ?? "User not found");

				const [followersCount, followingCount, reviewsCount] = await Promise.all([
					supabase
						.from("user_followers")
						.select("*", { count: "exact", head: true })
						.eq("user_id", profile.id),
					supabase
						.from("user_followers")
						.select("*", { count: "exact", head: true })
						.eq("follower_id", profile.id),
					supabase
						.from("user_reviews")
						.select("*", { count: "exact", head: true })
						.eq("user_id", profile.id),
				]);

				let isFollowed = false;
				if (authUser) {
					const { data: f } = await supabase
						.from("user_followers")
						.select("user_id")
						.eq("user_id", profile.id)
						.eq("follower_id", authUser.id)
						.maybeSingle();
					isFollowed = Boolean(f);
				}

				// Phone is private; only fetch if viewing own profile.
				let phone = "";
				if (authUser?.id === profile.id) {
					const { data: priv } = await supabase
						.from("profiles_private")
						.select("phone")
						.eq("id", profile.id)
						.maybeSingle();
					phone = priv?.phone ?? "";
				}

				return mapProfileToUser(profile, {
					email: authUser?.id === profile.id ? authUser?.email : "",
					phone,
					socialMedia: profile.links ?? [],
					experiences: profile.experiences ?? [],
					_count: {
						followers: followersCount.count ?? 0,
						following: followingCount.count ?? 0,
						reviews: reviewsCount.count ?? 0,
					},
					isFollowed,
				}) as any;
			}

			// GET users/popular
			if (method === "GET" && segments[1] === "popular") {
				const { data: creators, error } = await supabase
					.from("profiles")
					.select(
						`id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description,
             experiences:user_experiences(id, title, description)`
					)
					.eq("role", "CREATOR")
					.order("roadmaps_subscribers", { ascending: false })
					.limit(20);

				if (error) throw apiError(error.message);

				const creatorIds = (creators ?? []).map((c: any) => c.id);

				const [reviews, followers] = await Promise.all([
					supabase
						.from("user_reviews")
						.select("user_id, rating")
						.in("user_id", creatorIds),
					supabase
						.from("user_followers")
						.select("user_id, follower_id")
						.in("user_id", creatorIds),
				]);

				const ratingsByUser = new Map<string, number[]>();
				(reviews.data ?? []).forEach((r: any) => {
					const arr = ratingsByUser.get(r.user_id) ?? [];
					arr.push(r.rating);
					ratingsByUser.set(r.user_id, arr);
				});

				const followersCountByUser = new Map<string, number>();
				(followers.data ?? []).forEach((f: any) => {
					followersCountByUser.set(
						f.user_id,
						(followersCountByUser.get(f.user_id) ?? 0) + 1
					);
				});

				let followedSet = new Set<string>();
				if (authUser && creatorIds.length) {
					const { data: myFollows } = await supabase
						.from("user_followers")
						.select("user_id")
						.eq("follower_id", authUser.id)
						.in("user_id", creatorIds);
					(myFollows ?? []).forEach((f: any) => followedSet.add(f.user_id));
				}

				return (creators ?? []).map((c: any) => {
					const ratings = ratingsByUser.get(c.id) ?? [];
					const averageRating =
						ratings.length ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;

					return {
						...mapProfileToUser(c, {
							_count: {
								followers: followersCountByUser.get(c.id) ?? 0,
								following: 0,
								reviews: ratings.length,
							},
							isFollowed: followedSet.has(c.id),
							experiences: c.experiences ?? [],
						}),
						averageRating,
					};
				}) as any;
			}

			// PATCH users/:userId
			if (method === "PATCH" && segments[1]) {
				if (!authUser) throw apiError("Not authenticated");
				const payload: any = body ?? {};

				if (payload.email) {
					const { error } = await supabase.auth.updateUser({ email: payload.email });
					if (error) throw apiError(error.message);
				}

				if (typeof payload.phone !== "undefined") {
					const { error } = await supabase
						.from("profiles_private")
						.update({ phone: payload.phone })
						.eq("id", authUser.id);
					if (error) throw apiError(error.message);
				}

				const profileUpdate: any = {};
				if (typeof payload.fullName !== "undefined")
					profileUpdate.full_name = payload.fullName;
				if (typeof payload.occupation !== "undefined")
					profileUpdate.occupation = payload.occupation;
				if (typeof payload.description !== "undefined")
					profileUpdate.description = payload.description;
				if (typeof payload.cover !== "undefined") profileUpdate.cover = payload.cover;
				if (typeof payload.image !== "undefined") profileUpdate.image = payload.image;

				if (Object.keys(profileUpdate).length) {
					const { error } = await supabase
						.from("profiles")
						.update(profileUpdate)
						.eq("id", authUser.id);
					if (error) throw apiError(error.message);
				}

				const response: any = {};
				if (typeof payload.email !== "undefined") response.email = payload.email;
				if (typeof payload.phone !== "undefined") response.phone = payload.phone;
				if (typeof payload.fullName !== "undefined") response.fullName = payload.fullName;
				if (typeof payload.occupation !== "undefined")
					response.occupation = payload.occupation;
				if (typeof payload.description !== "undefined")
					response.description = payload.description;
				if (typeof payload.cover !== "undefined") response.cover = payload.cover;
				if (typeof payload.image !== "undefined") response.image = payload.image;

				return response as any;
			}

			// POST users/:userId/follow (toggle)
			if (method === "POST" && segments[2] === "follow" && segments[1]) {
				if (!authUser) throw apiError("Not authenticated");
				const targetUserId = segments[1];

				const { data: existing } = await supabase
					.from("user_followers")
					.select("user_id")
					.eq("user_id", targetUserId)
					.eq("follower_id", authUser.id)
					.maybeSingle();

				if (existing) {
					const { error } = await supabase
						.from("user_followers")
						.delete()
						.eq("user_id", targetUserId)
						.eq("follower_id", authUser.id);
					if (error) throw apiError(error.message);
					return { followed: false } as any;
				}

				const { error } = await supabase.from("user_followers").insert({
					user_id: targetUserId,
					follower_id: authUser.id,
				});
				if (error) throw apiError(error.message);
				return { followed: true } as any;
			}

			// POST users/:id/social-media (replace list)
			if (method === "POST" && segments[2] === "social-media" && segments[1]) {
				if (!authUser) throw apiError("Not authenticated");
				const links = Array.isArray(body) ? (body as any[]) : [];

				const { error: delErr } = await supabase
					.from("social_media")
					.delete()
					.eq("user_id", authUser.id);
				if (delErr) throw apiError(delErr.message);

				if (!links.length) return { success: true } as any;

				const { error: insErr } = await supabase.from("social_media").insert(
					links.map(l => ({
						id: l.id,
						link: l.link,
						platform: l.platform,
						user_id: authUser.id,
					}))
				);
				if (insErr) throw apiError(insErr.message);

				return { success: true } as any;
			}

			// POST users/:id/experiences (replace list)
			if (method === "POST" && segments[2] === "experiences" && segments[1]) {
				if (!authUser) throw apiError("Not authenticated");
				const experiences = Array.isArray(body) ? (body as any[]) : [];

				const { error: delErr } = await supabase
					.from("user_experiences")
					.delete()
					.eq("user_id", authUser.id);
				if (delErr) throw apiError(delErr.message);

				if (!experiences.length) return [] as any;

				const { data: inserted, error: insErr } = await supabase
					.from("user_experiences")
					.insert(
						experiences.map(e => ({
							id: e.id,
							title: e.title,
							description: e.description ?? "",
							user_id: authUser.id,
						}))
					)
					.select("id, title, description");

				if (insErr) throw apiError(insErr.message);

				return inserted as any;
			}
		}

		// -------------------------
		// CONVERSATIONS / MESSAGES
		// -------------------------
		if (segments[0] === "conversations") {
			// POST conversations { users: uuid[] }
			if (method === "POST" && segments.length === 1) {
				if (!authUser) throw apiError("Not authenticated");
				const payload: any = body ?? {};
				const users = payload.users ?? [];
				const { data, error } = await supabase.rpc("create_conversation", {
					user_ids: users,
				});
				if (error) throw apiError(error.message);
				return { id: data } as any;
			}

			// GET conversations/?page=&pageSize=
			if (method === "GET" && segments.length === 1) {
				if (!authUser) throw apiError("Not authenticated");
				const page = Number(u.searchParams.get("page") || "1");
				const pageSize = Number(u.searchParams.get("pageSize") || "10");

				// Get conversation ids for current user.
				const { data: cu, error: cuErr } = await supabase
					.from("conversation_users")
					.select("conversation_id")
					.eq("user_id", authUser.id);
				if (cuErr) throw apiError(cuErr.message);
				const convoIds = (cu ?? []).map((r: any) => r.conversation_id);
				if (!convoIds.length) return [] as any;

				const { data: convos, error } = await supabase
					.from("conversations")
					.select(
						`id, created_at, updated_at,
             users:conversation_users(user:profiles(id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description)),
             messages:messages(id, created_at, updated_at, content, conversation_id, user_id,
               attachments:message_attachments(id, key, type, message_id, created_at, updated_at)
             )`
					)
					.in("id", convoIds)
					.order("updated_at", { ascending: false })
					.range((page - 1) * pageSize, page * pageSize - 1);
				if (error) throw apiError(error.message);

				return (convos ?? []).map((c: any) => {
					const users = (c.users ?? []).map((cu: any) => mapProfileToUser(cu.user));
					const messages = (c.messages ?? [])
						.sort((a: any, b: any) => (a.created_at < b.created_at ? 1 : -1))
						.slice(0, 1)
						.map((m: any) => ({
							id: m.id,
							createdAt: m.created_at,
							updatedAt: m.updated_at,
							content: m.content,
							conversationId: m.conversation_id,
							userId: m.user_id,
							attachments: (m.attachments ?? []).map((a: any) => ({
								id: a.id,
								createdAt: a.created_at,
								updatedAt: a.updated_at,
								key: a.key,
								type: a.type,
								messageId: a.message_id,
								url: "",
							})),
						}));

					return {
						id: c.id,
						createdAt: c.created_at,
						updatedAt: c.updated_at,
						users,
						messages,
					};
				}) as any;
			}

			// GET conversations/:id
			if (method === "GET" && segments[1] && segments.length === 2) {
				if (!authUser) throw apiError("Not authenticated");
				const convoId = segments[1];
				const { data: convo, error } = await supabase
					.from("conversations")
					.select(
						`id, created_at, updated_at,
             users:conversation_users(user:profiles(id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description))`
					)
					.eq("id", convoId)
					.single();
				if (error) throw apiError(error.message);

				return {
					id: convo.id,
					createdAt: convo.created_at,
					updatedAt: convo.updated_at,
					users: (convo.users ?? []).map((cu: any) => mapProfileToUser(cu.user)),
					messages: [],
				} as any;
			}

			// GET conversations/:id/messages?page=&pageSize=
			if (method === "GET" && segments[2] === "messages" && segments[1]) {
				if (!authUser) throw apiError("Not authenticated");
				const convoId = segments[1];
				const page = Number(u.searchParams.get("page") || "1");
				const pageSize = Number(u.searchParams.get("pageSize") || "10");

				const { data: messages, error } = await supabase
					.from("messages")
					.select(
						`id, created_at, updated_at, content, conversation_id, user_id,
             attachments:message_attachments(id, key, type, message_id, created_at, updated_at)`
					)
					.eq("conversation_id", convoId)
					.order("created_at", { ascending: false })
					.range((page - 1) * pageSize, page * pageSize - 1);
				if (error) throw apiError(error.message);

				const bucket = "message-attachments";

				return await Promise.all(
					(messages ?? []).map(async (m: any) => {
						const attachments = await Promise.all(
							(m.attachments ?? []).map(async (a: any) => {
								const { data: signed } = await supabase.storage
									.from(bucket)
									.createSignedUrl(a.key, 60 * 60);
								return {
									id: a.id,
									createdAt: a.created_at,
									updatedAt: a.updated_at,
									key: a.key,
									type: a.type,
									messageId: a.message_id,
									url: signed?.signedUrl ?? "",
								};
							})
						);

						return {
							id: m.id,
							createdAt: m.created_at,
							updatedAt: m.updated_at,
							content: m.content,
							conversationId: m.conversation_id,
							userId: m.user_id,
							attachments,
						};
					})
				) as any;
			}

			// POST conversations/:id/messages
			if (method === "POST" && segments[2] === "messages" && segments[1]) {
				if (!authUser) throw apiError("Not authenticated");
				const convoId = segments[1];
				const payload: any = body ?? {};

				const { data: msg, error } = await supabase
					.from("messages")
					.insert({
						conversation_id: convoId,
						user_id: authUser.id,
						content: payload.content ?? "",
					})
					.select()
					.single();
				if (error) throw apiError(error.message);

				if (payload.attachments?.length) {
					const { error: aErr } = await supabase.from("message_attachments").insert(
						payload.attachments.map((a: any) => ({
							message_id: msg.id,
							key: a.key,
							type: a.type,
						}))
					);
					if (aErr) throw apiError(aErr.message);
				}

				const { data: attachments } = await supabase
					.from("message_attachments")
					.select("id, key, type, message_id, created_at, updated_at")
					.eq("message_id", msg.id);

				const bucket = "message-attachments";
				const enrichedAttachments = await Promise.all(
					(attachments ?? []).map(async (a: any) => {
						const { data: signed } = await supabase.storage
							.from(bucket)
							.createSignedUrl(a.key, 60 * 60);
						return {
							id: a.id,
							createdAt: a.created_at,
							updatedAt: a.updated_at,
							key: a.key,
							type: a.type,
							messageId: a.message_id,
							url: signed?.signedUrl ?? "",
						};
					})
				);

				return {
					id: msg.id,
					createdAt: msg.created_at,
					updatedAt: msg.updated_at,
					content: msg.content,
					conversationId: msg.conversation_id,
					userId: msg.user_id,
					attachments: enrichedAttachments,
				} as any;
			}
		}

		// -------------------------
		// MEDIA (Storage upload)
		// -------------------------
		if (segments[0] === "media" && segments[1] === "upload" && method === "POST") {
			if (!authUser) throw apiError("Not authenticated");
			const bucket = u.searchParams.get("bucket") || "step-attachments";
			const formData = body as any;
			const file: File | null = formData?.get?.("file") ?? null;
			if (!file) throw apiError("Missing file");

			const ext = file.name.includes(".") ? file.name.split(".").pop() : "bin";
			const objectPath = `${authUser.id}/${crypto.randomUUID()}.${ext}`;

			const { error } = await supabase.storage.from(bucket).upload(objectPath, file, {
				upsert: true,
			});
			if (error) throw apiError(error.message);

			return objectPath as any;
		}

		throw apiError(`Unhandled endpoint: ${method} ${endpoint}`);
	};

	public static handlePublicApiRequest = async <Data>({
		method,
		body,
		endpoint,
	}: IHandleApiRequestArgs<Data>) => {
		// Supabase uses the same client for “public” and “authed” requests.
		return (await HandleApiRequests.handleApiRequest<Data>({
			method,
			body,
			endpoint,
		})) as any;
	};
}

export default HandleApiRequests;
