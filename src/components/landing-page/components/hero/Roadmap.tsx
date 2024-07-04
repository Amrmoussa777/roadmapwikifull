import React, { MutableRefObject, useEffect, useState } from "react";
import { PARK_ICON } from "@public/icons/roadmapPreview";
import RoadmapStepItem from "@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import chairImage from "@public/hero-chair.png";
import statusImage from "@public/hero-status.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Roadmap = ({
	roadmap,
	roadmapRef,
}: {
	roadmap: RoadmapType;
	roadmapRef: MutableRefObject<null | HTMLDivElement>;
}) => {
	const [currentRoadmap, setCurrentRoadmap] = useState(roadmap);
	const { steps, title, secondaryColor, flag } = currentRoadmap;
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		if (roadmap.id !== currentRoadmap.id) {
			setIsVisible(false);

			setTimeout(() => {
				setIsVisible(true);
				setCurrentRoadmap(roadmap);
			}, 300);
		}
	}, [roadmap]);

	return (
		<>
			<div
				ref={roadmapRef}
				className="relative w-10/12 lg:w-5/12 xl:w-6/12 max-w-[400px] mt-[40px] lg:mt-0"
			>
				<div className="w-full dotted-bg p-6 bg-white rounded-[22px] h-[650px] overflow-y-scroll hidden-scrollbar shadow-2xl pb-[12rem]">
					<motion.div
						initial={{ opacity: 1 }}
						animate={{ opacity: isVisible ? 1 : 0 }}
						transition={{ duration: 0.5 }}
						className="fade-in"
					>
						<div className="flex-jc-c">
							<h3
								style={{ backgroundColor: secondaryColor }}
								className="text-[12px] sm:text-[16px] h-[40px] flex items-center gap-2 text-white rounded-full font-medium py-2 px-4"
							>
								<span>{PARK_ICON}</span>
								{flag} 🚀
							</h3>
						</div>
						<div className="line-dashed h-8 mx-auto" />

						{steps?.map((step, index) => (
							<RoadmapStepItem
								key={step.id}
								step={step}
								lastStep={index + 1 === steps.length}
								isFirstStep={index === 0}
								showTags={true}
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
			</div>

			<Image
				src={statusImage}
				width={400}
				height={100}
				quality={100}
				alt="status"
				className="absolute w-[550px] lg:w-[525px] xl:w-[550px] bottom-16 left-2/4 lg:left-auto -translate-x-2/4 lg:translate-x-0 lg:right-0 "
			/>
		</>
	);
};

export default Roadmap;
