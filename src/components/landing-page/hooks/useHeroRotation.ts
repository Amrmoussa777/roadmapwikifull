import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export type HeroSlot = "active" | "leaving" | "waiting";

export const HERO_TRANSITION = { duration: 0.6, ease: [0.65, 0, 0.35, 1] };

export const getHeroSlot = (
	index: number,
	activeIndex: number,
	count: number
): HeroSlot => {
	if (index === activeIndex) return "active";
	if (index === (activeIndex - 1 + count) % count) return "leaving";
	return "waiting";
};

export const useHeroRotation = (count: number, intervalMs = 3500) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const prefersReducedMotion = useReducedMotion();

	const isPaused = isHovered || isFocused || Boolean(prefersReducedMotion);

	useEffect(() => {
		if (isPaused) return;
		const interval = setInterval(
			() => setActiveIndex((index) => (index + 1) % count),
			intervalMs
		);
		return () => clearInterval(interval);
	}, [count, intervalMs, isPaused]);

	return { activeIndex, setIsHovered, setIsFocused };
};
