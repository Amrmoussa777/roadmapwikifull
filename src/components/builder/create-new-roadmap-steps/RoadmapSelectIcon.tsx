import { ROADMAP_ICONS, RoadmapIconType } from "@/config/roadmapIcons";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import useToggle from "@/hooks/useToggle";
import { updateDraftRoadmap } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React, { useEffect, useRef } from "react";

const RoadmapSelectIcon = () => {
	const { currentState: isOptionsHidden, toggle: hideOptions } =
		useToggle(false);

	const buttonRef = useRef<HTMLButtonElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	useOnClickOutside(hideOptions, [buttonRef, divRef]);

	const { draftRoadmap } = useAppSelector(state => state.createRoadmap);
	const { icon } = draftRoadmap;

	const dispatch = useAppDispatch();

	const handleChangeIcon = (icon: RoadmapIconType) => {
		dispatch(updateDraftRoadmap({ ...draftRoadmap, icon }));
	};

	useEffect(() => {
		if (isOptionsHidden) {
			hideOptions();
		}
	}, [icon]);

	return (
		<div className="w-full relative mb-8">
			<button
				onClick={hideOptions}
				id="roadmapIcon"
				type="button"
				ref={buttonRef}
				className="flex-jb-c roadmap-info-select text-[16px] sm:text-[18px]"
			>
				<span className="flex-jc-c gap-1 sm:gap-2 sm:text-[18px] [&>svg]:fill-red-500">
					<span
						style={{ backgroundColor: "" }}
						className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg text-primary-ultramarineBlue"
					>
						{icon ? icon.icon : "-"}
					</span>

					<span>{icon ? icon.name?.toString().replace("_", " ") : "-"}</span>
				</span>

				<span
					className={`!text-[#ADAEB5] [&>svg]:transition-all ${
						isOptionsHidden ? "[&>svg]:rotate-0" : "[&>svg]:rotate-180"
					}`}
				>
					{ARROW_ICON}
				</span>
			</button>

			{isOptionsHidden ? (
				<div
					ref={divRef}
					className="absolute w-full h-[250px] overflow-y-scroll hidden-scrollbar top-[55px] bg-white mt-1 border border-[#E0E0E0] rounded-xl flex flex-col gap-2 [&>button]:font-normal [&>button]:text-[18px] [&>:first-child]:rounded-t-xl [&>:last-child]:rounded-b-xl [&>button]:p-2 [&>button:hover]:bg-[#E0E0E0]/20"
				>
					{ROADMAP_ICONS.map(item => (
						<button
							type="button"
							key={item.name}
							onClick={() => handleChangeIcon({ ...item })}
							className="flex items-center gap-2 !px-4 sm:gap-2 !text-[16px] sm:text-[18px]"
						>
							<span
								style={{ backgroundColor: "" }}
								className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg [&>svg]:text-primary-ultramarineBlue"
							>
								{item.icon}
							</span>{" "}
							<span>{item.name.replace("_", " ")}</span>
						</button>
					))}
				</div>
			) : null}
		</div>
	);
};

export default RoadmapSelectIcon;
