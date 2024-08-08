import { useEffect } from "react";

export const useOnClickOutside = (
	callback: Function,
	refs: React.RefObject<HTMLElement>[]
) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				refs &&
				refs.length &&
				refs.every(
					ref => ref.current && !ref.current.contains(event.target as Node)
				)
			) {
				callback();
			}
		};

		document.addEventListener("mousedown", handleClick);

		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [refs, callback]);
};
