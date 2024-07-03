import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type NewAraFeatureProps = {
	image: string | StaticImport;
	title: string;
	description: string;
};
