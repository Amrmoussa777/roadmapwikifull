"use client";

import React, { useEffect, useState } from "react";
import { HERO_PLAY_ICON } from "@public/icons/landingPage";
import Roadmap from "@/components/common/roadmap/Roadmap";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

const roadmapList: RoadmapType[] = [
	{
		id: "28c6c08b-30cd-4717-8fd0-a47baa4c40fa",
		description:
			"Deatiled steps to get you into Harvard class 2025 made by expert",
		icon: null,
		createdAt: "2024-06-26T16:04:11.834Z",
		userId: "a9522bbf-ea0e-4dbe-a498-dacfbc021acc",
		title: "Get Into Harvard ",
		duration: "1 month",
		flag: "Start your journey",
		primaryColor: "#831843",
		secondaryColor: "#506CF0",
		cover: null,
		subscribersCount: 0,
		urlIdentifier: "get-into-harvard ",
		price: {
			currency: "USD",
			amount: 10,
		},
		user: {
			id: "a9522bbf-ea0e-4dbe-a498-dacfbc021acc",
			email: "mohamed.abdsabour@roadmapwiki.com",
			role: "CREATOR",
			image: "",
			occupation: "Creator",
			roadmapsSubscribers: 0,
			fullName: "",
			userName: "MohamedABdelsabour",
			description: "",
			experiences: [
				{
					id: "9999cdb4-7891-48a9-a000-da2eb29c2f39",
					title: "Frontend Engineering",
					description: "Experienced frontend engineer",
				},
				{
					id: "ea376639-cad2-4bdc-a9a7-c3af17ec092c",
					title: "Scrum",
					description: "Experienced frontend engineer",
				},
				{
					id: "94a0dd29-c6ac-48c7-8c99-6f8dfab21961",
					title: "GIT",
					description: "Experienced frontend engineer",
				},
				{
					id: "8fb4bfc3-65d4-47db-b4b5-998e5da85f12",
					title: "React",
					description: "Experienced frontend engineer",
				},
				{
					id: "c72b28eb-79bd-45e1-919a-dec2d29c46cc",
					title: "HTML/CSS",
					description: "Experienced frontend engineer",
				},
			],
			socialMedia: [],
			_count: {
				followers: 0,
				following: 0,
			},
		},
		steps: [
			{
				id: "6defb1d2-9720-41c1-9127-7c721302a002",
				title: "Participate in Extracurricular Activities",
				duration: "5 days",
				description:
					"Engage in activities that showcase your leadership and talents.",
				tags: [],
				attachments: [],
				verifications: [
					{
						id: "6af18243-0dcd-4f57-8c69-9b62c3d65529",
						title: "RedirectLink",
						link: "https://implicit.harvard.edu/implicit/takeatest.html",
					},
				],
				completed: false,
			},
			{
				id: "4b243ee7-52f1-410c-9bb4-ad2b115903de",
				title: "Write Personal Statement Draft",
				duration: "3 days",
				description:
					"Draft a compelling personal statement for your application.",
				tags: [],
				attachments: [],
				verifications: [
					{
						id: "be15cb6b-d008-436f-a7bf-9b5e5b11a4ef",
						title: "RedirectLink",
						link: "https://implicit.harvard.edu/implicit/takeatest.html",
					},
				],
				completed: false,
			},
			{
				id: "1d16c42f-1570-46d2-ad9f-7be95407e981",
				title: "Write Personal Statement Draft",
				duration: "3 days",
				description:
					"Draft a compelling personal statement for your application.",
				tags: [],
				attachments: [],
				verifications: [
					{
						id: "104211dd-a56d-4545-a0b4-8f1f56fe7c09",
						title: "RedirectLink",
						link: "https://implicit.harvard.edu/implicit/takeatest.html",
					},
				],
				completed: false,
			},
			{
				id: "9e421885-1b50-44b3-b003-e2beefaccf3b",
				title: "Research Harvard Programs",
				duration: "3 days",
				description:
					"Research different programs offered at Harvard to find the best fit for your goals.",
				tags: [
					{
						id: "7561beee-0f34-4c4f-a34c-93e43ca4b40b",
						name: "Personal Development",
						roadmapStepId: "9e421885-1b50-44b3-b003-e2beefaccf3b",
						color: "#FE7860",
					},
				],
				attachments: [
					{
						id: "1",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
					{
						id: "2",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [
					{
						id: "881d56f6-4b31-44b4-94c5-c1a629ddef8b",
						title: "RedirectLink",
						link: "https://implicit.harvard.edu/implicit/takeatest.html",
					},
				],
				completed: false,
			},
			{
				id: "4f78c02c-3bfc-4d35-a242-76b0dff8d5d1",
				title: "Meet with a Guidance Counselor",
				duration: "2 days",
				description:
					"Discuss your goals and get advice on how to improve your application.",
				tags: [],
				attachments: [
					{
						id: "4",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
					{
						id: "5",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [
					{
						id: "5e5850e1-909e-4d96-a324-e124d387f47b",
						title: "RedirectLink",
						link: "https://implicit.harvard.edu/implicit/takeatest.html",
					},
				],
				completed: false,
			},
			{
				id: "e3d8ba48-a92b-4f50-a039-5aa28bd362e8",
				title: "Prepare for Standardized Tests",
				duration: "1 week",
				description: "Start preparing for SAT/ACT exams to ensure high scores.",
				tags: [
					{
						id: "c81031cf-3be3-48a6-ab88-b3d399879bd5",
						name: "Career",
						roadmapStepId: "e3d8ba48-a92b-4f50-a039-5aa28bd362e8",
						color: "#FE7860",
					},
				],
				attachments: [
					{
						id: "3",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
					{
						id: "6",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [],
				completed: false,
			},
			{
				id: "806e0010-0f21-48b2-afba-2c3f7c4a3383",
				title: "Collect Letters of Recommendation",
				duration: "2 days",
				description:
					"Request and collect letters of recommendation from teachers and mentors.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "00b42216-2c67-4228-85fb-bd4b4a623dda",
				title: "Visit Harvard Campus (Virtual or In-Person)",
				duration: "2 days",
				description:
					"Get a feel for the campus environment through a visit or virtual tour.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "9df59296-91f1-470f-b803-bf1972b1f99c",
				title: "Finalize Personal Statement",
				duration: "2 days",
				description:
					"Revise and finalize your personal statement for submission.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "97185507-aa34-47f6-b11b-9303e7443224",
				title: "Complete Application Forms",
				duration: "4 days",
				description: "Fill out and review all application forms thoroughly.",
				tags: [],
				attachments: [
					{
						id: "7",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [],
				completed: false,
			},
			{
				id: "1c19ac27-0baa-4721-b602-8c6c080374a5",
				title: "Review and Submit Application",
				duration: "3 days",
				description:
					"Carefully review your entire application and submit it before the deadline.",
				tags: [],
				attachments: [
					{
						id: "8",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [
					{
						id: "1ff306a3-7f3f-4d6b-97af-78053f176699",
						title: "RedirectLink",
						link: "https://www.w3schools.com/css/css_quiz.asp",
					},
				],
				completed: false,
			},
		],
		tags: [
			{
				id: "4881789d-a6e1-4597-959d-4a31a2ef2368",
				roadmapId: "28c6c08b-30cd-4717-8fd0-a47baa4c40fa",
				tag: "Education",
				color: "#00CF7C",
			},
			{
				id: "35e09ed1-3cdd-4240-abae-139395291313",
				roadmapId: "28c6c08b-30cd-4717-8fd0-a47baa4c40fa",
				tag: "Harvard",
				color: "#00CF7C",
			},
		],
		_count: {
			steps: 11,
			tags: 2,
		},
	},
	{
		id: "c6f1878f-fcb3-4068-99e7-33eb6c5742c1",
		description: "Detailed steps to lose weight in 6 months made by experts",
		icon: null,
		createdAt: "2024-06-30T12:09:05.657Z",
		userId: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
		title: "Lose Weight Effectively",
		duration: "6 months",
		flag: "Start your journey",
		primaryColor: "#FF9900",
		secondaryColor: "#831843",
		cover: null,
		subscribersCount: 0,
		urlIdentifier: "lose-weight-effectively",
		price: {
			currency: "USD",
			amount: 15,
		},
		user: {
			id: "fd0680ea-f918-45f6-9b38-8ef45a16de62",
			email: "maximmillian.jones@roadmapwiki.com",
			role: "USER",
			image: "",
			occupation: "Creator",
			roadmapsSubscribers: 0,
			fullName: "",
			userName: "Maximmillian Jones",
			description: "",
			experiences: [],
			socialMedia: [],
			_count: {
				followers: 0,
				following: 0,
			},
		},
		steps: [
			{
				id: "f3809aa2-fb9b-4fc3-b047-546f71d3c222",
				title: "Set Realistic Goals",
				duration: "7 days",
				description:
					"Define your weight loss goals and create a plan to achieve them.",
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
				completed: false,
			},
			{
				id: "2db3b3dc-2d07-4291-9132-e0d769af1ec3",
				title: "Start a Food Journal",
				duration: "14 days",
				description:
					"Track your food intake to understand your eating habits and identify areas for improvement.",
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
				completed: false,
			},
			{
				id: "17c97c7a-e99a-4ed8-a17e-4108fb749ae3",
				title: "Incorporate Regular Exercise",
				duration: "30 days",
				description:
					"Start a regular exercise routine, aiming for at least 150 minutes of moderate activity per week.",
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
				completed: false,
			},
			{
				id: "319d1d2f-1b50-4d49-ab08-f23b32965f83",
				title: "Understand Nutrition Basics",
				duration: "14 days",
				description:
					"Learn about macronutrients, micronutrients, and how to balance your diet.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "3316dd5f-0f7a-48d4-9a18-945e4bb8c3b9",
				title: "Plan Balanced Meals",
				duration: "21 days",
				description:
					"Create a meal plan that includes a variety of healthy foods from all food groups.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "30ec8705-6130-4145-9dba-205b313fb9c0",
				title: "Monitor Your Progress",
				duration: "30 days",
				description:
					"Regularly check your weight and measurements to track your progress and adjust your plan as needed.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "a36fa264-0e9d-4f42-94b7-5686259aac25",
				title: "Get Adequate Sleep",
				duration: "14 days",
				description:
					"Ensure you get enough quality sleep each night to support your weight loss efforts.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
		],
		tags: [],
		_count: {
			steps: 7,
			tags: 0,
		},
	},
	{
		id: "d873a3ea-ef68-483f-8ba8-d11fc36d8074",
		description:
			"Deatiled steps to Become a frontend engineer in 2025 made by expert",
		icon: null,
		createdAt: "2024-06-26T16:05:06.631Z",
		userId: "a9522bbf-ea0e-4dbe-a498-dacfbc021acc",
		title: "Become Frontend engineer",
		duration: "6 month",
		flag: "Start your journey",
		primaryColor: "#506CF0",
		secondaryColor: "#FF9900",
		cover: null,
		subscribersCount: 0,
		urlIdentifier: "become-frontend-engineer",
		price: {
			currency: "EUR",
			amount: 20,
		},
		user: {
			id: "a9522bbf-ea0e-4dbe-a498-dacfbc021acc",
			email: "mohamed.abdsabour@roadmapwiki.com",
			role: "CREATOR",
			image: "",
			occupation: "Creator",
			roadmapsSubscribers: 0,
			fullName: "",
			userName: "MohamedABdelsabour",
			description: "",
			experiences: [
				{
					id: "9999cdb4-7891-48a9-a000-da2eb29c2f39",
					title: "Frontend Engineering",
					description: "Experienced frontend engineer",
				},
				{
					id: "ea376639-cad2-4bdc-a9a7-c3af17ec092c",
					title: "Scrum",
					description: "Experienced frontend engineer",
				},
				{
					id: "94a0dd29-c6ac-48c7-8c99-6f8dfab21961",
					title: "GIT",
					description: "Experienced frontend engineer",
				},
				{
					id: "8fb4bfc3-65d4-47db-b4b5-998e5da85f12",
					title: "React",
					description: "Experienced frontend engineer",
				},
				{
					id: "c72b28eb-79bd-45e1-919a-dec2d29c46cc",
					title: "HTML/CSS",
					description: "Experienced frontend engineer",
				},
			],
			socialMedia: [],
			_count: {
				followers: 0,
				following: 0,
			},
		},
		steps: [
			{
				id: "7d89a150-9988-441d-a56e-7923404f2d5d",
				title: "Build a Frontend Project",
				duration: "4 days",
				description:
					"Create a small project to practice your skills using HTML, CSS, and JavaScript.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "a4fe2b08-0493-4e20-b915-7290d8dc26a5",
				title: "Deploy Your Project Online",
				duration: "2 days",
				description:
					"Deploy your frontend project using a platform like GitHub Pages or Netlify.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "97ef740a-7b2f-4ff8-9dd1-4949f69770ff",
				title: "Learn HTML and CSS Basics",
				duration: "5 days",
				description:
					"Understand the basic structure of web pages using HTML and style them with CSS.",
				tags: [],
				attachments: [
					{
						id: "9",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [
					{
						id: "0b0ee9b5-22f2-4e3f-81fc-8c10c8555ab4",
						title: "RedirectLink",
						link: "https://www.w3schools.com/css/css_quiz.asp",
					},
				],
				completed: false,
			},
			{
				id: "ccc378bb-c7d4-4cf1-9113-85483cbc5604",
				title: "Master JavaScript Fundamentals",
				duration: "5 days",
				description:
					"Learn the core concepts of JavaScript, including variables, loops, and functions.",
				tags: [
					{
						id: "fe13a36b-de75-43db-a0d7-c6ffc7529c2f",
						name: "HTML/CSS",
						roadmapStepId: "ccc378bb-c7d4-4cf1-9113-85483cbc5604",
						color: "#FE7860",
					},
				],
				attachments: [
					{
						id: "10",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [
					{
						id: "54e38b31-03d0-47f3-ab05-211a2d5e0718",
						title: "RedirectLink",
						link: "https://www.w3schools.com/css/css_quiz.asp",
					},
				],
				completed: false,
			},
			{
				id: "0f2af7ad-778b-41e4-990d-2c20c772d31c",
				title: "Build a Simple Web Page",
				duration: "3 days",
				description: "Create a basic web page using HTML, CSS, and JavaScript.",
				tags: [
					{
						id: "70871263-0d64-481c-b1cc-968a2fa4f843",
						name: "Front",
						roadmapStepId: "0f2af7ad-778b-41e4-990d-2c20c772d31c",
						color: "#FE7860",
					},
				],
				attachments: [
					{
						id: "11",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [
					{
						id: "36ca42ce-4dfa-44e3-8389-d678459fdd9a",
						title: "RedirectLink",
						link: "https://www.w3schools.com/css/css_quiz.asp",
					},
				],
				completed: false,
			},
			{
				id: "158b0923-4c94-4c41-9f5b-20cddf5b1ae1",
				title: "Learn Responsive Design Principles",
				duration: "3 days",
				description:
					"Understand how to make web pages look good on all devices using responsive design techniques.",
				tags: [],
				attachments: [
					{
						id: "12",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [
					{
						id: "f3c58c89-cc95-4be6-a5ba-6ec5760bfb8d",
						title: "RedirectLink",
						link: "https://www.w3schools.com/css/css_quiz.asp",
					},
				],
				completed: false,
			},
			{
				id: "6e105ca8-7959-449a-96fc-29f4166f5340",
				title: "Explore CSS Frameworks (e.g., Bootstrap)",
				duration: "2 days",
				description:
					"Learn to use CSS frameworks to quickly style and layout web pages.",
				tags: [],
				attachments: [],
				verifications: [
					{
						id: "c785bbaa-10d4-4175-8484-6e76e9292b6b",
						title: "RedirectLink",
						link: "https://www.w3schools.com/css/css_quiz.asp",
					},
				],
				completed: false,
			},
			{
				id: "3317e905-ff0c-4b57-8998-d6c417778735",
				title: "Dive into Advanced JavaScript Concepts",
				duration: "4 days",
				description:
					"Explore more advanced topics in JavaScript, such as closures, promises, and async/await.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "b1cc79c0-74bf-43e0-bc84-ad4f1d44be2a",
				title: "Get Familiar with Version Control (Git)",
				duration: "2 days",
				description:
					"Learn the basics of version control using Git and GitHub.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "a3739a62-d816-4e39-8d8a-b4a2d481b574",
				title: "Learn a JavaScript Framework (e.g., React)",
				duration: "5 days",
				description:
					"Understand the basics of a popular JavaScript framework like React.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
		],
		tags: [],
		_count: {
			steps: 10,
			tags: 0,
		},
	},
	{
		id: "28c6c08b-30cd-4717-8fd0-a47baa4c40fa",
		description:
			"Deatiled steps to get you into Harvard class 2025 made by expert",
		icon: null,
		createdAt: "2024-06-26T16:04:11.834Z",
		userId: "a9522bbf-ea0e-4dbe-a498-dacfbc021acc",
		title: "Get Into Harvard ",
		duration: "1 month",
		flag: "Start your journey",
		primaryColor: "#831843",
		secondaryColor: "#506CF0",
		cover: null,
		subscribersCount: 0,
		urlIdentifier: "get-into-harvard ",
		price: {
			currency: "USD",
			amount: 10,
		},
		user: {
			id: "a9522bbf-ea0e-4dbe-a498-dacfbc021acc",
			email: "mohamed.abdsabour@roadmapwiki.com",
			role: "CREATOR",
			image: "",
			occupation: "Creator",
			roadmapsSubscribers: 0,
			fullName: "",
			userName: "MohamedABdelsabour",
			description: "",
			experiences: [
				{
					id: "9999cdb4-7891-48a9-a000-da2eb29c2f39",
					title: "Frontend Engineering",
					description: "Experienced frontend engineer",
				},
				{
					id: "ea376639-cad2-4bdc-a9a7-c3af17ec092c",
					title: "Scrum",
					description: "Experienced frontend engineer",
				},
				{
					id: "94a0dd29-c6ac-48c7-8c99-6f8dfab21961",
					title: "GIT",
					description: "Experienced frontend engineer",
				},
				{
					id: "8fb4bfc3-65d4-47db-b4b5-998e5da85f12",
					title: "React",
					description: "Experienced frontend engineer",
				},
				{
					id: "c72b28eb-79bd-45e1-919a-dec2d29c46cc",
					title: "HTML/CSS",
					description: "Experienced frontend engineer",
				},
			],
			socialMedia: [],
			_count: {
				followers: 0,
				following: 0,
			},
		},
		steps: [
			{
				id: "6defb1d2-9720-41c1-9127-7c721302a002",
				title: "Participate in Extracurricular Activities",
				duration: "5 days",
				description:
					"Engage in activities that showcase your leadership and talents.",
				tags: [],
				attachments: [],
				verifications: [
					{
						id: "6af18243-0dcd-4f57-8c69-9b62c3d65529",
						title: "RedirectLink",
						link: "https://implicit.harvard.edu/implicit/takeatest.html",
					},
				],
				completed: false,
			},
			{
				id: "4b243ee7-52f1-410c-9bb4-ad2b115903de",
				title: "Write Personal Statement Draft",
				duration: "3 days",
				description:
					"Draft a compelling personal statement for your application.",
				tags: [],
				attachments: [],
				verifications: [
					{
						id: "be15cb6b-d008-436f-a7bf-9b5e5b11a4ef",
						title: "RedirectLink",
						link: "https://implicit.harvard.edu/implicit/takeatest.html",
					},
				],
				completed: false,
			},
			{
				id: "1d16c42f-1570-46d2-ad9f-7be95407e981",
				title: "Write Personal Statement Draft",
				duration: "3 days",
				description:
					"Draft a compelling personal statement for your application.",
				tags: [],
				attachments: [],
				verifications: [
					{
						id: "104211dd-a56d-4545-a0b4-8f1f56fe7c09",
						title: "RedirectLink",
						link: "https://implicit.harvard.edu/implicit/takeatest.html",
					},
				],
				completed: false,
			},
			{
				id: "9e421885-1b50-44b3-b003-e2beefaccf3b",
				title: "Research Harvard Programs",
				duration: "3 days",
				description:
					"Research different programs offered at Harvard to find the best fit for your goals.",
				tags: [
					{
						id: "7561beee-0f34-4c4f-a34c-93e43ca4b40b",
						name: "Personal Development",
						roadmapStepId: "9e421885-1b50-44b3-b003-e2beefaccf3b",
						color: "#FE7860",
					},
				],
				attachments: [
					{
						id: "1",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
					{
						id: "2",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [
					{
						id: "881d56f6-4b31-44b4-94c5-c1a629ddef8b",
						title: "RedirectLink",
						link: "https://implicit.harvard.edu/implicit/takeatest.html",
					},
				],
				completed: false,
			},
			{
				id: "4f78c02c-3bfc-4d35-a242-76b0dff8d5d1",
				title: "Meet with a Guidance Counselor",
				duration: "2 days",
				description:
					"Discuss your goals and get advice on how to improve your application.",
				tags: [],
				attachments: [
					{
						id: "4",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
					{
						id: "5",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [
					{
						id: "5e5850e1-909e-4d96-a324-e124d387f47b",
						title: "RedirectLink",
						link: "https://implicit.harvard.edu/implicit/takeatest.html",
					},
				],
				completed: false,
			},
			{
				id: "e3d8ba48-a92b-4f50-a039-5aa28bd362e8",
				title: "Prepare for Standardized Tests",
				duration: "1 week",
				description: "Start preparing for SAT/ACT exams to ensure high scores.",
				tags: [
					{
						id: "c81031cf-3be3-48a6-ab88-b3d399879bd5",
						name: "Career",
						roadmapStepId: "e3d8ba48-a92b-4f50-a039-5aa28bd362e8",
						color: "#FE7860",
					},
				],
				attachments: [
					{
						id: "3",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
					{
						id: "6",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [],
				completed: false,
			},
			{
				id: "806e0010-0f21-48b2-afba-2c3f7c4a3383",
				title: "Collect Letters of Recommendation",
				duration: "2 days",
				description:
					"Request and collect letters of recommendation from teachers and mentors.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "00b42216-2c67-4228-85fb-bd4b4a623dda",
				title: "Visit Harvard Campus (Virtual or In-Person)",
				duration: "2 days",
				description:
					"Get a feel for the campus environment through a visit or virtual tour.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "9df59296-91f1-470f-b803-bf1972b1f99c",
				title: "Finalize Personal Statement",
				duration: "2 days",
				description:
					"Revise and finalize your personal statement for submission.",
				tags: [],
				attachments: [],
				verifications: [],
				completed: false,
			},
			{
				id: "97185507-aa34-47f6-b11b-9303e7443224",
				title: "Complete Application Forms",
				duration: "4 days",
				description: "Fill out and review all application forms thoroughly.",
				tags: [],
				attachments: [
					{
						id: "7",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [],
				completed: false,
			},
			{
				id: "1c19ac27-0baa-4721-b602-8c6c080374a5",
				title: "Review and Submit Application",
				duration: "3 days",
				description:
					"Carefully review your entire application and submit it before the deadline.",
				tags: [],
				attachments: [
					{
						id: "8",
						type: "IMAGE",
						url: "https://picsum.photos/300/200",
					},
				],
				verifications: [
					{
						id: "1ff306a3-7f3f-4d6b-97af-78053f176699",
						title: "RedirectLink",
						link: "https://www.w3schools.com/css/css_quiz.asp",
					},
				],
				completed: false,
			},
		],
		tags: [
			{
				id: "4881789d-a6e1-4597-959d-4a31a2ef2368",
				roadmapId: "28c6c08b-30cd-4717-8fd0-a47baa4c40fa",
				tag: "Education",
				color: "#00CF7C",
			},
			{
				id: "35e09ed1-3cdd-4240-abae-139395291313",
				roadmapId: "28c6c08b-30cd-4717-8fd0-a47baa4c40fa",
				tag: "Harvard",
				color: "#00CF7C",
			},
		],
		_count: {
			steps: 11,
			tags: 2,
		},
	},
];

const Hero = () => {
	const [index, setIndex] = useState(0);
	const [intervalDuration, setIntervalDuration] = useState(2000);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevIndex => (prevIndex + 1) % roadmapList.length);
		}, intervalDuration);

		return () => clearInterval(interval);
	}, [intervalDuration]);

	useEffect(() => {
		if (index === 0 || index === roadmapList.length - 1) {
			setIntervalDuration(1000);
		} else {
			setIntervalDuration(2000);
		}
	}, [index]);

	return (
		<section className="relative px-6 lg:px-[4.5rem] py-[4.5rem] flex-jb-c flex-col lg:flex-row gap-4 z-10">
			<div className="w-full lg:w-7/12 grid text-center lg:text-start">
				<div className="relative">
					<h1 className="relative text-[24px] sm:text-[48px] font-extrabold text-[#171618]">
						Your ultimate 🚀
						<br /> Roadmap <br className="hidden lg:block" /> To{" "}
						<div
							style={{
								filter: `drop-shadow(0 0rem 2.2rem ${roadmapList[index].primaryColor}99)`,
							}}
							className="relative lg:absolute lg:left-[63px] lg:bottom-[-50px] w-full lg:w-[90%] h-16 sm:h-28 flex justify-center items-center"
						>
							<div className="h-16 sm:h-28 inline-block overflow-hidden transition-opacity ease-in duration-700">
								<div
									className={`flex flex-col  ${
										index === 0 ? "" : "transition-all ease-in-out duration-150"
									}  `}
									style={{ transform: `translateY(-${index * 25}%)` }}
								>
									<div
										style={{ color: roadmapList[0].primaryColor }}
										className={`font-outfit font-extrabold h-16 sm:h-28 leading-[53px]`}
									>
										{roadmapList[0].title}
									</div>
									<div
										style={{ color: roadmapList[1].primaryColor }}
										className={`font-outfit font-extrabold h-16 sm:h-28 leading-[53px]`}
									>
										{roadmapList[1].title}
									</div>
									<div
										style={{ color: roadmapList[2].primaryColor }}
										className={`font-outfit font-extrabold h-16 sm:h-28 leading-[53px]`}
									>
										{roadmapList[2].title}
									</div>
									<div
										style={{ color: roadmapList[3].primaryColor }}
										className={`font-outfit font-extrabold h-16 sm:h-28 leading-[53px]`}
									>
										{roadmapList[3].title}
									</div>
								</div>
							</div>
						</div>
					</h1>
				</div>
				<p className="text-[#171618] font-inter font-normal text-[14px] sm:text-[18px] leading-[27px] mt-[20px] lg:mt-[45px]">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s
				</p>

				<div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 mt-[20px] md:mt-[40px]">
					<button className="w-[148px] md:w-[208px] h-[42px] md:h-[56px] flex-jc-c text-[14px] md:text-[16px] p-[16px] text-white font-inter font-semibold bg-primary-ultramarineBlue rounded-[10px]">
						Create Roadmap
					</button>
					<button className="w-[148px] md:w-[208px] h-[42px] md:h-[56px] flex-jc-c gap-2 text-[14px] md:text-[16px] p-[16px] text-[#191718] font-inter font-semibold bg-background border-2 border-[#ACB5B7] rounded-[10px]">
						{HERO_PLAY_ICON} Watch demo
					</button>
				</div>
			</div>

			<Roadmap roadmap={roadmapList[index]} />

			<div
				style={{
					background:
						"linear-gradient(90deg, #A990FF 0%, #57CFEF 50%, #7FEA96 100%)",
					opacity: "8%",
				}}
				className="absolute w-full h-[95%] bottom-0 left-0 -z-10 blur-2xl"
			/>
		</section>
	);
};

export default Hero;
