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
		if (value.length) {
			const isDuplicatedTag = checkTagDuplicate(value);

			if (!isDuplicatedTag) {
				const newTagData = {
					roadmapStepId: stepId,
					name: value,
					color: "",
				};

				const newTag = await addTagToRoadmapStep(newTagData);
				setTags(prev => [...prev, newTag]);

				reset();
				setAddingTag(false);
				setError(false);
			} else {
				setError(true);
			}
		} else {
		}
	};

	const removeTag = (tagId: string) => {
		setTags(tags.filter(t => t.id !== tagId));
	};

	const toggleAdding = () => {
		setAddingTag(prev => !prev);
	};

	return {
		tags,
		changeValue,
		addTag,
		addingTag,
		removeTag,
		value,
		error,
		toggleAdding,
	};
};

export { useRoadmapTags };
