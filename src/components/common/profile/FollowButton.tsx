"use client";

import { useRouter } from "next/navigation";
import React from "react";

const FollowButton = ({ customStyles = "" }: { customStyles?: string }) => {
	const { push } = useRouter();
	return (
		<button
			onClick={() => push("/auth/login")}
			className={`w-full h-full px-6 bg-primary-ultramarineBlue text-white rounded-full ${customStyles}`}
		>
			Follow
		</button>
	);
};

export default FollowButton;
