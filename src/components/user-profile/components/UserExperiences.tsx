"use client";

import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import UserProfileEditButton from "@/components/common/button/UserProfileEditButton";
import UserProfileSaveButton from "@/components/common/button/UserProfileSaveButton";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import useInput from "@/components/common/input/hooks/useInput";
import NumberStats from "@/components/common/states/NumberStats";
import UserLinksLoader from "@/components/user-profile/components/loading/UserLinksLoader";
import { useFetch } from "@/hooks/useFetch";
import useToggle from "@/hooks/useToggle";
import { setUserExperience } from "@/redux/slices/user-profile/userProfileSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CROSS_ICON } from "@public/icons/roadmapSteps";
import React, { FormEvent, useEffect } from "react";

const UserExperiences = () => {
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
	const { fetchData: setExperienceFetch, loading: setExperienceLoading } =
		useFetch();
	const { user, isLoading } = useAppSelector(state => state.userProfile);
	const dispatch = useAppDispatch();
	const { experiences } = user || {};
	const handleAddExperience = async (e: FormEvent) => {
		e.preventDefault();

		if (!isAdding) return toggleIsAdding();

		if (!experienceTitle)
			handleExperienceTitleSetError("Please add experience title");

		if (!experienceDescription)
			handleExperienceDescriptionSetError("Please add experience description");

		if (!experienceTitle || !experienceDescription) return;

		const newExperience = {
			title: experienceTitle,
			description: experienceDescription,
		};

		const newExperiencesData = experiences
			? [...experiences, newExperience]
			: [newExperience];

		const { data: newExperiences } = await setExperienceFetch(
			"POST",
			`users/${user?.id}/experiences`,
			newExperiencesData
		);

		dispatch(setUserExperience(newExperiences));
		resetExperienceTitle();
		resetExperienceDescription();
		toggleIsAdding();
	};

	const handleDeleteExperience = async (id: string) => {
		const updatedExperiences = experiences?.filter(item => item.id !== id);

		const { data: newExperiences } = await setExperienceFetch(
			"POST",
			`users/${user?.id}/experiences`,
			updatedExperiences
		);

		dispatch(setUserExperience(newExperiences));
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

	if (isLoading) return <UserLinksLoader />;

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

			{experiences ? (
				<ul className="font-inter">
					{experiences.map((item, i) => (
						<>
							<li>
								<div key={item.id} className="flex-jb-c mb-4">
									<h3 className="font-medium">{item.title}</h3>
									{isEditEnabled ? (
										<button
											type="button"
											onClick={() => handleDeleteExperience(item.id)}
											className="w-[30px] h-[30px] flex-jc-c rounded-md text-[#666666] bg-[#F5F5F5] hover:shadow-md transition duration-200 border hover:border-primary-ultramarineBlue"
										>
											{CROSS_ICON}
										</button>
									) : null}
								</div>
								<p className="text-[#79828B]">{item.description}</p>
							</li>

							{i + 1 < experiences.length ? (
								<HorizontalDivider
									height="h-[1px]"
									bgColor="bg-[#D8D8D8]"
									customStyles="my-4"
								/>
							) : null}
						</>
					))}
				</ul>
			) : (
				<NumberStats
					text="No experience yet"
					customStyles="!text-[14px] text-start"
				/>
			)}

			<form onSubmit={handleAddExperience}>
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
						disabled={setExperienceLoading}
						className="relative overflow-hidden font-inter font-semibold text-[14px] w-[140px] h-[34px] mt-4 py-[6px] rounded-[5px] bg-primary-ultramarineBlue text-white hover:bg-white hover:text-primary-ultramarineBlue border border-transparent hover:border-primary-ultramarineBlue hover:shadow-md disabled:bg-primary-ultramarineBlue/90 disabled:hover:shadow-none transition duration-200"
					>
						{setExperienceLoading ? (
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
							isAdding ? toggleIsAdding() : null;
						}}
					/>
				</>
			) : null}
		</div>
	);
};

export default UserExperiences;
