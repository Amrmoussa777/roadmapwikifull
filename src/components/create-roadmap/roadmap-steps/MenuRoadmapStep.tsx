import React from "react";
import useToggle from "@/hooks/useToggle";
import { MENU_ICON } from "@public/icons/roadmapSteps";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { removeStep } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import HandleApiRequests from "@/helpers/handleApiRequests";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const MenuRoadmapStep = ({ stepId }: { stepId: string }) => {
	const { currentState: menuOpen, toggle: openMenu } = useToggle(false);
	const { roadmap } = useAppSelector(state => state.createRoadmap);

	const dispatch = useAppDispatch();

	const ref = useOnClickOutside(openMenu);

	const handleRemoveStep = async () => {
		await HandleApiRequests.handleApiRequest({
			method: "DELETE",
			endpoint: `roadmap/step/${stepId}`,
		});

		dispatch(removeStep(stepId));
	};

	return (
		<div className="relative h-[24px] z-10">
			{menuOpen ? (
				<div
					ref={ref}
					className="absolute -left-32 top-4 flex flex-col gap-2 bg-white border border-grey-primary p-2 shadow-lg rounded-md font-inter font-medium"
				>
					<button
						onClick={handleRemoveStep}
						disabled={roadmap?.steps.length === 1}
						className="w-32 bg-[#A72C32] border rounded-md text-white"
					>
						Delete
					</button>
				</div>
			) : null}

			<button onClick={openMenu}>{MENU_ICON}</button>
		</div>
	);
};

export default MenuRoadmapStep;
