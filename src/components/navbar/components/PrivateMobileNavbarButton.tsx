import { PrivateNavbarButtonProps } from "@/components/navbar/types/private-navbar.types";
import React from "react";

const PrivateMobileNavbarButton = ({
	text,
	icon,
	customStyles = "",
}: PrivateNavbarButtonProps) => {
	return (
		<button
			className={`flex-ic-c gap-2 w-full h-[36px] hover:text-black ${customStyles}`}
		>
			<span>{icon}</span>
			<p className="font-normal text-[16px]">{text}</p>
		</button>
	);
};

export default PrivateMobileNavbarButton;
