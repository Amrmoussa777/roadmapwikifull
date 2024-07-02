"use client";

import CreatorItem from "@/components/landing-page/components/most-viral-creators/CreatorItem";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MostViralCreators = () => {
	return (
		<section className="px-0 py-[4.5rem] bg-white">
			<div className="heading-section [&>*]:!text-[#171618]">
				<h2>With the Most Viral Creators</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has beenthe industry's standard dummy text ever
					since the 1500s
				</p>
			</div>

			<Swiper
				className="mt-12"
				slidesPerView={6.2}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					1280: {
						slidesPerView: 5.2,
						spaceBetween: 10,
					},
					1150: {
						slidesPerView: 5.2,
					},

					1024: {
						slidesPerView: 4.2,
						spaceBetween: 20,
					},
					876: {
						slidesPerView: 3.2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 2.8,
						spaceBetween: 20,
					},
					400: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					100: {
						slidesPerView: 1.6,
						spaceBetween: 20,
					},
				}}
			>
				{Array.from(Array(10)).map((item, index) => (
					<SwiperSlide key={index}>
						<CreatorItem />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default MostViralCreators;
