import { NewAraFeatureProps } from "@/components/landing-page/types/new-era-here.types";
import Image from "@/components/common/image/CustomImage";
import React from "react";

const NewAraFeature = ({ image, title, description }: NewAraFeatureProps) => {
	return (
		<div className="max-w-[350px] group">
			<div className="w-[170px] h-[170px] mx-auto lg:mx-0 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
				<Image
					src={image}
					width={170}
					height={170}
					alt={title}
					className="w-[170px] h-[170px]"
				/>
			</div>
			<h3 className="text-[24px] font-inter font-bold text-[#111] text-center lg:text-start mt-2">
				{title}
			</h3>
			<p className="font-inter font-normal text-[#6B7280] text-[14px] leading-[160%] text-center lg:text-start">
				{description}
			</p>
		</div>
	);
};

export default NewAraFeature;
