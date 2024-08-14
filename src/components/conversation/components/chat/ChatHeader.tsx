"use client";

import Avatar from "@/components/common/avatar/components/Avatar";
import { useAppSelector } from "@/redux/store";
import { MENU_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";

const ChatHeader = () => {
	const { conversation, receiver } = useAppSelector(
		state => state.conversation.activeConversation
	);
	const { fullName, occupation, userName } = receiver || {};

	if (!conversation && !receiver) return;

	return (
		<div className="flex-jb-c gap-2 mb-[8px]">
			<div className="flex-ic-c gap-2">
				<Avatar
					name={receiver ? receiver.fullName : ""}
					image_url={receiver ? receiver.image : ""}
					customStyles="min-w-[48px] w-[48px] min-h-[48px] h-[48px] text-primary-ultramarineBlue bg-primary-ultramarineBlue/10 border-white"
				/>

				<div className="text-start font-inter">
					<Link
						href={`/user/${userName}`}
						className="line-clamp-1 font-semibold text-[#181818] hover:text-primary-ultramarineBlue duration-200 transition"
					>
						{fullName}
					</Link>
					<p className="line-clamp-1 text-[12px] text-[#79828B] font-normal">
						{occupation}
					</p>
				</div>
			</div>

			<button className="w-[40px] h-[40px] flex-jc-c [&>svg]:rotate-90 rounded-[8px] text-[#ADAEB5] bg-white">
				{MENU_ICON}
			</button>
		</div>
	);
};

export default ChatHeader;
