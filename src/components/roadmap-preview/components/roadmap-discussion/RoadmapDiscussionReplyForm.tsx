import FormInput from "@/components/common/input/FormInput";
import useInput from "@/components/common/input/hooks/useInput";
import { useRoadmapDiscussionReply } from "@/components/roadmap-preview/components/roadmap-discussion/hooks/useRoadmapDiscussionReply";
import { useAppSelector } from "@/redux/store";
import React, { useRef } from "react";
import { DIRECT_MESSAGE } from "@public/icons/roadmapPreview";

const RoadmapDiscussionReplyForm = () => {
	const {
		value: replyContent,
		changeValue: changeReplyContent,
		reset: resetReplyValue,
	} = useInput("");

	const { replyPostId, replyType } = useAppSelector(
		state => state.roadmapPreviewPosts
	);
	const inputRef: React.Ref<null | HTMLInputElement> = useRef(null);

	const { handleSubmitReply } = useRoadmapDiscussionReply(
		inputRef,
		replyPostId,
		replyType,
		replyContent,
		resetReplyValue
	);

	if (!replyPostId) return null;

	return (
		<div className="w-full p-1 bg-white">
			<form onSubmit={handleSubmitReply}>
				<FormInput
					type="text"
					name="discussionSearch"
					placeholder={`Add ${replyType}`}
					value={replyContent}
					handleChangeValue={changeReplyContent}
					inputRef={inputRef}
					customStyles="relative gap-2 [&>input]:pr-[50px]"
					icon={
						<button className="absolute right-0 min-w-[50px] min-h-[50px] flex-jc-c mt-1 rounded-md [&>svg]:fill-grey-secondary">
							{DIRECT_MESSAGE}
						</button>
					}
				/>
			</form>
		</div>
	);
};

export default RoadmapDiscussionReplyForm;
