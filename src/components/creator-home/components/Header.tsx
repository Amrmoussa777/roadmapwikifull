"use client";

import CreateRoadmapButton from "@/components/common/button/CreateRoadmapButton";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import React, { useContext } from "react";

const Header = () => {
	const { currentUser } = useContext(CurrentUserContext);
	const { fullName } = currentUser || {};

	return (
		<section className="flex-jb-c">
			<div>
				<h3 className="text-[24px] text-[#202020] font-semibold">
					Hello, {fullName}
				</h3>
				<p className="text-[14px] text-[#898989] font-inter font-normal">
					Welcome back to Roadmaps
				</p>
			</div>
			<CreateRoadmapButton />
		</section>
	);
};

export default Header;
