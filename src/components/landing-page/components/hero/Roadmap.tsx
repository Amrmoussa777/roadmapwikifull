import React, { MutableRefObject, useEffect, useState } from "react";
import { PARK_ICON } from "@public/icons/roadmapPreview";
import RoadmapStepItem from "@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem";
import {
	LandingRoadmapType,
	RoadmapType,
} from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import chairImage from "@public/hero-chair.png";
import statusImage from "@public/hero-status.svg";
import Image from "@/components/common/image/CustomImage";
import { motion } from "framer-motion";

const Roadmap = ({
	roadmap,
	roadmapRef,
}: {
	roadmap: RoadmapType | LandingRoadmapType;
	roadmapRef: MutableRefObject<null | HTMLDivElement>;
}) => {
	const [currentRoadmap, setCurrentRoadmap] = useState(roadmap);
	const { steps, title, primaryColor, flag } = currentRoadmap;
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		if (roadmap.id !== currentRoadmap.id) {
			setIsVisible(false);

			setTimeout(() => {
				setIsVisible(true);
				setCurrentRoadmap(roadmap);
			}, 500);
		}
	}, [roadmap]);

	return (
		<>
			<motion.div
				ref={roadmapRef}
				initial={{ opacity: 0, x: 40 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
				className="relative w-11/12 lg:w-5/12 xl:w-6/12 max-w-[400px] mt-[20px] lg:mt-0 animate-float"
			>
				<div className="w-full dotted-bg p-6 bg-white rounded-[22px] h-[650px] overflow-y-scroll hidden-scrollbar shadow-[0_8px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.04] pb-[12rem]">
					<motion.div
						initial={{ opacity: 1 }}
						animate={{ opacity: isVisible ? 1 : 0.3 }}
						transition={{ duration: 0.5 }}
						className="fade-in"
					>
						<div className="flex-jc-c">
							<h3
								style={{ backgroundColor: primaryColor }}
								className="text-[12px] sm:text-[16px] h-[40px] flex items-center gap-2 text-white rounded-full font-medium py-2 px-4"
							>
								<span>{PARK_ICON}</span>
								{flag}
							</h3>
						</div>
						<div className="line-dashed h-8 mx-auto" />

						{steps?.map((step, index) => (
							<RoadmapStepItem
								key={step.id}
								step={step}
								lastStep={index + 1 === steps.length}
								isFirstStep={index === 0}
								showTags={false}
							/>
						))}
					</motion.div>
				</div>

				<Image
					src={chairImage}
					width={100}
					height={100}
					alt="chair"
					className="absolute top-0 left-[-50px] block"
				/>

				<div className="absolute w-full lg:w-[500px] xl:w-[525px] bottom-4 left-2/4 -translate-x-2/4">
					<Image
						src={statusImage}
						width={400}
						height={100}
						quality={100}
						alt="status"
						className="w-full"
					/>
				</div>
			</motion.div>
		</>
	);
};

export default Roadmap;
