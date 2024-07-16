import React from "react";
import useToggle from "@/hooks/useToggle";
import { MENU_ICON } from "@public/icons/roadmapSteps";

const MenuRoadmapStep = ({
	stepId,
	changeTitle,
}: {
	stepId: string;
	changeTitle: () => void;
}) => {
	const { currentState: menuOpen, toggle: openMenu } = useToggle(false);

	return (
		<div className="relative h-[24px] z-10">
			{menuOpen ? (
				<div className="absolute -left-24 top-4 flex flex-col gap-2 bg-white border border-grey-primary p-2 shadow-lg rounded-md font-inter font-medium">
					<button
						onClick={changeTitle}
						className="w-24 bg-primary-ultramarineBlue/20 border rounded-md text-primary-ultramarineBlue"
					>
						Edit title
					</button>
					<button className="w-24 bg-red-100 border rounded-md text-red-500">
						Delete step
					</button>
				</div>
			) : null}

			<button onClick={openMenu}>{MENU_ICON}</button>
		</div>
	);
};

export default MenuRoadmapStep;
