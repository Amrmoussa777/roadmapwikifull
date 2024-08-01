"use client";

import { FILTER_ICON } from "@public/icons/roadmaps";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRoadmapsFilter } from "@/components/roadmaps/hooks/useRoadmapsFilter";
import FilterContent from "@/components/roadmaps/components/FilterContent";
import BottomButtons from "@/components/roadmaps/components/BottomButtons";

const RoadmapsFilter: React.FC = () => {
	const {
		toggleMobileFilter,
		filterIsOpen,
		responsive,
		roadmapCategoryList,
		searchTypeList,
		setSearchTypeList,
		showMoreCategories,
		setRoadmapCategoryList,
		roadmapDurationList,
		setRoadmapDurationList,
		clearFilter,
	} = useRoadmapsFilter();

	return (
		<>
			{responsive ? (
				<AnimatePresence>
					{filterIsOpen && (
						<motion.div
							initial={{ x: -500 }}
							animate={{ x: 0 }}
							exit={{ x: -500 }}
							transition={{ ease: "easeInOut", duration: 0.2 }}
							className="fixed w-screen h-screen overflow-y-scroll top-0 flex flex-col justify-between left-0 bg-white z-50"
						>
							<FilterContent
								responsive={responsive}
								searchTypeList={searchTypeList}
								setSearchTypeList={setSearchTypeList}
								roadmapCategoryList={roadmapCategoryList}
								setRoadmapCategoryList={setRoadmapCategoryList}
								showMoreCategories={showMoreCategories}
								roadmapDurationList={roadmapDurationList}
								setRoadmapDurationList={setRoadmapDurationList}
								toggleMobileFilter={toggleMobileFilter}
							/>
							<BottomButtons
								toggleMobileFilter={toggleMobileFilter}
								clearFilter={clearFilter}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			) : (
				<div className="sm:block w-full sm:w-[225px] min-w-[225px]">
					<FilterContent
						responsive={responsive}
						searchTypeList={searchTypeList}
						setSearchTypeList={setSearchTypeList}
						roadmapCategoryList={roadmapCategoryList}
						setRoadmapCategoryList={setRoadmapCategoryList}
						showMoreCategories={showMoreCategories}
						roadmapDurationList={roadmapDurationList}
						setRoadmapDurationList={setRoadmapDurationList}
						clearFilter={clearFilter}
					/>
				</div>
			)}

			<button
				onClick={toggleMobileFilter}
				className="block sm:hidden fixed w-[58px] h-[58px] right-[20px] bottom-[20px] bg-white text-[#42505C] rounded-full flex-jc-c shadow-csm"
			>
				{FILTER_ICON}
			</button>
		</>
	);
};

export default RoadmapsFilter;
