import { useRoadmapTags } from "@/components/create-roadmap/preview-roadmap/hooks/useRoadmapTags";
import { RoadmapTagType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { ADD_TAG, CHECK_TAG_ICON } from "@public/icons/roadmapSteps";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const RoadmapTags = ({
	stepId,
	tags,
}: {
	stepId: string;
	tags: RoadmapTagType[];
}) => {
	const {
		changeValue,
		addTag,
		removeTag,
		toggleAdding,
		addingTag,
		value,
		error,
	} = useRoadmapTags(stepId, tags);

	return (
		<div className="flex flex-wrap gap-2">
			{tags.map(tag => (
				<button
					key={tag.id}
					onClick={() => removeTag(tag.id)}
					className="flex-jc-c gap-1 border border-transparent rounded-full py-[3px] px-[8px] bg-primary-ultramarineBlue/10 hover:bg-red-500/10 hover:line-through font-normal text-[14px]"
				>
					{tag.name}
				</button>
			))}

			<form
				onSubmit={addTag}
				className={`flex-jc-c border rounded-full ${
					error ? "border-red-400" : ""
				}`}
			>
				<AnimatePresence>
					{addingTag ? (
						<motion.div
							initial={{ width: 0 }}
							animate={{ width: "100px" }}
							exit={{ width: 0 }}
						>
							<input
								style={{ borderColor: "" }}
								autoFocus
								className={`w-[100px] max-h-[30px] flex-jc-c gap-1 rounded-full py-[3px] px-[10px] outline-none`}
								value={value}
								onChange={changeValue}
							/>
						</motion.div>
					) : null}
				</AnimatePresence>

				<div
					className={`h-[30px] flex-jc-c gap-1 rounded-full py-2 px-[3px] hover:opacity-90 font-normal text-[14px] ${
						addingTag ? "border-none" : ""
					}`}
				>
					{addingTag ? (
						<button
							type="submit"
							className={`[&>svg]:w-[14px] [&>svg]:h-[14px] rounded-full p-1 bg-[#10B26B]/10 text-[#10B26B]`}
						>
							{CHECK_TAG_ICON}
						</button>
					) : null}
					<button
						type="button"
						onClick={toggleAdding}
						className={`flex-jc-c gap-1`}
					>
						<span
							className={`rounded-full p-1 bg-[#ECEEFF] text-primary-ultramarineBlue transition duration-500 ${
								addingTag ? "rotate-45 bg-[#A72C32]/10 text-[#A72C32]" : ""
							}`}
						>
							{ADD_TAG}
						</span>

						{!addingTag ? <p>Add tag</p> : null}
					</button>
				</div>
			</form>
		</div>
	);
};

export default RoadmapTags;
