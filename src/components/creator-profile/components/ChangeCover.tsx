import EditUserCover from "@/components/common/modal/components/EditUserCover";
import FileUploader from "@/components/user-profile/components/file-upload/components/FileUploader";
import React, { useState } from "react";

const ChangeCover = ({
	uploadModal,
	toggleUploadModal,
	updateKey,
	ratio,
	title,
	imageHeight,
}: {
	uploadModal: boolean;
	toggleUploadModal: () => void;
	updateKey: string;
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
					updateKey={updateKey}
					ratio={ratio}
					imageHeight={imageHeight}
				/>
			</div>
		</EditUserCover>
	);
};

export default ChangeCover;
