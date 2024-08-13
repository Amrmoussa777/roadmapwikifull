import React from "react";

const ConversationSidebarLoader = () => {
	return (
		<ul className="w-full">
			{Array.from(Array(8)).map((_, index) => (
				<li key={index}>
					<div className="w-full h-full flex items-center gap-[8px] py-[8px] px-[20px] font-inter font-semibold animate-pulse">
						<div className="min-w-[48px] w-[48px] min-h-[48px] h-[48px] text-primary-ultramarineBlue bg-primary-ultramarineBlue/10 border-white rounded-full animate-pulse"></div>

						<div className="w-full text-start ml-3">
							<div className="h-4 bg-gray-200 rounded w-1/2"></div>
							<div className="h-3 bg-gray-200 rounded w-2/3 mt-1"></div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default ConversationSidebarLoader;
