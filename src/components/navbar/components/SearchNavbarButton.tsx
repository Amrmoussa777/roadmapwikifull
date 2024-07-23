import { SEARCH_ICON } from "@public/icons/navbar";
import React from "react";

const SearchNavbarButton = () => {
	return (
		<button className="text-[#383838] hover:text-primary-ultramarineBlue transition duration-200">
			{SEARCH_ICON}
		</button>
	);
};

export default SearchNavbarButton;
