"use client";

import React, { useRef, useState } from "react";
import SuperRoadmapsImage from "@public/super-roadmaps.svg";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import Image from "next/image";

const SuperRoadmapsSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<null | SwiperType>(null);

	return (
		<div className="w-full">
			<Swiper
				slidesPerView={1}
				pagination={{
					type: "fraction",
				}}
				navigation={true}
				modules={[Navigation]}
				onActiveIndexChange={e => setActiveIndex(e.realIndex)}
				onSwiper={swiper => {
					swiperRef.current = swiper;
				}}
				className="w-full [&>div>div>img]:w-[calc(100%-4rem)] [&>div>div>img]:mx-auto"
			>
				<SwiperSlide>
					<Image
						src={SuperRoadmapsImage}
						width={600}
						height={600}
						alt=""
						className="w-full"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={SuperRoadmapsImage}
						width={600}
						height={600}
						alt=""
						className="md:w-full"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={SuperRoadmapsImage}
						width={600}
						height={600}
						alt=""
						className="md:w-full"
					/>
				</SwiperSlide>
			</Swiper>

			<div className="relative w-fit mx-auto flex-jc-c gap-3 text-[#171618] [&>button]:bg-white [&>button]:rounded-full [&>button]:w-[40px] [&>button]:h-[40px] [&>button]:flex-jc-c">
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					className={`-rotate-90 ${activeIndex === 0 ? "" : "group"}`}
					disabled={activeIndex === 0}
				>
					<span className="group-hover:-translate-y-[2px] duration-200 transition">
						{ARROW_ICON}
					</span>
				</button>
				<button
					onClick={() => swiperRef.current?.slideNext()}
					className={`rotate-90 ${activeIndex === 2 ? "" : "group"}`}
					disabled={activeIndex === 2}
				>
					<span className="group-hover:-translate-y-[2px] duration-200 transition">
						{ARROW_ICON}
					</span>
				</button>
				<span className="absolute right-[-45px] text-white font-inter font-normal text-[14px]">
					{activeIndex + 1} of 3
				</span>
			</div>
		</div>
	);
};

export default SuperRoadmapsSlider;
