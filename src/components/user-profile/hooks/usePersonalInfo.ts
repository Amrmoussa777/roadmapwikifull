import { useFetch } from "@/hooks/useFetch";
import useHandleFormInputChange from "@/hooks/useHandleFormInputChange";
import useToggle from "@/hooks/useToggle";
import {
	updateUserData,
	updateUserPersonalInfo,
} from "@/redux/slices/user-profile/userProfileSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

export const usePersonalInfo = () => {
	const { currentState: isEditEnabled, toggle: toggleEdit } = useToggle(false);
	const { personalInfo, user } = useAppSelector(state => state.userProfile);
	const { formValues, onFormValueChange } = useHandleFormInputChange();
	const { fetchData } = useFetch();
	const dispatch = useAppDispatch();

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
		if (personalInfo) {
			personalInfo.map(item => {
				onFormValueChange({ value: item.value, key: item.name });
			});
		}
	};

	useEffect(() => {
		resetDefaultPersonalInfo();

		// eslint-disable-next-line react-hooks/exhaustive-deps
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
