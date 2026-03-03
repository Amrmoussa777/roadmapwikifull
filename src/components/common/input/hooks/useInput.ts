import { ITarget } from "@/hooks/types/index.types";
import { useState } from "react";

export type ValidatorType = (value: string) => string | null;

const useInput = (initialState: string, validator?: ValidatorType) => {
	const [value, setValue] = useState(initialState);
	const [error, setError] = useState<string | null>(null);

	const changeValue = (e: ITarget | string) => {
		const newValue = typeof e !== "string" ? e.target.value.toString() : e;

		setValue(newValue);

		if (validator) {
			const validationError = validator(newValue);
			setError(validationError);
		}
	};

	const handleSetError = (error: string) => {
		setError(error);
	};

	const reset = () => {
		setValue("");
	};

	return {
		value,
		changeValue,
		reset,
		error,
		handleSetError,
	};
};

export default useInput;
