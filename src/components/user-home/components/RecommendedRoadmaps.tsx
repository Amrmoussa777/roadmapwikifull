import ShareModal from "@/components/common/modal/components/ShareModal";
import RoadmapItem from "@/components/roadmaps/components/RoadmapItem";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";

const RecommendedRoadmaps = () => {
	const roadmaps: any[] = [
		{
			id: "094a1a77-8790-4079-9824-ce38f000810b",
			description: "Hello",
			category: null,
			createdAt: "2024-07-16T15:49:13.020Z",
			userId: "141c6a93-1590-4897-bbda-e9f0bd12c736",
			title: "Create Roadmap Test",
			duration: "1 week",
			cover: null,
			subscribersCount: 0,
			urlIdentifier: "create-roadmap-test",
			flag: "Start your journey",
			primaryColor: "#506CF0",
			secondaryColor: "#FF9900",
			status: "PUBLISHED",
			previews: 474,
			price: {
				currency: "EUR",
				amount: 121.99,
			},
			user: {
				id: "141c6a93-1590-4897-bbda-e9f0bd12c736",
				email: "9abour@gmail.com",
				role: "CREATOR",
				image:
					"https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/a9b981b4-8b65-4a4a-a10b-67eeb5ce3172-1722932887738-GPBE6VrWkAEuR5z.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240806%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240806T152312Z&X-Amz-Expires=600&X-Amz-Signature=dba04fd27a671c6fba7af14bc4e6d82f5974c08ae8ca0064d658b3f43f0442a6&X-Amz-SignedHeaders=host&x-id=GetObject",
				roadmapsSubscribers: 0,
				userName: "9abour",
				description: "This's the first description ever 🔥",
				fullName: "Mohamed AbdSabour",
				occupation: "Creator",
				cover:
					"8b4de2ef-a96b-4444-ac1b-e2e5869df55c-1722834726806-_21_js-wallpaper_GitHub-elisdesckit-Custom-Desktop-Wallpaper-Generator-.jpg",
				createdAt: "2024-08-04T19:21:53.817Z",
				phone: "+201066864285",
				experiences: [
					{
						id: "0fb1cf11-9b81-4ee6-9cd1-9d2f951fbdb5",
						title: "Frontend",
						description:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
					},
					{
						id: "c9e3b0c2-a1ba-4ba0-ad72-082ae8bd375c",
						title: "Backend",
						description:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
					},
				],
				socialMedia: [
					{
						id: "9b80585a-7d31-4b82-865c-96f3645b928d",
						link: "https://instagram.com/_9abour",
						platform: "INSTAGRAM",
					},
				],
				_count: {
					followers: 2,
					following: 0,
				},
			},
			steps: [
				{
					id: "a42cd462-9ff8-4cf5-a52e-4fdfc6d3dde2",
					title: "step2",
					duration: "2 weeks",
					description: "step2 desc",
					order: 1,
					tags: [],
					attachments: [
						{
							id: "260c0637-851d-4e93-8a51-20c68ffa6be2",
							type: "IMAGE",
							key: "4d74716d-86fd-4c02-a7de-4808c54d2002-1721479078045-loseweight.png",
							url: "https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/4d74716d-86fd-4c02-a7de-4808c54d2002-1721479078045-loseweight.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240806%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240806T152312Z&X-Amz-Expires=600&X-Amz-Signature=48fb80863276127cde88e0322d6ea841b1a4a6480cc8bb1e8736956b0ae321e3&X-Amz-SignedHeaders=host&x-id=GetObject",
						},
						{
							id: "f978383f-e858-458a-bd20-9cdc32fff2df",
							type: "IMAGE",
							key: "82e32288-100a-4c40-aed9-75f8e229b4cb-1721479694838-IMG_7462.PNG",
							url: "https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/82e32288-100a-4c40-aed9-75f8e229b4cb-1721479694838-IMG_7462.PNG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240806%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240806T152312Z&X-Amz-Expires=600&X-Amz-Signature=d276e2a49bb359337ca14154cb00eca8e70e8f76a15c6aab12f11e8f2dbbb79f&X-Amz-SignedHeaders=host&x-id=GetObject",
						},
						{
							id: "5e2168b4-db12-4f7c-b9a4-977adc737598",
							type: "IMAGE",
							key: "66099e0d-caa3-4821-a5b5-80ac9702c861-1721480005511-omair-khan-C1Rh71rLM3s-unsplash.jpg",
							url: "https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/66099e0d-caa3-4821-a5b5-80ac9702c861-1721480005511-omair-khan-C1Rh71rLM3s-unsplash.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240806%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240806T152312Z&X-Amz-Expires=600&X-Amz-Signature=8bc7df5feb0a85a934eb0a189d82b339995e117d336900d9e750ad109b0c4192&X-Amz-SignedHeaders=host&x-id=GetObject",
						},
						{
							id: "5c67439e-3d33-4fbe-aca2-8d219d64af1a",
							type: "IMAGE",
							key: "77a3d677-81c9-45ff-8526-f98ad8a8cd82-1721482553920-Screenshot_2024-07-17_at_10.50.37.png",
							url: "https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/77a3d677-81c9-45ff-8526-f98ad8a8cd82-1721482553920-Screenshot_2024-07-17_at_10.50.37.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240806%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240806T152312Z&X-Amz-Expires=600&X-Amz-Signature=5e6459c8f8d717a25764cbd50447f6d7748e3b0ee95acb8507f17cef4480b5a8&X-Amz-SignedHeaders=host&x-id=GetObject",
						},
					],
					verifications: [],
				},
				{
					id: "b76efdd5-9b06-4a4b-b804-d218526f93f1",
					title: "step3",
					duration: "3 weeks",
					description: "step3 desc",
					order: 2,
					tags: [],
					attachments: [],
					verifications: [],
				},
				{
					id: "b5c0f8b5-16da-47d1-ab8f-afb00d6241c1",
					title: "step1",
					duration: "1 weeks",
					description: "step1 desc",
					order: 3,
					tags: [],
					attachments: [],
					verifications: [],
				},
			],
			tags: [],
			_count: {
				steps: 3,
				tags: 0,
			},
			isSubscribed: true,
		},
		{
			id: "c6f1878f-fcb3-4068-99e7-33eb6c5742c1",
			description: "Detailed steps to lose weight in 6 months made by experts",
			category: null,
			createdAt: "2024-06-30T12:09:05.657Z",
			userId: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
			title: "Lose Weight Effectively",
			duration: "6 months",
			cover: null,
			subscribersCount: 0,
			urlIdentifier: "lose-weight-effectively",
			flag: "Start your journey",
			primaryColor: "#FF9900",
			secondaryColor: "#831843",
			status: "DRAFT",
			previews: 133,
			price: {
				currency: "USD",
				amount: 15,
			},
			user: {
				id: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
				email: "maximmillian.jones@roadmapwiki.com",
				role: "USER",
				image:
					"https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/bc03d385-e6ca-4115-b56e-b153e11771be-1722803801766-Amr_photo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240806%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240806T152312Z&X-Amz-Expires=600&X-Amz-Signature=3fc7e48945c85e4abdbad5ba1787b774f6cbf05d9168d03856c29ba42ba2f412&X-Amz-SignedHeaders=host&x-id=GetObject",
				roadmapsSubscribers: 0,
				userName: "MaximmillianJones",
				description: "",
				fullName: "Maximmillian Jones",
				occupation: "Creator",
				cover:
					"ae96e576-719d-493b-9300-20e2fc9da4f3-1722803749090-original-0ea5679098f77ae791a06845a286447a.jpg",
				createdAt: "2024-08-04T19:21:53.817Z",
				phone: "+201066864285",
				experiences: [
					{
						id: "d0b4923e-0051-4789-a7d7-90ed56d1a1d6",
						title: "GIT",
						description: "ALl git",
					},
					{
						id: "d4c8205d-8055-4926-8ba0-a2e5f36abc3f",
						title: "Frontend",
						description: "",
					},
				],
				socialMedia: [],
				_count: {
					followers: 0,
					following: 2,
				},
				isFollowed: false,
			},
			steps: [
				{
					id: "f3809aa2-fb9b-4fc3-b047-546f71d3c222",
					title: "Set Realistic Goals",
					duration: "7 days",
					description:
						"Define your weight loss goals and create a plan to achieve them.",
					order: 1,
					tags: [
						{
							id: "562a4e27-7953-4cf1-a4ed-0b85b62e186d",
							name: "High Priority",
							roadmapStepId: "f3809aa2-fb9b-4fc3-b047-546f71d3c222",
							color: "#00CF7C",
						},
					],
					attachments: [],
					verifications: [],
				},
				{
					id: "2db3b3dc-2d07-4291-9132-e0d769af1ec3",
					title: "Start a Food Journal",
					duration: "14 days",
					description:
						"Track your food intake to understand your eating habits and identify areas for improvement.",
					order: 2,
					tags: [
						{
							id: "b27d23e6-e845-482f-afdd-e2f40e82d524",
							name: "Tracking",
							roadmapStepId: "2db3b3dc-2d07-4291-9132-e0d769af1ec3",
							color: "#00CF7C",
						},
						{
							id: "c5955e37-21ab-4b56-a4d2-12e0606e02dd",
							name: "All time",
							roadmapStepId: "2db3b3dc-2d07-4291-9132-e0d769af1ec3",
							color: "#00CF7C",
						},
					],
					attachments: [],
					verifications: [],
				},
				{
					id: "17c97c7a-e99a-4ed8-a17e-4108fb749ae3",
					title: "Incorporate Regular Exercise",
					duration: "30 days",
					description:
						"Start a regular exercise routine, aiming for at least 150 minutes of moderate activity per week.",
					order: 3,
					tags: [
						{
							id: "bd79a8a7-7ee2-41e1-822a-f7b27bf38042",
							name: "Exercise",
							roadmapStepId: "17c97c7a-e99a-4ed8-a17e-4108fb749ae3",
							color: "#FE7860",
						},
					],
					attachments: [],
					verifications: [],
				},
				{
					id: "319d1d2f-1b50-4d49-ab08-f23b32965f83",
					title: "Understand Nutrition Basics",
					duration: "14 days",
					description:
						"Learn about macronutrients, micronutrients, and how to balance your diet.",
					order: 4,
					tags: [],
					attachments: [],
					verifications: [],
				},
				{
					id: "3316dd5f-0f7a-48d4-9a18-945e4bb8c3b9",
					title: "Plan Balanced Meals",
					duration: "21 days",
					description:
						"Create a meal plan that includes a variety of healthy foods from all food groups.",
					order: 5,
					tags: [],
					attachments: [],
					verifications: [],
				},
				{
					id: "30ec8705-6130-4145-9dba-205b313fb9c0",
					title: "Monitor Your Progress",
					duration: "30 days",
					description:
						"Regularly check your weight and measurements to track your progress and adjust your plan as needed.",
					order: 6,
					tags: [],
					attachments: [],
					verifications: [],
				},
				{
					id: "a36fa264-0e9d-4f42-94b7-5686259aac25",
					title: "Get Adequate Sleep",
					duration: "14 days",
					description:
						"Ensure you get enough quality sleep each night to support your weight loss efforts.",
					order: 7,
					tags: [],
					attachments: [],
					verifications: [],
				},
			],
			tags: [],
			_count: {
				steps: 7,
				tags: 0,
			},
			isSubscribed: true,
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
