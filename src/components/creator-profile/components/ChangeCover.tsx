import EditUserCover from "@/components/common/modal/components/EditUserCover";
import FileUploader from "@/components/user-profile/components/file-upload/components/FileUploader";
import React, { useState } from "react";

const ChangeCover = ({
	uploadModal,
	toggleUploadModal,
}: {
	uploadModal: boolean;
	toggleUploadModal: () => void;
}) => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	return (
		<EditUserCover
			title="Upload cover"
			open={uploadModal}
			toggleShareModal={toggleUploadModal}
		>
			<div>
				<FileUploader
					accepts="image/*"
					selectedFile={selectedFile}
					setSelectedFile={setSelectedFile}
					toggleUploadModal={toggleUploadModal}
				/>
			</div>
		</EditUserCover>
	);
};

export default ChangeCover;
