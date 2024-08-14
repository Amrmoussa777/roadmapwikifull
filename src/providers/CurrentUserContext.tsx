"use client";

import { getUser } from "@/app/auth/services/getUser";
import TokensHelper from "@/helpers/tokensHelper";
import useClearReduxOnNavigation from "@/hooks/useClearReduxOnNavigation";
import { useRefreshToken } from "@/hooks/useRefreshToken";
import {
	ChildrenType,
	CurrentUserContextType,
	CurrentUserType,
} from "@/providers/types/index.types";
import { useAppSelector } from "@/redux/store";
import { fetchAnonymousToken } from "@/services/fetchAnonymousToken";
import { setCookies } from "@/services/setCookies";
import { redirect, usePathname } from "next/navigation";
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
	const pathname = usePathname();
	useRefreshToken();

	useEffect(() => {
		const fetchCurrentUser = async () => {
			setCurrentUserLoading(true);

			try {
				const { accessToken: fetchedAccessToken, refreshToken } =
					TokensHelper.getTokens();

				let accessToken = fetchedAccessToken;

				if (!refreshToken) {
					setCurrentUser(null);
					setCurrentUserLoading(false);
					return;
				}

				if (!accessToken) {
					accessToken = await fetchAnonymousToken();
					await setCookies({ accessToken });
				}

				const user = await getUser(accessToken);
				setCurrentUser(user);
			} catch (error) {
				console.error("Error fetching current user:", error);
				setCurrentUser(null);
			} finally {
				setCurrentUserLoading(false);
			}
		};

		fetchCurrentUser();
	}, [user]);

	useEffect(() => {
		if (pathname.includes("auth") && currentUser) {
			redirect("/");
		}
	}, [pathname, currentUser]);

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
			{children}
		</CurrentUserContext.Provider>
	);
};

export default CurrentUserProvider;
