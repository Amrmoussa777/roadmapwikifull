import { roadmapList } from "@/components/landing-page/data/roadmapList";
import { useEffect, useState } from "react";

/**
 * Custom hook to manage the active roadmap index and interval duration.
 *
 * @returns {Object} - The current active roadmap index.
 */

const useHero = () => {
	const [activeRoadmapIndex, setActiveRoadmapIndex] = useState(0);
	const [intervalDuration, setIntervalDuration] = useState(2000);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveRoadmapIndex(prevIndex => (prevIndex + 1) % roadmapList.length);
		}, intervalDuration);

		return () => clearInterval(interval);
	}, [intervalDuration]);

	useEffect(() => {
		if (
			activeRoadmapIndex === 0 ||
			activeRoadmapIndex === roadmapList.length - 1
		) {
			setIntervalDuration(1000);
		} else {
			setIntervalDuration(2000);
		}
	}, [activeRoadmapIndex]);

	return {
		activeRoadmapIndex,
	};
};

export { useHero };
