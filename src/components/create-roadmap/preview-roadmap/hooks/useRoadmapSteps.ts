import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

const useRoadmapSteps = () => {
	const { roadmap } = useAppSelector(state => state.createRoadmap);
	const { steps } = roadmap || {};

	const [items, setItems] = useState(roadmap?.steps || []);

	useEffect(() => {
		if (roadmap && steps) {
			setItems(steps);
		}
	}, [roadmap]);

	return {
		items,
		setItems,
	};
};

export { useRoadmapSteps };
