import RoadmapDurationPicker from "@/components/create-roadmap/preview-roadmap/components/RoadmapDurationPicker";
import RoadmapInfoSelect from "@/components/create-roadmap/preview-roadmap/components/RoadmapInfoSelect";
import { useFetch } from "@/hooks/useFetch";
import { updateRoadmapData } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { EXAMPLE_ICON, RESET_ICON } from "@public/icons/roadmapInfo";
import { ADD_STEP_ICON, CROSS_ICON } from "@public/icons/roadmapSteps";
import { useParams } from "next/navigation";
import React, { ReactNode, useState } from "react";

const RoadmapInfoSelectItems = () => {
	const { roadmapId } = useParams();

	const { roadmap } = useAppSelector(state => state.createRoadmap);
	const { duration: defaultDuration } = roadmap || {};
	const dispatch = useAppDispatch();
	const { loading, fetchData } = useFetch();

	const roadmapIconsList = [
		{ name: "ICON 1", icon: EXAMPLE_ICON },
		{ name: "ICON 2", icon: RESET_ICON },
		{ name: "ICON 3", icon: ADD_STEP_ICON },
		{ name: "ICON 4", icon: CROSS_ICON },
	];

	const [roadmapActiveIcon, setRoadmapActiveIcon] = useState<
		Record<string, ReactNode>
	>(roadmapIconsList[0]);

	const handleSubmitIcon = async (newIcon: Record<string, ReactNode>) => {
		const { icon } = newIcon;

		// const updatedRoadmapStep = { icon };

		// await fetchData("PATCH", `roadmap/${roadmapId}`, updatedRoadmapStep);
		// dispatch(updateRoadmapData(updatedRoadmapStep));
		setRoadmapActiveIcon(newIcon);
	};

	return (
		<>
			<RoadmapDurationPicker defaultDuration={defaultDuration || ""} />

			<RoadmapInfoSelect
				label={{ id: "roadmapIcon", name: "Roadmap icon" }}
				activeOption={
					<span className="flex-jc-c gap-1 sm:gap-2 sm:text-[18px] [&>svg]:fill-red-500">
						<span
							style={{ backgroundColor: "" }}
							className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg text-primary-ultramarineBlue"
						>
							{roadmapActiveIcon.icon}
						</span>
						{roadmapActiveIcon.name}
					</span>
				}
			>
				{roadmapIconsList.map((item, index) => (
					<button
						type="button"
						key={index}
						className="flex items-center gap-2 !px-4 sm:gap-2 !text-[16px] sm:text-[18px]"
						onClick={() => handleSubmitIcon(item)}
					>
						<span
							style={{ backgroundColor: "" }}
							className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg [&>svg]:text-primary-ultramarineBlue"
						>
							{item.icon}
						</span>{" "}
						{item.name}
					</button>
				))}
			</RoadmapInfoSelect>
		</>
	);
};

export default RoadmapInfoSelectItems;
