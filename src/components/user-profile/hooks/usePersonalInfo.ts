import { useFetch } from "@/hooks/useFetch";
import useHandleFormInputChange from "@/hooks/useHandleFormInputChange";
import { useToast } from "@/hooks/useToast";
import useToggle from "@/hooks/useToggle";
import {
	updateUserData,
	updateUserPersonalInfo,
} from "@/redux/slices/user-profile/userProfileSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";

export const usePersonalInfo = () => {
	const { currentState: isEditEnabled, toggle: toggleEdit } = useToggle(false);
	const { personalInfo, user } = useAppSelector(state => state.userProfile);
	const { formValues, onFormValueChange } = useHandleFormInputChange();
	const { fetchData } = useFetch();
	const dispatch = useAppDispatch();
	const { warningToast } = useToast();

	const { id: userId } = user || {};

	const checkChangedInfo = () => {
		const changedInfo = personalInfo
			?.filter(item => formValues[item.name] !== item.value)
			?.reduce((acc, item) => {
				acc[item.name] = formValues[item.name];
				return acc;
			}, {});

		return changedInfo;
	};

	const resetDefaultPersonalInfo = () => {
		if (personalInfo && personalInfo.length > 0) {
			personalInfo.map(item => {
				onFormValueChange({ value: item.value, key: item.name });
			});
		}
	};

	useEffect(() => {
		resetDefaultPersonalInfo();
	}, [personalInfo]);

	const handleCancel = () => {
		resetDefaultPersonalInfo();

		toggleEdit();
	};

	const handleSave = async () => {
		const changedInfo = checkChangedInfo();

		if (changedInfo && Object.keys(changedInfo).length) {
			await fetchData("PATCH", `users/${userId}`, changedInfo);

			dispatch(updateUserPersonalInfo(changedInfo));
			dispatch(updateUserData(changedInfo));
			toggleEdit();
		} else {
			warningToast("Please update the info, and try again.");
		}
	};

	return {
		isEditEnabled,
		toggleEdit,
		formValues,
		handleCancel,
		onFormValueChange,
		handleSave,
	};
};
