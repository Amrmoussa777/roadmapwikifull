import { TestimonialsList } from "@/components/landing-page/types/testimonials.types";
import avatar from "@public/landing-page-avatar.png";

export const testimonialsList: TestimonialsList = [
	[
		{
			id: "1",
			user: {
				image: avatar,
				name: "Mike Warren",
				job: "Marketing director",
			},
			heading: "“Example dummy text”",
			comment:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
		{
			id: "2",
			user: {
				image: avatar,
				name: "Mohamed Elhossiny",
				job: "Product designer",
			},
			heading: "“Highly recommended”",
			comment:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
			heading: "“Example dummy text”",
			comment:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
		{
			id: "2",
			user: {
				image: avatar,
				name: "Amr Moussa",
				job: "Backend Developer",
			},
			heading: "“Highly recommended”",
			comment:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
	],
];
