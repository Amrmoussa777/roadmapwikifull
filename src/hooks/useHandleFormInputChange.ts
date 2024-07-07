import { useState } from "react";

const useHandleFormInputChange = () => {
	const [formValues, setFormValues] = useState<Record<string, string>>({});

	const onFormValueChange = ({ value, key }: Record<string, string>) => {
		setFormValues(prevFormValues => ({ ...prevFormValues, [key]: value }));
	};

	return {
		formValues,
		onFormValueChange,
	};
};

export default useHandleFormInputChange;
