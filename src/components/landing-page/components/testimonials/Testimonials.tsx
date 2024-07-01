"use client";

import Image from "next/image";
import React, { useState } from "react";
import avatar from "@public/landing-page-avatar.png";
import { ARROW_ICON } from "@public/icons/roadmapSteps";

const Testimonials = () => {
	const [active, setActive] = useState(1);

	return (
		<section className="relative px-6 lg:px-[4.5rem] py-[4rem] lg:py-[8rem] mb-[8rem] flex flex-col lg:flex-row justify-center lg:justify-between gap-12">
			<div className="w-full lg:w-4/12 heading-section [&>*]:!text-[#171618] mt-12">
				<h2 className="lg:!text-start">Our happy clients say about us</h2>
				<p className="lg:!text-start">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has beenthe industry's standard dummy text ever
					since the 1500s
				</p>
			</div>

			<div className="w-[290px] md:w-[450px] lg:w-[580px] relative mx-auto lg:mx-0">
				<div
					onClick={() => setActive(1)}
					className={`relative w-[180px] md:w-[225px] lg:w-[325px] rounded-[22px] border border-[#E7E8F1] shadow-xl -rotate-6 overflow-hidden bg-white transition-all ${
						active === 1 ? "z-10" : "z-0"
					}`}
				>
					<div className="flex-jc-c gap-2 md:gap-6 px-3 md:px-3 lg:px-6 py-6 md:py-6 lg:py-12">
						<Image
							src={avatar}
							width={100}
							height={100}
							alt="avatar"
							className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full object-cover bg-[#e6e4ff]"
						/>

						<div>
							<h3 className="text-[16px] lg:text-[18px] font-bold text-black">
								Mike Warren
							</h3>
							<p className="font-inter text-[12px] lg:text-[16px] font-normal text-block">
								Marketing director
							</p>
						</div>
					</div>

					<div className="px-3 md:px-6 bg-white pt-2 md:pt-4 lg:pt-8 py-8 lg:py-16">
						<h3 className="text-[14px] lg:text-[22px] font-sans font-bold text-[#170F49] text-center">
							“Example dummy text”
						</h3>
						<p className="text-[12px] lg:text-[16px] text-center text-[#6F6C90] font-inter mt-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s
						</p>
					</div>

					<div className="absolute w-[170px] h-[450px] bg-primary-ultramarineBlue top-[-300px] lg:top-[-300px] right-[-80px] md:right-[-70px] lg:right-0 -rotate-45" />
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
								src={avatar}
								width={100}
								height={100}
								alt="avatar"
								className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full object-cover bg-[#e6e4ff]"
							/>

							<div>
								<h3 className="text-[16px] lg:text-[18px] font-bold text-white">
									Mike Warren
								</h3>
								<p className="font-inter text-[12px] lg:text-[16px] font-normal text-white">
									Marketing director
								</p>
							</div>
						</div>

						<div className="px-3 md:px-6 bg-white pt-2 md:pt-4 lg:pt-8 py-8 lg:py-16">
							<h3 className="text-[14px] lg:text-[22px] font-sans font-bold text-[#170F49] text-center">
								“Example dummy text”
							</h3>
							<p className="text-[12px] lg:text-[16px] text-center text-[#6F6C90] font-inter mt-4">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-[-60px] left-2/4 -translate-x-2/4 lg:translate-x-auto lg:left-[7rem] lg:bottom-[100px] flex-jc-c gap-2 [&>button]:w-[40px] [&>button]:h-[40px] [&>button]:flex-jc-c [&>button]:bg-primary-ultramarineBlue text-white [&>button]:rounded-full">
				<button className="-rotate-90" disabled>
					{ARROW_ICON}
				</button>
				<button className="rotate-90">{ARROW_ICON}</button>
			</div>
		</section>
	);
};

export default Testimonials;
