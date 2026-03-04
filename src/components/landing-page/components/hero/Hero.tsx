"use client";

import React from "react";
import { PLAY_ICON } from "@public/icons/landingPage";
import Roadmap from "@/components/landing-page/components/hero/Roadmap";
import { roadmapList } from "@/components/landing-page/data/roadmapList";
import { useHero } from "@/components/landing-page/hooks/useHero";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
	const { activeRoadmapIndex, roadmapRef } = useHero();

	return (
		<section className="relative px-6 lg:px-[4.5rem] pt-[7rem] pb-[3rem] flex-jc-c lg:gap-12 xl:gap-24 flex-col lg:flex-row z-10 overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<div
					className="absolute inset-0 opacity-[0.35]"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, #E0E0E0 0.5px, transparent 0)",
						backgroundSize: "28px 28px",
					}}
				/>
				<div
					className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full animate-pulse-glow"
					style={{
						background:
							"radial-gradient(circle, rgba(80,108,240,0.08) 0%, transparent 70%)",
					}}
				/>
				<div
					className="absolute bottom-[-5%] left-[-8%] w-[400px] h-[400px] rounded-full animate-pulse-glow"
					style={{
						background:
							"radial-gradient(circle, rgba(124,92,252,0.06) 0%, transparent 70%)",
						animationDelay: "2s",
					}}
				/>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="w-full lg:w-6/12 grid text-center lg:text-start"
			>
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#506CF0]/15 bg-[#506CF0]/[0.04] mb-6"
					>
						<span className="w-2 h-2 rounded-full bg-[#506CF0] animate-pulse" />
						<span className="text-[13px] font-inter text-[#506CF0] font-medium">
							Trusted by top learners worldwide
						</span>
					</motion.div>

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

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
					className="text-[#6B7280] font-inter font-normal text-[14px] sm:text-[18px] leading-[27px] lg:mt-[45px]"
				>
					Discover expert-crafted roadmaps designed by industry leaders. Each
					pathway guides you step-by-step, loved by thousands of learners, and
					tailored to help you reach your
					<span className="font-semibold text-[#111]">
						{" "}
						goals with clarity
					</span>
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
					className="flex items-center justify-center lg:justify-start gap-4 lg:gap-3 xl:gap-5 mt-[40px] md:mt-[40px]"
				>
					<Link
						href={"/builder"}
						className="w-full sm:w-[180px] md:w-[210px] h-[44px] md:h-[52px] flex-jc-c text-[14px] md:text-[15px] text-white font-inter font-semibold bg-gradient-to-r from-[#506CF0] to-[#7C5CFC] hover:shadow-[0_4px_24px_rgba(80,108,240,0.35)] rounded-full duration-300 transition-all"
					>
						Create Roadmap
					</Link>
					<Link
						href="/roadmap/a1a00000-0003-4000-8000-000000000001"
						className="w-full sm:w-[180px] md:w-[210px] h-[44px] md:h-[52px] group flex-jc-c gap-2 text-[14px] md:text-[15px] text-[#3D3D3D] font-inter font-semibold border border-[#E0E0E0] hover:border-[#506CF0]/30 bg-white hover:bg-[#506CF0]/[0.03] rounded-full transition-all duration-300"
					>
						<span className="w-full h-full flex-jc-c gap-2 hover:translate-x-[2px] transform transition duration-200">
							{PLAY_ICON} Watch demo
						</span>
					</Link>
				</motion.div>
			</motion.div>

			<Roadmap
				roadmap={roadmapList[activeRoadmapIndex]}
				roadmapRef={roadmapRef}
			/>
		</section>
	);
};

export default Hero;
