import { PrivateNavbarButtonProps } from "@/components/navbar/types/private-navbar.types";
import { useRouter } from "next/navigation";
import React from "react";

const PrivateMobileNavbarButton = ({
	text,
	icon,
	onClick,
	href,
	customStyles = "",
}: PrivateNavbarButtonProps) => {
	const { push } = useRouter();

	const handleClick = () => {
		if (onClick) return onClick();

		if (href) return push(href);
	};

	return (
		<button
			className={`flex-ic-c gap-2 w-full h-[36px] hover:text-black ${customStyles} overflow-hidden hover:text-primary-ultramarineBlue transition duration-200`}
			onClick={handleClick}
		>
			<span>{icon}</span>
			<p className="font-normal text-[16px]">{text}</p>
		</button>
	);
};

export default PrivateMobileNavbarButton;
