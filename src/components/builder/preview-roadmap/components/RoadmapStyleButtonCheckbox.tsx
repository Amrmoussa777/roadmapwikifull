import { Colors } from "@/components/builder/preview-roadmap/types/index.types";
import { useFetch } from "@/hooks/useFetch";
import { updateRoadmapData } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch } from "@/redux/store";
import { CHECK_ICON } from "@public/icons/roadmapInfo";
import { useParams } from "next/navigation";
import React from "react";

const RoadmapStyleButtonCheckbox = ({
	color,
	active,
	keyColor,
	handleChangeColor,
}: {
	color: string;
	active: boolean;
	keyColor: keyof Colors;
	handleChangeColor: (keyColor: keyof Colors, newColor: string) => void;
}) => {
	const { roadmapId } = useParams();

	const dispatch = useAppDispatch();

	const { fetchData } = useFetch();

	const handleUpdateRoadmapStyles = async (
		newRoadmapStyles: Record<string, string>
	) => {
		await fetchData("PATCH", `roadmap/${roadmapId}`, newRoadmapStyles);
		dispatch(updateRoadmapData(newRoadmapStyles));
	};

	return (
		<button
			style={{
				backgroundColor: color,
				boxShadow: active ? `${color} 0px 0px 0px 1px` : "none",
			}}
			className="w-[28px] h-[28px] [&>svg]:mx-auto ml-2 sm:ml-4 rounded-full border-2 border-[#f6f6f6]"
			onClick={() => {
				handleChangeColor(keyColor, color);
				handleUpdateRoadmapStyles({ [keyColor]: color });
			}}
		>
			{active ? CHECK_ICON : null}
		</button>
	);
};

export default RoadmapStyleButtonCheckbox;
