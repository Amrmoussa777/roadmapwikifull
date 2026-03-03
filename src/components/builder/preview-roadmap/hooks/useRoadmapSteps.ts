import { reorderRoadmapSteps } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { RoadmapStepType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppDispatch, useAppSelector } from "@/redux/store";

const useRoadmapSteps = () => {
	const dispatch = useAppDispatch();
	const { roadmap } = useAppSelector(state => state.createRoadmap);

	const handleReOrderRoadmapSteps = async (newOrder: RoadmapStepType[]) => {
		if (!roadmap) return;

		dispatch(reorderRoadmapSteps(newOrder));
	};

	return {
		handleReOrderRoadmapSteps,
	};
};

export { useRoadmapSteps };
