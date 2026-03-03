import { roadmapList } from "@/components/landing-page/data/roadmapList";
import { useEffect, useState, useRef } from "react";

/**
 * Custom hook to manage the hero section's roadmap behavior.
 *
 * @param {MutableRefObject<null | HTMLDivElement>} roadmapRef - Reference to the roadmap container element.
 * @returns {Object} - An object containing the active roadmap index.
 */

const useHero = () => {
	const [activeRoadmapIndex, setActiveRoadmapIndex] = useState(0);
	const [intervalDuration, setIntervalDuration] = useState(1500);
	const [isPaused, setIsPaused] = useState(false);
	const scrollTimeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null);

	const roadmapRef = useRef<HTMLDivElement>(null);

	// Add event listeners to pause/resume the roadmap on mouseover/mouseout, scroll, mousedown, and mouseup
	useEffect(() => {
		const handleMouseOver = () => {
			setIsPaused(true);
		};

		const handleMouseOut = () => {
			setIsPaused(false);
		};

		const handleScroll = () => {
			// Clear the previous timeout if there's any
			if (scrollTimeoutRef.current) {
				clearTimeout(scrollTimeoutRef.current);
			}

			// Set isPaused to true when scrolling
			setIsPaused(true);

			// Set a timeout to reset isPaused after scrolling ends
			scrollTimeoutRef.current = setTimeout(() => {
				setIsPaused(false);
			}, 150); // Adjust the timeout duration as needed
		};

		const handleMouseDown = () => {
			setIsPaused(true);
		};

		const handleMouseUp = () => {
			setIsPaused(false);
		};

		const roadmapElement = roadmapRef.current;
		if (roadmapElement) {
			roadmapElement.addEventListener("mouseover", handleMouseOver);
			roadmapElement.addEventListener("mouseout", handleMouseOut);
			roadmapElement.addEventListener("scroll", handleScroll);
			roadmapElement.addEventListener("mousedown", handleMouseDown);
			roadmapElement.addEventListener("mouseup", handleMouseUp);
		}

		// Cleanup event listeners on component unmount
		return () => {
			if (roadmapElement) {
				roadmapElement.removeEventListener("mouseover", handleMouseOver);
				roadmapElement.removeEventListener("mouseout", handleMouseOut);
				roadmapElement.removeEventListener("scroll", handleScroll);
				roadmapElement.removeEventListener("mousedown", handleMouseDown);
				roadmapElement.removeEventListener("mouseup", handleMouseUp);
			}

			// Clear the scroll timeout if component unmounts
			if (scrollTimeoutRef.current) {
				clearTimeout(scrollTimeoutRef.current);
			}
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
			setIntervalDuration(1500);
		} else {
			setIntervalDuration(3000);
		}
	}, [activeRoadmapIndex]);

	return {
		activeRoadmapIndex,
		roadmapRef,
	};
};

export { useHero };
