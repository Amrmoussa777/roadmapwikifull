"use client";

import CreatorTip from "@/components/creator-home/CreatorTip";
import { OnboardingTips } from "@/config/userTips";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const CreatorTips = () => {
	const tips = Object.values(OnboardingTips);

	const [activeTip, setActiveTip] = useState(0);
	const swiperRef = useRef<null | SwiperType>(null);

	return (
		<div className="w-full xl:max-w-[350px] h-full flex flex-col justify-between gap-4 p-[24px] border border-[#DCDCDC] rounded-[12px]">
			<Swiper
				onActiveIndexChange={e => setActiveTip(e.realIndex)}
				onSwiper={swiper => {
					swiperRef.current = swiper;
				}}
				slidesPerView={1}
				className={`w-full [&>div]:flex-jb-c`}
			>
				{tips.map(item => (
					<SwiperSlide key={item.tip}>
						<CreatorTip item={item} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="flex-jb-c  mt-auto">
				<ul className="flex gap-[7px]">
					<button
						onClick={() => swiperRef.current?.slidePrev()}
						className={`relative w-[8px] h-[8px] bg-[#DCDCDC] disabled:hover:bg-[#DCDCDC] hover:bg-[#898989] rounded-full transition duration-200`}
						disabled={activeTip === 0}
					/>
					<span
						className={`relative w-[16px] h-[8px] bg-[#898989] rounded-md transition duration-200`}
					/>
					<button
						onClick={() => swiperRef.current?.slideNext()}
						disabled={activeTip === tips.length - 1}
						className={`relative w-[8px] h-[8px] bg-[#DCDCDC] disabled:hover:bg-[#DCDCDC] hover:bg-[#898989] rounded-full transition duration-200`}
					/>
				</ul>

				<button
					onClick={() => swiperRef.current?.slideNext()}
					disabled={activeTip === tips.length - 1}
					className="w-[100px] h-[32px] bg-white border border-primary-ultramarineBlue rounded-[8px] text-[14px] font-inter font-medium text-primary-ultramarineBlue hover:bg-primary-ultramarineBlue hover:text-white transition duration-200"
				>
					Next tip
				</button>
			</div>
		</div>
	);
};

export default CreatorTips;
