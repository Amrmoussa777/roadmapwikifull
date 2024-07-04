import Image from "next/image";
import React from "react";
import userImage from "@public/pp.jpeg";

const UserImage = () => {
	return (
		<div className="absolute top-[76px] md:top-2/4 md:-translate-y-2/4 left-2/4 -translate-x-2/4 md:translate-x-0 md:left-8">
			<Image
				src={userImage}
				width={200}
				height={200}
				alt="user-image"
				className="w-[148px] h-[148px] rounded-full border-8 border-white object-cover"
			/>
		</div>
	);
};

export default UserImage;
