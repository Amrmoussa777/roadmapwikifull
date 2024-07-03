import { NewAraFeatureProps } from "@/components/landing-page/types/new-era-here.types";
import Image from "next/image";
import React from "react";

const NewAraFeature = ({ image, title, description }: NewAraFeatureProps) => {
	return (
		<div className="max-w-[350px]">
			<Image
				src={image}
				width={170}
				height={170}
				alt="newEraHere_1"
				className="w-[170px] h-[170px] mx-auto lg:mx-0"
			/>
			<h3 className="text-[24px] font-inter font-bold text-[#171618] text-center lg:text-start">
				{title}
			</h3>
			<p className="font-inter font-normal text-[#424854] text-[14px] leading-[150%] text-center lg:text-start">
				{description}
			</p>
		</div>
	);
};

export default NewAraFeature;
