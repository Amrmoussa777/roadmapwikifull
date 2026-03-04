"use client";

import MostViralRoadmapItem from "@/components/landing-page/components/most-viral-roadmaps/MostViralRoadmapItem";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const roadmapData = [
	{ id: "a1a00000-0001-4000-8000-000000000001", title: "DevOps Roadmap", author: "Marcus Reed", duration: "3 Weeks", steps: 20, subscribers: 1247 },
	{ id: "a1a00000-0002-4000-8000-000000000001", title: "React Mastery", author: "Sarah Chen", duration: "6 Weeks", steps: 32, subscribers: 2891 },
	{ id: "a1a00000-0003-4000-8000-000000000001", title: "Data Science Path", author: "Aisha Patel", duration: "8 Weeks", steps: 28, subscribers: 956 },
	{ id: "a1a00000-0004-4000-8000-000000000001", title: "Cloud Architecture", author: "Jordan Blake", duration: "4 Weeks", steps: 18, subscribers: 1532 },
	{ id: "a1a00000-0005-4000-8000-000000000001", title: "UI/UX Fundamentals", author: "Emma Liu", duration: "5 Weeks", steps: 24, subscribers: 783 },
	{ id: "a1a00000-0006-4000-8000-000000000001", title: "Python for AI", author: "David Okoro", duration: "7 Weeks", steps: 35, subscribers: 2104 },
];

const MostViralRoadmaps = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			ref={ref}
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
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="relative z-10"
			>
			<h2 className="text-[24px] md:text-[44px] font-bold text-center leading-tight text-white">
				Most Viral Roadmaps
			</h2>
			<p className="text-[13px] md:text-[16px] font-inter font-normal text-center leading-[24px] text-white/70 max-w-[620px] mx-auto mt-4">
				<span className="font-semibold text-white">Don&apos;t miss out: </span>
				Explore our most popular roadmaps and subscribe to expert-curated
				pathways that thousands of learners are already following.
			</p>
			</motion.div>

			<ul className="relative z-10 max-w-[880px] mx-auto mt-14">
				{roadmapData.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{
							duration: 0.5,
							delay: 0.15 * index,
							ease: "easeOut",
						}}
					>
						<MostViralRoadmapItem
							id={item.id}
							title={item.title}
							author={item.author}
							duration={item.duration}
							steps={item.steps}
							subscribers={item.subscribers}
						/>
					</motion.div>
				))}
			</ul>

			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.5, delay: 0.8 }}
			>
				<Link
					href="/roadmaps"
					className="relative z-10 flex-jc-c mx-auto mt-10 text-white font-inter font-medium text-[16px] group hover:text-white/80 transition-colors duration-200"
				>
					View More{" "}
					<span className="[&>svg]:rotate-90 group-hover:translate-x-1 transform transition duration-200">
						{ARROW_ICON}
					</span>
				</Link>
			</motion.div>
		</section>
	);
};

export default MostViralRoadmaps;
