import useInput from "@/components/common/input/hooks/useInput";
import { addTagToRoadmapStep } from "@/components/create-roadmap/preview-roadmap/services/addTagToRoadmapStep";
import { removeTagFromRoadmapStep } from "@/components/create-roadmap/preview-roadmap/services/removeTagFromRoadmapStep";
import {
	addStepTag,
	removeStepTag,
} from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { RoadmapTagType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppDispatch } from "@/redux/store";
import { useState } from "react";

const useRoadmapTags = (stepId: string, tags: RoadmapTagType[]) => {
	const { value, changeValue, reset } = useInput("");
	const [addingTag, setAddingTag] = useState(false);
	const [error, setError] = useState(false);
	const dispatch = useAppDispatch();

	const checkTagDuplicate = () => {
		const found = tags.find(tag => tag.name === value);

		return found;
	};

	const addTag = async () => {
		if (value.length) {
			const newTagData = {
				roadmapStepId: stepId,
				name: value,
				color: "",
			};

			const duplicatedTag = checkTagDuplicate();

			if (duplicatedTag) return setError(true);

			const newTag = await addTagToRoadmapStep(newTagData);
			dispatch(addStepTag({ stepId, newTag }));

			reset();
			setAddingTag(false);
			setError(false);
		} else {
			setError(true);
		}
	};

	const removeTag = async (tagId: string) => {
		await removeTagFromRoadmapStep(tagId);

		dispatch(removeStepTag({ tagId, stepId }));
	};

	const toggleAdding = () => {
		setAddingTag(prev => !prev);
	};

	return {
		changeValue,
		addTag,
		removeTag,
		addingTag,
		value,
		error,
		toggleAdding,
	};
};

export { useRoadmapTags };
