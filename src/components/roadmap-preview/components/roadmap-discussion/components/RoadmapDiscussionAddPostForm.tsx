import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import useInput from "@/components/common/input/hooks/useInput";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { addPost } from "@/redux/slices/thunks/roadmaps/addPost";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
	TEXT_EDITOR_BOLD,
	TEXT_EDITOR_ITALIC,
	TEXT_EDITOR_LINK,
	TEXT_EDITOR_THROUGHLINE,
	TEXT_EDITOR_UNDERLINE,
} from "@public/icons/roadmapPreview";
import { useRouter } from "next/navigation";
import React, { FormEvent, useContext, useState } from "react";

const RoadmapDiscussionAddPostForm = () => {
	const {
		value: content,
		changeValue: changeContent,
		reset: resetValue,
	} = useInput("");

	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();
	const { roadmap } = useAppSelector(state => state.roadmapPreview);
	const { push } = useRouter();
	const { currentUser } = useContext(CurrentUserContext);

	const handleAddComment = (e: FormEvent) => {
		e.preventDefault();

		if (!currentUser) {
			push("/auth/login");
		}

		setIsLoading(true);

		if (roadmap) {
			dispatch(addPost({ title: "title", content, roadmapId: roadmap.id }));
			setIsLoading(false);
			resetValue();
		}
	};

	return (
		<form className="relative w-full p-1 bg-white mb-4 rounded-md border border-[#E0E0E0]">
			<textarea
				name="addPost"
				placeholder="Ask about the roadmap or discuss your thoughts..."
				value={content}
				onChange={changeContent}
				className="w-full h-[100px] p-2 sm:text-[14px] placeholder:text-[14px] font-inter font-normal bg-white outline-none focus:border-primary-ultramarineBlue resize-none hidden-scrollbar"
			/>

			<HorizontalDivider
				height="h-[0.25px]"
				bgColor="bg-[#E0E0E0]"
				customStyles="my-2"
			/>

			<div className="flex-jc-c">
				<div className="flex-jc-c">
					<span>{TEXT_EDITOR_ITALIC}</span>
					<span>{TEXT_EDITOR_BOLD}</span>
					<span>{TEXT_EDITOR_UNDERLINE}</span>
					<span>{TEXT_EDITOR_THROUGHLINE}</span>
					<span>{TEXT_EDITOR_LINK}</span>
				</div>

				<button
					type="submit"
					onClick={handleAddComment}
					disabled={isLoading}
					className="w-fit h-[36px] px-4 ml-auto mb-1 block bg-primary-ultramarineBlue rounded-md text-white font-inter font-semibold text-[14px]"
				>
					{isLoading ? "Loading..." : "Post"}
				</button>
			</div>
		</form>
	);
};

export default RoadmapDiscussionAddPostForm;
