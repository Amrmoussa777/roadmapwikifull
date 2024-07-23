"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import cover from "@public/roadmapCover.png";
import UserImage from "@/components/creator-profile/components/UserImage";
import UserDetails from "@/components/creator-profile/components/UserDetails";
import FollowButton from "@/components/common/profile/FollowButton";
import DirectMessageButton from "@/components/common/profile/DirectMessageButton";
import { MENU_ICON } from "@public/icons/roadmapSteps";
import { SHARE_ICON } from "@public/icons/roadmapPreview";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useParams, useRouter } from "next/navigation";
import { fetchUserByUsername } from "@/redux/slices/thunks/getUserByUsername";
import UserHeaderLoader from "@/components/user-profile/components/loading/UserHeaderLoader";

const UserHeader = () => {
	const dispatch = useAppDispatch();
	const { username } = useParams();
	const { isLoading, user } = useAppSelector(state => state.userProfile);
	const { push } = useRouter();

	useEffect(() => {
		if (!user && !isLoading) push("/");

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	useEffect(() => {
		dispatch(fetchUserByUsername(username));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) return <UserHeaderLoader />;

	return (
		<div className="relative w-full h-[430px] md:h-[340px] lg:h-[310px] bg-white sm:rounded-[16px] overflow-hidden">
			<Image
				src={cover}
				width={400}
				height={200}
				alt="cover"
				className="w-full h-[148px] md:h-2/4 object-cover"
			/>

			<UserImage />

			<div className="flex flex-col md:flex-row justify-between py-2 lg:px-[8px] mt-[74px] md:mt-4 mx-4 md:mx-0">
				<UserDetails />

				<div className="h-[40px] mr-0 md:mr-4 flex-jc-c gap-2 mt-4">
					<FollowButton customStyles="!rounded-[5px]" />
					<DirectMessageButton customStyles="border-[#D8D8D8]" />

					<button className="min-w-[40px] min-h-[40px] flex-jc-c rounded-full border-2 border-[#D8D8D8] text-[#898989] hover:-translate-y-[2px] transform transition duration-200">
						{MENU_ICON}
					</button>
				</div>
			</div>

			<div className="absolute right-4 top-4 flex-jc-c gap-2">
				{/* <button className="w-[40px] h-[40px] flex-jc-c rounded-full bg-white/20 text-white border border-white/20">
					{EDIT_ICON}
				</button> */}
				<button className="w-[40px] h-[40px] flex-jc-c rounded-full bg-white text-[#333333]">
					{SHARE_ICON}
				</button>
			</div>
		</div>
	);
};

export default UserHeader;
