import useInput from "@/components/common/input/hooks/useInput";
import { useState } from "react";

const useRoadmapTags = () => {
	const [tags, setTags] = useState<string[]>([]);
	const { value, changeValue, reset } = useInput("");
	const [addingTag, setAddingTag] = useState(false);
	const [error, setError] = useState(false);

	const checkTagDuplicate = (newTag: string) => {
		const found = tags.find(tag => tag === newTag);

		return found;
	};

	const addTag = () => {
		if (!addingTag || !value.length) {
			setAddingTag(true);
		} else {
			const isDuplicatedTag = checkTagDuplicate(value);
			if (!isDuplicatedTag) {
				setTags([...tags, value]);
				reset();
				setAddingTag(false);
				setError(false);
			} else {
				setError(true);
			}
		}
	};

	const removeTag = (tag: string) => {
		setTags(tags.filter(t => t !== tag));
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
