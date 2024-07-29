"use client";

import SummaryItem from "@/components/creator-home/components/SummaryItem";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import {
	COMMENTS_ICON,
	LIKES_ICON,
	PREVIEWS_ICON,
	SUBSCRIBES_ICON,
} from "@public/icons/creatorHome";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Summary = () => {
	const isMobile = useSizeScreen(768);

	return (
		<div className="">
			<Swiper
				slidesPerView={4}
				className={`[&>div>div]:!w-[156px] [&>div>div]:lg:!w-[200px] [&>div]:flex-jb-c ${
					!isMobile ? "swiper-no-swiping" : ""
				}`}
				breakpoints={{
					1280: {
						slidesPerView: 4,
					},
					1150: {
						slidesPerView: 4,
					},

					1024: {
						slidesPerView: 4,
					},
					876: {
						slidesPerView: 4,
					},
					768: {
						slidesPerView: 4,
					},
					640: {
						slidesPerView: 2.8,
						spaceBetween: 10,
					},
					400: {
						slidesPerView: 2.8,
						spaceBetween: 10,
					},
					100: {
						slidesPerView: 1.4,
						spaceBetween: 10,
					},
				}}
			>
				<SwiperSlide>
					<SummaryItem label="Subscribes" info="200K" icon={SUBSCRIBES_ICON} />
				</SwiperSlide>
				<SwiperSlide>
					<SummaryItem label="Previews" info="500K" icon={PREVIEWS_ICON} />
				</SwiperSlide>
				<SwiperSlide>
					<SummaryItem label="Comments" info="31,500" icon={COMMENTS_ICON} />
				</SwiperSlide>
				<SwiperSlide className="[&>li]:!mr-0">
					<SummaryItem label="Example" info="100K" icon={LIKES_ICON} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Summary;
