import { ITarget } from "@/components/common/input/types";
import { useState } from "react";

const useInput = (initialState: string) => {
	const [value, setValue] = useState(initialState);

	const changeValue = (e: ITarget | string) => {
		setValue(typeof e !== "string" ? e.target.value.toString() : e);
	};

	const reset = () => {
		setValue("");
	};

	return {
		value,
		changeValue,
		reset,
	};
};

export default useInput;
