import RoadmapDurationPicker from "@/components/builder/preview-roadmap/components/RoadmapDurationPicker";
import DropSelect from "@/components/builder/preview-roadmap/components/RoadmapInfoSelect";
import { ROADMAP_ICONS, RoadmapIconType } from "@/config/roadmapIcons";
import { useFetch } from "@/hooks/useFetch";
import { updateRoadmapData } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useParams } from "next/navigation";
import React, { ReactNode, useState } from "react";

const RoadmapInfoSelectItems = () => {
	const { roadmapId } = useParams();

	const { roadmap } = useAppSelector(state => state.createRoadmap);
	const { duration: defaultDuration, category: defaultCategoryName } =
		roadmap || {};
	const dispatch = useAppDispatch();
	const { loading, fetchData } = useFetch();

	const defaultIcon = ROADMAP_ICONS.find(
		icon => icon.name === defaultCategoryName
	);

	const [roadmapActiveIcon, setRoadmapActiveIcon] = useState<Record<
		string,
		ReactNode
	> | null>(defaultIcon || null);

	const handleSubmitIcon = async (newIcon: RoadmapIconType) => {
		const updatedRoadmapStep = { icon: newIcon.name };

		await fetchData("PATCH", `roadmap/${roadmapId}`, updatedRoadmapStep);
		dispatch(updateRoadmapData(updatedRoadmapStep));

		setRoadmapActiveIcon(newIcon);
	};

	return (
		<>
			<RoadmapDurationPicker defaultDuration={defaultDuration || ""} />

			<DropSelect
				label={{ id: "roadmapIcon", name: "Roadmap icon" }}
				activeOption={
					<span className="flex-jc-c gap-1 sm:gap-2 sm:text-[18px] [&>svg]:fill-red-500">
						<span
							style={{ backgroundColor: "" }}
							className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg text-primary-ultramarineBlue"
						>
							{roadmapActiveIcon ? roadmapActiveIcon.icon : "-"}
						</span>

						<span>
							{roadmapActiveIcon
								? roadmapActiveIcon.name?.toString().replace("_", " ")
								: "-"}
						</span>
					</span>
				}
			>
				{ROADMAP_ICONS.map(item => (
					<button
						type="button"
						key={item.name}
						onClick={() => handleSubmitIcon(item)}
						disabled={loading}
						className="flex items-center gap-2 !px-4 sm:gap-2 !text-[14px] md:!text-[16px]"
					>
						<span
							style={{ backgroundColor: "" }}
							className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg [&>svg]:text-primary-ultramarineBlue"
						>
							{item.icon}
						</span>{" "}
						<span>{item.name.replace("_", " ")}</span>
					</button>
				))}
			</DropSelect>
		</>
	);
};

export default RoadmapInfoSelectItems;
