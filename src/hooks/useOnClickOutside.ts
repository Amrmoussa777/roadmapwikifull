import { useRef, useEffect, RefObject } from "react";

export const useOnClickOutside = (
	callback: Function,
	screenSize: boolean = true
) => {
	const ref: any = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleClick = (event: any) => {
			if (ref.current && !ref.current.contains(event.target) && screenSize) {
				callback();
			}
		};

		document.addEventListener("click", handleClick, true);

		return () => {
			document.removeEventListener("click", handleClick, true);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref, screenSize]);

	return ref;
};
