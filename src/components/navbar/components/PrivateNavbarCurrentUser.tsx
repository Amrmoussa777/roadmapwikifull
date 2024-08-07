"use client";

import Avatar from "@/components/common/avatar/components/Avatar";
import PrivateNavbarCurrentUserLoader from "@/components/navbar/components/loading/PrivateNavbarCurrentUserLoader";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import Link from "next/link";
import React, { useContext } from "react";

const PrivateNavbarCurrentUser = () => {
	const { currentUser } = useContext(CurrentUserContext);
	const { fullName, userName, image } = currentUser || {};
	const firstName = fullName?.split(" ")[0];

	if (!currentUser) return <PrivateNavbarCurrentUserLoader />;

	return (
		<Link
			href={`/user/${userName}`}
			className="w-full justify-end items-start text-start md:text-end gap-2 flex flex-row-reverse md:flex-row md:flex-jc-c"
		>
			<div>
				<h3 className="font-medium text-black text-[14px] leading-[1]">
					HI, {firstName}
				</h3>
				<span className="text-[12px] text-[#79828B] leading-[1]">
					{userName}
				</span>
			</div>

			<Avatar
				image_url={image}
				name={fullName || ""}
				customStyles="w-[40px] h-[40px] rounded-full !border-none object-cover [&>img]:border-none !bg-primary-ultramarineBlue text-white"
			/>
		</Link>
	);
};

export default PrivateNavbarCurrentUser;
