import { UPLOADED_FILE_ICON } from "@public/icons/roadmapSteps";
import Image from "next/image";

const useRenderPreviewFile = (file: File) => {
	const fileType = file.type.split("/")[0];

	const renderPreviewFile = () => {
		if (fileType === "image") {
			return (
				<Image
					width={200}
					height={200}
					src={URL.createObjectURL(file)}
					alt={file.name}
					className="w-full h-full object-cover rounded-md shadow-md"
				/>
			);
		} else if (fileType === "video") {
			return (
				<video
					controls
					className="w-full h-full object-cover rounded-md shadow-md"
				>
					<source src={URL.createObjectURL(file)} type={file.type} />
				</video>
			);
		} else {
			return (
				<div className="flex flex-col justify-center items-center gap-2">
					{UPLOADED_FILE_ICON}
					<span className="text-center line-clamp-1 text-ellipsis overflow-hidden">
						{file.name}
					</span>
				</div>
			);
		}
	};

	return { renderPreviewFile };
};

export { useRenderPreviewFile };
