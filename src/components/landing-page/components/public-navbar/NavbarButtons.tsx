import Link from "next/link";
import React from "react";

const NavbarButtons = ({ customStyles }: { customStyles?: string }) => {
	return (
		<div className={`${customStyles} flex items-center gap-2`}>
			<Link
				href="/auth/login"
				className="py-[10px] px-[14px] lg:px-[18px] font-inter font-medium text-[15px] text-[#3D3D3D] hover:text-[#111] transition-colors duration-200"
			>
				Log in
			</Link>
			<Link
				href="/auth/register"
				className="py-[10px] px-[22px] font-inter font-semibold text-[15px] text-white bg-gradient-to-r from-[#506CF0] to-[#7C5CFC] rounded-full hover:shadow-[0_4px_20px_rgba(80,108,240,0.35)] transition-all duration-300"
			>
				Get started
			</Link>
		</div>
	);
};

export default NavbarButtons;
