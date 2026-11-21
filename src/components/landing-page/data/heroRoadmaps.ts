import { RoadmapStepType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

const step = (
	id: string,
	title: string,
	duration: string,
	imageCount = 0
): RoadmapStepType => ({
	id,
	title,
	duration,
	description: "",
	tags: [],
	attachments: Array.from({ length: imageCount }, (_, index) => ({
		id: `${id}-${index}`,
		type: "IMAGE",
		key: "",
		url: "",
	})),
	verifications: [],
	order: 1,
});

export type HeroRoadmap = {
	id: string;
	title: string;
	primaryColor: string;
	steps: RoadmapStepType[];
};

export const heroRoadmaps: HeroRoadmap[] = [
	{
		id: "28c6c08b-30cd-4717-8fd0-a47baa4c40fa",
		title: "Get Into Harvard",
		primaryColor: "#831843",
		steps: [
			step("6defb1d2-9720-41c1-9127-7c721302a002", "Participate in Extracurricular Activities", "5 days"),
			step("4b243ee7-52f1-410c-9bb4-ad2b115903de", "Write Personal Statement Draft", "3 days"),
			step("9e421885-1b50-44b3-b003-e2beefaccf3b", "Research Harvard Programs", "3 days", 2),
			step("4f78c02c-3bfc-4d35-a242-76b0dff8d5d1", "Meet with a Guidance Counselor", "2 days", 2),
			step("e3d8ba48-a92b-4f50-a039-5aa28bd362e8", "Prepare for Standardized Tests", "1 week", 2),
			step("806e0010-0f21-48b2-afba-2c3f7c4a3383", "Collect Letters of Recommendation", "2 days"),
			step("00b42216-2c67-4228-85fb-bd4b4a623dda", "Visit Harvard Campus (Virtual or In-Person)", "2 days"),
			step("9df59296-91f1-470f-b803-bf1972b1f99c", "Finalize Personal Statement", "2 days"),
			step("97185507-aa34-47f6-b11b-9303e7443224", "Complete Application Forms", "4 days", 1),
			step("1c19ac27-0baa-4721-b602-8c6c080374a5", "Review and Submit Application", "3 days", 1),
		],
	},
	{
		id: "c6f1878f-fcb3-4068-99e7-33eb6c5742c1",
		title: "Lose Weight Effectively",
		primaryColor: "#C2410C",
		steps: [
			step("f3809aa2-fb9b-4fc3-b047-546f71d3c222", "Set Realistic Goals", "7 days"),
			step("2db3b3dc-2d07-4291-9132-e0d769af1ec3", "Start a Food Journal", "14 days"),
			step("17c97c7a-e99a-4ed8-a17e-4108fb749ae3", "Incorporate Regular Exercise", "30 days"),
			step("319d1d2f-1b50-4d49-ab08-f23b32965f83", "Understand Nutrition Basics", "14 days"),
			step("3316dd5f-0f7a-48d4-9a18-945e4bb8c3b9", "Plan Balanced Meals", "21 days"),
			step("30ec8705-6130-4145-9dba-205b313fb9c0", "Monitor Your Progress", "30 days"),
			step("a36fa264-0e9d-4f42-94b7-5686259aac25", "Get Adequate Sleep", "14 days"),
		],
	},
	{
		id: "d873a3ea-ef68-483f-8ba8-d11fc36d8074",
		title: "Become Frontend Engineer",
		primaryColor: "#506CF0",
		steps: [
			step("97ef740a-7b2f-4ff8-9dd1-4949f69770ff", "Learn HTML and CSS Basics", "5 days", 1),
			step("ccc378bb-c7d4-4cf1-9113-85483cbc5604", "Master JavaScript Fundamentals", "5 days", 1),
			step("0f2af7ad-778b-41e4-990d-2c20c772d31c", "Build a Simple Web Page", "3 days", 1),
			step("158b0923-4c94-4c41-9f5b-20cddf5b1ae1", "Learn Responsive Design Principles", "3 days", 1),
			step("6e105ca8-7959-449a-96fc-29f4166f5340", "Explore CSS Frameworks (e.g., Bootstrap)", "2 days"),
			step("3317e905-ff0c-4b57-8998-d6c417778735", "Dive into Advanced JavaScript Concepts", "4 days"),
			step("b1cc79c0-74bf-43e0-bc84-ad4f1d44be2a", "Get Familiar with Version Control (Git)", "2 days"),
			step("a3739a62-d816-4e39-8d8a-b4a2d481b574", "Learn a JavaScript Framework (e.g., React)", "5 days"),
			step("7d89a150-9988-441d-a56e-7923404f2d5d", "Build a Frontend Project", "4 days"),
			step("a4fe2b08-0493-4e20-b915-7290d8dc26a5", "Deploy Your Project Online", "2 days"),
		],
	},
];
