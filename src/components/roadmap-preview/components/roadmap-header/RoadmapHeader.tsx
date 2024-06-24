"use client";

import Image from "next/image";
import React from "react";
import RoadmapCover from "../../../../../public/roadmapCover.png";
import SubscribeButton from "@/components/common/button/SubscribeButton";
import { SHARE_ICON } from "../../../../../public/icons/roadmapPreview";
import { useAppSelector } from "@/redux/store";

const RoadmapHeader = () => {
	const { roadmap } = useAppSelector(state => state.roadmapPreview);
	const { title, cover, subscriptionPrice } = roadmap;

	return (
		<div className="h-[150px]">
			<Image
				src={RoadmapCover}
				width={400}
				height={400}
				alt="roadmap-cover"
				className="w-full h-2/4 object-cover rounded-t-md"
			/>

			<div className="w-full h-2/4 bg-white rounded-b-md flex-jb-c px-2 md:px-4 lg:px-6">
				<h2 className="text-sm md:text-lg lg:text-3xl font-semibold text-primary-dark">
					{title}
				</h2>

				<div className="flex-jc-c gap-2">
					<SubscribeButton price={subscriptionPrice} callback={() => {}} />
					<button className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] flex-jc-c border border-grey-iconBorder rounded-full">
						{SHARE_ICON}
					</button>
				</div>
			</div>
		</div>
	);
};

export default RoadmapHeader;
