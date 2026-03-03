"use client";

import MostViralRoadmapItem from "@/components/landing-page/components/most-viral-roadmaps/MostViralRoadmapItem";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const roadmapData = [
	{ title: "DevOps Roadmap", author: "Marcus Reed", duration: "3 Weeks", steps: 20, subscribers: 1247 },
	{ title: "React Mastery", author: "Sarah Chen", duration: "6 Weeks", steps: 32, subscribers: 2891 },
	{ title: "Data Science Path", author: "Aisha Patel", duration: "8 Weeks", steps: 28, subscribers: 956 },
	{ title: "Cloud Architecture", author: "Jordan Blake", duration: "4 Weeks", steps: 18, subscribers: 1532 },
	{ title: "UI/UX Fundamentals", author: "Emma Liu", duration: "5 Weeks", steps: 24, subscribers: 783 },
	{ title: "Python for AI", author: "David Okoro", duration: "7 Weeks", steps: 35, subscribers: 2104 },
];

const MostViralRoadmaps = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section ref={ref} className="relative bg-[#FAFBFC] px-6 lg:px-[4.5rem] py-[5rem]">
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
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="relative z-10"
			>
				<h2 className="text-[24px] md:text-[44px] font-bold text-center leading-tight text-[#111]">
					Most Viral Roadmaps
				</h2>
				<p className="text-[13px] md:text-[16px] font-inter font-normal text-center leading-[24px] text-[#6B7280] max-w-[620px] mx-auto mt-4">
					<span className="font-semibold text-[#111]">Don&apos;t miss out: </span>
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
							title={item.title}
							author={item.author}
							duration={item.duration}
							steps={item.steps}
							subscribers={item.subscribers}
						/>
					</motion.div>
				))}
			</ul>

			<motion.button
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.5, delay: 0.8 }}
				className="relative z-10 flex-jc-c mx-auto mt-10 text-[#506CF0] font-inter font-medium text-[16px] group hover:text-[#3B50D9] transition-colors duration-200"
			>
				View More{" "}
				<span className="[&>svg]:rotate-90 group-hover:translate-x-1 transform transition duration-200">
					{ARROW_ICON}
				</span>
			</motion.button>
		</section>
	);
};

export default MostViralRoadmaps;
