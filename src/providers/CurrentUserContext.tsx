"use client";

import useClearReduxOnNavigation from "@/hooks/useClearReduxOnNavigation";
import {
	ChildrenType,
	CurrentUserContextType,
	CurrentUserType,
} from "@/providers/types/index.types";
import { useAppSelector } from "@/redux/store";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext<CurrentUserContextType>({
	currentUser: null,
	currentUserLoading: true,
});

const CurrentUserProvider = ({ children }: ChildrenType) => {
	useClearReduxOnNavigation();

	const { user } = useAppSelector(state => state.userProfile);
	const [currentUserLoading, setCurrentUserLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState<
		CurrentUserType | null | undefined
	>(null);
	const pathname = usePathname() ?? "";
	const router = useRouter();

	useEffect(() => {
		const supabase = createSupabaseBrowserClient();

		const fetchCurrentUser = async () => {
			setCurrentUserLoading(true);

			try {
				const {
					data: { user: authUser },
				} = await supabase.auth.getUser();

				if (!authUser) {
					// Optional: keep prior “anonymous token” behavior via Supabase anonymous sign-in.
					try {
						await supabase.auth.signInAnonymously();
					} catch {
						// If anonymous sign-in is disabled, just treat as logged out.
					}
				}

				// Fetch server-compatible user shape (profiles + role).
				// We call the server helper via RSC for initial render, but on the client
				// we re-fetch via Supabase directly to keep the context fresh.
				const {
					data: { user: refreshedUser },
				} = await supabase.auth.getUser();

				if (!refreshedUser) {
					setCurrentUser(null);
					return;
				}

				const { data: profile } = await supabase
					.from("profiles")
					.select(
						"id, role, image, cover, occupation, roadmaps_subscribers, full_name, user_name, description"
					)
					.eq("id", refreshedUser.id)
					.single();

				if (!profile) {
					setCurrentUser(null);
					return;
				}

				setCurrentUser({
					id: profile.id,
					email: refreshedUser.email,
					role: profile.role,
					image: profile.image,
					cover: profile.cover,
					occupation: profile.occupation,
					roadmapsSubscribers: profile.roadmaps_subscribers,
					fullName: profile.full_name,
					userName: profile.user_name,
					description: profile.description,
				});
			} catch (error) {
				console.error("Error fetching current user:", error);
				setCurrentUser(null);
			} finally {
				setCurrentUserLoading(false);
			}
		};

		fetchCurrentUser();

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(async event => {
			if (event === "SIGNED_OUT") {
				setCurrentUser(null);
				return;
			}

			if (event === "SIGNED_IN" || event === "USER_UPDATED") {
				await fetchCurrentUser();
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	}, []);

	useEffect(() => {
		if (pathname.includes("auth") && currentUser) {
			router.replace("/");
		}
	}, [pathname, currentUser, router]);

	useEffect(() => {
		if (
			user &&
			currentUser &&
			user.id === currentUser.id &&
			user.image !== currentUser.image
		) {
			setCurrentUser({ ...currentUser, image: user.image });
		}
	}, [user, currentUser]);

	return (
		<CurrentUserContext.Provider
			value={{
				currentUser,
				currentUserLoading,
			}}
		>
			{!currentUserLoading ? children : null}
		</CurrentUserContext.Provider>
	);
};

export default CurrentUserProvider;
