import Attachments from "@/components/common/step/components/Attachments";
import Verification from "@/components/roadmap-preview/components/roadmap-steps/Verification";
import useDisableScroll from "@/hooks/useDisableScrolling";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
	CHECK_ICON,
	CROSS_ICON,
	DURATION_ICON,
	MENU_ICON,
} from "@public/icons/roadmapSteps";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toggleStepToPreview } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import dynamic from "next/dynamic";

const Editor = dynamic(
	() => import("@/components/common/Editor/components/Editor")
);

const RoadmapStepPreview = () => {
	const { stepToPreview } = useAppSelector(state => state.createRoadmap);

	const dispatch = useAppDispatch();

	useDisableScroll(stepToPreview ? true : false);

	const { id, title, description, duration, attachments, tags, verifications } =
		stepToPreview || {};

	const handleToggleStepPreview = () => {
		dispatch(toggleStepToPreview(null));
	};

	const ref = useOnClickOutside(handleToggleStepPreview);

	return (
		<AnimatePresence>
			{stepToPreview ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						ease: "easeInOut",
						duration: 0.1,
					}}
					className="fixed w-screen h-screen top-0 left-0 bg-black/40 flex justify-end z-40"
				>
					<motion.div
						initial={{ x: 500 }}
						animate={{ x: 0 }}
						exit={{ x: 500 }}
						transition={{
							ease: "easeInOut",
							duration: 0.2,
						}}
						ref={ref}
						className="w-[80%] sm:w-[460px] p-[24px] bg-white"
					>
						<div className="flex-jb-c">
							<button
								onClick={handleToggleStepPreview}
								className="flex-jc-c gap-1 [&>svg]:w-[20px] text-primary-dark"
							>
								{CROSS_ICON}
								<p className="text-[14px]">Step information</p>
							</button>
							<button className="[&>svg]:w-[24px] text-primary-dark">
								{MENU_ICON}
							</button>
						</div>

						<div className="grid gap-[14px] my-4">
							<ul className="flex flex-wrap gap-2">
								{tags?.map(tag => (
									<li
										key={tag.id}
										style={{ backgroundColor: tag.color }}
										className="h-[24px] flex-jc-c rounded-full px-2 text-[12px] font-normal font-inter leading-[16px] bg-grey-primary"
									>
										<p className="text-[#111111]">{tag.name}</p>
									</li>
								))}
							</ul>

							<h3 className="text-lg font-normal">{title}</h3>

							<div className="flex flex-js-c gap-3 [&>div>svg]:text-primary-ultramarineBlue [&>div>svg]:w-[16px] [&>svg]:my-auto">
								<div className="w-fit flex-jc-c gap-1 text-[12px] font-medium font-inter leading-[14.4px] text-[#92929D]">
									{DURATION_ICON}{" "}
									<p className="text-[14px] font-normal text-[#92929D]">
										{duration}
									</p>
								</div>

								<div className="flex items-center gap-1 text-[12px] font-medium font-inter leading-[14.4px] text-[#92929D]">
									<span className={`text-[#ACB5B7]`}>{CHECK_ICON}</span>{" "}
									<p className="text-[14px] font-normal">Not started</p>
								</div>
							</div>
						</div>

						<Editor
							value={description || ""}
							disable
							hideToolbar
							customStyles="[&>div]:!p-0 [&>div]:border"
						/>

						{verifications?.length ? (
							<Verification verificationsList={verifications} />
						) : null}

						{attachments?.length ? (
							<>
								<p className="text-[#5A5A5A] text-[12px]">Attachments</p>
								<Attachments attachments={attachments} />
							</>
						) : null}
					</motion.div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

export default RoadmapStepPreview;
