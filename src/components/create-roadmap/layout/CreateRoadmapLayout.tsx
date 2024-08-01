"use client";

import CreateRoadmapHeader from "@/components/create-roadmap/navbar/CreateRoadmapHeader";
import RoadmapPreview from "@/components/create-roadmap/preview-roadmap/components/RoadmapPreview";
import RoadmapStepPreview from "@/components/create-roadmap/preview-roadmap/components/RoadmapStepPreview";
import Sidebar from "@/components/create-roadmap/sidebar/components/Sidebar";
import PathnameHelper from "@/helpers/pathname.helper";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import useToggle from "@/hooks/useToggle";
import { ChildrenType } from "@/providers/types/index.types";
import { fetchRoadmapById } from "@/redux/slices/thunks/create-roadmap/fetchRoadmapById";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { GRID_ICON, LAYER_ICON } from "@public/icons/roadmapPreview";
import { redirect, useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const CreateRoadmapLayout = ({ children }: ChildrenType) => {
	const pathname = usePathname();
	const lastPathname = PathnameHelper.getLastPathname(pathname);
	const createNewRoadmapPaths = ["create-roadmap"];
	const { error } = useAppSelector(state => state.createRoadmap);
	const { currentState: sidebarMobile, toggle: toggleSidebarMobile } =
		useToggle(false);

	const [mobileLayout, setMobileLayout] = useState("grid");
	const { roadmapId } = useParams();
	const dispatch = useAppDispatch();
	const { responsive } = useSizeScreen(1024);

	useEffect(() => {
		if (roadmapId) {
			dispatch(fetchRoadmapById(roadmapId));
		}
	}, [roadmapId]);

	if (
		!pathname.includes("create-roadmap") ||
		createNewRoadmapPaths.includes(lastPathname)
	)
		return children;

	if (error) return redirect("/create-roadmap");

	return (
		<div className="relative">
			<Sidebar
				sidebarMobile={sidebarMobile}
				toggleSidebarMobile={toggleSidebarMobile}
			/>

			<div className="w-full sm:w-[calc(100%-75px)] ml-auto">
				<CreateRoadmapHeader
					sidebarMobile={sidebarMobile}
					toggleSidebarMobile={toggleSidebarMobile}
				/>

				<div className="w-full h-[calc(100vh-60px)] sm:h-[calc(100vh-82px)] grid lg:grid-cols-2">
					{responsive ? (
						mobileLayout === "grid" ? (
							children
						) : (
							<RoadmapPreview />
						)
					) : (
						<>
							{children}
							<RoadmapPreview />
						</>
					)}
				</div>
			</div>

			<div className="w-[130px] h-[49px] shadow-clg rounded-full bg-white fixed bottom-4 left-2/4 -translate-x-2/4 m-0 sm:ml-[37.5px] z-10 block lg:hidden">
				<div
					className={`relative w-[124px] h-[49px] text-[#D3D3D3] z-10 transition duration-200 ease-in-out ${
						mobileLayout === "grid"
							? "[&>span]:left-[6px]"
							: "[&>span]:left-[65px]"
					}`}
				>
					<button
						onClick={() => setMobileLayout("grid")}
						className={`absolute w-[59px] h-[49px] left-[6px] top-2/4 -translate-y-2/4 flex-jc-c rounded-full transition duration-200 z-10 ${
							mobileLayout === "grid" ? "text-white" : ""
						}`}
					>
						{GRID_ICON}
					</button>

					<button
						className={`absolute w-[59px] h-[49px] right-[0] top-2/4 -translate-y-2/4 flex-jc-c rounded-full transition duration-200 z-10 ${
							mobileLayout === "layers" ? "text-white" : ""
						}`}
						onClick={() => setMobileLayout("layers")}
					>
						{LAYER_ICON}
					</button>

					<span className="absolute w-[59px] h-[37px] top-2/4 -translate-y-2/4 bg-[#FF9900] shadow-csm text-white rounded-full z-0 duration-200 ease-in-out" />
				</div>
			</div>

			<RoadmapStepPreview />
		</div>
	);
};

export default CreateRoadmapLayout;
