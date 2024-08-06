import { ARROW_ICON } from "@public/icons/roadmapSteps";
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

	return (
		<section className="w-full md:w-2/4">
			<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
				Popular fields
			</h3>

			<ul className="mt-[24px]">
				{fields.map(field => (
					<button
						key={field.id}
						className="w-full h-[74px] flex-jb-c px-[20px] py-[16px] font-inter text-[14px] odd:bg-[#F9F9F9] even:bg-white hover:shadow-md group transition duration-200"
					>
						<div className="text-start">
							<h3 className="font-medium text-[#202020]">{field.name}</h3>
							<p className="font-normal text-[#898989]">
								{field.roadmapsCount} roadmap
							</p>
						</div>

						<span className="rotate-90 text-[#D8D8D8] group-hover:translate-x-1 transition duration-200">
							{ARROW_ICON}
						</span>
					</button>
				))}
			</ul>
		</section>
	);
};

export default PopularFields;
