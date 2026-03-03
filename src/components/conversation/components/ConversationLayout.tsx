"use client";

import ConversationLoader from "@/components/conversation/components/chat/ConversationLoader";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import { ChildrenType } from "@/providers/types/index.types";
import { useAppSelector } from "@/redux/store";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { useHandleActiveConversation } from "@/components/conversation/hooks/useHandleActiveConversation";
import dynamic from "next/dynamic";
const ConversationSidebar = dynamic(
	() =>
		import("@/components/conversation/components/sidebar/ConversationSidebar"),
	{ ssr: false }
);

const ConversationLayout = ({ children }: ChildrenType) => {
	const pathname = usePathname();
	const isConversationPage = /\/conversation/.test(pathname);
	const { responsive } = useSizeScreen(768);
	const { loading } = useAppSelector(
		state => state.conversation.activeConversation
	);
	const { conversationId } = useParams();

	useHandleActiveConversation();

	return isConversationPage ? (
		<div className="relative h-[calc(100vh-75px)] flex gap-[16px] lg:gap-[32px] max-w-[1440px] mx-auto p-6 lg:px-8 bg-white">
			<ConversationSidebar hidden={responsive} />

			{loading && conversationId ? (
				<ConversationLoader />
			) : (
				<main className="w-full flex flex-col md:bg-[#F8F9FD] rounded-[16px] md:p-[16px]">
					{children}
				</main>
			)}
		</div>
	) : (
		<>{children}</>
	);
};

export default ConversationLayout;
