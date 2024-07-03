import { useState } from "react";

const useToggle = (defaultValue: boolean = false) => {
	const [currentState, setValue] = useState(defaultValue);

	const toggle = () => {
		setValue(prev => !prev);
	};

	return {
		currentState,
		toggle,
	};
};

export default useToggle;
