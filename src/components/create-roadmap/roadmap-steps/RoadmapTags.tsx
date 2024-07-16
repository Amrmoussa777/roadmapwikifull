import { useRoadmapTags } from "@/components/create-roadmap/preview-roadmap/hooks/useRoadmapTags";
import { RoadmapTagType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { ADD_TAG } from "@public/icons/roadmapSteps";
import React from "react";

const RoadmapTags = ({
	stepId,
	defaultTags,
}: {
	stepId: string;
	defaultTags: RoadmapTagType[];
}) => {
	const { tags, removeTag, changeValue, addTag, addingTag, value, error } =
		useRoadmapTags(stepId, defaultTags);

	return (
		<div className="flex flex-wrap gap-2">
			{tags.map(tag => (
				<button
					key={tag.id}
					className="flex-jc-c gap-1 border border-transparent rounded-full py-[3px] px-[8px] bg-[#00CF7C]/10 hover:bg-red-500/10 hover:line-through font-normal text-[14px]"
					onClick={() => removeTag(tag.id)}
				>
					{tag.name}
				</button>
			))}

			{addingTag ? (
				<input
					style={{ borderColor: "" }}
					className={`w-[100px] max-h-[30px] flex-jc-c gap-1 rounded-full py-[3px] px-[10px] border outline-none ${
						error ? "border-red-400" : ""
					}`}
					value={value}
					onChange={changeValue}
				/>
			) : null}

			<button
				className="h-[30px] flex-jc-c gap-1 border border-opacity-20 rounded-full py-[3px] pl-[4px] pr-[6px] hover:opacity-90 font-normal text-[14px]"
				onClick={addTag}
			>
				<span className="rounded-full p-1 bg-[#ECEEFF] text-primary-ultramarineBlue">
					{ADD_TAG}
				</span>
				{value.length ? "Save tag" : "Add tag"}
			</button>
		</div>
	);
};

export default RoadmapTags;
