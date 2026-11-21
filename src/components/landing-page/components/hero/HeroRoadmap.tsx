"use client";

import { HeroRoadmap as HeroRoadmapType } from "@/components/landing-page/data/heroRoadmaps";
import RoadmapStepItem from "@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem";
import Image from "@/components/common/image/CustomImage";
import { PARK_ICON } from "@public/icons/roadmapPreview";
import chairImage from "@public/hero-chair.png";
import statusImage from "@public/hero-status.svg";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const HeroRoadmap = ({
	roadmap,
	onPause,
	onResume,
}: {
	roadmap: HeroRoadmapType;
	onPause: () => void;
	onResume: () => void;
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 28 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
			className="relative mx-auto w-full max-w-[420px] [perspective:1400px] lg:mx-0 lg:max-w-none"
			onPointerEnter={(event) => event.pointerType === "mouse" && onPause()}
			onPointerLeave={(event) => event.pointerType === "mouse" && onResume()}
		>
			<AnimatePresence mode="wait" initial={false}>
				<motion.div
					key={roadmap.id}
					initial={{ rotateY: -90, opacity: 0 }}
					animate={{ rotateY: 0, opacity: 1 }}
					exit={{ rotateY: 90, opacity: 0 }}
					transition={{ duration: 0.45, ease: "easeInOut" }}
					style={{ transformStyle: "preserve-3d" }}
					className="dotted-bg hidden-scrollbar relative h-[620px] overflow-y-auto rounded-[28px] border border-white/80 bg-white/70 p-6 pb-28 shadow-[0_24px_60px_rgba(80,108,240,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl"
				>
					<div className="flex justify-center">
						<h3
							style={{ backgroundColor: roadmap.primaryColor }}
							className="flex h-10 items-center gap-2 rounded-full px-4 text-[14px] font-medium text-white sm:text-[16px]"
						>
							<span>{PARK_ICON}</span>
							{roadmap.title}
						</h3>
					</div>
					<div className="line-dashed mx-auto h-8" />
					{roadmap.steps.map((step, index) => (
						<RoadmapStepItem
							key={step.id}
							step={step}
							lastStep={index + 1 === roadmap.steps.length}
							isFirstStep={index === 0}
							showTags={false}
						/>
					))}
				</motion.div>
			</AnimatePresence>

			<Image
				src={chairImage}
				width={100}
				height={100}
				alt=""
				className="absolute -left-6 top-6 z-10 hidden w-[84px] sm:block"
			/>

			<div className="absolute bottom-4 left-1/2 z-10 w-[108%] -translate-x-1/2">
				<Image
					src={statusImage}
					width={520}
					height={120}
					quality={100}
					alt="In progress, not started, and completed"
					className="w-full"
				/>
			</div>
		</motion.div>
	);
};

export default HeroRoadmap;
