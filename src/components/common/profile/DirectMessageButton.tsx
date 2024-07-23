"use client";

import { DIRECT_MESSAGE } from "@public/icons/roadmapPreview";
import { useRouter } from "next/navigation";
import React from "react";

const DirectMessageButton = ({
	customStyles = "",
}: {
	customStyles?: string;
}) => {
	const { push } = useRouter();

	return (
		<button
			onClick={() => push("/auth/login")}
			className={`min-w-[40px] h-full flex-jc-c border-2 border-grey-iconBorder rounded-full [&>svg]:fill-grey-secondary hover:-translate-y-[2px] transform transition duration-200 ${customStyles}`}
		>
			{DIRECT_MESSAGE}
		</button>
	);
};

export default DirectMessageButton;
