import { CreatorTipProps } from "@/components/creator-home/types/index.types";
import Image from "@/components/common/image/CustomImage";
import React from "react";
import tip_image_cover from "@public/tip_image_cover.svg";

const CreatorTip = ({ item }: { item: CreatorTipProps }) => {
	const { tip, message } = item;

	return (
		<li>
			<div className="w-full h-full [&>svg]:w-full">
				<Image
					src={tip_image_cover}
					width={400}
					height={200}
					alt="cover"
					className="w-full"
				/>
			</div>

			<h3 className="font-inter font-medium text-[16px] text-[#202020] mt-[27px]">
				{tip}
			</h3>

			<p className="font-inter font-normal text-[14px] text-[#898989] mt-[12px]">
				{message}
			</p>
		</li>
	);
};

export default CreatorTip;
