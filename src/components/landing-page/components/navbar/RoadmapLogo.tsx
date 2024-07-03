import React from "react";
import { ROADMAP_LOGO } from "@public/icons/landingPage";
import Link from "next/link";

const RoadmapLogo = () => {
	return (
		<Link
			href="/"
			className="flex items-center gap-3 font-poppins font-semibold text-[24px] text-[#171725]"
		>
			{ROADMAP_LOGO}
			<span>Roadmap</span>
		</Link>
	);
};

export default RoadmapLogo;
