"use client";

import SuperRoadmapsSlider from "@/components/landing-page/components/super-roadmaps/SuperRoadmapsSlider";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const SuperRoadmaps = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section ref={ref} className="relative px-6 py-8 lg:px-[4.5rem] lg:py-12">
			<div className="relative overflow-hidden rounded-[36px] border border-white/25 px-4 py-14 shadow-[0_24px_70px_rgba(80,108,240,0.22)] md:px-8 md:py-16">
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(135deg, rgba(80,108,240,0.95) 0%, rgba(108,58,237,0.92) 52%, rgba(124,92,252,0.94) 100%)",
					}}
				/>
				<div
					className="absolute inset-0 opacity-30"
					style={{
						backgroundImage:
							"linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
						backgroundSize: "48px 48px",
						maskImage:
							"radial-gradient(ellipse at center, black 30%, transparent 78%)",
					}}
				/>
				<div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
				<div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-[#C4B5FD]/40 blur-3xl" />
				<div className="absolute right-16 top-16 h-20 w-20 rotate-12 rounded-3xl border border-white/30 bg-white/10 backdrop-blur-md" />

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="relative z-10 mx-auto max-w-[720px] text-center"
				>
					<h2 className="text-[32px] font-bold leading-tight text-white md:text-[44px]">
						Explore Top-Rated Roadmaps
					</h2>
					<p className="mx-auto mt-4 max-w-[620px] font-inter text-[15px] font-normal leading-[26px] text-white/75 md:text-[16px]">
						Browse through curated learning paths built by experts. Each
						roadmap breaks down complex topics into clear, actionable steps
						you can follow at your own pace.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 32 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
					className="relative z-10 mx-auto mt-10 max-w-[1100px]"
				>
					<SuperRoadmapsSlider />
				</motion.div>
			</div>
		</section>
	);
};

export default SuperRoadmaps;
