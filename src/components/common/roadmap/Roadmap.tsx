import React from "react";
import { PARK_ICON } from "../../../../public/icons/roadmapPreview";
import RoadmapStepItem from "@/components/roadmap-preview/components/roadmap-steps/RoadmapStepItem";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import chairImage from "../../../../public/hero-chair.png";
import statusImage from "../../../../public/hero-status.png";
import Image from "next/image";

const Roadmap = ({ roadmap }: { roadmap: RoadmapType }) => {
	const { steps, title, secondaryColor } = roadmap;

	return (
		<>
			<div className="relative w-10/12 md:w-6/12 lg:w-5/12">
				<div className="w-full dotted-bg p-6 bg-white rounded-[22px] h-[600px] overflow-y-scroll hidden-scrollbar shadow-2xl">
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
				className="absolute w-full md:w-8/12 lg:w-2/4 bottom-16 lg:right-1"
			/>
		</>
	);
};

export default Roadmap;
