"use client";

import Image from "@/components/common/image/CustomImage";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import superRoadmapsImage from "@public/super-roadmaps.svg";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

const slides = [superRoadmapsImage, superRoadmapsImage, superRoadmapsImage];

const SuperRoadmapsSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<null | SwiperType>(null);
	const lastIndex = slides.length - 1;

	return (
		<div className="w-full">
			<Swiper
				slidesPerView={1}
				spaceBetween={24}
				onActiveIndexChange={swiper => setActiveIndex(swiper.realIndex)}
				onSwiper={swiper => {
					swiperRef.current = swiper;
				}}
				className="w-full"
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="rounded-[28px] border border-white/35 bg-white/15 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] md:p-5">
							<Image
								src={slide}
								width={1305}
								height={819}
								alt={`Roadmap screen ${index + 1} of ${slides.length}`}
								className="h-auto w-full rounded-[20px]"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="relative mx-auto mt-6 flex w-fit items-center justify-center gap-3 text-[#171618]">
				<button
					type="button"
					aria-label="Previous slide"
					onClick={() => swiperRef.current?.slidePrev()}
					disabled={activeIndex === 0}
					className="flex h-[44px] w-[44px] -rotate-90 items-center justify-center rounded-full border border-white/60 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-white disabled:opacity-40"
				>
					{ARROW_ICON}
				</button>
				<button
					type="button"
					aria-label="Next slide"
					onClick={() => swiperRef.current?.slideNext()}
					disabled={activeIndex === lastIndex}
					className="flex h-[44px] w-[44px] rotate-90 items-center justify-center rounded-full border border-white/60 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-white disabled:opacity-40"
				>
					{ARROW_ICON}
				</button>
				<span className="absolute right-[-56px] font-inter text-[14px] font-normal text-white">
					{activeIndex + 1} of {slides.length}
				</span>
			</div>
		</div>
	);
};

export default SuperRoadmapsSlider;
