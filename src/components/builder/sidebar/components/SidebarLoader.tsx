import React from "react";

const SidebarLoader = () => {
	return (
		<div className="fixed w-[60px] sm:w-[75px] h-screen bg-white border-r-2 border-grey-primary p-2 hidden sm:flex flex-col justify-between gap-4 animate-pulse">
			<div className="w-full h-12 flex items-center justify-center mt-4 mb-8">
				<li className="w-12 h-12 block rounded-full bg-gray-200"></li>
			</div>
			<ul className="h-full flex flex-col items-center gap-4">
				<li className="w-12 h-12 block rounded-full bg-gray-200"></li>
				<li className="w-12 h-12 block rounded-full bg-gray-200"></li>
				<li className="w-12 h-12 block rounded-full bg-gray-200"></li>
				<li className="w-12 h-12 block rounded-full bg-gray-200"></li>
				<li className="w-12 h-12 block rounded-full bg-gray-200 mt-auto"></li>
			</ul>
		</div>
	);
};

export default SidebarLoader;
