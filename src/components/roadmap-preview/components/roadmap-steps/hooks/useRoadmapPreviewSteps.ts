import useInput from "@/components/common/input/hooks/useInput";
import useToggle from "@/hooks/useToggle";
import { RoadmapStepType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useEffect, useState } from "react";

/**
 * Custom hook to manage the state and behavior of roadmap preview steps.
 *
 * @returns {Object} - The state and handlers for roadmap preview steps.
 * @property {RoadmapStepType | null} previewStep - The current preview step.
 * @property {boolean} isPreviewStepModalHidden - The visibility state of the preview step modal.
 * @property {string} editorContent - The content of the editor.
 * @property {function} changeEditorContent - Function to change the editor content.
 * @property {function} handlePreviewStep - Function to handle the preview step.
 * @property {function} togglePreviewStepModal - Function to toggle the preview step modal visibility.
 */
export const useRoadmapPreviewSteps = () => {
	const [previewStep, setPreviewStep] = useState<null | RoadmapStepType>(null);
	const {
		currentState: isPreviewStepModalHidden,
		toggle: togglePreviewStepModal,
	} = useToggle(false);

	const { value: editorContent, changeValue: changeEditorContent } =
		useInput("");

	/**
	 * Handles the preview step by setting the current step and toggling the modal.
	 *
	 * @param {RoadmapStepType} step - The roadmap step to preview.
	 */
	const handlePreviewStep = (step: RoadmapStepType) => {
		setPreviewStep(step);
		togglePreviewStepModal();
	};

	useEffect(() => {
		if (!isPreviewStepModalHidden) {
			setPreviewStep(null);
		}
	}, [isPreviewStepModalHidden]);

	return {
		previewStep,
		isPreviewStepModalHidden,
		editorContent,
		changeEditorContent,
		handlePreviewStep,
		togglePreviewStepModal,
	};
};
