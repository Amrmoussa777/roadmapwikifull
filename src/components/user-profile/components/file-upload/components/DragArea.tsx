import useHandleDragFile from "@/components/user-profile/components/file-upload/hooks/useHandleDragFile";
import { DragAreaProps } from "@/components/user-profile/components/file-upload/types/index.types";
import { UPLOADED_FILE_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const DragArea = ({ handleDrop }: DragAreaProps) => {
	const { dragOver, handleDragOver, handleDragLeave } = useHandleDragFile();

	return (
		<label
			onDrop={event => {
				handleDrop(event);
				handleDragLeave(event);
			}}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			htmlFor="file-upload"
			className={`w-full h-full flex justify-center items-center px-4 py-12 bg-grey-ghostWhite hover:bg-primary-ultramarineBlue/10 hover:border-primary-ultramarineBlue border-[1.5px] border-dashed rounded-md cursor-pointer transition-all ${
				dragOver ? "bg-primary-hawkesBlue border-primary-ultramarineBlue" : ""
			}`}
		>
			<div className="mx-auto mb-4 text-primary-ceruleanBlue []">
				<span className="[&>svg]:w-[50px] [&>svg]:h-[50px] [&>svg>path]:stroke-primary-ceruleanBlue flex-jc-c">
					{UPLOADED_FILE_ICON}
				</span>
				<p>
					Drag and Drop file here or{" "}
					<span className="underline">Choose file</span>
				</p>
			</div>
		</label>
	);
};

export default DragArea;
