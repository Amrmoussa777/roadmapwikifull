"use client";

import { DropButtonProps } from "@/components/monetization/types/index.types";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import useToggle from "@/hooks/useToggle";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef } from "react";

const ActivityMonetizationDropButton = ({
	text,
	children,
}: DropButtonProps) => {
	const { currentState: isOptionsHidden, toggle: hideOptions } =
		useToggle(false);

	const buttonRef = useRef<HTMLButtonElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	useOnClickOutside(hideOptions, [buttonRef, divRef]);

	return (
		<div className="w-full relative">
			<button
				ref={buttonRef}
				id={text}
				type="button"
				onClick={hideOptions}
				className="w-full !h-[37px] !min-h-[37px] flex-jb-c roadmap-info-select px-2 md:px-[16px] text-[12px] md:text-[14px] text-[#696969] rounded-[8px]"
			>
				<div className="flex-jc-c gap-1 whitespace-nowrap">{text}</div>
				<span
					className={`!text-[#3F3F3F] [&>svg]:transition-all [&>svg]:w-[16px] [&>svg]:h-[16px] ${
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
						ref={divRef}
						className="absolute w-full left-0 top-[45px] flex flex-col p-2 md:p-[16px] bg-white shadow-clg border border-primary-ultramarineBlue/20 rounded-[8px] z-10"
					>
						{children}
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
};

export default ActivityMonetizationDropButton;
