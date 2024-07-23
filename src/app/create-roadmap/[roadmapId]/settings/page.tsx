import RoadmapSettings from "@/components/create-roadmap/settings/components/RoadmapSettings";
import React from "react";

const page = () => {
	return (
		<div className="p-4 sm:p-6 bg-white pb-[100px] lg:pb-0">
			<h2 className="font-semibold text-xl sm:text-3xl my-2">
				Roadmap settings
			</h2>

			<RoadmapSettings />
		</div>
	);
};

export default page;
