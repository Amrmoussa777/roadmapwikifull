import React from "react";
import { ADD_STEP_ICON } from "@public/icons/roadmapSteps";
import StepVerificationSelect from "@/components/builder/roadmap-steps/StepVerificationSelect";
import { AnimatePresence, motion } from "framer-motion";
import { StepVerificationProps } from "@/components/builder/roadmap-steps/types/index.types";
import StepVerificationItem from "@/components/builder/roadmap-steps/StepVerificationItem";
import { resetVerificationToUpdate } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useStepVerification } from "@/components/builder/roadmap-steps/hooks/useStepVerification";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";

const StepVerification = ({ stepId, verifications }: StepVerificationProps) => {
	const {
		value,
		actions,
		changeValue,
		handleAddVerification,
		handleUpdateVerification,
		loading,
		reset,
		toggleVerificationList,
		verificationListOpen,
	} = useStepVerification(stepId);

	const { verificationToUpdate } = useAppSelector(state => state.createRoadmap);
	const dispatch = useAppDispatch();

	return (
		<div className="my-4">
			<div className="flex-jb-c mt-2">
				<p className="text-[#606060]">Verification Process / Assignment</p>
				<button
					className={`w-[25px] h-[25px] flex-jc-c bg-[#F6F6F6] rounded-md text-[#92929D] ${
						verificationListOpen ? "[&>svg]:rotate-45" : "[&>svg]:rotate-0"
					} [&>svg]:transition-all`}
					onClick={toggleVerificationList}
				>
					{ADD_STEP_ICON}
				</button>
			</div>

			<AnimatePresence>
				{verificationListOpen ? (
					<motion.div
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.1 }}
					>
						<div className="flex items-center gap-2">
							<StepVerificationSelect
								label={{ id: "action", name: "Pick action" }}
								activeOption={<span>{actions[0].name}</span>}
							>
								{actions.map(action => (
									<button type="button" key={action.id}>
										{action.name}
									</button>
								))}
							</StepVerificationSelect>

							<div className="w-8/12">
								<label className="text-[#92929D] font-inter text-[14px]">
									Enter link address
								</label>
								<input
									className="h-[55px] block roadmap-info-select px-0 pl-2"
									value={value}
									onChange={changeValue}
									placeholder="https://www.w3.org/Provi.."
								/>
							</div>
						</div>

						<AnimatePresence>
							{value ? (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.2 }}
									className="flex-jc-c gap-2"
								>
									<button
										disabled={!value || verificationToUpdate?.link === value}
										onClick={
											verificationToUpdate
												? handleUpdateVerification
												: handleAddVerification
										}
										className="w-full h-[40px] flex-jc-c p-2 text-[#383838] border border-[#E0E0E0] mt-2 rounded-md disabled:hover:bg-white disabled:hover:border-[#E0E0E0] disabled:hover:text-[#383838] hover:bg-primary-ultramarineBlue hover:text-white hover:border-transparent transition duration-200"
									>
										<div className="w-full h-full relative overflow-hidden text-[16px] font-inter font-medium">
											{loading ? (
												<ButtonDotsLoader customStyles="[&>div]:bg-white" />
											) : verificationToUpdate ? (
												<p className="text-[16px] font-inter font-medium">
													Update
												</p>
											) : (
												<p className="text-[16px] font-inter font-medium">
													Add
												</p>
											)}
										</div>
									</button>

									{verificationToUpdate ? (
										<button
											onClick={() => {
												dispatch(resetVerificationToUpdate());
												reset();
											}}
											className="w-[40%] flex-jc-c p-2 text-[#383838] border border-[#E0E0E0] mt-2 rounded-md hover:opacity-80 transition duration-200"
										>
											<p className="text-[16px] font-inter font-medium">
												Cancel
											</p>
										</button>
									) : null}
								</motion.div>
							) : null}
						</AnimatePresence>

						{verifications.length ? (
							<ul className="mt-4 text-[#92929D] font-inter text-[14px]">
								Verifications
								{verifications.map(verification => (
									<StepVerificationItem
										key={verification.id}
										verification={verification}
										stepId={stepId}
									/>
								))}
							</ul>
						) : null}
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
};

export default StepVerification;
