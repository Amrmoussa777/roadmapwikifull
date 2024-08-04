"use client";

import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import DragArea from "@/components/user-profile/components/file-upload/components/DragArea";
import useHandleFilesChanges from "@/components/user-profile/components/file-upload/hooks/useHandleFilesChanges";
import { FileUploaderProps } from "@/components/user-profile/components/file-upload/types/index.types";
import { useFetch } from "@/hooks/useFetch";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { updateUserData } from "@/redux/slices/user-profile/userProfileSlice";
import { useAppDispatch } from "@/redux/store";
import Image from "next/image";
import React, { useContext } from "react";

const FileUploader = ({
	accepts,
	selectedFile,
	setSelectedFile,
	toggleUploadModal,
}: FileUploaderProps) => {
	const { handleDrop, handleFileChange } = useHandleFilesChanges({
		selectedFile,
		setSelectedFile,
	});
	const { currentUser } = useContext(CurrentUserContext);
	const { fetchData, loading } = useFetch();
	const { fetchData: fetchUserData, loading: fetchUserDataLoading } =
		useFetch();
	const dispatch = useAppDispatch();

	const handleUploadCover = async () => {
		if (!selectedFile || !currentUser) return;

		const userId = currentUser.id;

		let formData = new FormData();
		formData.append("file", selectedFile);

		await fetchData("POST", `media/upload`, formData).then(
			async ({ data: key }) => {
				const { data } = await fetchUserData("PATCH", `users/${userId}`, {
					cover: key,
				});

				const { cover } = data;

				dispatch(updateUserData({ cover }));
			}
		);

		toggleUploadModal();
	};

	return (
		<div className="w-full mt-4">
			<p className="mb-2">Ratio 1400 X 160px</p>
			{selectedFile ? (
				<div>
					<Image
						width={400}
						height={400}
						src={URL.createObjectURL(selectedFile)}
						alt=""
						className="w-full h-[148px] object-cover object-center rounded-md shadow-csm border border-[#E4E6EC]"
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
				className="w-[120px] h-[40px] ml-auto flex-jc-c mt-8 font-inter font-medium border border-transparent hover:border-primary-ultramarineBlue bg-primary-ultramarineBlue text-white hover:bg-white hover:text-primary-ultramarineBlue hover:shadow-csm rounded-md outline-none transition duration-200"
			>
				{loading || fetchUserDataLoading ? "Loading..." : "Save"}
			</button>
		</div>
	);
};

export default FileUploader;
