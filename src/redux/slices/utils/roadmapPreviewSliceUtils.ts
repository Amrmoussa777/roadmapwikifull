import { RoadmapStepType } from "@/components/roadmap-preview/types/roadmapSteps.types";

class RoadmapPreviewUtils {
	static toggleStep(roadmapSteps: RoadmapStepType[], stepId: number) {
		return roadmapSteps.map(step => {
			if (step.id === stepId) {
				return {
					...step,
					completed: !step.completed,
				};
			}
			return step;
		});
	}
}

export default RoadmapPreviewUtils;
