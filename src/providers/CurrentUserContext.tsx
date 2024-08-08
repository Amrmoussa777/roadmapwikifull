"use client";

import { getUser } from "@/app/auth/services/getUser";
import useClearReduxOnNavigation from "@/hooks/useClearReduxOnNavigation";
import { useRefreshToken } from "@/hooks/useRefreshToken";
import {
	ChildrenType,
	CurrentUserContextType,
	CurrentUserType,
} from "@/providers/types/index.types";
import { useAppSelector } from "@/redux/store";
import { getCookie } from "cookies-next";
import { redirect, usePathname } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext<CurrentUserContextType>({
	currentUser: null,
	currentUserLoading: true,
});

const CurrentUserProvider = ({ children }: ChildrenType) => {
	useClearReduxOnNavigation();

	const accessToken = getCookie("accessToken");
	const refreshToken = getCookie("refreshToken");
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
			try {
				const user = await getUser(accessToken, refreshToken);
				setCurrentUser(user);
			} catch (error) {
				console.error(error);
			} finally {
				setCurrentUserLoading(false);
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [accessToken, user]);

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
