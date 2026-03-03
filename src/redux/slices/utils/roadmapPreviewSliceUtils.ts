import { RoadmapStepType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

class RoadmapPreviewUtils {
	static toggleStep(roadmapSteps: RoadmapStepType[], stepId: string) {
		return roadmapSteps.map(step => {
			if (step.id === stepId) {
				return {
					...step,
					completed: false,
				};
			}
			return step;
		});
	}
}

export default RoadmapPreviewUtils;
