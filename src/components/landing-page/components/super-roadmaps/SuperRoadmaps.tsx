import Image from "next/image";
import React from "react";
import SuperRoadmapsImage from "@public/super-roadmaps.png";
import { ARROW_ICON } from "@public/icons/roadmapSteps";

const SuperRoadmaps = () => {
	return (
		<section className="px-6 lg:px-[4.5rem] py-[4.5rem] bg-primary-ultramarineBlue rounded-t-[3rem]">
			<h2 className="text-[40px] font-bold text-center leading-[62px] text-white">
				Easily explore most super Roadmaps
			</h2>
			<p className="text-[16px] font-inter font-normal text-center leading-[24px] text-white max-w-[742px] mx-auto">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has beenthe industry's standard dummy text ever
				since the 1500s
			</p>

			<div className="w-full">
				<Image
					src={SuperRoadmapsImage}
					width={600}
					height={600}
					alt=""
					className="w-full"
				/>

				<div className="flex-jc-c gap-3 text-[#171618] [&>button]:bg-white [&>button]:rounded-full [&>button]:w-[40px] [&>button]:h-[40px] [&>button]:flex-jc-c">
					<button className="-rotate-90">{ARROW_ICON}</button>
					<button className="rotate-90">{ARROW_ICON}</button>
					<span className="text-white font-inter font-normal text-[14px]">
						1 of 3
					</span>
				</div>
			</div>
		</section>
	);
};

export default SuperRoadmaps;
