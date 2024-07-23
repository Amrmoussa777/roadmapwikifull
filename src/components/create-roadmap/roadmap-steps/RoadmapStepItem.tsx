import React, { PointerEvent, useEffect, useRef } from "react";
import useInput from "@/components/common/input/hooks/useInput";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import { ARROW_ICON, DRAG_ICON } from "@public/icons/roadmapSteps";
import MenuRoadmapStep from "@/components/create-roadmap/roadmap-steps/MenuRoadmapStep";
import RoadmapTags from "@/components/create-roadmap/roadmap-steps/RoadmapTags";
import {
	AnimatePresence,
	Reorder,
	motion,
	useDragControls,
} from "framer-motion";
import Attachments from "@/components/create-roadmap/roadmap-steps/Attachments";
import StepVerification from "@/components/create-roadmap/roadmap-steps/StepVerification";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
	expandRoadmapStep,
	updateRoadmapStepData,
} from "@/redux/slices/create-roadmap/createRoadmapSlice";
import RoadmapStepDuration from "@/components/create-roadmap/roadmap-steps/RoadmapStepDuration";
import RoadmapStepDescription from "@/components/create-roadmap/roadmap-steps/RoadmapStepDescription";
import { CreateRoadmapStepItemProps } from "@/components/create-roadmap/roadmap-steps/types/index.types";
import { useFetch } from "@/hooks/useFetch";

const RoadmapStepItem = ({
	step,
	isDragging,
	setIsDragging,
}: CreateRoadmapStepItemProps) => {
	const { id, description, title, tags, duration, verifications, attachments } =
		step;
	const { value, changeValue } = useInput(title);
	const dispatch = useAppDispatch();
	const { roadmap } = useAppSelector(state => state.createRoadmap);
	const { fetchData } = useFetch();
	const { fetchData: fetchReorderSteps } = useFetch();

	const stepRef = useRef<HTMLDivElement>(null);

	const handleChangeTitle = async () => {
		if (value === title) return;

		const newData = { description, title: value, duration };

		await fetchData("PATCH", `roadmap/step/${id}`, newData)
			.then(() =>
				dispatch(
					updateRoadmapStepData({ stepId: id, newData: { title: value } })
				)
			)
			.catch(() => changeValue(title));
	};

	const { activeRoadmapStepId } = useAppSelector(state => state.createRoadmap);
	const dragControls = useDragControls();

	const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
		setIsDragging(true);
		dragControls.start(event);
	};

	const handlePointerUp = () => {
		setIsDragging(false);
	};

	const handleReorderSteps = async () => {
		if (!roadmap) return;

		const orderIds = roadmap.steps.map((step, index) => ({
			stepId: step.id,
			order: index + 1,
		}));

		const reorderBody = {
			steps: orderIds,
		};

		fetchReorderSteps(
			"POST",
			`roadmap/${roadmap.id}/reorder-steps`,
			reorderBody
		);
	};

	useEffect(() => {
		setTimeout(() => {
			if (activeRoadmapStepId === id && stepRef.current) {
				stepRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
			}
		}, 300);
	}, [activeRoadmapStepId, id]);

	return (
		<Reorder.Item
			dragListener={false}
			dragControls={dragControls}
			key={step.id}
			value={step}
			layout="position"
			onPointerUp={handlePointerUp}
			onDragEnd={handleReorderSteps}
		>
			<div
				ref={stepRef}
				className={`flex flex-col h-fit gap-2 rounded-[12px] p-4 border border-transparent transition-all duration-300 hover:border-primary-ultramarineBlue ${
					activeRoadmapStepId === id
						? "bg-white !border-primary-ultramarineBlue"
						: "bg-[#F6F6F6]"
				}`}
			>
				<div className="flex-jb-c gap-2">
					<div className="w-full flex items-center gap-2">
						<button
							className="cursor-grab"
							onPointerDown={event => {
								dragControls.start(event);
								handlePointerDown(event);
							}}
						>
							{DRAG_ICON}
						</button>
						<input
							type="text"
							value={value}
							onBlur={handleChangeTitle}
							disabled={isDragging}
							className={`w-full bg-transparent text-md sm:text-[18px] text-[#181818] border-2 border-transparent hover:border-primary-ultramarineBlue/20 focus:border-primary-ultramarineBlue focus:outline-none rounded-md pl-2 transition-all select-none`}
							onChange={changeValue}
						/>
					</div>

					<div className="flex items-center gap-2">
						<MenuRoadmapStep stepId={id} />

						<button
							onClick={() => dispatch(expandRoadmapStep(id))}
							className={`text-[#181818] ${
								activeRoadmapStepId === id ? "rotate-0" : "rotate-180"
							} transition-all`}
						>
							{ARROW_ICON}
						</button>
					</div>
				</div>

				<AnimatePresence>
					{activeRoadmapStepId === id && (
						<motion.div
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -10, opacity: 0 }}
							transition={{ duration: 0.1 }}
						>
							<div className="flex-jb-c flex-wrap gap-2">
								<RoadmapTags stepId={id} tags={tags} />

								<RoadmapStepDuration
									stepId={id}
									description={description}
									title={title}
									defaultDuration={duration}
								/>
							</div>

							<RoadmapStepDescription
								defaultDescription={description}
								stepId={id}
								title={value}
								duration={duration}
							/>

							<StepVerification stepId={id} verifications={verifications} />

							<HorizontalDivider height="h-[1px]" bgColor="bg-[#E0E0E0]" />

							<Attachments stepId={id} attachments={attachments} />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</Reorder.Item>
	);
};

export default RoadmapStepItem;
