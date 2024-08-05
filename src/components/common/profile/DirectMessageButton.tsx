"use client";

import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { useAppSelector } from "@/redux/store";
import { DIRECT_MESSAGE } from "@public/icons/roadmapPreview";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const DirectMessageButton = ({
	customStyles = "",
}: {
	customStyles?: string;
}) => {
	const { push } = useRouter();
	const { user } = useAppSelector(state => state.userProfile);
	const { id } = user || {};
	const { currentUser } = useContext(CurrentUserContext);

	if (id && currentUser && id !== currentUser.id)
		return (
			<button
				onClick={() => push("/auth/login")}
				className={`min-w-[40px] h-full flex-jc-c border-2 border-grey-iconBorder rounded-full [&>svg]:fill-grey-secondary hover:-translate-y-[2px] transform transition duration-200 ${customStyles}`}
			>
				{DIRECT_MESSAGE}
			</button>
		);
};

export default DirectMessageButton;
