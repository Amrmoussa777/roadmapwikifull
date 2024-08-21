"use client";

import { useSizeScreen } from "@/hooks/useSizeScreen";
import { CHAT_PLACEHOLDER } from "@public/icons/conversation";
import dynamic from "next/dynamic";
import React from "react";
const ConversationSidebar = dynamic(
	() =>
		import("@/components/conversation/components/sidebar/ConversationSidebar"),
	{ ssr: false }
);

const ConversationPage = () => {
	const { responsive } = useSizeScreen(768);

	return (
		<>
			<ConversationSidebar hidden={!responsive} />

			<div className="h-full flex-jc-c flex-col text-[#DCDCDC]">
				<span className="[&>svg]:w-[200px] [&>svg]:h-[200px]">
					{CHAT_PLACEHOLDER}
				</span>
			</div>
		</>
	);
};

export default ConversationPage;
