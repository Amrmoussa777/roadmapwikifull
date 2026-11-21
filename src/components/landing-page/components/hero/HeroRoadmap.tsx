"use client";

import { HeroRoadmap as HeroRoadmapType } from "@/components/landing-page/data/heroRoadmaps";
import { HERO_TRANSITION } from "@/components/landing-page/hooks/useHeroRotation";
import RoadmapStepItem from "@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem";
import Image from "@/components/common/image/CustomImage";
import { PARK_ICON } from "@public/icons/roadmapPreview";
import chairImage from "@public/hero-chair.png";
import statusImage from "@public/hero-status.svg";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const HeroRoadmap = ({
	roadmaps,
	activeIndex,
	onHoverChange,
	onFocusChange,
}: {
	roadmaps: HeroRoadmapType[];
	activeIndex: number;
	onHoverChange: (isHovered: boolean) => void;
	onFocusChange: (isFocused: boolean) => void;
}) => {
	const faceRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		faceRefs.current.forEach((face, index) => {
			if (face) face.inert = index !== activeIndex;
		});
	}, [activeIndex]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 28 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
			className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none"
			onPointerEnter={(event) => event.pointerType === "mouse" && onHoverChange(true)}
			onPointerLeave={(event) => event.pointerType === "mouse" && onHoverChange(false)}
			onFocus={() => onFocusChange(true)}
			onBlur={(event) => {
				if (!event.currentTarget.contains(event.relatedTarget)) onFocusChange(false);
			}}
		>
			<div className="relative h-[280px]">
			<div className="h-full overflow-hidden">
			<div className="relative h-[620px]">
				{roadmaps.map((roadmap, index) => {
					const isActive = index === activeIndex;
					return (
						<motion.div
							key={roadmap.id}
							aria-hidden={!isActive}
							ref={(face) => {
								faceRefs.current[index] = face;
							}}
							initial={false}
							animate={{ opacity: isActive ? 1 : 0 }}
							transition={HERO_TRANSITION}
							className={`glass-surface dotted-bg hidden-scrollbar absolute inset-0 overflow-y-auto rounded-[28px] border border-white/80 bg-white/70 p-6 pb-28 shadow-[0_24px_60px_rgba(80,108,240,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl ${
								isActive ? "" : "pointer-events-none"
							}`}
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
							{roadmap.steps.map((step, stepIndex) => (
								<RoadmapStepItem
									key={step.id}
									step={step}
									lastStep={stepIndex + 1 === roadmap.steps.length}
									isFirstStep={stepIndex === 0}
									showTags={false}
								/>
							))}
						</motion.div>
					);
				})}
			</div>
			</div>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F4F6FB] to-transparent"
			/>

			<Image
				src={chairImage}
				width={100}
				height={100}
				alt=""
				className="absolute -left-6 top-6 z-10 hidden w-[84px] sm:block"
			/>

			<div className="absolute bottom-2 left-1/2 z-10 w-[108%] -translate-x-1/2">
				<Image
					src={statusImage}
					width={520}
					height={120}
					quality={100}
					alt="In progress, not started, and completed"
					className="w-full"
				/>
			</div>
			</div>
		</motion.div>
	);
};

export default HeroRoadmap;
