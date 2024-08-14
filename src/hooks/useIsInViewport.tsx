import { RefObject, useEffect, useState } from "react";

export const useIsInViewport = (
	divRef: RefObject<HTMLDivElement>,
	loading: boolean
) => {
	const [isInViewport, setIsInViewport] = useState(false);

	useEffect(() => {
		if (loading) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInViewport(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		if (divRef.current) {
			observer.observe(divRef.current);
		}

		return () => {
			if (divRef.current) {
				observer.unobserve(divRef.current);
			}
		};
	}, []);

	return {
		isInViewport,
	};
};
