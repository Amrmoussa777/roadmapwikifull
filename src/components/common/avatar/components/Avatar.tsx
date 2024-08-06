"use client";

import AvatarImage from "@/components/common/avatar/components/AvatarImage";
import useGetAvatarName from "@/components/common/avatar/hook/useGetAvatarName";
import { AvatarPropsType } from "@/components/common/avatar/types/index.types";
import React, { useState } from "react";

const Avatar = ({ name, image_url, customStyles }: AvatarPropsType) => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const avatarName = useGetAvatarName(name);

	const handleImageLoadComplete = () => {
		setImageLoaded(true);
	};

	return (
		<div
			className={`relative flex-jc-c font-normal bg-primary-ultramarineBlue overflow-hidden rounded-full text-primary-ultramarineBlue border-2 border-primary-ultramarineBlue shadow-static shadow-white ${customStyles}`}
		>
			{image_url && !imageLoaded && (
				<span className="absolute w-full h-full flex-jc-c select-none uppercase">
					{avatarName}
				</span>
			)}

			{image_url && (
				<AvatarImage
					image_url={image_url}
					onLoadingComplete={handleImageLoadComplete}
				/>
			)}

			{!image_url && (
				<span className="absolute w-full h-full flex-jc-c select-none uppercase">
					{avatarName}
				</span>
			)}
		</div>
	);
};

export default Avatar;
