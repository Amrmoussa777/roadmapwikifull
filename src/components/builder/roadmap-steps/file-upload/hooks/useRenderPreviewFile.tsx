import { RoadmapStepAttachmentType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { UPLOADED_FILE_ICON } from "@public/icons/roadmapSteps";
import Image from "@/components/common/image/CustomImage";

const useRenderPreviewFile = () => {
	const renderPreviewFile = (file?: File) => {
		if (!file) return;

		const fileType = file.type.split("/")[0];

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
				<div className="w-full h-full flex flex-col justify-center items-center gap-2 rounded-md shadow-md border">
					{UPLOADED_FILE_ICON}
					<span className="w-full text-[12px] text-center line-clamp-1 text-ellipsis overflow-hidden">
						{file.name}
					</span>
				</div>
			);
		}
	};

	const renderUploadedFile = (uploadedFile?: RoadmapStepAttachmentType) => {
		if (!uploadedFile) return;

		if (uploadedFile.type === "IMAGE") {
			return (
				<Image
					width={200}
					height={200}
					src={
						uploadedFile.localFile
							? URL.createObjectURL(uploadedFile.localFile)
							: uploadedFile.url
					}
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
						<source
							src={
								uploadedFile.localFile
									? URL.createObjectURL(uploadedFile.localFile)
									: uploadedFile.url
							}
							type="video/mp4"
						/>
					</video>
				</>
			);
		} else {
			return (
				<div className="w-full h-full flex flex-col justify-center items-center gap-2 rounded-md shadow-md border">
					{UPLOADED_FILE_ICON}
					<span className="w-full text-[12px] text-center line-clamp-1 text-ellipsis overflow-hidden">
						{uploadedFile.key}
					</span>
				</div>
			);
		}
	};

	return { renderPreviewFile, renderUploadedFile };
};

export { useRenderPreviewFile };
