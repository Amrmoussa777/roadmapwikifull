import useInput from "@/components/common/input/hooks/useInput";
import { addPost } from "@/redux/slices/thunks/roadmaps/addPost";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { FormEvent } from "react";

const RoadmapDiscussionAddPostForm = () => {
	const {
		value: content,
		changeValue: changeContent,
		reset: resetValue,
	} = useInput("");

	const dispatch = useAppDispatch();
	const { roadmap } = useAppSelector(state => state.roadmapPreview);

	const handleAddComment = (e: FormEvent) => {
		e.preventDefault();

		if (roadmap) {
			dispatch(addPost({ title: "title", content, roadmapId: roadmap.id }));
			resetValue();
		}
	};

	return (
		<form
			onSubmit={handleAddComment}
			className="relative w-full h-[120px] p-1 bg-white mb-4 rounded-md border border-[#E0E0E0]"
		>
			<input
				name="addPost"
				placeholder="Add post"
				value={content}
				onChange={changeContent}
				className="w-full h-[calc(100%-47px)] p-2 sm:text-xl font-normal bg-white outline-none focus:border-primary-ultramarineBlue resize-none hidden-scrollbar"
			/>

			<button
				type="submit"
				className="w-full h-[40px] bg-primary-ultramarineBlue rounded-md text-white"
			>
				Add post
			</button>
		</form>
	);
};

export default RoadmapDiscussionAddPostForm;
