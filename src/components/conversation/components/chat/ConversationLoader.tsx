import React from "react";

const ConversationLoader = () => {
	return (
		<div className="w-full flex flex-col md:bg-[#F8F9FD] rounded-[16px] md:p-[16px] overflow-y-scroll hidden-scrollbar animate-pulse">
			<div className="flex justify-between items-center gap-2">
				<div className="flex items-center gap-2">
					<div className="w-12 h-12 bg-gray-200 rounded-full"></div>
					<div className="text-left">
						<div className="w-24 h-4 bg-gray-200 rounded mt-1"></div>
						<div className="w-16 h-3 bg-gray-200 rounded mt-1"></div>
					</div>
				</div>
				<button className="w-10 h-10 rounded"></button>
			</div>

			<div className="mt-2">
				<div className="flex justify-center items-center text-xs text-gray-200">
					<div className="h-4 w-16 bg-gray-200 rounded mr-1"></div>
					<div className="h-4 w-4 bg-gray-200 rounded"></div>
					<div className="h-4 w-16 bg-gray-200 rounded ml-1"></div>
				</div>

				<ul className="w-full mt-8 flex flex-col gap-3">
					<li className="w-full mr-auto">
						<div className="w-2/4 py-4 px-6 rounded-lg bg-gray-100">
							<div className="h-4 bg-gray-200 rounded w-full"></div>
						</div>
					</li>
					<li className="w-1/3 mr-auto">
						<div className="w-3/4 py-4 px-6 rounded-lg bg-gray-100">
							<div className="h-4 bg-gray-200 rounded w-full"></div>
						</div>
					</li>
					<li className="w-full ml-auto">
						<div className="w-2/4 py-4 px-6 ml-auto rounded-lg bg-gray-100">
							<div className="h-4 bg-gray-200 rounded w-full mr-auto"></div>
						</div>
					</li>
					<li className="w-full max-w-md ml-auto">
						<div className="w-2/4 py-4 px-6 ml-auto rounded-lg bg-gray-100">
							<div className="h-4 bg-gray-200 rounded w-full mr-auto"></div>
						</div>
					</li>
					<li className="w-full max-w-md ml-auto">
						<div className="w-3/4 py-4 px-6 ml-auto rounded-lg bg-gray-100">
							<div className="h-4 bg-gray-200 rounded w-full mr-auto"></div>
						</div>
					</li>
					<li className="w-full max-w-md ml-auto">
						<div className="w-3/4 py-4 px-6 ml-auto rounded-lg bg-gray-100">
							<div className="h-4 bg-gray-200 rounded w-full mr-auto"></div>
						</div>
					</li>
					<li className="w-full max-w-md ml-auto">
						<div className="w-3/4 py-4 px-6 ml-auto rounded-lg bg-gray-100">
							<div className="h-4 bg-gray-200 rounded w-full mr-auto"></div>
						</div>
					</li>
					<li className="w-full max-w-md mr-auto">
						<div className="w-2/4 py-4 px-6 rounded-lg bg-gray-100">
							<div className="h-4 bg-gray-200 rounded w-full"></div>
						</div>
					</li>
					<li className="w-2/4 mr-auto">
						<div className="w-3/4 py-4 px-6 rounded-lg bg-gray-100">
							<div className="h-4 bg-gray-200 rounded w-full"></div>
						</div>
					</li>
					<li className="w-full ml-auto">
						<div className="w-2/4 py-4 px-6 rounded-lg bg-gray-100">
							<div className="h-4 bg-gray-200 rounded w-full"></div>
						</div>
					</li>
					<li className="w-1/3 max-w-md mr-auto">
						<div className="w-3/4 py-4 px-6 rounded-lg bg-gray-100">
							<div className="h-4 bg-gray-200 rounded w-full"></div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ConversationLoader;
