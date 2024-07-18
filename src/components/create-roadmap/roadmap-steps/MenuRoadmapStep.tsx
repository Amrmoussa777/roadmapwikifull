import React from "react";
import useToggle from "@/hooks/useToggle";
import { MENU_ICON } from "@public/icons/roadmapSteps";

const MenuRoadmapStep = ({ stepId }: { stepId: string }) => {
	const { currentState: menuOpen, toggle: openMenu } = useToggle(false);

	return (
		<div className="relative h-[24px] z-10">
			{menuOpen ? (
				<div className="absolute -left-32 top-4 flex flex-col gap-2 bg-white border border-grey-primary p-2 shadow-lg rounded-md font-inter font-medium">
					<button className="w-32 bg-[#A72C32] border rounded-md text-white">
						Delete
					</button>
				</div>
			) : null}

			<button onClick={openMenu}>{MENU_ICON}</button>
		</div>
	);
};

export default MenuRoadmapStep;
