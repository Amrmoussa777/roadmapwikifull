import { ONBOARDING_STEPS } from "@/enum/userTips";
import { useRouter } from "next/navigation";

type RouteParams = {
	userName?: string;
	[key: string]: string | ONBOARDING_STEPS | undefined;
};

class RedirectHandler {
	private routes: {
		[key: string]: { route: (params: RouteParams) => string; hashId?: string };
	};

	constructor() {
		this.routes = {
			ADD_DESCRIPTION: { route: this.profileRoute, hashId: "info" },
			ADD_OCCUPATION: { route: this.profileRoute, hashId: "info" },
			ADD_SOCIAL_MEDIA: { route: this.profileRoute, hashId: "links" },
			CUSTOMIZE_PROFILE_PICTURE: { route: this.profileRoute },
			SET_COVER_PHOTO: { route: this.profileRoute },
			ADD_PHONE_NUMBER: { route: this.profileRoute, hashId: "links" },
			CREATE_FIRST_ROADMAP: { route: this.genericRoute("/builder") },
			CREATE_FIRST_POST: { route: this.genericRoute("/post/create") },
			CREATE_FIRST_COMMENT: { route: this.genericRoute("/comment/create") },
			SUBSCRIBE_TO_ROADMAP: { route: this.genericRoute("/roadmaps") },
			FOLLOW_OTHER_CREATORS: { route: this.genericRoute("/roadmaps") },
			SHARE_WITH_FRIENDS: { route: this.genericRoute("/roadmaps") },
			LINK_WEBSITE: { route: this.profileRoute, hashId: "links" },
			// Add more routes if needed
		};
	}

	private genericRoute(route: string) {
		return () => route;
	}

	private profileRoute(params: RouteParams): string {
		const { userName } = params;
		if (!userName) {
			throw new Error("userName is required for profile-related routes");
		}
		return `/user/${userName}`;
	}

	public redirect(
		router: ReturnType<typeof useRouter>,
		key: string,
		params: RouteParams = {}
	) {
		const routeHandler = this.routes[key];
		if (!routeHandler) {
			throw new Error(`No route found for key: ${key}`);
		}
		let path = routeHandler.route(params);
		if (routeHandler.hashId) {
			path += `#${routeHandler.hashId}`;
		}
		router.push(path);
	}
}

export { RedirectHandler };
