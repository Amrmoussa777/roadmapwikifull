import { StaticImageData } from "next/image";

export type AvatarPropsType = {
	name: string;
	image_url?: string | StaticImageData;
	customStyles?: string;
};

export type AvatarImagePropsType = {
	image_url: string | StaticImageData;
};
