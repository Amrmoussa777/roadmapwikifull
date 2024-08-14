"use client";

import { useFetch } from "@/hooks/useFetch";
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
	const { fetchData, loading } = useFetch();

	const handleCreateMessage = async () => {
		const usersIds = [currentUser?.id, user?.id];

		const { data: newConversation } = await fetchData("POST", `conversations`, {
			users: usersIds,
		});

		const { id: conversationId } = newConversation;

		push(`/conversation/messages/${conversationId}`);
	};

	if (id && currentUser && id !== currentUser.id)
		return (
			<button
				onClick={handleCreateMessage}
				disabled={loading}
				className={`min-w-[40px] h-full flex-jc-c border-2 border-grey-iconBorder rounded-full [&>svg]:fill-grey-secondary hover:scale-105 transform transition duration-200 ${customStyles}`}
			>
				{DIRECT_MESSAGE}
			</button>
		);
};

export default DirectMessageButton;
