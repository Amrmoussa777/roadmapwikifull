"use client";

import { ADD_ROADMAP_ICON } from "@public/icons/creatorHome";
import { GRID_ICON, LIST_ICON } from "@public/icons/roadmaps";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
	const { push } = useRouter();

	return (
		<section className="hidden sm:flex-jb-c">
			<div>
				<h3 className="text-[24px] text-[#202020] font-semibold">
					Let the great path begin 🚀
				</h3>
				<p className="text-[14px] text-[#898989] font-inter font-normal">
					Welcome back to Roadmaps
				</p>
			</div>

			<div className="flex-jc-c gap-4">
				<button className="w-[36px] h-[36px] flex-jc-c rounded-[7px] bg-[#F6F6F6]">
					{LIST_ICON}
				</button>
				{/* <button className="w-[36px] h-[36px] flex-jc-c rounded-[7px] hover:bg-[#F6F6F6] transition duration-200">
					{GRID_ICON}
				</button> */}
				<button
					onClick={() => push("/builder")}
					className="w-[148px] h-[40px] flex-jb-c px-[12px] font-inter font-normal text-[14px] rounded-full bg-primary-ultramarineBlue text-white hover:bg-white hover:text-[#181818] hover:shadow-lg border border-transparent hover:border-primary-ultramarineBlue transition duration-200 group"
				>
					<span className="w-[20px] h-[20px] flex-jc-c rounded-full bg-white text-[#181818] group-hover:bg-primary-ultramarineBlue group-hover:text-white transition duration-200">
						{ADD_ROADMAP_ICON}
					</span>{" "}
					New roadmap
				</button>
			</div>
		</section>
	);
};

export default Header;
