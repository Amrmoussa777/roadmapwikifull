import { useEffect, useState } from "react";

export const useSizeScreen = (screen: number) => {
	const [responsive, setResponsive] = useState(false);

	const handleResize = () => {
		setResponsive(window.innerWidth <= screen);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { responsive };
};
