import { LocalAttachmentTypes } from "@/components/conversation/types/index.types";
import { RoadmapStepAttachmentType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { UPLOADED_FILE_ICON } from "@public/icons/roadmapSteps";
import Image from "next/image";

const useRenderPreviewFile = () => {
	const renderPreviewFile = (file?: File) => {
		if (!file) return;

		const fileType = file.type.split("/")[0];
		const objectURL = URL.createObjectURL(file);

		if (fileType === "image") {
			return (
				<Image
					width={200}
					height={200}
					src={objectURL}
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
					<source src={objectURL} type={file.type} />
				</video>
			);
		} else {
			return (
				<div className="w-full h-full flex flex-col justify-center items-center gap-2 rounded-md shadow-md border">
					{UPLOADED_FILE_ICON}
					<span className="w-full text-[12px] text-center text-primary-ultramarineBlue line-clamp-1 text-ellipsis overflow-hidden">
						{file.name}
					</span>
				</div>
			);
		}
	};

	const renderUploadedFile = (
		uploadedFile?: RoadmapStepAttachmentType | LocalAttachmentTypes
	) => {
		if (!uploadedFile) return;

		const objectURL = uploadedFile.localFile
			? URL.createObjectURL(uploadedFile.localFile)
			: uploadedFile.url;

		if (uploadedFile.type === "IMAGE") {
			return (
				<Image
					width={200}
					height={200}
					src={objectURL}
					alt={uploadedFile.key}
					loading="eager"
					className="w-full h-full object-cover rounded-md shadow-md"
				/>
			);
		} else if (uploadedFile.type === "VIDEO") {
			return (
				<>
					<video
						className="w-full h-full object-cover rounded-md shadow-md"
						controls={false}
					>
						<source src={objectURL} type="video/mp4" />
					</video>
				</>
			);
		} else {
			return (
				<div className="w-full h-full flex flex-col justify-center items-center gap-2 rounded-md shadow-md border">
					{UPLOADED_FILE_ICON}
					<span className="w-full text-[12px] text-center text-primary-ultramarineBlue line-clamp-1 text-ellipsis overflow-hidden">
						{uploadedFile.key}
					</span>
				</div>
			);
		}
	};

	return { renderPreviewFile, renderUploadedFile };
};

export { useRenderPreviewFile };
