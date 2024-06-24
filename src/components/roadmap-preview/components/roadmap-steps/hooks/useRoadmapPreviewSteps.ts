import useInput from "@/components/common/input/hooks/useInput";
import { RoadmapStepType } from "@/components/roadmap-preview/types/roadmapSteps.types";
import useToggle from "@/hooks/useToggle";
import { useState } from "react";

export const useRoadmapPreviewSteps = () => {
	const [previewStep, setPreviewStep] = useState<null | RoadmapStepType>(null);
	const {
		currentState: isPreviewStepModalHidden,
		toggle: togglePreviewStepModal,
	} = useToggle(false);
	const { value: editorContent, changeValue: changeEditorContent } =
		useInput("");

	const handlePreviewStep = (step: RoadmapStepType) => {
		setPreviewStep(step);
		togglePreviewStepModal();
	};

	return {
		previewStep,
		isPreviewStepModalHidden,
		editorContent,
		changeEditorContent,
		handlePreviewStep,
		togglePreviewStepModal,
	};
};
