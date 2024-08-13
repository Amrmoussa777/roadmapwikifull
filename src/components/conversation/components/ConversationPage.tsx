"use client";

import ConversationSidebar from "@/components/conversation/components/sidebar/ConversationSidebar";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import { CHAT_PLACEHOLDER } from "@public/icons/conversation";
import React from "react";

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
