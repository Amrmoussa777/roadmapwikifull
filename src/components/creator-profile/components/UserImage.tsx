import React from "react";
import Avatar from "@/components/common/avatar/components/Avatar";
import { useAppSelector } from "@/redux/store";

const UserImage = () => {
	const { user } = useAppSelector(state => state.userProfile);
	const { image, fullName } = user || {};

	return (
		<div className="absolute top-[76px] md:top-2/4 md:-translate-y-2/4 left-2/4 -translate-x-2/4 md:translate-x-0 md:left-8">
			<Avatar
				image_url={image}
				name={fullName || ""}
				customStyles="w-[148px] h-[148px] rounded-full border-8 border-white object-cover !bg-primary-ultramarineBlue text-[3rem] text-white"
			/>
		</div>
	);
};

export default UserImage;
