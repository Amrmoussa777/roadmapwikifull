import { TestimonialsList } from "@/components/landing-page/types/testimonials.types";
import avatar from "@public/landing-page-avatar.png";

export const testimonialsList: TestimonialsList = [
	[
		{
			id: "1",
			user: {
				image: avatar,
				name: "Mike Warren",
				job: "Marketing Director",
			},
			heading: "\u201CFinally, a clear path forward\u201D",
			comment:
				"I was overwhelmed trying to transition into tech. Roadmap gave me a step-by-step plan that actually made sense. Within 3 months, I landed my first developer role.",
		},
		{
			id: "2",
			user: {
				image: avatar,
				name: "Mohamed Elhossiny",
				job: "Product Designer",
			},
			heading: "\u201CThe mentorship changed everything\u201D",
			comment:
				"Having access to expert-created roadmaps with community support felt like having a personal mentor. The structured approach saved me months of trial and error.",
		},
	],
	[
		{
			id: "1",
			user: {
				image: avatar,
				name: "Mohamed AbdSabour",
				job: "Frontend Developer",
			},
			heading: "\u201CBest learning tool I\u2019ve used\u201D",
			comment:
				"As a self-taught developer, I struggled with knowing what to learn next. Roadmap solved that completely. The community discussions on each step are incredibly valuable.",
		},
		{
			id: "2",
			user: {
				image: avatar,
				name: "Amr Moussa",
				job: "Backend Developer",
			},
			heading: "\u201CHighly recommended for teams\u201D",
			comment:
				"We use Roadmap to onboard new engineers at our company. The structured pathways and progress tracking make it easy to ensure everyone gets up to speed quickly.",
		},
	],
];
