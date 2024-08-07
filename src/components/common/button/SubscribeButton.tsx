import React from "react";
import { ROADMAP_SUBSCRIBE_LOGO } from "@public/icons/roadmapPreview";
import { SubscribeButtonProps } from "@/components/common/button/types/subscribe-button.types";

const SubscribeButton = ({
	price,
	offer,
	details,
	onClick,
	isSubscribed,
}: SubscribeButtonProps) => {
	return (
		<button
			onClick={() => onClick()}
			type="button"
			className={`h-[44px] flex-jc-c gap-2 bg-button-subscribe rounded-md text-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-48 ${
				isSubscribed ? "cursor-auto px-2" : "cursor-pointer pl-2"
			}`}
		>
			{ROADMAP_SUBSCRIBE_LOGO}
			<div>
				<h3 className="text-center md:text-lg leading-5 font-semibold">
					{isSubscribed ? "Subscribed" : "Subscribe"}
				</h3>
				{details?.length ? (
					<p className="text-xs font-light">{details}</p>
				) : null}
			</div>

			{!isSubscribed ? (
				<span className="w-[44px] md:w-[55px] h-[40px] md:h-[44px] flex-jc-c text-md md:text-lg font-semibold bg-black/20 rounded-r-md">
					{price ? price.amount + price.currency : "Free"}
				</span>
			) : null}
		</button>
	);
};

export default SubscribeButton;
