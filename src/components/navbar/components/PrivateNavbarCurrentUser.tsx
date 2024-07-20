"use client";

import PrivateNavbarCurrentUserLoader from "@/components/navbar/components/loading/PrivateNavbarCurrentUserLoader";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { UNKNOWN_USER_ICON } from "@public/icons/userProfile";
import Image from "next/image";
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

			{image ? (
				<Image
					src={image}
					width={100}
					height={100}
					alt="author-pic"
					className="w-[32px] h-[32px] object-cover rounded-full"
				/>
			) : (
				UNKNOWN_USER_ICON
			)}
		</Link>
	);
};

export default PrivateNavbarCurrentUser;
