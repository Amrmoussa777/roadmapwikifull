import ConversationSidebarLoader from "@/components/conversation/components/sidebar/ConversationSidebarLoader";
import SearchConversationForm from "@/components/conversation/components/sidebar/SearchConversationForm";
import SidebarButtons from "@/components/conversation/components/sidebar/SidebarButtons";
import SidebarConversationItem from "@/components/conversation/components/sidebar/SidebarConversationItem";
import { useFetch } from "@/hooks/useFetch";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import { setConversationList } from "@/redux/slices/conversation/conversationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";

const ConversationSidebar = ({ hidden }: { hidden?: boolean }) => {
	const { conversationList } = useAppSelector(state => state.conversation);
	const dispatch = useAppDispatch();
	const { fetchData: fetchConversations } = useFetch();
	const { responsive } = useSizeScreen(768);

	useEffect(() => {
		(async () => {
			const { data } = await fetchConversations(
				"GET",
				`conversations/?page=1&pageSize=10`
			);
			dispatch(setConversationList(data));
		})();
	}, []);

	return !hidden ? (
		<div
			className={`${
				responsive
					? "absolute w-full h-full left-0 top-0 border-none bg-white"
					: ""
			} md:min-w-[300px] lg:min-w-[330px] py-[24px] px-[16px] border border-[#DCDCDC] rounded-[12px]`}
		>
			<SidebarButtons />

			<SearchConversationForm />

			{conversationList ? (
				<ul className="flex flex-col gap-[10px]">
					{conversationList.map(conversation => (
						<SidebarConversationItem
							key={conversation.id}
							conversation={conversation}
						/>
					))}
				</ul>
			) : (
				<ConversationSidebarLoader />
			)}
		</div>
	) : null;
};

export default ConversationSidebar;
