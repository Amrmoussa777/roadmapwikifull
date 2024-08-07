import { ROADMAP_ICONS } from "@/config/roadmapIcons";
import TextTransformationHelper from "@/helpers/textTransformation";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";

const PopularFields = () => {
	const categories = Object.values(ROADMAP_ICONS);

	return (
		<section className="relative w-full h-full md:w-5/12 lg:w-2/4">
			<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
				Popular categories
			</h3>

			<ul className="mt-[24px] h-full overflow-y-scroll hidden-scrollbar pb-[140px]">
				{categories.map(field => (
					<Link
						href={`/roadmaps?category=${field.name}`}
						key={field.name}
						className="w-full h-[74px] flex-jb-c px-[20px] py-[16px] font-inter text-[14px] odd:bg-[#F9F9F9] even:bg-white hover:shadow-md group transition duration-200"
					>
						<div className="text-start">
							<h3 className="font-medium text-[#202020] capitalize">
								{TextTransformationHelper.getCapitalizedEnumKey(field.name)}
							</h3>
						</div>

						<span className="rotate-90 text-[#D8D8D8] group-hover:translate-x-1 transition duration-200">
							{ARROW_ICON}
						</span>
					</Link>
				))}
			</ul>

			<div className="absolute w-full h-[80px] right-0 bottom-0 bg-gradient-to-t from-white z-10" />
		</section>
	);
};

export default PopularFields;
