import { AvatarImagePropsType } from "@/components/common/avatar/types/index.types";
import Image from "@/components/common/image/CustomImage";
import React from "react";

const AvatarImage = ({
	image_url,
	onLoadingComplete,
	customStyles = "",
}: AvatarImagePropsType) => {
	return (
		<Image
			src={image_url}
			alt="avatar"
			width={200}
			height={200}
			onLoad={onLoadingComplete}
			className={`w-full h-full object-cover border-2 border-white rounded-full ${customStyles}`}
		/>
	);
};

export default AvatarImage;
