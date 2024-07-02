import React, { MutableRefObject, useEffect, useState } from "react";
import { PARK_ICON } from "@public/icons/roadmapPreview";
import RoadmapStepItem from "@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import chairImage from "@public/hero-chair.png";
import statusImage from "@public/hero-status.svg";
import Image from "next/image";
import { animated, easings, useSpring } from "@react-spring/web";

const Roadmap = ({
	roadmap,
	roadmapRef,
}: {
	roadmap: RoadmapType;
	roadmapRef: MutableRefObject<null | HTMLDivElement>;
}) => {
	const { steps, title, secondaryColor } = roadmap;
	const [prevRoadmap, setPrevRoadmap] = useState<RoadmapType | null>(null);

	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: {
			duration: 800,
		},
	});

	useEffect(() => {
		if (prevRoadmap?.id !== roadmap.id) {
			props.opacity.set(0);
			setPrevRoadmap(roadmap);
		}
	}, [roadmap, props]);

	return (
		<>
			<div
				ref={roadmapRef}
				className="relative w-10/12 lg:w-5/12 xl:w-6/12 max-w-[400px] mt-[40px] lg:mt-0"
			>
				<div className="w-full dotted-bg p-6 bg-white rounded-[22px] h-[650px] overflow-y-scroll hidden-scrollbar shadow-2xl pb-[12rem]">
					<animated.div style={props} className="ease-in-out">
						<div className="flex-jc-c">
							<h3
								style={{ backgroundColor: secondaryColor }}
								className="h-[40px] flex items-center gap-2 text-white rounded-full font-medium py-2 px-4"
							>
								<span>{PARK_ICON}</span>
								{title} 🚀
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
					</animated.div>
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
				alt="chair"
				className="absolute w-[550px] lg:w-[525px] xl:w-[550px] bottom-16 left-2/4 lg:left-auto -translate-x-2/4 lg:translate-x-0 lg:right-0"
			/>
		</>
	);
};

export default Roadmap;
