"use client";

import Footer from "@/components/landing-page/components/footer/Footer";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
	{
		number: "01",
		title: "Discover a Roadmap",
		description:
			"Browse our library of expert-crafted roadmaps across dozens of topics — from web development and data science to design and career growth.",
		gradient: "from-[#506CF0] to-[#6C8BF7]",
	},
	{
		number: "02",
		title: "Subscribe & Start Learning",
		description:
			"Subscribe to any roadmap for free or at a creator-set price. Each step comes with clear descriptions, resources, and estimated timelines so you always know what's next.",
		gradient: "from-[#6C3AED] to-[#9061F9]",
	},
	{
		number: "03",
		title: "Track Your Progress",
		description:
			"Mark steps as complete, track your streak, and see how far you've come. Your dashboard keeps everything in one place so you never lose momentum.",
		gradient: "from-[#7C5CFC] to-[#A78BFA]",
	},
	{
		number: "04",
		title: "Engage & Grow",
		description:
			"Ask questions on any step, share insights with the community, and get help when you're stuck. Learning is better together.",
		gradient: "from-[#506CF0] to-[#7C5CFC]",
	},
];

const HowItWorksPage = () => {
	const heroRef = useRef(null);
	const stepsRef = useRef(null);
	const ctaRef = useRef(null);
	const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
	const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" });
	const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

	return (
		<main className="relative max-w-[1440px] mx-auto overflow-x-hidden bg-[#FAFBFC]">
			{/* Hero */}
			<section
				ref={heroRef}
				className="relative pt-[8rem] pb-[5rem] px-6 lg:px-[4.5rem] overflow-hidden"
				style={{
					background:
						"linear-gradient(135deg, #506CF0 0%, #6C3AED 50%, #7C5CFC 100%)",
				}}
			>
				<div
					className="absolute inset-0 opacity-[0.06]"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
						backgroundSize: "32px 32px",
					}}
				/>

				<div
					className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full"
					style={{
						background:
							"radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
					}}
				/>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={heroInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="relative z-10 max-w-[720px] mx-auto text-center"
				>
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.08] mb-6">
						<span className="w-2 h-2 rounded-full bg-white animate-pulse" />
						<span className="text-[13px] font-inter text-white/90 font-medium">
							Simple. Structured. Effective.
						</span>
					</div>

					<h1 className="text-[28px] md:text-[52px] font-extrabold text-white leading-tight">
						How It Works
					</h1>
					<p className="text-[14px] md:text-[18px] font-inter font-normal text-white/70 leading-[28px] max-w-[560px] mx-auto mt-5">
						Roadmap turns overwhelming learning into a clear, guided journey.
						Here&apos;s how you go from curious to confident in four simple
						steps.
					</p>
				</motion.div>
			</section>

			{/* Steps */}
			<section
				ref={stepsRef}
				className="relative px-6 lg:px-[4.5rem] py-[5rem]"
			>
				<div
					className="absolute inset-0 opacity-[0.3]"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, #E0E0E0 0.5px, transparent 0)",
						backgroundSize: "28px 28px",
					}}
				/>

				<div className="relative z-10 max-w-[880px] mx-auto">
					{steps.map((step, index) => (
						<motion.div
							key={step.number}
							initial={{ opacity: 0, y: 30 }}
							animate={stepsInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.6,
								delay: 0.15 * index,
								ease: "easeOut",
							}}
							className="relative flex gap-6 md:gap-10 mb-12 last:mb-0"
						>
							<div className="flex flex-col items-center">
								<div
									className={`w-[52px] h-[52px] md:w-[64px] md:h-[64px] rounded-2xl bg-gradient-to-br ${step.gradient} flex-jc-c shadow-[0_4px_20px_rgba(80,108,240,0.2)]`}
								>
									<span className="text-white font-bold text-[18px] md:text-[22px] font-inter">
										{step.number}
									</span>
								</div>
								{index < steps.length - 1 && (
									<div className="w-[2px] flex-1 mt-3 bg-gradient-to-b from-[#506CF0]/30 to-transparent" />
								)}
							</div>

							<div className="flex-1 pt-2 pb-4">
								<h3 className="text-[20px] md:text-[26px] font-bold text-[#111]">
									{step.title}
								</h3>
								<p className="text-[14px] md:text-[16px] font-inter font-normal text-[#6B7280] leading-[26px] mt-2 max-w-[520px]">
									{step.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Features highlight */}
			<section className="relative px-6 lg:px-[4.5rem] py-[5rem] overflow-hidden">
				<div
					className="absolute inset-0 opacity-[0.06]"
					style={{
						background:
							"linear-gradient(135deg, #506CF0 0%, #6C3AED 50%, #7C5CFC 100%)",
					}}
				/>
				<div
					className="absolute inset-0 opacity-[0.3]"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, #E0E0E0 0.5px, transparent 0)",
						backgroundSize: "28px 28px",
					}}
				/>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={stepsInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
					className="relative z-10 max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
				>
					{[
						{
							title: "Expert-Crafted",
							description:
								"Every roadmap is built by industry professionals who have walked the path before you.",
						},
						{
							title: "Community-Driven",
							description:
								"Ask questions, share insights, and learn alongside peers on every single step.",
						},
						{
							title: "Completely Flexible",
							description:
								"Go at your own pace. Pause, resume, and revisit steps whenever you need to.",
						},
					].map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={stepsInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.5,
								delay: 0.5 + 0.1 * index,
								ease: "easeOut",
							}}
							className="p-6 md:p-8 rounded-2xl bg-white border border-black/[0.05] shadow-[0_1px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(80,108,240,0.08)] hover:border-[#506CF0]/15 transition-all duration-300"
						>
							<h4 className="text-[18px] md:text-[20px] font-bold text-[#111]">
								{feature.title}
							</h4>
							<p className="text-[14px] font-inter text-[#6B7280] leading-[24px] mt-2">
								{feature.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</section>

			{/* CTA */}
			<section
				ref={ctaRef}
				className="relative px-6 lg:px-[4.5rem] py-[5rem] overflow-hidden"
				style={{
					background:
						"linear-gradient(135deg, #506CF0 0%, #6C3AED 50%, #7C5CFC 100%)",
				}}
			>
				<div
					className="absolute inset-0 opacity-[0.06]"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
						backgroundSize: "32px 32px",
					}}
				/>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={ctaInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="relative z-10 text-center max-w-[600px] mx-auto"
				>
					<h2 className="text-[24px] md:text-[44px] font-bold text-white leading-tight">
						Ready to Start?
					</h2>
					<p className="text-[14px] md:text-[16px] font-inter font-normal text-white/70 leading-[24px] mx-auto mt-4">
						Join thousands of learners who are already following expert roadmaps
						to reach their goals faster.
					</p>

					<div className="flex items-center justify-center gap-4 mt-8">
						<Link
							href="/roadmaps"
							className="w-[180px] md:w-[200px] h-[44px] md:h-[52px] flex-jc-c text-[14px] md:text-[15px] text-[#506CF0] font-inter font-semibold bg-white rounded-full hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)] transition-all duration-300"
						>
							Browse Roadmaps
						</Link>
						<Link
							href="/auth/register"
							className="w-[180px] md:w-[200px] h-[44px] md:h-[52px] flex-jc-c text-[14px] md:text-[15px] text-white font-inter font-semibold border border-white/20 hover:border-white/40 hover:bg-white/[0.08] rounded-full transition-all duration-300"
						>
							Get Started Free
						</Link>
					</div>
				</motion.div>
			</section>

			<Footer />
		</main>
	);
};

export default HowItWorksPage;
