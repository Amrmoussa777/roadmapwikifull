"use client";

import { useRouter } from "next/navigation";
import React from "react";

const FollowButton = ({ customStyles = "" }: { customStyles?: string }) => {
	const { push } = useRouter();
	return (
		<button
			onClick={() => push("/auth/login")}
			className={`w-full h-full px-6 bg-primary-ultramarineBlue text-white rounded-full border-2 border-transparent hover:border-primary-ultramarineBlue hover:bg-white hover:text-primary-ultramarineBlue transition duration-200 ${customStyles}`}
		>
			Follow
		</button>
	);
};

export default FollowButton;
