import React from "react";
import CreateNewRoadmapHeader from "@/components/create-roadmap/navbar/CreateNewRoadmapHeader";
import Steps from "@/components/create-roadmap/create-new-roadmap-steps/Steps";

const page = () => {
	return (
		<div className="relative w-screen h-screen dotted-bg overflow-x-hidden">
			<CreateNewRoadmapHeader />

			<div className="h-[calc(100%-82px)] flex flex-col justify-center px-4 lg:px-12">
				<div className="fixed w-screen h-[60%] bottom-0 left-0 bg-gradient-to-b from-transparent to-white z-10" />

				<Steps />
			</div>
		</div>
	);
};

export default page;
