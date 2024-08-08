import React, { ReactNode, useRef } from "react";
import useToggle from "@/hooks/useToggle";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const StepVerificationSelect = ({
	children,
	label,
	activeOption,
}: {
	children: ReactNode;
	label: { id: string; name: string; required?: boolean };
	activeOption: ReactNode;
}) => {
	const { currentState: isOptionsHidden, toggle: hideOptions } =
		useToggle(false);

	const buttonRef = useRef<HTMLButtonElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	useOnClickOutside(hideOptions, [buttonRef, divRef]);

	return (
		<div className="w-2/4 relative col-span-2">
			<label
				htmlFor={label.id}
				className="text-[#92929D] font-inter !text-[14px]"
			>
				{label.name}
				{label.required ? "*" : null}
			</label>
			<button
				onClick={hideOptions}
				id="roadmapDuration"
				type="button"
				ref={buttonRef}
				className="flex-jb-c roadmap-info-select text-[16px] sm:text-[18px] !px-2"
			>
				{activeOption}
				<span
					className={`!text-primary-ultramarineBlue [&>svg]:transition-all ${
						isOptionsHidden ? "[&>svg]:rotate-0" : "[&>svg]:rotate-180"
					}`}
				>
					{ARROW_ICON}
				</span>
			</button>

			{isOptionsHidden ? (
				<div
					ref={divRef}
					className="absolute w-full top-[83px] bg-white mt-1 border border-[#E0E0E0] rounded-xl flex flex-col gap-2 [&>button]:font-normal [&>button]:text-[18px] [&>:first-child]:rounded-t-xl [&>:last-child]:rounded-b-xl [&>button]:p-2 [&>button:hover]:bg-[#E0E0E0]/20"
				>
					{children}
				</div>
			) : null}
		</div>
	);
};

export default StepVerificationSelect;
