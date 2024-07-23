"use client";

import React, { useRef } from "react";
import { PLAY_ICON } from "@public/icons/landingPage";
import Roadmap from "@/components/landing-page/components/hero/Roadmap";
import { roadmapList } from "@/components/landing-page/data/roadmapList";
import { useHero } from "@/components/landing-page/hooks/useHero";
import Link from "next/link";

const Hero = () => {
	const roadmapRef = useRef(null);
	const { activeRoadmapIndex } = useHero(roadmapRef);

	return (
		<section className="relative px-6 lg:px-[4.5rem] py-[2rem] flex-jc-c lg:gap-12 xl:gap-24 flex-col lg:flex-row z-10">
			<div className="w-full lg:w-6/12 grid text-center lg:text-start">
				<div className="relative">
					<h1 className="relative text-[24px] sm:text-[48px] font-extrabold text-[#171618]">
						Your ultimate 🚀
						<br /> Roadmap <br className="hidden lg:block" /> To{" "}
						<div
							style={{
								filter: `drop-shadow(0 0rem 2.2rem ${roadmapList[activeRoadmapIndex].primaryColor}99)`,
							}}
							className="relative lg:absolute lg:left-[63px] lg:bottom-[-50px] w-full lg:w-[90%] h-16 sm:h-28 sm:block transition-all delay-400 ease-in-out"
						>
							<div className="h-16 sm:h-28 inline-block overflow-hidden transition-opacity ease-in duration-700">
								<div
									className={`flex flex-col ${
										activeRoadmapIndex === 0
											? ""
											: "transform transition-transform duration-700 ease-in-out"
									}`}
									style={{
										transform: `translateY(-${activeRoadmapIndex * 25}%)`,
									}}
								>
									<div
										style={{ color: roadmapList[0].primaryColor }}
										className={`font-outfit font-extrabold h-16 sm:h-28 leading-[53px]`}
									>
										{roadmapList[0].title}
									</div>
									<div
										style={{ color: roadmapList[1].primaryColor }}
										className={`font-outfit font-extrabold h-16 sm:h-28 leading-[53px]`}
									>
										{roadmapList[1].title}
									</div>
									<div
										style={{ color: roadmapList[2].primaryColor }}
										className={`font-outfit font-extrabold h-16 sm:h-28 leading-[53px]`}
									>
										{roadmapList[2].title}
									</div>
									<div
										style={{ color: roadmapList[3].primaryColor }}
										className={`font-outfit font-extrabold h-16 sm:h-28 leading-[53px]`}
									>
										{roadmapList[3].title}
									</div>
								</div>
							</div>
						</div>
					</h1>
				</div>
				<p className="text-[#171618] font-inter font-normal text-[14px] sm:text-[18px] leading-[27px] lg:mt-[45px]">
					Explore a Collection of Expert-Crafted Roadmaps: Each Pathway Designed
					by Industry Leaders, Loved by a Vast Community of Learners, and
					carefully curated to meet your unique
					<span className="font-semibold"> Goals and Ambitions 💪</span>
				</p>

				<div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-2 xl:gap-6 mt-[40px] md:mt-[40px]">
					<Link
						href={"/auth/register"}
						className="w-[160px] md:w-[208px] h-[42px] md:h-[56px] flex-jc-c text-[14px] md:text-[16px] p-[16px] text-white font-inter font-semibold bg-primary-ultramarineBlue hover:bg-white hover:text-primary-ultramarineBlue border-2 border-transparent hover:border-primary-ultramarineBlue rounded-[10px] duration-200 transition"
					>
						Create Roadmap
					</Link>
					<Link
						href={`/roadmap/${roadmapList[activeRoadmapIndex].id}`}
						className="w-[160px] md:w-[208px] h-[42px] md:h-[56px] group flex-jc-c gap-2 text-[14px] md:text-[16px] text-[#191718] font-inter font-semibold bg-background border-2 border-[#ACB5B7] rounded-[10px]"
					>
						<span className="w-full h-full flex-jc-c gap-2 hover:translate-x-[2px] transform transition duration-200">
							{PLAY_ICON} Watch demo
						</span>
					</Link>
				</div>
			</div>

			<Roadmap
				roadmap={roadmapList[activeRoadmapIndex]}
				roadmapRef={roadmapRef}
			/>

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
