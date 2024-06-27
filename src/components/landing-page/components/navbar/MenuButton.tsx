"use client";

import { MenuButtonType } from "@/components/landing-page/types/navbar.types";
import React from "react";

const MenuButton = ({
	isMenuOpen,
	setIsMenuOpen,
	customStyles,
}: MenuButtonType) => {
	return (
		<div className={`relative flex md:!hidden ${customStyles}`}>
			<button
				aria-label="menu"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className="w-[40px] min-w-[40px] h-[40px] min-h-[40px] py-[12px] flex flex-col justify-between items-center rounded-full bg-secondaryDark [&>span]:w-[22px] [&>span]:h-[2px] [&>span]:bg-[#515E6B]"
			>
				<span
					className={`
          ${
						isMenuOpen ? "translate-y-[7px] rotate-[-45deg]" : ""
					} transition duration-500`}
				></span>
				<span
					className={`${
						isMenuOpen ? "opacity-0" : "opacity-100"
					} transition duration-500`}
				></span>
				<span
					className={`${
						isMenuOpen ? "translate-y-[-7px] rotate-[45deg]" : ""
					} transition duration-500`}
				></span>
			</button>
		</div>
	);
};

export default MenuButton;
