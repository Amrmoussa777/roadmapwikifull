import { useEffect } from "react";

/**
 * Custom hook to disable scrolling on the body element.
 *
 * @param {boolean} disabled - A boolean indicating whether scrolling should be disabled.
 */
const useDisableScroll = (disabled: boolean) => {
	useEffect(() => {
		if (disabled) {
			const originalOverflow = document.body.style.overflow;

			document.body.style.overflow = "hidden";

			return () => {
				document.body.style.overflow = originalOverflow;
			};
		}
	}, [disabled]);
};

export default useDisableScroll;
