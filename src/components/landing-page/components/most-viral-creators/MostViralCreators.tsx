"use client";

import CreatorItem from "@/components/landing-page/components/most-viral-creators/CreatorItem";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, useInView } from "framer-motion";

const creators = [
	{ name: "Sarah Chen", handle: "@sarahchen", category: "AI & Machine Learning" },
	{ name: "Marcus Reed", handle: "@marcusreed", category: "Web Development" },
	{ name: "Aisha Patel", handle: "@aishap", category: "Data Science" },
	{ name: "Jordan Blake", handle: "@jblake", category: "Cloud Computing" },
	{ name: "Lena Stephens", handle: "@lenasteph", category: "Programming" },
	{ name: "Tomas Rivera", handle: "@tomasdev", category: "DevOps" },
	{ name: "Yuki Tanaka", handle: "@yukibuilds", category: "Mobile Dev" },
	{ name: "David Okoro", handle: "@dokoro", category: "Cybersecurity" },
	{ name: "Emma Liu", handle: "@emmaliu", category: "UX Design" },
	{ name: "Ryan Foster", handle: "@ryanf", category: "Blockchain" },
];

const MostViralCreators = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section ref={ref} className="relative px-0 py-[5rem] bg-white">
			<div
				className="absolute inset-0 opacity-[0.25]"
				style={{
					backgroundImage:
						"radial-gradient(circle at 1px 1px, #E8E8E8 0.5px, transparent 0)",
					backgroundSize: "24px 24px",
				}}
			/>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="relative z-10 px-6 md:px-8"
			>
				<h2 className="text-[24px] md:text-[44px] font-bold text-center leading-tight text-[#111]">
					Learn From Top Creators
				</h2>
				<p className="text-[13px] md:text-[16px] font-inter font-normal text-center leading-[24px] text-[#6B7280] max-w-[600px] mx-auto mt-4">
					Follow the experts who are shaping the next generation of learners.
					Each creator brings real-world experience and proven teaching methods
					to their roadmaps.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
				className="relative z-10"
			>
				<Swiper
					className="mt-12 !px-4"
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
							slidesPerView: 1.6,
							spaceBetween: 20,
						},
						100: {
							slidesPerView: 1.4,
							spaceBetween: 20,
						},
					}}
				>
					{creators.map((creator, index) => (
						<SwiperSlide key={index}>
							<CreatorItem
								name={creator.name}
								handle={creator.handle}
								category={creator.category}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</section>
	);
};

export default MostViralCreators;
