import CreateRoadmapHeaderLoader from "@/components/create-roadmap/navbar/CreateRoadmapHeaderLoader";
import { useAppSelector } from "@/redux/store";
import { NAVBAR_MENU_ICON } from "@public/icons/roadmapPreview";
import { SAVE_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const CreateRoadmapHeader = () => {
	const { roadmap, isLoading } = useAppSelector(state => state.createRoadmap);
	const { title } = roadmap || {};

	if (isLoading) return <CreateRoadmapHeaderLoader />;

	return (
		<div className="w-full bg-white">
			<div className="h-[82px] flex-jb-c px-4 sm:px-6">
				<h3 className="text-md sm:text-[20px] text-[#181818]">
					<b>{title}</b> Road Map
				</h3>

				<div className="flex-jc-c gap-2">
					<button className="w-[100px] md:w-[132px] h-[35px] md:h-[40px] flex-jc-c gap-2 rounded-full text-white [&>svg]:w-[20px] [&>svg]:fill-white bg-primary-ultramarineBlue hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
						{SAVE_ICON} Publish
					</button>

					<button className="w-[35px] md:w-[40px] h-[35px] md:h-[40px] flex-jc-c border border-[#181818] rounded-full hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
						{NAVBAR_MENU_ICON}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateRoadmapHeader;
