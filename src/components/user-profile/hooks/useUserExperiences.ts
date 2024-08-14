import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setUserExperience } from "@/redux/slices/user-profile/userProfileSlice";
import useInput from "@/components/common/input/hooks/useInput";
import useToggle from "@/hooks/useToggle";
import { useFetch } from "@/hooks/useFetch";

const useUserExperiences = () => {
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

	const handleAddExperience = async (e: React.FormEvent) => {
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

	return {
		isEditEnabled,
		toggleEdit,
		isAdding,
		toggleIsAdding,
		experienceTitle,
		changeExperienceTitle,
		experienceDescription,
		changeExperienceDescription,
		experienceTitleError,
		experienceDescriptionError,
		handleAddExperience,
		handleDeleteExperience,
		setExperienceLoading,
		isLoading,
		experiences,
	};
};

export default useUserExperiences;
