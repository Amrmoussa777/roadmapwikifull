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
		(async () => {
			setCurrentUserLoading(true);
			const { accessToken: fetchedAccessToken, refreshToken } =
				TokensHelper.getTokens();

			
			let accessToken = fetchedAccessToken;

			if (!refreshToken) {
				setCurrentUserLoading(false);
				return;
			}

			if (!fetchedAccessToken) {
				accessToken = await fetchAnonymousToken();

				await setCookies({ accessToken });
			}

			const user = await getUser(accessToken);
			setCurrentUser(user);
			setCurrentUserLoading(false);
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	useEffect(() => {
		if (pathname.includes("auth") && currentUser) {
			redirect("/");
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUser]);

	useEffect(() => {
		if (
			user &&
			currentUser &&
			user.id === currentUser.id &&
			user.image !== currentUser.image
		) {
			setCurrentUser({ ...currentUser, image: user.image });
		}
	}, [user]);

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
