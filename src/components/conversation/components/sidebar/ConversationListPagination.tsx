import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import { useConversationListPagination } from "@/components/conversation/hooks/useConversationListPagination";

const ConversationListPagination = () => {
	const { divRef, totalItems } = useConversationListPagination();

	return (
		<div
			ref={divRef}
			className={`text-center transition-all ${
				totalItems < 10 ? "hidden" : ""
			}`}
		>
			<div className="relative overflow-hidden w-[148px] h-[40px] flex-jc-c gap-2 mx-auto my-4 px-[12px] font-inter font-normal text-[14px] rounded-full bg-primary-ultramarineBlue">
				<ButtonDotsLoader />
			</div>
		</div>
	);
};

export default ConversationListPagination;
