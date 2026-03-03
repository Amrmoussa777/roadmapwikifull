"use client";

import {
	ChildrenType,
	CurrentUserContextType,
	CurrentUserType,
} from "@/providers/types/index.types";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext<CurrentUserContextType>({
	currentUser: null,
	currentUserLoading: true,
});

type CurrentUserProviderProps = ChildrenType & {
	initialUser: CurrentUserType | null;
};

const CurrentUserProvider = ({ children, initialUser }: CurrentUserProviderProps) => {
	const [currentUserLoading] = useState(false);
	const [currentUser, setCurrentUser] = useState<
		CurrentUserType | null | undefined
	>(initialUser ?? null);
	const pathname = usePathname() ?? "";
	const router = useRouter();

	useEffect(() => {
		if (pathname.includes("auth") && currentUser) {
			router.replace("/");
		}
	}, [pathname, currentUser, router]);

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
