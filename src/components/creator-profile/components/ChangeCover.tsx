import FileUploader from "@/components/user-profile/components/file-upload/components/FileUploader";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const EditUserCover = dynamic(
	() => import("@/components/common/modal/components/EditUserCover"),
	{ ssr: false }
);

const ChangeCover = ({
	uploadModal,
	toggleUploadModal,
	handleSaveCover,
	uploadBucket,
	ratio,
	title,
	imageHeight,
}: {
	uploadModal: boolean;
	toggleUploadModal: () => void;
	handleSaveCover: (key: string) => void;
	uploadBucket?: "avatars" | "covers" | "step-attachments" | "message-attachments";
	ratio: string;
	title: string;
	imageHeight?: number;
}) => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	return (
		<EditUserCover
			title={title}
			open={uploadModal}
			toggleShareModal={toggleUploadModal}
		>
			<div>
				<FileUploader
					accepts="image/*"
					selectedFile={selectedFile}
					setSelectedFile={setSelectedFile}
					toggleUploadModal={toggleUploadModal}
					handleSaveCover={handleSaveCover}
					uploadBucket={uploadBucket}
					ratio={ratio}
					imageHeight={imageHeight}
				/>
			</div>
		</EditUserCover>
	);
};

export default ChangeCover;
