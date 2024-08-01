"use client";

import RoadmapItem from "@/components/roadmaps/components/RoadmapItem";
import UserProfileRoadmapsLoader from "@/components/user-profile/components/loading/UserProfileRoadmapsLoader";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppSelector } from "@/redux/store";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";

const UserSubscriptions = () => {
	const { isLoading } = useAppSelector(state => state.userProfile);

	const roadmaps: RoadmapType[] = [
		{
			id: "094a1a77-8790-4079-9824-ce38f000810b",
			description: "Hello",
			icon: null,
			createdAt: "2024-07-16T15:49:13.020Z",
			userId: "141c6a93-1590-4897-bbda-e9f0bd12c736",
			title: "Create Roadmap Test",
			duration: "1 week",
			flag: "Start your journey",
			primaryColor: "#506CF0",
			secondaryColor: "#FF9900",
			cover: null,
			subscribersCount: 0,
			urlIdentifier: "create-roadmap-test",
			status: "DRAFT",
			price: null,
			user: {
				id: "141c6a93-1590-4897-bbda-e9f0bd12c736",
				email: "9abour@gmail.com",
				role: "CREATOR",
				image: "",
				cover: "",
				occupation: "Creator",
				roadmapsSubscribers: 0,
				fullName: "Mohamed AbdSabour",
				userName: "mohamed-abdsabour",
				description: "",
				experiences: [],
				socialMedia: [],
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
							url: "https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/4d74716d-86fd-4c02-a7de-4808c54d2002-1721479078045-loseweight.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240730T093603Z&X-Amz-Expires=600&X-Amz-Signature=78fd6942c96e9fba8c68260e4655f7ebb503d39c66003373c53f28f0b34cb924&X-Amz-SignedHeaders=host&x-id=GetObject",
							roadmapStepId: "",
						},
						{
							id: "f978383f-e858-458a-bd20-9cdc32fff2df",
							type: "IMAGE",
							key: "82e32288-100a-4c40-aed9-75f8e229b4cb-1721479694838-IMG_7462.PNG",
							url: "https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/82e32288-100a-4c40-aed9-75f8e229b4cb-1721479694838-IMG_7462.PNG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240730T093603Z&X-Amz-Expires=600&X-Amz-Signature=a7e5a6111dded4dd9f5ae8a729e5b8c2a5fe25ec6f4b8506400eac8019312eed&X-Amz-SignedHeaders=host&x-id=GetObject",
							roadmapStepId: "",
						},
						{
							id: "5e2168b4-db12-4f7c-b9a4-977adc737598",
							type: "IMAGE",
							key: "66099e0d-caa3-4821-a5b5-80ac9702c861-1721480005511-omair-khan-C1Rh71rLM3s-unsplash.jpg",
							url: "https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/66099e0d-caa3-4821-a5b5-80ac9702c861-1721480005511-omair-khan-C1Rh71rLM3s-unsplash.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240730T093603Z&X-Amz-Expires=600&X-Amz-Signature=adf796ce5dc6946112ac2c675a415ea8c29844871946d1ab1d65d40970481e4f&X-Amz-SignedHeaders=host&x-id=GetObject",
							roadmapStepId: "",
						},
						{
							id: "5c67439e-3d33-4fbe-aca2-8d219d64af1a",
							type: "IMAGE",
							key: "77a3d677-81c9-45ff-8526-f98ad8a8cd82-1721482553920-Screenshot_2024-07-17_at_10.50.37.png",
							url: "https://roadmap-bucket-storage.s3.us-east-1.amazonaws.com/perm/77a3d677-81c9-45ff-8526-f98ad8a8cd82-1721482553920-Screenshot_2024-07-17_at_10.50.37.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2UC2676N4JTW5C5Q%2F20240730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240730T093603Z&X-Amz-Expires=600&X-Amz-Signature=46049ce368e17cc6e9bd26d62808c48ebb72766cada54c3fa82eed769c3cf089&X-Amz-SignedHeaders=host&x-id=GetObject",
							roadmapStepId: "",
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
			tags: [
				{
					id: "1",
					color: "",
					name: "tag 1",
					roadmapStepId: "",
				},
				{
					id: "2",
					color: "",
					name: "tag 2",
					roadmapStepId: "",
				},
				{
					id: "3",
					color: "",
					name: "tag 3",
					roadmapStepId: "",
				},
				{
					id: "4",
					color: "",
					name: "tag 4",
					roadmapStepId: "",
				},
			],
			_count: {
				steps: 3,
				tags: 0,
			},
			isSubscribed: false,
		},
		{
			id: "1241d3a3-2a64-4c69-a5f9-18f31fff6569",
			description: "Info",
			icon: null,
			createdAt: "2024-07-17T09:09:53.010Z",
			userId: "141c6a93-1590-4897-bbda-e9f0bd12c736",
			title: "Test 1",
			duration: "1 week",
			flag: "Start your journey",
			primaryColor: "#506CF0",
			secondaryColor: "#FF9900",
			cover: null,
			subscribersCount: 0,
			urlIdentifier: "test-1",
			status: "DRAFT",
			price: null,
			user: {
				id: "141c6a93-1590-4897-bbda-e9f0bd12c736",
				email: "9abour@gmail.com",
				role: "CREATOR",
				image: "",
				cover: "",
				occupation: "Creator",
				roadmapsSubscribers: 0,
				fullName: "Mohamed AbdSabour",
				userName: "mohamed-abdsabour",
				description: "",
				experiences: [],
				socialMedia: [],
				_count: {
					followers: 2,
					following: 0,
				},
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
			id: "170e644b-efed-4139-97b5-d6cb57e5c89d",
			description: "info",
			icon: null,
			createdAt: "2024-07-18T15:28:01.052Z",
			userId: "141c6a93-1590-4897-bbda-e9f0bd12c736",
			title: "test 2",
			duration: "1 week",
			flag: "Start your journey",
			primaryColor: "#506CF0",
			secondaryColor: "#FF9900",
			cover: null,
			subscribersCount: 0,
			urlIdentifier: "test-23",
			status: "DRAFT",
			price: null,
			user: {
				id: "141c6a93-1590-4897-bbda-e9f0bd12c736",
				email: "9abour@gmail.com",
				role: "CREATOR",
				image: "",
				cover: "",
				occupation: "Creator",
				roadmapsSubscribers: 0,
				fullName: "Mohamed AbdSabour",
				userName: "mohamed-abdsabour",
				description: "",
				experiences: [],
				socialMedia: [],
				_count: {
					followers: 2,
					following: 0,
				},
			},
			steps: [],
			tags: [
				{
					id: "1",
					color: "",
					name: "tag 1",
					roadmapStepId: "",
				},
				{
					id: "2",
					color: "",
					name: "tag 2",
					roadmapStepId: "",
				},
				{
					id: "3",
					color: "",
					name: "tag 3",
					roadmapStepId: "",
				},
			],
			_count: {
				steps: 0,
				tags: 0,
			},
			isSubscribed: false,
		},
		{
			id: "1c0c4575-2f02-4506-bc51-da49ac3c1afe",
			description: "info",
			icon: null,
			createdAt: "2024-07-25T05:34:04.904Z",
			userId: "141c6a93-1590-4897-bbda-e9f0bd12c736",
			title: "test",
			duration: "1 week",
			flag: "Start your journey",
			primaryColor: "#506CF0",
			secondaryColor: "#FF9900",
			cover: null,
			subscribersCount: 0,
			urlIdentifier: "test16",
			status: "DRAFT",
			price: null,
			user: {
				id: "141c6a93-1590-4897-bbda-e9f0bd12c736",
				email: "9abour@gmail.com",
				role: "CREATOR",
				image: "",
				cover: "",
				occupation: "Creator",
				roadmapsSubscribers: 0,
				fullName: "Mohamed AbdSabour",
				userName: "mohamed-abdsabour",
				description: "",
				experiences: [],
				socialMedia: [],
				_count: {
					followers: 2,
					following: 0,
				},
			},
			steps: [
				{
					id: "67c31d18-9ef3-4aa8-81ea-c3bfb6e2e612",
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

	if (isLoading) return <UserProfileRoadmapsLoader />;

	return (
		<div id="mySubscriptions" className="bg-white sm:rounded-[12px] p-[18px]">
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					My subscriptions
					<span className="w-[25px] h-[24px] ml-2 rounded-full inline-flex justify-center items-center text-[14px] text-[#79828B] bg-black/5">
						4
					</span>
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
					<RoadmapItem key={roadmap.id} {...roadmap} />
				))}
			</ul>
		</div>
	);
};

export default UserSubscriptions;
