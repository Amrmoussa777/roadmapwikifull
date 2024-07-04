"use client";

import React from "react";
import "swiper/css";
import TestimonialsSlider from "@/components/landing-page/components/testimonials/TestimonialsSlider";

const Testimonials = () => {
	return (
		<section className="relative bg-white px-6 lg:px-[4.5rem] py-[4rem] pb-[12rem] lg:py-[8rem] lg:!pb-[12rem] flex flex-col lg:flex-row justify-center lg:justify-between gap-12">
			<div className="w-full lg:w-4/12 section-header [&>*]:!text-[#171618] mt-12">
				<h2 className="lg:!text-start">Our happy clients say about us</h2>
				<p className="lg:!text-start">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has beenthe industry's standard dummy text ever
					since the 1500s
				</p>
			</div>

			<TestimonialsSlider />
		</section>
	);
};

export default Testimonials;
