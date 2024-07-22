"use client";

import CreateRoadmapHeader from "@/components/create-roadmap/navbar/CreateRoadmapHeader";
import RoadmapPreview from "@/components/create-roadmap/preview-roadmap/components/RoadmapPreview";
import RoadmapStepPreview from "@/components/create-roadmap/preview-roadmap/components/RoadmapStepPreview";
import Sidebar from "@/components/create-roadmap/sidebar/components/Sidebar";
import PathnameHelper from "@/helpers/pathname.helper";
import useToggle from "@/hooks/useToggle";
import { ChildrenType } from "@/providers/types/index.types";
import { fetchRoadmapById } from "@/redux/slices/thunks/create-roadmap/fetchRoadmapById";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { redirect, useParams, usePathname } from "next/navigation";
import React, { useEffect } from "react";

const CreateRoadmapLayout = ({ children }: ChildrenType) => {
	const pathname = usePathname();
	const lastPathname = PathnameHelper.getLastPathname(pathname);
	const createNewRoadmapPaths = ["create-roadmap"];
	const { error } = useAppSelector(state => state.createRoadmap);
	const { currentState: sidebarMobile, toggle: toggleSidebarMobile } =
		useToggle(false);

	const { roadmapId } = useParams();
	const dispatch = useAppDispatch();

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

				<div className="w-full h-full grid lg:grid-cols-2">
					{children}
					<RoadmapPreview />
				</div>
			</div>

			<RoadmapStepPreview />
		</div>
	);
};

export default CreateRoadmapLayout;
