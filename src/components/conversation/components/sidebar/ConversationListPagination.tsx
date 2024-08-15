import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import { useConversationListPagination } from "@/components/conversation/hooks/useConversationListPagination";
import { useAppSelector } from "@/redux/store";

const ConversationListPagination = () => {
	const { divRef } = useConversationListPagination();
	const { totalItems } = useAppSelector(state => state.conversation);

	return (
		<div
			ref={divRef}
			className={`text-center transition-all ${
				totalItems < 10 ? "hidden" : ""
			}`}
		>
			<div className="relative overflow-hidden w-[148px] h-[40px] flex-jc-c gap-2 mx-auto mb-2 px-[12px] font-inter font-normal text-[14px] rounded-full bg-white">
				<ButtonDotsLoader customStyles="[&>div]:!bg-primary-ultramarineBlue" />
			</div>
		</div>
	);
};

export default ConversationListPagination;
