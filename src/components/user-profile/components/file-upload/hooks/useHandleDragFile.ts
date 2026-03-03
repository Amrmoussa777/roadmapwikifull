import { DragEvent, useState } from "react";

const useHandleDragFile = () => {
	const [dragOver, setDragOver] = useState(false);

	const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
		setDragOver(true);
	};
	const handleDragLeave = (event: DragEvent<HTMLLabelElement>) => {
		event.preventDefault();
		setDragOver(false);
	};

	return {
		dragOver,
		handleDragOver,
		handleDragLeave,
	};
};

export default useHandleDragFile;
