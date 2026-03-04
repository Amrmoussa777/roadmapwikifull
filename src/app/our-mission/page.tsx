"use client";

import Footer from "@/components/landing-page/components/footer/Footer";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
	{
		title: "Clarity Over Chaos",
		description:
			"We believe learning shouldn't feel overwhelming. Every roadmap is designed to replace confusion with clear, actionable steps.",
		icon: (
			<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="12" r="10" />
				<path d="M12 16v-4" />
				<path d="M12 8h.01" />
			</svg>
		),
	},
	{
		title: "Expertise Matters",
		description:
			"We empower real professionals to share their proven pathways, so learners benefit from experience — not guesswork.",
		icon: (
			<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
				<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
			</svg>
		),
	},
	{
		title: "Community First",
		description:
			"Learning is better together. We build tools that foster discussion, mentorship, and collaboration at every step.",
		icon: (
			<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
				<path d="M16 3.13a4 4 0 0 1 0 7.75" />
			</svg>
		),
	},
	{
		title: "Accessible to All",
		description:
			"We offer free and premium content so every learner — regardless of background — can access high-quality guidance.",
		icon: (
			<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
			</svg>
		),
	},
];

const OurMissionPage = () => {
	const heroRef = useRef(null);
	const missionRef = useRef(null);
	const valuesRef = useRef(null);
	const visionRef = useRef(null);
	const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
	const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
	const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
	const visionInView = useInView(visionRef, { once: true, margin: "-100px" });

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
					className="absolute bottom-[-15%] left-[-8%] w-[450px] h-[450px] rounded-full"
					style={{
						background:
							"radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
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
							Why we exist
						</span>
					</div>

					<h1 className="text-[28px] md:text-[52px] font-extrabold text-white leading-tight">
						Our Mission
					</h1>
					<p className="text-[14px] md:text-[18px] font-inter font-normal text-white/70 leading-[28px] max-w-[560px] mx-auto mt-5">
						We&apos;re on a mission to make expert knowledge accessible to
						everyone through structured, community-powered learning paths.
					</p>
				</motion.div>
			</section>

			{/* Mission statement */}
			<section
				ref={missionRef}
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

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={missionInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="relative z-10 max-w-[800px] mx-auto text-center"
				>
					<h2 className="text-[24px] md:text-[44px] font-bold text-[#111] leading-tight">
						Learning Should Have a{" "}
						<span className="bg-gradient-to-r from-[#506CF0] to-[#7C5CFC] bg-clip-text text-transparent">
							Clear Path
						</span>
					</h2>
					<p className="text-[14px] md:text-[17px] font-inter font-normal text-[#6B7280] leading-[28px] mt-6">
						Too many learners get lost in an ocean of tutorials, courses, and
						blog posts — with no clear direction. We started Roadmap because we
						believe every learner deserves a structured, expert-guided path to
						their goals. Whether you&apos;re switching careers, picking up a new
						skill, or leveling up in your field, Roadmap gives you the clarity
						and confidence to make real progress.
					</p>
				</motion.div>
			</section>

			{/* Values */}
			<section
				ref={valuesRef}
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
					animate={valuesInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="relative z-10 text-center mb-12"
				>
					<h2 className="text-[24px] md:text-[44px] font-bold text-white leading-tight">
						What We Stand For
					</h2>
					<p className="text-[14px] md:text-[16px] font-inter font-normal text-white/70 leading-[24px] max-w-[520px] mx-auto mt-4">
						These core values guide every decision we make and every feature we
						build.
					</p>
				</motion.div>

				<div className="relative z-10 max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
					{values.map((value, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={valuesInView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.5,
								delay: 0.15 * index,
								ease: "easeOut",
							}}
							className="p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/[0.18] hover:border-white/25 transition-all duration-300"
						>
							<div className="w-[48px] h-[48px] rounded-xl bg-white/15 flex-jc-c text-white mb-4">
								{value.icon}
							</div>
							<h4 className="text-[18px] md:text-[20px] font-bold text-white">
								{value.title}
							</h4>
							<p className="text-[14px] font-inter text-white/70 leading-[24px] mt-2">
								{value.description}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* Vision */}
			<section ref={visionRef} className="relative px-6 lg:px-[4.5rem] py-[5rem]">
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
					animate={visionInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="relative z-10 max-w-[800px] mx-auto text-center"
				>
					<h2 className="text-[24px] md:text-[44px] font-bold text-[#111] leading-tight">
						Our Vision
					</h2>
					<p className="text-[14px] md:text-[17px] font-inter font-normal text-[#6B7280] leading-[28px] mt-6">
						We envision a world where anyone, anywhere can access the same
						quality of mentorship and guidance that was once reserved for the
						few. Through Roadmap, we&apos;re building a global network of
						creators and learners — making structured, expert-level education
						the standard, not the exception.
					</p>

					<div className="flex items-center justify-center gap-4 mt-10">
						<Link
							href="/roadmaps"
							className="w-[180px] md:w-[200px] h-[44px] md:h-[52px] flex-jc-c text-[14px] md:text-[15px] text-white font-inter font-semibold bg-gradient-to-r from-[#506CF0] to-[#7C5CFC] hover:shadow-[0_4px_24px_rgba(80,108,240,0.35)] rounded-full transition-all duration-300"
						>
							Explore Roadmaps
						</Link>
						<Link
							href="/auth/register"
							className="w-[180px] md:w-[200px] h-[44px] md:h-[52px] flex-jc-c text-[14px] md:text-[15px] text-[#3D3D3D] font-inter font-semibold border border-[#E0E0E0] hover:border-[#506CF0]/30 bg-white hover:bg-[#506CF0]/[0.03] rounded-full transition-all duration-300"
						>
							Join Us
						</Link>
					</div>
				</motion.div>
			</section>

			<Footer />
		</main>
	);
};

export default OurMissionPage;
