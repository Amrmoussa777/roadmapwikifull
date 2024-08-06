import { ROADMAP_ICONS } from "@/config/roadmapIcons";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";

const PopularFields = () => {
	const fields = [
		{
			id: "1",
			name: "Technology & Computer Science",
			roadmapsCount: 104,
		},
		{
			id: "2",
			name: "Example dummy text",
			roadmapsCount: 104,
		},
		{
			id: "3",
			name: "Influencing & Social media",
			roadmapsCount: 104,
		},
		{
			id: "4",
			name: "Art Just example dummy text",
			roadmapsCount: 104,
		},
		{
			id: "5",
			name: "Fashion & photography",
			roadmapsCount: 104,
		},
		{
			id: "6",
			name: "Technology & Computer Science",
			roadmapsCount: 104,
		},
	];

	const categories = Object.values(ROADMAP_ICONS);
	return (
		<section className="w-full h-full md:w-2/4">
			<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
				Popular fields
			</h3>

			<ul className="mt-[24px] h-[470px] overflow-y-scroll hidden-scrollbar">
				{categories.map(field => (
					<Link
						href={`/roadmaps?category=${field.name}`}
						key={field.name}
						className="w-full h-[74px] flex-jb-c px-[20px] py-[16px] font-inter text-[14px] odd:bg-[#F9F9F9] even:bg-white hover:shadow-md group transition duration-200"
					>
						<div className="text-start">
							<h3 className="font-medium text-[#202020] capitalize">
								{field.name.toLowerCase().replaceAll("_", " ")}
							</h3>
						</div>

						<span className="rotate-90 text-[#D8D8D8] group-hover:translate-x-1 transition duration-200">
							{ARROW_ICON}
						</span>
					</Link>
				))}
			</ul>
		</section>
	);
};

export default PopularFields;
