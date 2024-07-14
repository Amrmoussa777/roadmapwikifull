import React from "react";
import { ROADMAP_LOGO } from "@public/icons/landingPage";
import Link from "next/link";

const RoadmapLogo = ({
	customStyles = "",
	extension,
}: {
	customStyles?: string;
	extension?: string;
}) => {
	return (
		<Link
			href="/"
			className={`relative w-fit flex items-center gap-3 font-poppins font-semibold text-[24px] text-[#171725] ${customStyles} z-50`}
		>
			{ROADMAP_LOGO}
			<span>Roadmap{extension ? extension : null}</span>
		</Link>
	);
};

export default RoadmapLogo;
