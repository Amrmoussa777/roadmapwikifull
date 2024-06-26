import FormInput from "@/components/common/input/FormInput";
import useInput from "@/components/common/input/hooks/useInput";
import { useRoadmapDiscussionReply } from "@/components/roadmap-preview/components/roadmap-discussion/hooks/useRoadmapDiscussionReply";
import { useAppSelector } from "@/redux/store";
import React, { useRef } from "react";

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
		<div className="w-full p-4 bg-white">
			<form onSubmit={handleSubmitReply}>
				<FormInput
					type="text"
					name="discussionSearch"
					placeholder={`Enter your ${replyType}`}
					value={replyContent}
					handleChangeValue={changeReplyContent}
					inputRef={inputRef}
				/>
			</form>
		</div>
	);
};

export default RoadmapDiscussionReplyForm;
