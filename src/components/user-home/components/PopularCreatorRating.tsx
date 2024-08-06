"use client";

import { CreatorRateType } from "@/components/user-home/types/index.types";
import { RATE_ICON } from "@public/icons/userHome";
import React, { useEffect, useState } from "react";

const PopularCreatorRating = ({
	rate,
	disabled = true,
}: {
	rate: CreatorRateType;
	disabled?: boolean;
}) => {
	const [hoverStars, setHoverStars] = useState<number | null>(null);
	const [stars, setStars] = useState<number>(rate.stars);

	useEffect(() => {
		if (disabled) return;

		if (hoverStars !== null) {
			setStars(hoverStars);
		} else {
			setStars(rate.stars);
		}
	}, [hoverStars, rate.stars]);

	return (
		<div className="mt-[8px] flex items-center gap-2">
			<div className="max-w-[110px] flex-jc-c">
				{Array.from({ length: 5 }).map((_, index) => (
					<button
						key={index}
						onMouseEnter={() => setHoverStars(index + 1)}
						onMouseLeave={() => setHoverStars(null)}
						className={`transition duration-200 ${
							disabled ? "cursor-auto" : ""
						} ${
							index < stars
								? "text-[#00CF7C]"
								: disabled
								? "text-transparent"
								: "text-transparent hover:text-[#00CF7C]"
						}`}
					>
						{RATE_ICON}
					</button>
				))}
			</div>

			<p className="font-inter text-[10px] text-[#655F5F]">
				{rate.reviews} reviews
			</p>
		</div>
	);
};

export default PopularCreatorRating;
