import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import useInput from "@/components/common/input/hooks/useInput";
import RoadmapDiscussionAddPostFormLoader from "@/components/roadmap-preview/components/roadmap-discussion/components/RoadmapDiscussionAddPostFormLoader";
import PathnameHelper from "@/helpers/pathname.helper";
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
import React, {
	FormEvent,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

const RoadmapDiscussionAddPostForm = () => {
	const {
		value: content,
		changeValue: changeContent,
		reset: resetValue,
		handleSetError,
		error,
	} = useInput("");

	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();
	const { roadmap } = useAppSelector(state => state.roadmapPreview);
	const { push } = useRouter();
	const { currentUser } = useContext(CurrentUserContext);
	const formRef = useRef<HTMLTextAreaElement>(null);

	const handleAddComment = (e: FormEvent) => {
		e.preventDefault();

		if (!currentUser) {
			return push(
				`/auth/login?redirectPath=/roadmap/${roadmap?.id}&action=addPost&formData=${content}`
			);
		}

		if (content.length < 1) {
			return handleSetError("No thoughts,  please share yours");
		}

		setIsLoading(true);

		if (roadmap) {
			dispatch(addPost({ title: "title", content, roadmapId: roadmap.id }));
			setIsLoading(false);
			resetValue();
		}
	};

	useEffect(() => {
		if (error && content) {
			handleSetError("");
		}
	}, [content]);

	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);

		if (urlParams.get("action") === "addPost") {
			const formData = urlParams.get("formData") || "";

			if (formRef.current) {
				formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
			}

			changeContent(formData);

			setTimeout(() => {
				if (roadmap) {
					setIsLoading(true);

					dispatch(addPost({ title: "title", content, roadmapId: roadmap.id }));
					setIsLoading(false);
					resetValue();
					PathnameHelper.clearUrlParams();
				}
			}, 1000);
		}
	}, [roadmap?.id]);

	if (!roadmap) return <RoadmapDiscussionAddPostFormLoader />;

	return (
		<>
			<form className="relative w-full p-1 bg-white mb-2 rounded-md border border-[#E0E0E0] focus-within:shadow-csm focus-within:border-primary-ultramarineBlue transition duration-200">
				<textarea
					name="addPost"
					placeholder="Ask about the roadmap or discuss your thoughts..."
					value={content}
					onChange={changeContent}
					ref={formRef}
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
						className="w-fit h-[36px] px-4 ml-auto mb-1 block bg-primary-ultramarineBlue rounded-md text-white font-inter font-semibold text-[14px] border border-transparent hover:border-primary-ultramarineBlue hover:bg-white hover:text-primary-ultramarineBlue transition duration-200"
					>
						{isLoading ? "Loading..." : "Post"}
					</button>
				</div>
			</form>

			{error ? (
				<p className={`${error ? "text-red-500" : "hidden"} text-xs`}>
					{error}
				</p>
			) : null}
		</>
	);
};

export default RoadmapDiscussionAddPostForm;
