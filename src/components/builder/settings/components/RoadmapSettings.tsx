"use client";

import ArchiveRoadmapButton from "@/components/builder/settings/components/ArchiveRoadmapButton";
import RoadmapSettingsLoader from "@/components/builder/settings/components/RoadmapSettingsLoader";
import { useAppSelector } from "@/redux/store";
import React from "react";

const RoadmapSettings = () => {
	const { roadmap, isLoading } = useAppSelector(state => state.createRoadmap);

	if (isLoading) return <RoadmapSettingsLoader />;

	return (
		<div>
			<h3 className="text-[20px] sm:text-[24px]">
				{roadmap?.title || "-"} roadmap?
			</h3>

			<ArchiveRoadmapButton />
		</div>
	);
};

export default RoadmapSettings;
