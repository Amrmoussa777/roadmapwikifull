"use client";

import { getUser } from "@/app/auth/services/getUser";
import { useRefreshToken } from "@/hooks/useRefreshToken";
import {
	ChildrenType,
	CurrentUserContextType,
	CurrentUserType,
} from "@/providers/types/index.types";
import { getCookie } from "cookies-next";
import { redirect, usePathname } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext<CurrentUserContextType>({
	currentUser: null,
});

const CurrentUserProvider = ({ children }: ChildrenType) => {
	const accessToken = getCookie("accessToken");
	const refreshToken = getCookie("refreshToken");

	const [currentUser, setCurrentUser] = useState<
		CurrentUserType | null | undefined
	>(null);
	const pathname = usePathname();
	useRefreshToken();

	useEffect(() => {
		(async () => {
			try {
				const user = await getUser(accessToken, refreshToken);
				setCurrentUser(user);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [accessToken]);

	useEffect(() => {
		if (pathname.includes("auth") && currentUser) {
			redirect("/");
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentUser]);

	return (
		<CurrentUserContext.Provider
			value={{
				currentUser,
			}}
		>
			{children}
		</CurrentUserContext.Provider>
	);
};

export default CurrentUserProvider;
