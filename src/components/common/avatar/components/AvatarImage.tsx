import { AvatarImagePropsType } from "@/components/common/avatar/types/index.types";
import Image from "next/image";
import React from "react";

const AvatarImage = ({ image_url }: AvatarImagePropsType) => {
	return (
		<Image
			src={image_url}
			alt="avatar image"
			width={200}
			height={200}
			className="w-full object-cover border-2 border-white rounded-full"
		/>
	);
};

export default AvatarImage;
