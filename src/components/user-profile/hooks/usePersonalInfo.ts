import useHandleFormInputChange from "@/hooks/useHandleFormInputChange";
import useToggle from "@/hooks/useToggle";
import { useAppSelector } from "@/redux/store";
import { useEffect } from "react";

export const usePersonalInfo = () => {
	const { currentState: isEditEnabled, toggle: toggleEdit } = useToggle(false);
	const { personalInfo } = useAppSelector(state => state.userProfile);
	const { formValues, onFormValueChange } = useHandleFormInputChange();

	const resetDefaultPersonalInfo = () => {
		personalInfo.map(item => {
			onFormValueChange({ value: item.value, key: item.name });
		});
	};

	useEffect(() => {
		resetDefaultPersonalInfo();
	}, [personalInfo]);

	const handleCancel = () => {
		resetDefaultPersonalInfo();

		toggleEdit();
	};

	return {
		isEditEnabled,
		toggleEdit,
		formValues,
		handleCancel,
		onFormValueChange,
	};
};
