import React from "react";
import { HERO_PLAY_ICON } from "../../../../../public/icons/landingPage";
import Image from "next/image";
import HERO_ROADMAP from "../../../../../public/hero-roadmap.png";

const Hero = () => {
	return (
		<section className="relative px-6 lg:px-[4.5rem] py-[4.5rem] flex-jb-c flex-col lg:flex-row gap-4 z-10">
			<div className="max-w-[543px] grid gap-[40px] text-center lg:text-start">
				<h1 className="text-[24px] sm:text-[48px] font-extrabold text-[#171618]">
					Your ultimate 🚀
					<br /> Roadmap <br /> To{" "}
					<span
						style={{
							filter: "drop-shadow(0 0rem 2.2rem rgba(104, 130, 255, 1))",
						}}
						className="text-primary-ultramarineBlue"
					>
						Learn Programming
					</span>
				</h1>
				<p className="text-[#171618] font-inter font-normal text-[14px] sm:text-[18px] leading-[27px]">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s
				</p>

				<div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6">
					<button className="w-[148px] md:w-[208px] h-[42px] md:h-[56px] flex-jc-c text-[14px] md:text-[16px] p-[16px] text-white font-inter font-semibold bg-primary-ultramarineBlue rounded-[10px]">
						Create Roadmap
					</button>
					<button className="w-[148px] md:w-[208px] h-[42px] md:h-[56px] flex-jc-c gap-2 text-[14px] md:text-[16px] p-[16px] text-[#191718] font-inter font-semibold bg-background border-2 border-[#ACB5B7] rounded-[10px]">
						{HERO_PLAY_ICON} Watch demo
					</button>
				</div>
			</div>

			<div className="w-full mx-auto">
				<Image
					width={576}
					height={200}
					src={HERO_ROADMAP}
					alt=""
					className="mx-auto"
				/>
			</div>

			<div
				style={{
					background:
						"linear-gradient(90deg, #A990FF 0%, #57CFEF 50%, #7FEA96 100%)",
					opacity: "8%",
				}}
				className="absolute w-full h-[95%] bottom-0 left-0 -z-10 blur-2xl"
			/>
		</section>
	);
};

export default Hero;
