"use client";

import CreatorTip from "@/components/creator-home/CreatorTip";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const CreatorTips = () => {
	const tips = [
		{
			id: "1",
			image: "url",
			title: "Light tips / guide",
			description: "Lorem Ipsum is simply dummy text of the printing.",
		},
		{
			id: "2",
			image: "url",
			title: "Light tips / guide",
			description: "Lorem Ipsum is simply dummy text of the printing.",
		},
		{
			id: "3",
			image: "url",
			title: "Light tips / guide",
			description: "Lorem Ipsum is simply dummy text of the printing.",
		},
	];

	const [activeTip, setActiveTip] = useState(0);
	const swiperRef = useRef<null | SwiperType>(null);

	return (
		<div className="w-full max-w-[350px] h-fit p-[24px] border border-[#DCDCDC] rounded-[12px]">
			<Swiper
				onActiveIndexChange={e => setActiveTip(e.realIndex)}
				onSwiper={swiper => {
					swiperRef.current = swiper;
				}}
				slidesPerView={1}
				className={`[&>div]:flex-jb-c`}
			>
				{tips.map(item => (
					<SwiperSlide key={item.id}>
						<CreatorTip item={item} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="flex-jb-c">
				<ul className="flex gap-[7px]">
					{tips.map((tip, index) => (
						<li key={tip.id}>
							<button
								onClick={() => swiperRef.current?.slideTo(index)}
								className={`relative w-[8px] h-[8px] bg-[#DCDCDC] hover:bg-[#898989] rounded-full transition duration-200 ${
									activeTip === index ? "!bg-[#898989]" : "bg-[#DCDCDC]"
								}`}
							/>
						</li>
					))}
				</ul>

				<button className="w-[100px] h-[32px] mt-[29px] bg-white border border-primary-ultramarineBlue rounded-[8px] text-[14px] font-inter font-medium text-primary-ultramarineBlue hover:bg-primary-ultramarineBlue hover:text-white transition duration-200">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default CreatorTips;
