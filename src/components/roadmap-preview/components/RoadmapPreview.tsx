"use client";

import RoadmapDetails from "@/components/roadmap-preview/components/roadmap-details/RoadmapDetails";
import RoadmapDiscussion from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussion";
import RoadmapDiscussionReplyForm from "@/components/roadmap-preview/components/roadmap-discussion/RoadmapDiscussionReplyForm";
import RoadmapHeader from "@/components/roadmap-preview/components/roadmap-header/RoadmapHeader";
import RoadmapPreviewProfile from "@/components/roadmap-preview/components/roadmap-profile/RoadmapPreviewProfile";
import RoadmapPreviewSteps from "@/components/roadmap-preview/components/roadmap-steps/RoadmapPreviewSteps";
import PathnameHelper from "@/helpers/pathname.helper";
import { fetchRoadmapById } from "@/redux/slices/thunks/roadmapPreviewAsyncThunks";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const RoadmapPreview = () => {
	const pathname = usePathname();
	const roadmapId = PathnameHelper.getLastPathname(pathname);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchRoadmapById(roadmapId));
	}, []);

	const { isLoading, error, roadmap } = useAppSelector(
		state => state.roadmapPreview
	);

	if (error) return <h2>Error</h2>;

	return (
		<main className="relative w-full flex flex-col md:flex-row p-2 bg-grey-primary">
			<RoadmapPreviewProfile />

			<div className="w-full md:w-[calc(100%-258px)] lg:w-[calc(100%-330px)] ml-auto hidden-scrollbar mb-12">
				{isLoading ? (
					<h2 className="text-primary-ultramarineBlue">Loading...</h2>
				) : (
					<>
						<RoadmapHeader />

						<div className="relative w-full flex flex-col-reverse lg:flex-row justify-center gap-2 py-2">
							<div className="w-full">
								<RoadmapPreviewSteps />
								<RoadmapDiscussion />
							</div>
							<RoadmapDetails />
						</div>
					</>
				)}
			</div>
		</main>
	);
};

export default RoadmapPreview;
