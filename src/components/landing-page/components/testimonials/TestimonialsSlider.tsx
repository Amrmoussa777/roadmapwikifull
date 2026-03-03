import React from "react";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import TestimonialsItem from "@/components/landing-page/components/testimonials/TestimonialsItem";
import useTestimonials from "@/components/landing-page/hooks/useTestimonials";
import { testimonialsList } from "@/components/landing-page/data/testimonialList";

const TestimonialsSlider = () => {
	const { activeTestimonial, handleNextTestimonial, handlePrevTestimonial } =
		useTestimonials(testimonialsList);

	return (
		<>
			<TestimonialsItem testimonial={testimonialsList[activeTestimonial]} />

			<div className="absolute bottom-[-60px] left-2/4 -translate-x-2/4 lg:translate-x-auto lg:left-[7rem] lg:bottom-[100px] flex-jc-c gap-2 [&>button]:w-[42px] [&>button]:h-[42px] [&>button]:flex-jc-c [&>button]:bg-gradient-to-r [&>button]:from-[#506CF0] [&>button]:to-[#7C5CFC] text-white [&>button]:rounded-full [&>button]:shadow-[0_2px_12px_rgba(80,108,240,0.25)]">
				<button
					onClick={handlePrevTestimonial}
					className={`-rotate-90 ${activeTestimonial === 0 ? "!opacity-40" : "group hover:shadow-[0_4px_20px_rgba(80,108,240,0.4)]"} transition-all duration-300`}
					disabled={activeTestimonial === 0}
				>
					<span className="group-hover:-translate-y-[2px] duration-200 transition">
						{ARROW_ICON}
					</span>
				</button>
				<button
					onClick={handleNextTestimonial}
					className={`rotate-90 ${
						activeTestimonial === testimonialsList.length - 1 ? "!opacity-40" : "group hover:shadow-[0_4px_20px_rgba(80,108,240,0.4)]"
					} transition-all duration-300`}
					disabled={activeTestimonial === testimonialsList.length - 1}
				>
					<span className="group-hover:-translate-y-[2px] duration-200 transition">
						{ARROW_ICON}
					</span>
				</button>
			</div>
		</>
	);
};

export default TestimonialsSlider;
