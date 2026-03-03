import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import { useAppSelector } from "@/redux/store";
import moment from "moment";
import React, { useEffect, useState } from "react";

const ConversationLastMessageData = () => {
	const { conversation } = useAppSelector(
		state => state.conversation.activeConversation
	);

	const [lastDate, setLastDate] = useState(
		conversation?.messages.slice(-1)[0].createdAt
	);

	useEffect(() => {
		const date = conversation?.messages.slice(-1)[0].createdAt;

		setLastDate(date);
	}, [conversation]);

	return (
		<div className="absolute top-2 left-2/4 -translate-x-2/4 px-2 rounded-full shadow-csm last-date-container flex-jc-c font-inter [&>p]:text-[11px] bg-[#F8F9FD] text-[#979797] py-[8px] z-30">
			<p>{moment(lastDate).calendar().split("at")[0]}</p>

			<VerticalDivider
				width="w-[1px]"
				bgColor="bg-[#979797]"
				customStyles="mx-[8px] h-[12px]"
			/>
			<p>{moment(lastDate).format("LT")}</p>
		</div>
	);
};

export default ConversationLastMessageData;
