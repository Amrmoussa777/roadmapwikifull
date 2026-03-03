import FormInput from "@/components/common/input/FormInput";
import useInput from "@/components/common/input/hooks/useInput";
import React, { FormEvent, useRef } from "react";
import { DIRECT_MESSAGE } from "@public/icons/roadmapPreview";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addComment } from "@/redux/slices/thunks/roadmaps/addComment";
import { toggleCommentForm } from "@/redux/slices/roadmaps/roadmapPreviewPostsSlice";

const RoadmapDiscussionReplyForm = ({
	customStyles = "",
}: {
	customStyles?: string;
}) => {
	const {
		value: content,
		changeValue: changeReplyContent,
		reset: resetReplyValue,
	} = useInput("");
	const { currentPostId } = useAppSelector(state => state.roadmapPreviewPosts);
	const { currentReplyId } = useAppSelector(
		state => state.roadmapPreviewReplies
	);
	const inputRef: React.Ref<null | HTMLInputElement> = useRef(null);
	const dispatch = useAppDispatch();

	const handleAddComment = (e: FormEvent) => {
		e.preventDefault();

		if (currentPostId) {
			dispatch(addComment({ content, postId: currentPostId }));
			resetReplyValue();
			dispatch(toggleCommentForm(null));
		}
	};

	return (
		<div className={`w-full p-1 bg-white ${customStyles}`}>
			<form onSubmit={handleAddComment}>
				<FormInput
					type="text"
					name="addReply"
					placeholder={`Add ${
						currentPostId ? "comment" : currentReplyId ? "reply" : ""
					}`}
					value={content}
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
