import LatestRoadmap from "@/components/creator-home/components/LatestRoadmap";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const LatestRoadmaps = () => {
	const roadmaps: RoadmapType[] = [
		{
			id: "c38450d2-db16-4da2-a54a-3547c110e332",
			description: "",
			icon: null,
			createdAt: "2024-07-28T16:35:53.324Z",
			userId: "8c38cf7b-9e8d-4256-88cc-43193e851c3b",
			title: "test",
			duration: "1 week",
			flag: "Start your journey",
			primaryColor: "#506CF0",
			secondaryColor: "#FF9900",
			cover: null,
			subscribersCount: 0,
			urlIdentifier: "test74",
			status: "DRAFT",
			price: null,
			user: {
				id: "8c38cf7b-9e8d-4256-88cc-43193e851c3b",
				email: "9abour34@gmail.com",
				role: "CREATOR",
				image: "",
				cover: "",
				occupation: "Creator",
				roadmapsSubscribers: 0,
				fullName: "Mohamed AbdSabour",
				userName: "mohamed-abdsabour34",
				description: "",
				experiences: [],
				socialMedia: [],
				_count: {
					followers: 1,
					following: 0,
				},
			},
			steps: [
				{
					id: "161427b8-2fd5-4476-8dd6-a1d83be628ad",
					title: "Edit here",
					duration: "",
					description: "",
					order: 1,
					tags: [],
					attachments: [],
					verifications: [],
				},
			],
			tags: [],
			_count: {
				steps: 1,
				tags: 0,
			},
			isSubscribed: false,
		},
		{
			id: "eeb0b90b-b1de-46e1-b56a-7bca6e538311",
			description: "",
			icon: null,
			createdAt: "2024-07-28T16:37:19.189Z",
			userId: "8c38cf7b-9e8d-4256-88cc-43193e851c3b",
			title: "test",
			duration: "1 week",
			flag: "Start your journey",
			primaryColor: "#506CF0",
			secondaryColor: "#FF9900",
			cover: null,
			subscribersCount: 0,
			urlIdentifier: "test75",
			status: "PUBLISHED",
			price: null,
			user: {
				id: "8c38cf7b-9e8d-4256-88cc-43193e851c3b",
				email: "9abour34@gmail.com",
				role: "CREATOR",
				image: "",
				cover: "",
				occupation: "Creator",
				roadmapsSubscribers: 0,
				fullName: "Mohamed AbdSabour",
				userName: "mohamed-abdsabour34",
				description: "",
				experiences: [],
				socialMedia: [],
				_count: {
					followers: 1,
					following: 0,
				},
			},
			steps: [
				{
					id: "bfe9fef1-156c-4893-b5bd-5c1c36501765",
					title: "Edit here",
					duration: "",
					description: "",
					order: 1,
					tags: [],
					attachments: [],
					verifications: [],
				},
			],
			tags: [],
			_count: {
				steps: 1,
				tags: 0,
			},
			isSubscribed: false,
		},
	];

	return (
		<section className="mt-[40px]">
			<div className="flex-jb-c">
				<h3 className="font-inter font-semibold text-[20px] text-[#1E293B]">
					Latest Roadmaps
				</h3>
				<button className="flex-jc-c font-inter font-medium text-[14px] text-[#606060] hover:opacity-80 group transition duration-200">
					View more{" "}
					<span className="rotate-90 [&>svg]:w-[17px] group-hover:translate-x-[2px] transition duration-200">
						{ARROW_ICON}
					</span>
				</button>
			</div>

			<ul className="grid grid-col-1 md:grid-cols-2 gap-[20px] lg:gap-[32px]">
				{roadmaps.map(roadmap => (
					<LatestRoadmap key={roadmap.id} {...roadmap} />
				))}
			</ul>
		</section>
	);
};

export default LatestRoadmaps;
