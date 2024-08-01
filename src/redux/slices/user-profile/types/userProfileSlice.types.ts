interface SocialMedia {
	id: string;
	platform: string;
	link: string;
}

interface Experience {
	id: string;
	title: string;
	description: string;
	userId: string;
}

interface Count {
	followers: number;
	following: number;
}

interface User {
	id: string;
	email: string;
	role: string;
	image: string;
	cover: string;
	occupation: string;
	roadmapsSubscribers: number;
	fullName: string;
	userName: string;
	description: string;
	socialMedia: SocialMedia[];
	experiences: Experience[];
	_count: Count;
}

interface UserProfileStateTypes {
	user: null | User;
	personalInfo: Record<string, string>[] | null;
	isLoading: boolean;
	links: {
		id: string;
		link: string;
		platform: string;
	}[];
	error: null | string;
}
