"use client";

import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import DragArea from "@/components/user-profile/components/file-upload/components/DragArea";
import useHandleFilesChanges from "@/components/user-profile/components/file-upload/hooks/useHandleFilesChanges";
import { FileUploaderProps } from "@/components/user-profile/components/file-upload/types/index.types";
import { useFetch } from "@/hooks/useFetch";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import Image from "next/image";
import React, { useContext, useState } from "react";

const FileUploader = ({
	accepts,
	selectedFile,
	setSelectedFile,
	toggleUploadModal,
	handleSaveCover,
	uploadBucket = "covers",
	ratio,
	imageHeight,
}: FileUploaderProps) => {
	const { handleDrop, handleFileChange } = useHandleFilesChanges({
		selectedFile,
		setSelectedFile,
	});
	const { currentUser } = useContext(CurrentUserContext);
	const { fetchData, loading } = useFetch();
	const [updatingLoading, setUpdatingLoading] = useState(false);

	const handleUploadCover = async () => {
		if (!selectedFile || !currentUser) return;
		let formData = new FormData();
		formData.append("file", selectedFile);

		await fetchData(
			"POST",
			`media/upload?bucket=${uploadBucket}`,
			formData
		).then(
			async ({ data: key }) => {
				setUpdatingLoading(true);
				handleSaveCover(key);
				setSelectedFile(null);
				setUpdatingLoading(false);
			}
		);

		toggleUploadModal();
	};

	return (
		<div className="w-full mt-4">
			<p className="mb-2">Ratio {ratio}</p>
			{selectedFile ? (
				<div>
					<Image
						width={400}
						height={400}
						src={URL.createObjectURL(selectedFile)}
						alt="user profile"
						className="w-full max-h-[400px] object-cover object-center rounded-md shadow-csm border border-[#E4E6EC]"
						style={{ height: imageHeight }}
					/>
					<HorizontalDivider
						height="h-[1px]"
						bgColor="bg-[#E4E6EC]"
						customStyles="my-6"
					/>
				</div>
			) : null}

			<input
				type="file"
				name="uploadFile"
				accept={accepts}
				id="file-upload"
				onChange={handleFileChange}
				className="hidden"
			/>

			<DragArea handleDrop={handleDrop} />

			<button
				onClick={handleUploadCover}
				disabled={loading}
				className="relative overflow-hidden w-[120px] h-[40px] ml-auto flex-jc-c mt-8 font-inter font-medium border border-transparent hover:border-primary-ultramarineBlue bg-primary-ultramarineBlue text-white disabled:hover:bg-primary-ultramarineBlue disabled:hover:text-white hover:bg-white hover:text-primary-ultramarineBlue hover:shadow-csm rounded-md outline-none transition duration-200"
			>
				{loading || updatingLoading ? (
					<ButtonDotsLoader customStyles="[&>div]:bg-white" />
				) : (
					"Save"
				)}
			</button>
		</div>
	);
};

export default FileUploader;
