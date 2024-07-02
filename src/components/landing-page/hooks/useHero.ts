import { roadmapList } from "@/components/landing-page/data/roadmapList";
import { MutableRefObject, useEffect, useState } from "react";

/**
 * Custom hook to manage the hero section's roadmap behavior.
 *
 * @param {MutableRefObject<null | HTMLDivElement>} roadmapRef - Reference to the roadmap container element.
 * @returns {Object} - An object containing the active roadmap index.
 */

const useHero = (roadmapRef: MutableRefObject<null | HTMLDivElement>) => {
	const [activeRoadmapIndex, setActiveRoadmapIndex] = useState(0);
	const [intervalDuration, setIntervalDuration] = useState(2000);
	const [isPaused, setIsPaused] = useState(false);

	// Add event listeners to pause/resume the roadmap on mouseover/mouseout
	useEffect(() => {
		roadmapRef.current?.addEventListener("mouseover", () => {
			setIsPaused(true);
		});

		roadmapRef.current?.addEventListener("mouseout", () => {
			setIsPaused(false);
		});

		// Cleanup event listeners on component unmount
		return () => {
			roadmapRef.current?.removeEventListener("mouseover", () => {
				setIsPaused(true);
			});
			roadmapRef.current?.removeEventListener("mouseout", () => {
				setIsPaused(false);
			});
		};
	}, [roadmapRef]);

	// Update the active roadmap index at intervals, pausing if necessary
	useEffect(() => {
		const interval = setInterval(() => {
			if (!isPaused) {
				setActiveRoadmapIndex(
					prevIndex => (prevIndex + 1) % roadmapList.length
				);
			}
		}, intervalDuration);

		// Clear the interval on component unmount
		return () => clearInterval(interval);
	}, [intervalDuration, isPaused]);

	// Adjust the interval duration based on the active roadmap index
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
