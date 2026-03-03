"use client";

import React, { useRef } from "react";
import newEraHere from "@public/NEW ERA HERE.svg";
import newEraHere_1 from "@public/new-era-here-1.svg";
import newEraHere_2 from "@public/new-era-here-2.svg";
import newEraHere_3 from "@public/new-era-here-3.svg";
import Image from "@/components/common/image/CustomImage";
import NewAraFeature from "@/components/landing-page/components/new-era-here/NewAraFeature";
import { motion, useInView } from "framer-motion";

const NewEraHere = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const features = [
		{
			image: newEraHere_1,
			title: "Structured & intuitive",
			description:
				"Follow streamlined roadmaps that break complex topics into clear, manageable steps. No more guesswork \u2014 just confident, steady progress toward your goals.",
		},
		{
			image: newEraHere_2,
			title: "Expert mentorship",
			description:
				"Learn from creators who have walked the path before you. Get personalized guidance, overcome challenges faster, and hit milestones at your own pace.",
		},
		{
			image: newEraHere_3,
			title: "Community-powered",
			description:
				"Join a vibrant community of learners. Ask questions on any step, share insights, and collaborate with peers who are on the same journey as you.",
		},
	];

	return (
		<section ref={ref} className="relative py-[6rem] bg-white">
			<div
				className="absolute inset-0 opacity-[0.2]"
				style={{
					backgroundImage:
						"radial-gradient(circle at 1px 1px, #E8E8E8 0.5px, transparent 0)",
					backgroundSize: "24px 24px",
				}}
			/>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="relative z-10 bg-transparent"
			>
				<Image
					src={newEraHere}
					width={400}
					height={400}
					alt="A new era of learning"
					className="w-full"
				/>
			</motion.div>

			<div className="relative z-10 flex justify-center xl:justify-between flex-wrap gap-8 px-6 lg:px-[4.5rem] mt-[4rem] lg:mt-[6rem] items-start">
				{features.map((feature, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{
							duration: 0.6,
							delay: 0.2 + index * 0.15,
							ease: "easeOut",
						}}
					>
						<NewAraFeature
							image={feature.image}
							title={feature.title}
							description={feature.description}
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default NewEraHere;
