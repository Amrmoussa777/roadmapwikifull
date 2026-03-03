"use client";

import React, { useRef } from "react";
import "swiper/css";
import TestimonialsSlider from "@/components/landing-page/components/testimonials/TestimonialsSlider";
import { motion, useInView } from "framer-motion";

const Testimonials = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			ref={ref}
			className="relative bg-white px-6 lg:px-[4.5rem] py-[4rem] pb-[12rem] lg:py-[8rem] lg:!pb-[12rem] flex flex-col lg:flex-row justify-center lg:justify-between gap-12"
		>
			<div
				className="absolute inset-0 opacity-[0.2]"
				style={{
					backgroundImage:
						"radial-gradient(circle at 1px 1px, #E8E8E8 0.5px, transparent 0)",
					backgroundSize: "24px 24px",
				}}
			/>

			<motion.div
				initial={{ opacity: 0, x: -30 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="relative z-10 w-full lg:w-4/12 mt-12"
			>
				<h2 className="text-[24px] md:text-[44px] font-bold leading-tight text-[#111] text-center lg:text-start">
					What our learners are saying
				</h2>
				<p className="text-[13px] md:text-[16px] font-inter font-normal leading-[24px] text-[#6B7280] max-w-[742px] text-center lg:text-start mt-4">
					Thousands of learners have transformed their careers using Roadmap.
					Here is what some of them have to say about their experience.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 30 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
				className="relative z-10"
			>
				<TestimonialsSlider />
			</motion.div>
		</section>
	);
};

export default Testimonials;
