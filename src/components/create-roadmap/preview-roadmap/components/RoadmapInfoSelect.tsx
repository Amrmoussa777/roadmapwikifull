import React, { ReactNode, useEffect } from "react";
import useToggle from "@/hooks/useToggle";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const RoadmapInfoSelect = ({
	children,
	label,
	activeOption,
}: {
	children: ReactNode;
	label: { id: string; name: string };
	activeOption: ReactNode;
}) => {
	const { currentState: isOptionsHidden, toggle: hideOptions } =
		useToggle(false);

	const ref = useOnClickOutside(hideOptions);

	useEffect(() => {
		if (isOptionsHidden) {
			hideOptions();
		}
	}, [activeOption]);

	return (
		<div className="relative col-span-2">
			<label htmlFor={label.id} className="text-[#666666]">
				{label.name}*
			</label>

			<button
				onClick={hideOptions}
				id="roadmapDuration"
				type="button"
				className="flex-jb-c roadmap-info-select text-[16px] sm:text-[18px]"
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
					ref={ref}
					className="absolute right-0 w-[calc(100vw-80px)] sm:w-full h-[250px] overflow-y-scroll hidden-scrollbar top-[83px] bg-white mt-1 border border-[#E0E0E0] rounded-xl flex flex-col gap-2 [&>button]:font-normal [&>button]:text-[18px] [&>:first-child]:rounded-t-xl [&>:last-child]:rounded-b-xl [&>button]:p-2 [&>button:hover]:bg-[#E0E0E0]/20"
				>
					{children}
				</div>
			) : null}
		</div>
	);
};

export default RoadmapInfoSelect;
