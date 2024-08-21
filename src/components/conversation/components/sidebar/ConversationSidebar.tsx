import TextStats from "@/components/common/states/NumberStats";
import ConversationListPagination from "@/components/conversation/components/sidebar/ConversationListPagination";
import ConversationSidebarLoader from "@/components/conversation/components/sidebar/ConversationSidebarLoader";
import SearchConversationForm from "@/components/conversation/components/sidebar/SearchConversationForm";
import SidebarButtons from "@/components/conversation/components/sidebar/SidebarButtons";
import { useFetch } from "@/hooks/useFetch";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import { setConversationList } from "@/redux/slices/conversation/conversationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Reorder } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
const SidebarConversationItem = dynamic(
	() =>
		import(
			"@/components/conversation/components/sidebar/SidebarConversationItem"
		),
	{ ssr: false }
);

const ConversationSidebar = ({ hidden }: { hidden?: boolean }) => {
	const { conversationList, searchResultCount } = useAppSelector(
		state => state.conversation
	);
	const dispatch = useAppDispatch();
	const { fetchData: fetchConversations, loading } = useFetch(true);
	const { responsive } = useSizeScreen(768);
	const initialized = useRef(false);

	useEffect(() => {
		if (initialized.current) return;
		initialized.current = true;

		(async () => {
			const { data } = await fetchConversations(
				"GET",
				`conversations/?page=1&pageSize=10`
			);
			dispatch(
				setConversationList({ conversationList: data, searchResultCount: null })
			);
		})();
	}, []);

	return !hidden ? (
		<div
			className={`${
				responsive
					? "absolute w-full h-full left-0 top-0 border-none bg-white"
					: ""
			} overflow-y-scroll hidden-scrollbar md:min-w-[300px] lg:min-w-[330px] py-[24px] px-[16px] border border-[#DCDCDC] md:rounded-[12px]`}
		>
			<SidebarButtons />

			<SearchConversationForm />

			{conversationList.length && !loading ? (
				<Reorder.Group
					className="h-1/4 flex flex-col [&>li]:!pb-[10px]"
					axis="y"
					onReorder={() => {}}
					values={conversationList}
				>
					{conversationList.map(conversation => (
						<Reorder.Item
							key={conversation.id}
							value={conversation}
							dragListener={false}
						>
							<SidebarConversationItem conversation={conversation} />
						</Reorder.Item>
					))}

					<ConversationListPagination />
				</Reorder.Group>
			) : searchResultCount === 0 ? (
				<TextStats text="No search results" />
			) : searchResultCount === null && !loading ? (
				<TextStats text="No conversations yet" />
			) : null}

			{loading ? <ConversationSidebarLoader /> : null}
		</div>
	) : null;
};

export default ConversationSidebar;
