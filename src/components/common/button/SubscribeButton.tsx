import React from "react";
import { ROADMAP_SUBSCRIBE_LOGO } from "../../../../public/icons/roadmapPreview";
import { SubscribeButtonProps } from "@/components/common/button/types/subscribe-button.types";

const SubscribeButton = ({ price, offer, details }: SubscribeButtonProps) => {
	return (
		<button className="flex-jc-c gap-2 bg-button-subscribe rounded-md text-white pl-2">
			{ROADMAP_SUBSCRIBE_LOGO}
			<div>
				<h3 className="text-lg leading-5 font-semibold">Subscribe</h3>
				{details?.length ? (
					<p className="text-xs font-light">{details}</p>
				) : null}
			</div>
			<span className="w-[55px] h-[44px] flex-jc-c text-lg font-semibold bg-black/20 rounded-r-md">
				{price}$
			</span>
		</button>
	);
};

export default SubscribeButton;
