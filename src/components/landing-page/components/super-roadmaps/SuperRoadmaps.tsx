"use client";

import SuperRoadmapsSlider from "@/components/landing-page/components/super-roadmaps/SuperRoadmapsSlider";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SuperRoadmaps = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			ref={ref}
			className="relative py-[5rem] rounded-t-[3rem] overflow-hidden"
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
				className="relative z-10 px-4 md:px-8"
			>
				<h2 className="text-[24px] md:text-[44px] font-bold text-center leading-tight text-white">
					Explore Top-Rated Roadmaps
				</h2>
				<p className="text-[13px] md:text-[16px] font-inter font-normal text-center leading-[24px] text-white/70 max-w-[600px] mx-auto mt-4">
					Browse through curated learning paths built by experts. Each roadmap
					breaks down complex topics into clear, actionable steps you can follow
					at your own pace.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
				className="relative z-10"
			>
				<SuperRoadmapsSlider />
			</motion.div>
		</section>
	);
};

export default SuperRoadmaps;
