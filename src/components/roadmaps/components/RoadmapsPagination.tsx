import React, { useEffect, useCallback, useRef } from "react";
import { RoadmapsPaginationProps } from "@/components/roadmaps/types/index.types";
import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import throttle from "lodash/throttle";

const RoadmapsPagination = ({
	handleShowMoreRoadmaps,
	totalItems,
	isLoading,
}: RoadmapsPaginationProps) => {
	const divRef = useRef<HTMLDivElement>(null);

	const handleScroll = useCallback(
		throttle(() => {
			if (isLoading || !divRef.current) return;

			const rect = divRef.current.getBoundingClientRect();

			if (rect.top <= window.innerHeight && rect.bottom >= 0) {
				handleShowMoreRoadmaps();
			}
		}, 300),
		[isLoading]
	);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<div
			ref={divRef}
			className={`text-center transition-all ${totalItems < 5 ? "hidden" : ""}`}
		>
			{isLoading && (
				<div className="relative overflow-hidden w-[148px] h-[40px] flex-jc-c gap-2 mx-auto my-4 px-[12px] font-inter font-normal text-[14px] rounded-full bg-primary-ultramarineBlue text-white">
					<ButtonDotsLoader />
				</div>
			)}
		</div>
	);
};

export default RoadmapsPagination;
