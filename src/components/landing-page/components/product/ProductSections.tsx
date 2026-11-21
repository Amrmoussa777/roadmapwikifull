"use client";

import SurfaceCard from "@/components/landing-page/components/surface/SurfaceCard";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const steps = [
	{
		number: "01",
		title: "Browse published roadmaps",
		description:
			"Open the library and read a roadmap before you subscribe. The price is on the roadmap.",
	},
	{
		number: "02",
		title: "Subscribe",
		description:
			"Create an account and subscribe to the path you want to follow.",
	},
	{
		number: "03",
		title: "Work the steps",
		description:
			"Each step has a title, a description, a duration, and any files or verification link the creator attached.",
	},
	{
		number: "04",
		title: "Use the discussion",
		description:
			"Post on the roadmap and reply when a step needs a question or a note.",
	},
];

const ProductSections = () => {
	const stepsRef = useRef(null);
	const pathsRef = useRef(null);
	const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });
	const pathsInView = useInView(pathsRef, { once: true, margin: "-80px" });

	return (
		<>
			<section ref={stepsRef} className="px-6 py-16 lg:px-[4.5rem] lg:py-24">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={stepsInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="mx-auto max-w-[720px] text-center"
				>
					<h2 className="text-[32px] font-bold leading-tight text-[#171618] md:text-[44px]">
						How a learner uses it
					</h2>
					<p className="mx-auto mt-4 max-w-[560px] font-inter text-[16px] leading-[26px] text-[#6B7280]">
						Four actions that already exist in the product. Nothing here is a
						preview of a feature that is still missing.
					</p>
				</motion.div>

				<ol className="mx-auto mt-12 grid max-w-[1080px] gap-4 md:grid-cols-2">
					{steps.map((step, index) => (
						<motion.li
							key={step.number}
							initial={{ opacity: 0, y: 20 }}
							animate={stepsInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.08 * index }}
						>
							<SurfaceCard className="h-full p-6 md:p-8">
								<span className="font-inter text-[13px] font-semibold tracking-[0.12em] text-[#4A62E0]">
									{step.number}
								</span>
								<h3 className="mt-3 text-[22px] font-bold text-[#171618]">
									{step.title}
								</h3>
								<p className="mt-2 font-inter text-[15px] leading-[24px] text-[#6B7280]">
									{step.description}
								</p>
							</SurfaceCard>
						</motion.li>
					))}
				</ol>
			</section>

			<section ref={pathsRef} className="px-6 pb-8 lg:px-[4.5rem]">
				<div className="mx-auto grid max-w-[1080px] gap-4 lg:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={pathsInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.55 }}
					>
						<SurfaceCard className="h-full p-7 md:p-9">
							<p className="font-inter text-[12px] font-semibold uppercase tracking-[0.14em] text-[#4A62E0]">
								Learn
							</p>
							<h2 className="mt-3 text-[28px] font-bold text-[#171618]">
								Follow a published path
							</h2>
							<ul className="mt-5 space-y-3 font-inter text-[15px] leading-[24px] text-[#4B5563]">
								<li>Browse the public library.</li>
								<li>Open a roadmap and subscribe.</li>
								<li>Read the steps, durations, and attachments.</li>
								<li>Post in the discussion when you need to.</li>
							</ul>
							<Link
								href="/roadmaps"
								className="mt-8 inline-flex h-[48px] items-center rounded-full bg-gradient-to-r from-[#4A62E0] to-[#6D4AEF] px-6 font-inter text-[15px] font-semibold text-white"
							>
								Open the library
							</Link>
						</SurfaceCard>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={pathsInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.55, delay: 0.1 }}
					>
						<SurfaceCard className="h-full p-7 md:p-9">
							<p className="font-inter text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6D4AEF]">
								Create
							</p>
							<h2 className="mt-3 text-[28px] font-bold text-[#171618]">
								Publish your own path
							</h2>
							<ul className="mt-5 space-y-3 font-inter text-[15px] leading-[24px] text-[#4B5563]">
								<li>Sign in, then open the builder.</li>
								<li>Add steps, descriptions, durations, and tags.</li>
								<li>Attach files and a verification link where a step needs one.</li>
								<li>Set a price, or leave the amount at zero.</li>
							</ul>
							<Link
								href="/auth/register"
								className="mt-8 inline-flex h-[48px] items-center rounded-full border border-[#E6E9F2] bg-white px-6 font-inter text-[15px] font-semibold text-[#171618]"
							>
								Create an account
							</Link>
						</SurfaceCard>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default ProductSections;
