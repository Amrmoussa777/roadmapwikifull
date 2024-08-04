import React, { useEffect, useCallback, useRef } from "react";
import { RoadmapsPaginationProps } from "@/components/roadmaps/types/index.types";
import { ROADMAP_ICON } from "@public/icons/roadmaps";

const RoadmapsPagination = ({
	handleShowMoreRoadmaps,
	totalItems,
	isLoading,
}: RoadmapsPaginationProps) => {
	const divRef = useRef<HTMLDivElement>(null);

	const handleScroll = useCallback(() => {
		if (isLoading || !divRef.current) return;

		const rect = divRef.current.getBoundingClientRect();
		if (rect.top <= window.innerHeight && rect.bottom >= 0) {
			handleShowMoreRoadmaps();
		}
	}, [isLoading, handleShowMoreRoadmaps]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<div
			ref={divRef}
			className={`text-center transition-all ml-6 ${
				totalItems < 5 ? "hidden" : ""
			}`}
		>
			{isLoading && (
				<div className="w-[148px] h-[40px] hidden sm:flex-jc-c gap-2 mx-auto my-4 px-[12px] font-inter font-normal text-[14px] rounded-full bg-primary-ultramarineBlue text-white">
					<span className="w-[20px] h-[20px] flex-jc-c rounded-full text-white">
						{ROADMAP_ICON}
					</span>{" "}
					Loading...
				</div>
			)}
		</div>
	);
};

export default RoadmapsPagination;
