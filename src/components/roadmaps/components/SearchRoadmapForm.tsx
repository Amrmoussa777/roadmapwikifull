"use client";

import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import useToggle from "@/hooks/useToggle";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import { ROADMAP_ICON, SEARCH_ICON } from "@public/icons/roadmaps";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const SearchRoadmapForm = () => {
	const { currentState: isOptionsHidden, toggle: hideOptions } =
		useToggle(false);
	const { responsive } = useSizeScreen(640);

	const ref = useOnClickOutside(hideOptions);

	return (
		<form className="w-full h-[60px] sm:h-[80px] flex items-center mt-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[16px] p-[12px] sm:p-[20px] border border-transparent focus-within:border-primary-ultramarineBlue focus-within:shadow-[5px_5px_0px_0px_rgba(80,108,240),0_8px_30px_rgb(0,0,0,0.12)] transition duration-200">
			<div className="flex gap-4 w-full sm:w-2/4">
				<span className="text-[#C4C4C4]">{ROADMAP_ICON}</span>
				<input
					type="text"
					placeholder={`${
						responsive
							? "Search for roadmap"
							: "Enter field name you want roadmap about"
					}`}
					className="w-full outline-none text-[16px] font-poppins placeholder:font-poppins placeholder:text-[16px]"
				/>
			</div>

			<VerticalDivider
				width="w-[1px]"
				bgColor="bg-[#EDEFF5]"
				customStyles="hidden sm:block"
			/>

			<div className="relative sm:w-2/4 flex-jb-c">
				<button
					id="roadmapDuration"
					type="button"
					onClick={hideOptions}
					className="w-fit roadmap-info-select font-poppins text-[16px] border-none sm:text-[18px] text-[#383838] hidden sm:flex-jb-c"
				>
					Roadmaps
					<span
						className={`!text-[#3F3F3F] [&>svg]:transition-all ${
							isOptionsHidden ? "[&>svg]:rotate-0" : "[&>svg]:rotate-180"
						}`}
					>
						{ARROW_ICON}
					</span>
				</button>

				<AnimatePresence>
					{isOptionsHidden ? (
						<motion.div
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -10, opacity: 0 }}
							transition={{ duration: 0.1 }}
							ref={ref}
							className="absolute top-[60px] bg-white rounded-xl shadow-xl"
						>
							<button
								type="button"
								className="roadmap-info-select mt-0 rounded-none rounded-t-xl hover:bg-[#F6F6F6] font-poppins text-[16px] border-none sm:text-[18px] text-[#383838]"
							>
								Roadmaps
							</button>
							<button
								type="button"
								className="roadmap-info-select hover:bg-[#F6F6F6] rounded-none rounded-b-xl font-poppins text-[16px] border-none sm:text-[18px] text-[#383838]"
							>
								Creators
							</button>
						</motion.div>
					) : null}
				</AnimatePresence>

				<button className="w-[38px] sm:w-[48px] h-[38px] sm:h-[48px] flex-jc-c bg-[#F6F6F6] text-[#383838] rounded-full">
					{SEARCH_ICON}
				</button>
			</div>
		</form>
	);
};

export default SearchRoadmapForm;
