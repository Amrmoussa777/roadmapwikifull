import { CurrentUserType } from "@/providers/types/index.types";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const getUser = async (): Promise<CurrentUserType | null> => {
	try {
		const supabase = createSupabaseServerClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();

		// #region agent log
		fetch(
			"http://127.0.0.1:7631/ingest/afdd2453-b8a5-4a99-9acb-acecbe3f5a22",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-Debug-Session-Id": "eaed99",
				},
				body: JSON.stringify({
					sessionId: "eaed99",
					runId: "initial",
					hypothesisId: "B",
					location: "src/app/auth/services/getUser.ts:7-10",
					message: "getUser supabase auth user state",
					data: {
						hasUser: !!user,
					},
					timestamp: Date.now(),
				}),
			}
		).catch(() => {});
		// #endregion agent log

		if (!user) return null;

		const { data: profile, error } = await supabase
			.from("profiles")
			.select(
				"id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description"
			)
			.eq("id", user.id)
			.single();

		// #region agent log
		fetch(
			"http://127.0.0.1:7631/ingest/afdd2453-b8a5-4a99-9acb-acecbe3f5a22",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-Debug-Session-Id": "eaed99",
				},
				body: JSON.stringify({
					sessionId: "eaed99",
					runId: "initial",
					hypothesisId: "C",
					location: "src/app/auth/services/getUser.ts:12-20",
					message: "getUser profile query state",
					data: {
						hasProfile: !!profile,
						hasError: !!error,
						role: profile?.role ?? null,
					},
					timestamp: Date.now(),
				}),
			}
		).catch(() => {});
		// #endregion agent log

		if (error || !profile) return null;
		return {
			id: profile.id,
			email: user.email,
			role: profile.role,
			image: profile.image,
			cover: profile.cover,
			occupation: profile.occupation,
			roadmapsSubscribers: profile.roadmaps_subscribers,
			fullName: profile.full_name,
			userName: profile.user_name,
			description: profile.description,
		};
	} catch (error) {
		console.log(error);
		return null;
	}
};
