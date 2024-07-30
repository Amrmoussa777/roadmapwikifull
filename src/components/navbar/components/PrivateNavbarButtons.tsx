import AddRoadmapButton from "@/components/navbar/components/AddRoadmapButton";
import NotificationButton from "@/components/navbar/components/NotificationButton";
import SearchNavbarButton from "@/components/navbar/components/SearchNavbarButton";
import React from "react";

const PrivateNavbarButtons = () => {
	return (
		<div className="flex-jc-c gap-2 sm:gap-4">
			<AddRoadmapButton />
			<SearchNavbarButton />
			<NotificationButton />
		</div>
	);
};

export default PrivateNavbarButtons;
