import { TestimonialsList } from "@/components/landing-page/types/testimonials.types";
import { useState } from "react";

const useTestimonials = (testimonialsList: TestimonialsList) => {
	const [activeTestimonial, setActiveTestimonial] = useState(0);

	const handlePrevTestimonial = () => {
		if (activeTestimonial > 0) {
			setActiveTestimonial(prev => prev - 1);
		}
	};

	const handleNextTestimonial = () => {
		if (activeTestimonial < testimonialsList.length - 1) {
			setActiveTestimonial(prev => prev + 1);
		}
	};

	return { activeTestimonial, handlePrevTestimonial, handleNextTestimonial };
};

export default useTestimonials;
