import useInput from "@/components/common/input/hooks/useInput";
import { addTagToRoadmapStep } from "@/components/create-roadmap/preview-roadmap/services/addTagToRoadmapStep";
import { RoadmapStepTagType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useState } from "react";

const useRoadmapTags = (stepId: string, defaultTags: RoadmapStepTagType[]) => {
	const [tags, setTags] = useState<RoadmapStepTagType[]>(defaultTags);
	const { value, changeValue, reset } = useInput("");
	const [addingTag, setAddingTag] = useState(false);
	const [error, setError] = useState(false);

	const checkTagDuplicate = (newTag: string) => {
		const found = tags.find(tag => tag.name === newTag);

		return found;
	};

	const addTag = async () => {
		if (!addingTag || !value.length) {
			setAddingTag(true);
		} else {
			const isDuplicatedTag = checkTagDuplicate(value);

			if (!isDuplicatedTag) {
				const newTag = {
					roadmapStepId: stepId,
					name: value,
					color: "",
				};

				await addTagToRoadmapStep(newTag);

				reset();
				setAddingTag(false);
				setError(false);
			} else {
				setError(true);
			}
		}
	};

	const removeTag = (tagId: string) => {
		setTags(tags.filter(t => t.id !== tagId));
	};

	return {
		tags,
		changeValue,
		addTag,
		addingTag,
		removeTag,
		value,
		error,
	};
};

export { useRoadmapTags };
