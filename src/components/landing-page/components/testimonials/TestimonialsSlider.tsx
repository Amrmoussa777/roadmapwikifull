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

			<div className="absolute bottom-[-60px] left-2/4 -translate-x-2/4 lg:translate-x-auto lg:left-[7rem] lg:bottom-[100px] flex-jc-c gap-2 [&>button]:w-[40px] [&>button]:h-[40px] [&>button]:flex-jc-c [&>button]:bg-primary-ultramarineBlue text-white [&>button]:rounded-full">
				<button
					onClick={handlePrevTestimonial}
					className="-rotate-90"
					disabled={activeTestimonial === 0}
				>
					{ARROW_ICON}
				</button>
				<button
					onClick={handleNextTestimonial}
					className="rotate-90"
					disabled={activeTestimonial === testimonialsList.length - 1}
				>
					{ARROW_ICON}
				</button>
			</div>
		</>
	);
};

export default TestimonialsSlider;
