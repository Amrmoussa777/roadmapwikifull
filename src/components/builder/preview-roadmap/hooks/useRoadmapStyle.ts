import { Colors } from "@/components/builder/preview-roadmap/types/index.types";
import { useFetch } from "@/hooks/useFetch";
import { updateRoadmapData } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

const initialColors: Colors = {
	primaryColor: [
		{ color: "#C0C2C5", active: false },
		{ color: "#506CF0", active: true },
		{ color: "#FF9900", active: false },
		{ color: "#E0162E", active: false },
		{ color: "#42505C", active: false },
	],
	secondaryColor: [
		{ color: "#C0C2C5", active: false },
		{ color: "#506CF0", active: false },
		{ color: "#FF9900", active: true },
		{ color: "#E0162E", active: false },
		{ color: "#42505C", active: false },
	],
};

const useRoadmapStyle = () => {
	const [colors, setColors] = useState<Colors>(initialColors);
	const { roadmap } = useAppSelector(state => state.createRoadmap);

	const dispatch = useAppDispatch();

	const { fetchData } = useFetch();

	const handleUpdateRoadmapStyles = async (
		newRoadmapStyles: Record<string, string>
	) => {
		await fetchData("PATCH", `roadmap/${roadmap?.id}`, newRoadmapStyles);
		dispatch(updateRoadmapData(newRoadmapStyles));
	};

	const handleChangeColor = (keyColor: keyof Colors, newColor: string) => {
		const updatedColors = colors[keyColor].map(item => {
			if (item.color === newColor) {
				return {
					...item,
					active: true,
				};
			} else {
				return {
					...item,
					active: false,
				};
			}
		});

		setColors(prev => ({
			...prev,
			[keyColor]: updatedColors,
		}));
	};

	const resetStyles = () => {
		setColors(initialColors);

		const resetStylesData = {
			primaryColor: "#506CF0",
			secondaryColor: "#FF9900",
		};

		handleUpdateRoadmapStyles(resetStylesData);
	};

	useEffect(() => {
		if (roadmap) {
			const { primaryColor, secondaryColor } = roadmap;

			// Update main color if provided in roadmap
			if (primaryColor) {
				handleChangeColor("primaryColor", primaryColor);
			}

			// Update secondary color if provided in roadmap
			if (secondaryColor) {
				handleChangeColor("secondaryColor", secondaryColor);
			}
		}
	}, [roadmap]);

	return { resetStyles, colors, handleChangeColor };
};

export { useRoadmapStyle };
