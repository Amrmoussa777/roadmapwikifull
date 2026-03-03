import Image from "@/components/common/image/CustomImage";
import React, { useEffect, useState } from "react";
import { TestimonialItem } from "@/components/landing-page/types/testimonials.types";
import { motion } from "framer-motion";

const TestimonialsItem = ({
	testimonial,
}: {
	testimonial: TestimonialItem;
}) => {
	const [active, setActive] = useState(1);
	const [currentTestimonial, setCurrentTestimonial] = useState(testimonial);
	const [isVisible, setIsVisible] = useState(false);
	const firstTestimonial = currentTestimonial[0];
	const secondTestimonial = currentTestimonial[1];

	useEffect(() => {
		setIsVisible(false);
		setTimeout(() => {
			setIsVisible(true);
			setCurrentTestimonial(testimonial);
		}, 300);
	}, [testimonial]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: isVisible ? 1 : 0 }}
			transition={{ duration: 0.5 }}
			className={`w-[290px] md:w-[450px] lg:w-[580px] relative mx-auto lg:mx-0 transition-all`}
		>
			<div
				onClick={() => setActive(1)}
				className={`relative w-[180px] md:w-[225px] lg:w-[325px] rounded-2xl border border-black/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.06)] -rotate-6 overflow-hidden bg-white transition-all hover:shadow-[0_8px_40px_rgba(80,108,240,0.1)] ${
					active === 1 ? "z-10" : "z-0"
				}`}
			>
				<div className="flex justify-start gap-2 lg:gap-6 px-3 md:px-3 lg:px-6 py-6 md:py-6 lg:py-12">
					<Image
						src={firstTestimonial.user.image}
						width={100}
						height={100}
						alt="avatar"
						className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] rounded-full object-cover bg-[#e6e4ff]"
					/>

					<div>
						<h3 className="text-[16px] lg:text-[18px] font-bold text-[#111]">
							{firstTestimonial.user.name}
						</h3>
						<p className="font-inter text-[12px] lg:text-[16px] font-normal text-[#9CA3AF]">
							{firstTestimonial.user.job}
						</p>
					</div>
				</div>

				<div className="px-3 md:px-6 bg-white pt-2 md:pt-4 lg:pt-8 py-8 lg:py-16">
					<h3 className="text-[14px] lg:text-[22px] font-sans font-bold text-[#111] text-center">
						{firstTestimonial.heading}
					</h3>
					<p className="text-[12px] lg:text-[16px] text-center text-[#6B7280] font-inter mt-4">
						{firstTestimonial.comment}
					</p>
				</div>

				<div className="absolute w-[170px] h-[450px] bg-gradient-to-br from-[#506CF0] to-[#7C5CFC] top-[-300px] lg:top-[-350px] right-[-80px] md:right-[-70px] lg:right-0 -rotate-45" />
			</div>

			<div
				onClick={() => setActive(2)}
				className={`absolute w-[225px] lg:w-[325px] top-[50px] lg:top-[100px] right-[-50px] md:right-[20px] lg:left-[250px] transition-all ${
					active === 2 ? "z-10" : "z-0"
				}`}
			>
				<div className="relative w-[180px] md:w-[225px] lg:w-[325px] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] rotate-6 overflow-hidden hover:shadow-[0_8px_40px_rgba(80,108,240,0.1)]">
					<div
						className="flex justify-start gap-2 lg:gap-6 px-3 md:px-3 lg:px-6 py-6 md:py-6 lg:py-12"
						style={{
							background:
								"linear-gradient(135deg, #506CF0 0%, #7C5CFC 100%)",
						}}
					>
						<Image
							src={secondTestimonial.user.image}
							width={100}
							height={100}
							alt="avatar"
							className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] rounded-full object-cover bg-[#e6e4ff]"
						/>

						<div>
							<h3 className="text-[16px] lg:text-[18px] font-bold text-white">
								{secondTestimonial.user.name}
							</h3>
							<p className="font-inter text-[12px] lg:text-[16px] font-normal text-white/80">
								{secondTestimonial.user.job}
							</p>
						</div>
					</div>

					<div className="px-3 md:px-6 bg-white pt-2 md:pt-4 lg:pt-8 py-8 lg:py-16">
						<h3 className="text-[14px] lg:text-[22px] font-sans font-bold text-[#111] text-center">
							{secondTestimonial.heading}
						</h3>
						<p className="text-[12px] lg:text-[16px] text-center text-[#6B7280] font-inter mt-4">
							{secondTestimonial.comment}
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default TestimonialsItem;
