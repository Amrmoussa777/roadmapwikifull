import { SEARCH_ICON } from "@public/icons/navbar";
import { useRouter } from "next/navigation";
import React from "react";

const SearchNavbarButton = () => {
	const { push } = useRouter();

	return (
		<button
			onClick={() => push("/roadmaps")}
			className="text-[#383838] hover:text-primary-ultramarineBlue transition duration-200"
		>
			{SEARCH_ICON}
		</button>
	);
};

export default SearchNavbarButton;
