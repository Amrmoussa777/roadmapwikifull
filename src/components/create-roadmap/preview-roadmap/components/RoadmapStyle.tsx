import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import RoadmapStyleButtonCheckbox from "@/components/create-roadmap/preview-roadmap/components/RoadmapStyleButtonCheckbox";
import { useRoadmapStyle } from "@/components/create-roadmap/preview-roadmap/hooks/useRoadmapStyle";
import { RESET_ICON } from "@public/icons/roadmapInfo";
import React from "react";

const RoadmapStyle = () => {
	const { colors, handleChangeColor, resetStyles } = useRoadmapStyle();

	return (
		<div className="w-full">
			<div className="flex-jb-c sm:gap-4">
				<span className="text-[#23262F] font-inter font-medium">
					Main Color:
				</span>
				<div className="flex-jc-c">
					{colors.primaryColor.map(color => (
						<RoadmapStyleButtonCheckbox
							key={color.color}
							{...color}
							keyColor="primaryColor"
							handleChangeColor={handleChangeColor}
						/>
					))}
				</div>
			</div>
			<div className="flex-jb-c gap-4 mt-4">
				<span className="text-[#23262F] font-inter font-medium">
					Secondary Color:
				</span>
				<div className="flex-jc-c">
					{colors.secondaryColor.map(color => (
						<RoadmapStyleButtonCheckbox
							key={color.color}
							{...color}
							keyColor="secondaryColor"
							handleChangeColor={handleChangeColor}
						/>
					))}
				</div>
			</div>

			<HorizontalDivider height="h-[1px]" bgColor="bg-[#E0E0E0] my-6" />

			<button
				style={{ color: "" }}
				className="flex-jc-c gap-2 text-primary-ultramarineBlue font-medium font-inter"
				onClick={resetStyles}
			>
				{RESET_ICON}
				Reset style defaults
			</button>
		</div>
	);
};

export default RoadmapStyle;
