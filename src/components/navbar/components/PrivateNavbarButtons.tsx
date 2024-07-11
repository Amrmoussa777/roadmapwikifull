import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import AddRoadmapButton from "@/components/navbar/components/AddRoadmapButton";
import NotificationButton from "@/components/navbar/components/NotificationButton";
import SearchNavbarButton from "@/components/navbar/components/SearchNavbarButton";
import React from "react";

const PrivateNavbarButtons = () => {
	return (
		<>
			<div className="flex-jc-c gap-2 sm:gap-4">
				<AddRoadmapButton />
				<SearchNavbarButton />
				<NotificationButton />
			</div>

			<VerticalDivider
				width="min-w-[1px]"
				bgColor="bg-[#D8D8D8]"
				customStyles="h-[20px] my-auto rounded-full mx-2 sm:mx-4"
			/>
		</>
	);
};

export default PrivateNavbarButtons;
