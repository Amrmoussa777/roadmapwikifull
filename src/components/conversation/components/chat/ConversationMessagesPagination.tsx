import React from "react";
import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import { useConversationMessagesPagination } from "@/components/conversation/hooks/useConversationMessagesPagination";

const ConversationMessagesPagination = () => {
	const { divRef, totalItems } = useConversationMessagesPagination();

	return (
		<div
			ref={divRef}
			className={`text-center transition-all ${totalItems < 5 ? "hidden" : ""}`}
		>
			<div className="relative overflow-hidden w-[148px] h-[40px] flex-jc-c gap-2 mx-auto my-4 px-[12px] font-inter font-normal text-[14px] rounded-full bg-primary-ultramarineBlue text-white">
				<ButtonDotsLoader />
			</div>
		</div>
	);
};

export default ConversationMessagesPagination;
