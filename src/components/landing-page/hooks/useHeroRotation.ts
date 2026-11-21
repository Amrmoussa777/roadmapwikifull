import { useEffect, useState } from "react";

export const useHeroRotation = (count: number, intervalMs = 3500) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (isPaused) return;
		const interval = setInterval(() => {
			setActiveIndex(index => (index + 1) % count);
		}, intervalMs);
		return () => clearInterval(interval);
	}, [count, intervalMs, isPaused]);

	return {
		activeIndex,
		pause: () => setIsPaused(true),
		resume: () => setIsPaused(false),
	};
};
