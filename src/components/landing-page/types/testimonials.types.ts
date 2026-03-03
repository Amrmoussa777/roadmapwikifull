import { StaticImport } from "next/dist/shared/lib/get-img-props";
export type TestimonialUser = {
	image: string | StaticImport;
	name: string;
	job: string;
};

export type TestimonialItem = {
	id: string;
	user: TestimonialUser;
	heading: string;
	comment: string;
}[];

export type TestimonialsList = TestimonialItem[];
