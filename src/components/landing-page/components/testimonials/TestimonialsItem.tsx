import Image from "next/image";
import React, { useState } from "react";
import { TestimonialItem } from "@/components/landing-page/types/testimonials.types";

const TestimonialsItem = ({
	testimonial,
}: {
	testimonial: TestimonialItem;
}) => {
	const [active, setActive] = useState(1);
	const firstTestimonial = testimonial[0];
	const secondTestimonial = testimonial[1];

	return (
		<>
			<div className="w-[290px] md:w-[450px] lg:w-[580px] relative mx-auto lg:mx-0">
				<div
					onClick={() => setActive(1)}
					className={`relative w-[180px] md:w-[225px] lg:w-[325px] rounded-[22px] border border-[#E7E8F1] shadow-xl -rotate-6 overflow-hidden bg-white transition-all ${
						active === 1 ? "z-10" : "z-0"
					}`}
				>
					<div className="flex-jc-c gap-2 md:gap-6 px-3 md:px-3 lg:px-6 py-6 md:py-6 lg:py-12">
						<Image
							src={firstTestimonial.user.image}
							width={100}
							height={100}
							alt="avatar"
							className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full object-cover bg-[#e6e4ff]"
						/>

						<div>
							<h3 className="text-[16px] lg:text-[18px] font-bold text-black">
								{firstTestimonial.user.name}
							</h3>
							<p className="font-inter text-[12px] lg:text-[16px] font-normal text-block">
								{firstTestimonial.user.job}
							</p>
						</div>
					</div>

					<div className="px-3 md:px-6 bg-white pt-2 md:pt-4 lg:pt-8 py-8 lg:py-16">
						<h3 className="text-[14px] lg:text-[22px] font-sans font-bold text-[#170F49] text-center">
							{firstTestimonial.heading}
						</h3>
						<p className="text-[12px] lg:text-[16px] text-center text-[#6F6C90] font-inter mt-4">
							{firstTestimonial.comment}
						</p>
					</div>

					<div className="absolute w-[170px] h-[450px] bg-primary-ultramarineBlue top-[-300px] lg:top-[-350px] right-[-80px] md:right-[-70px] lg:right-0 -rotate-45" />
				</div>

				<div
					onClick={() => setActive(2)}
					className={`absolute w-[225px] lg:w-[325px] top-[50px] lg:top-[100px] right-[-50px] md:right-[20px] lg:left-[250px] transition-all ${
						active === 2 ? "z-10" : "z-0"
					}`}
				>
					<div className="relative w-[180px] md:w-[225px] lg:w-[325px] rounded-[22px] shadow-xl rotate-6 overflow-hidden">
						<div className="flex-jc-c gap-2 md:gap-6 px-3 md:px-3 lg:px-6 py-6 md:py-6 lg:py-12 bg-primary-ultramarineBlue">
							<Image
								src={secondTestimonial.user.image}
								width={100}
								height={100}
								alt="avatar"
								className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full object-cover bg-[#e6e4ff]"
							/>

							<div>
								<h3 className="text-[16px] lg:text-[18px] font-bold text-white">
									{secondTestimonial.user.name}
								</h3>
								<p className="font-inter text-[12px] lg:text-[16px] font-normal text-white">
									{secondTestimonial.user.job}
								</p>
							</div>
						</div>

						<div className="px-3 md:px-6 bg-white pt-2 md:pt-4 lg:pt-8 py-8 lg:py-16">
							<h3 className="text-[14px] lg:text-[22px] font-sans font-bold text-[#170F49] text-center">
								{secondTestimonial.heading}
							</h3>
							<p className="text-[12px] lg:text-[16px] text-center text-[#6F6C90] font-inter mt-4">
								{secondTestimonial.comment}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialsItem;
