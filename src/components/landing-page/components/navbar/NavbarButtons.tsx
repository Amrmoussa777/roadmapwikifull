import Link from "next/link";
import React from "react";

const NavbarButtons = () => {
	return (
		<div className="hidden md:block">
			<Link
				href="/auth/login"
				className="py-[10px] px-[10px] lg:px-[14px] font-inter font-medium text-[15.5px] text-[#171618]"
			>
				Log in
			</Link>
			<Link
				href="/auth/register"
				className="py-[12px] px-[20px] lg:px-[24.3px] font-inter font-semibold text-[15.5px] text-white bg-primary-ultramarineBlue rounded-[8px]"
			>
				Get started
			</Link>
		</div>
	);
};

export default NavbarButtons;
