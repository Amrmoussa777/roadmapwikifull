import AvatarImage from "@/components/common/avatar/components/AvatarImage";
import useGetAvatarName from "@/components/common/avatar/hook/useGetAvatarName";
import { AvatarPropsType } from "@/components/common/avatar/types/index.types";
import React from "react";

const Avatar = ({ name, image_url, customStyles }: AvatarPropsType) => {
	const avatarName = useGetAvatarName(name);

	return (
		<div
			className={`flex-jc-c font-semibold bg-primary-ultramarineBlue overflow-hidden rounded-full text-primary-ultramarineBlue border-2 border-primary-ultramarineBlue shadow-static shadow-white ${customStyles}`}
		>
			{image_url ? (
				<AvatarImage image_url={image_url} />
			) : (
				<span className="select-none">{avatarName}</span>
			)}
		</div>
	);
};

export default Avatar;
