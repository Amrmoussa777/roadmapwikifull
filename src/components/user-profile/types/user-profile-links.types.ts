export type UserLinkType = {
	id: string;
	platform: string;
	link: string;
};

export type UserLinkProps = {
	socialMediaLink: UserLinkType;
	disabled: boolean;
};
