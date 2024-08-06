import RoadmapItem from "@/components/roadmaps/components/RoadmapItem";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";

const RecommendedRoadmaps = () => {
	const roadmaps = [
		{
			id: "09f75606-49c8-4249-8132-c324ae71b736",
			description: "",
			category: null,
			createdAt: "2024-07-28T12:20:36.864Z",
			userId: "ce9f46ca-c5f4-4855-9035-c600c86d4a81",
			title: "test",
			duration: "1 week",
			cover: null,
			subscribersCount: 0,
			urlIdentifier: "test61",
			flag: "Start your journey",
			primaryColor: "#506CF0",
			secondaryColor: "#FF9900",
			status: "PUBLISHED",
			previews: 10,
			price: null,
			user: {
				id: "ce9f46ca-c5f4-4855-9035-c600c86d4a81",
				email: "9abour23@gmail.com",
				role: "CREATOR",
				image: "",
				roadmapsSubscribers: 0,
				userName: "mohamed-abdsabour23",
				description: "",
				fullName: "Mohamed AbdSabour",
				occupation: "Creator",
				cover: "",
				createdAt: "2024-08-04T19:21:53.817Z",
				phone: "",
				experiences: [],
				socialMedia: [],
				_count: {
					followers: 0,
					following: 0,
				},
				isFollowed: false,
			},
			steps: [
				{
					id: "5481b4dc-d9bf-488e-acbc-abd3200d3f21",
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
			id: "0bb074c6-2fe6-4939-802d-d7cbf66883b5",
			description: "",
			category: null,
			createdAt: "2024-07-28T12:31:19.991Z",
			userId: "8c4b15fc-d49d-4d0f-8ed3-a069e2698d4d",
			title: "test",
			duration: "1 week",
			cover: null,
			subscribersCount: 0,
			urlIdentifier: "test65",
			flag: "Start your journey",
			primaryColor: "#506CF0",
			secondaryColor: "#FF9900",
			status: "DRAFT",
			previews: 0,
			price: null,
			user: {
				id: "8c4b15fc-d49d-4d0f-8ed3-a069e2698d4d",
				email: "9abour27@gmail.com",
				role: "CREATOR",
				image: "",
				roadmapsSubscribers: 0,
				userName: "mohamed-abdsabour27",
				description: "",
				fullName: "Mohamed AbdSabour",
				occupation: "Creator",
				cover: "",
				createdAt: "2024-08-04T19:21:53.817Z",
				phone: "",
				experiences: [],
				socialMedia: [],
				_count: {
					followers: 0,
					following: 0,
				},
				isFollowed: false,
			},
			steps: [
				{
					id: "1a94246e-ee74-4930-8bdf-80dc81263e67",
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
			id: "0ddd71f5-06cd-4b03-941a-1b7e252e4859",
			description: "A comprehensive guide to mastering TypeScript. 2",
			category: "https://example.com/icon.png",
			createdAt: "2024-07-15T19:53:26.677Z",
			userId: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
			title: "Learn TypeScript 2",
			duration: "60 days",
			cover: "https://example.com/cover.jpg",
			subscribersCount: 0,
			urlIdentifier: "learn-typescript-23",
			flag: "new",
			primaryColor: "#007bff",
			secondaryColor: "#6610f2",
			status: "DRAFT",
			previews: 11,
			price: null,
			user: {
				id: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
				email: "maximmillian.jones@roadmapwiki.com",
				role: "USER",
				image:
					"https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/bc03d385-e6ca-4115-b56e-b153e11771be-1722803801766-Amr_photo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240805T162121Z&X-Amz-Expires=600&X-Amz-Signature=12602a6b9d2a59f2aa06eb5b9f6c38747ddc7e46f979143b02c88fe0d80caf58&X-Amz-SignedHeaders=host&x-id=GetObject",
				roadmapsSubscribers: 0,
				userName: "MaximmillianJones",
				description: "",
				fullName: "Maximmillian Jones",
				occupation: "Creator",
				cover:
					"ae96e576-719d-493b-9300-20e2fc9da4f3-1722803749090-original-0ea5679098f77ae791a06845a286447a.jpg",
				createdAt: "2024-08-04T19:21:53.817Z",
				phone: "+201066864285",
				experiences: [],
				socialMedia: [],
				_count: {
					followers: 1,
					following: 0,
				},
				isFollowed: true,
			},
			steps: [],
			tags: [],
			_count: {
				steps: 0,
				tags: 0,
			},
			isSubscribed: false,
		},
		{
			id: "0f7ad08a-4984-4e84-835c-1e48bd5ce327",
			description: "A comprehensive guide to mastering TypeScript. 2",
			category: "https://example.com/icon.png",
			createdAt: "2024-07-15T19:53:53.714Z",
			userId: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
			title: "Learn TypeScript 2",
			duration: "60 days",
			cover: "https://example.com/cover.jpg",
			subscribersCount: 0,
			urlIdentifier: "learn-typescript-24",
			flag: "new",
			primaryColor: "#007bff",
			secondaryColor: "#6610f2",
			status: "DRAFT",
			previews: 0,
			price: null,
			user: {
				id: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
				email: "maximmillian.jones@roadmapwiki.com",
				role: "USER",
				image:
					"https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/bc03d385-e6ca-4115-b56e-b153e11771be-1722803801766-Amr_photo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240805T162121Z&X-Amz-Expires=600&X-Amz-Signature=12602a6b9d2a59f2aa06eb5b9f6c38747ddc7e46f979143b02c88fe0d80caf58&X-Amz-SignedHeaders=host&x-id=GetObject",
				roadmapsSubscribers: 0,
				userName: "MaximmillianJones",
				description: "",
				fullName: "Maximmillian Jones",
				occupation: "Creator",
				cover:
					"ae96e576-719d-493b-9300-20e2fc9da4f3-1722803749090-original-0ea5679098f77ae791a06845a286447a.jpg",
				createdAt: "2024-08-04T19:21:53.817Z",
				phone: "+201066864285",
				experiences: [],
				socialMedia: [],
				_count: {
					followers: 1,
					following: 0,
				},
				isFollowed: true,
			},
			steps: [],
			tags: [],
			_count: {
				steps: 0,
				tags: 0,
			},
			isSubscribed: false,
		},
	];

	return (
		<div>
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					Recommended roadmaps
				</h3>

				<Link
					href={`user/userId/roadmap-list`}
					className="font-inter font-medium text-[14px] flex-jc-c [&>svg]:w-[16px] [&>svg]:rotate-90 text-[#606060]"
				>
					View all {ARROW_ICON}
				</Link>
			</div>

			<ul>
				{roadmaps.map(roadmap => (
					<RoadmapItem key={roadmap.id} roadmap={roadmap} />
				))}
			</ul>
		</div>
	);
};

export default RecommendedRoadmaps;
