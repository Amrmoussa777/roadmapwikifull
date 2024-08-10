"use client";

import CreatorTips from "@/components/creator-home/components/CreatorTips";
import OnboardingSteps from "@/components/creator-home/components/OnboardingSteps";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const CreatorSlidersOnboardingSteps = () => {
	const { responsive } = useSizeScreen(768);

	return (
		<Swiper
			slidesPerView={responsive ? 1 : 2}
			spaceBetween={20}
			className={`w-full !flex-jc-c xl:!hidden`}
		>
			<SwiperSlide>
				<OnboardingSteps />
			</SwiperSlide>
			<SwiperSlide className="w-full !h-auto">
				<CreatorTips />
			</SwiperSlide>
		</Swiper>
	);
};

export default CreatorSlidersOnboardingSteps;
