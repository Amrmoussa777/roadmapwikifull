"use client";

import HeroRoadmap from "@/components/landing-page/components/hero/HeroRoadmap";
import { heroRoadmaps } from "@/components/landing-page/data/heroRoadmaps";
import { useHeroRotation } from "@/components/landing-page/hooks/useHeroRotation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Hero = () => {
	const { activeIndex, pause, resume } = useHeroRotation(heroRoadmaps.length);
	const activeRoadmap = heroRoadmaps[activeIndex];

	return (
		<section className="relative overflow-hidden px-6 pb-8 pt-[8rem] lg:px-[4.5rem] lg:pb-20">
			<div className="pointer-events-none absolute inset-0" aria-hidden>
				<div
					className="absolute inset-0 opacity-80"
					style={{
						backgroundImage:
							"linear-gradient(to right, rgba(80,108,240,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(80,108,240,0.14) 1px, transparent 1px)",
						backgroundSize: "56px 56px",
						maskImage:
							"radial-gradient(ellipse at 60% 40%, black 20%, transparent 72%)",
					}}
				/>
				<div className="absolute -right-16 top-16 h-72 w-72 rounded-[48px] border border-white/50 bg-[#506CF0]/15 blur-[1px]" />
				<div className="absolute bottom-10 left-[8%] h-40 w-40 rotate-12 rounded-[36px] border border-[#7C5CFC]/20 bg-[#7C5CFC]/10" />
				<div className="absolute right-[18%] top-28 h-24 w-24 rounded-full border border-white/70 bg-white/30 backdrop-blur-md" />
				<div className="absolute -left-10 top-32 h-[340px] w-[340px] rounded-full bg-[#7C5CFC]/20 blur-3xl" />
				<div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-[#506CF0]/25 blur-3xl" />
			</div>

			<div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-4 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl">
						<span className="h-2 w-2 rounded-full bg-[#506CF0]" />
						<span className="font-inter text-[13px] font-medium text-[#506CF0]">
							Structured learning paths
						</span>
					</div>

					<h1 className="mt-6 max-w-[640px] text-[36px] font-extrabold leading-[1.08] text-[#171618] sm:text-[56px]">
						Your clear roadmap to
						<span className="relative block h-[1.25em] overflow-hidden text-[0.8em] xl:text-[0.9em]">
							<AnimatePresence initial={false}>
								<motion.span
									key={activeRoadmap.id}
									initial={{ y: "100%", opacity: 0 }}
									animate={{ y: "0%", opacity: 1 }}
									exit={{ y: "-100%", opacity: 0 }}
									transition={{ duration: 0.45, ease: "easeInOut" }}
									style={{
										color: activeRoadmap.primaryColor,
										textShadow: `0 0 36px ${activeRoadmap.primaryColor}55`,
									}}
									className="absolute inset-x-0 top-0 block whitespace-nowrap font-outfit"
								>
									{activeRoadmap.title}
								</motion.span>
							</AnimatePresence>
						</span>
					</h1>

					<p className="mt-5 max-w-[540px] font-inter text-[16px] font-normal leading-[28px] text-[#4B5563] sm:text-[18px]">
						Roadmap is where a creator publishes an ordered path, and a
						learner subscribes to it. Each step can carry a duration, files,
						and a verification link. The roadmap itself has a discussion and
						a price.
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<Link
							href="/roadmaps"
							className="flex h-[52px] items-center justify-center rounded-full bg-gradient-to-r from-[#506CF0] to-[#7C5CFC] px-7 font-inter text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(80,108,240,0.28)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(80,108,240,0.4)]"
						>
							Browse roadmaps
						</Link>
						<Link
							href="/auth/register"
							className="flex h-[52px] items-center justify-center rounded-full border border-white/80 bg-white/60 px-7 font-inter text-[15px] font-semibold text-[#171618] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl transition-colors duration-300 hover:bg-white/80"
						>
							Create an account
						</Link>
					</div>
				</motion.div>

				<HeroRoadmap
					roadmap={activeRoadmap}
					onPause={pause}
					onResume={resume}
				/>
			</div>
		</section>
	);
};

export default Hero;
