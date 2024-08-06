"use client";

import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import UserProfileEditButton from "@/components/common/button/UserProfileEditButton";
import UserProfileSaveButton from "@/components/common/button/UserProfileSaveButton";
import useInput from "@/components/common/input/hooks/useInput";
import NumberStats from "@/components/common/states/NumberStats";
import { useFetch } from "@/hooks/useFetch";
import useToggle from "@/hooks/useToggle";
import { addNewUserExperience } from "@/redux/slices/user-profile/userProfileSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { FormEvent, useEffect } from "react";

const UserExperience = () => {
	const { currentState: isEditEnabled, toggle: toggleEdit } = useToggle(false);
	const { currentState: isAdding, toggle: toggleIsAdding } = useToggle(false);
	const {
		value: experienceTitle,
		changeValue: changeExperienceTitle,
		reset: resetExperienceTitle,
		handleSetError: handleExperienceTitleSetError,
		error: experienceTitleError,
	} = useInput("");
	const {
		value: experienceDescription,
		changeValue: changeExperienceDescription,
		reset: resetExperienceDescription,
		handleSetError: handleExperienceDescriptionSetError,
		error: experienceDescriptionError,
	} = useInput("");
	const { fetchData: addExperienceFetch, loading: addExperienceLoading } =
		useFetch();
	const { user } = useAppSelector(state => state.userProfile);
	const dispatch = useAppDispatch();

	const handleAddExperience = async (e: FormEvent) => {
		e.preventDefault();

		if (!isAdding) return toggleIsAdding();

		if (!experienceTitle)
			handleExperienceTitleSetError("Please add experience title");

		if (!experienceDescription)
			handleExperienceDescriptionSetError("Please add experience description");

		if (!experienceTitle || !experienceDescription) return;

		const newExperience = experienceTitle;
	};

	useEffect(() => {
		if (!isAdding) return;

		if (experienceTitleError && experienceTitle) {
			handleExperienceTitleSetError("");
		}

		if (experienceDescriptionError && experienceDescription) {
			handleExperienceDescriptionSetError("");
		}
	}, [experienceTitle, experienceDescription]);

	return (
		<div id="links" className="bg-white sm:rounded-[12px] p-[18px]">
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					Experience
				</h3>

				<UserProfileEditButton
					isEditEnabled={isEditEnabled}
					toggleEdit={toggleEdit}
				/>
			</div>

			<NumberStats
				text="No experience yet"
				customStyles="!text-[14px] text-start"
			/>

			<form>
				{isAdding ? (
					<div className="mt-4">
						<div className="grid">
							<input
								className={`w-full h-[40px] px-2 block font-inter font-medium text-[#383838] text-[16px] border focus:border-primary-ultramarineBlue outline-none rounded-[5px] transition duration-200`}
								placeholder="Title"
								type="text"
								value={experienceTitle}
								onChange={changeExperienceTitle}
								disabled={!isAdding}
							/>
							{experienceTitleError ? (
								<p className="text-red-500 text-xs mt-1">
									{experienceTitleError}
								</p>
							) : null}

							<textarea
								className={`w-full h-[100px] p-2 mt-2 font-inter font-medium text-[#383838] text-[16px] border focus:border-primary-ultramarineBlue outline-none resize-none hidden-scrollbar rounded-[5px]`}
								value={experienceDescription}
								onChange={changeExperienceDescription}
								disabled={!isAdding}
								placeholder="Description"
							/>
							{experienceDescriptionError ? (
								<p className="text-red-500 text-xs mt-1">
									{experienceDescriptionError}
								</p>
							) : null}
						</div>
					</div>
				) : null}

				{isEditEnabled ? (
					<button
						type="submit"
						onClick={handleAddExperience}
						disabled={addExperienceLoading}
						className="w-[140px] mt-4 py-[6px] rounded-[5px] bg-primary-ultramarineBlue text-white hover:bg-white hover:text-primary-ultramarineBlue border border-transparent hover:border-primary-ultramarineBlue hover:shadow-md transition duration-200"
					>
						{addExperienceLoading ? (
							<ButtonDotsLoader />
						) : isAdding ? (
							"Save experience"
						) : (
							"Add experience"
						)}
					</button>
				) : null}
			</form>

			{isEditEnabled ? (
				<>
					<UserProfileSaveButton
						handleCancel={() => {
							toggleEdit();
							toggleIsAdding();
						}}
					/>
				</>
			) : null}
		</div>
	);
};

export default UserExperience;
