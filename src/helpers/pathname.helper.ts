class PathnameHelper {
	static getLastPathname(pathname: string) {
		const pathnameArray = pathname.split("/");
		const lastPathname = pathnameArray[pathnameArray.length - 1];

		return lastPathname;
	}

	static getRoadmapId(pathname: string) {
		const pathnameArray = pathname.split("/");
		const roadmapId = pathnameArray[2];

		return roadmapId;
	}

	static isHomePage(pathname: string) {
		const isHomePage = pathname === "/";

		return isHomePage;
	}

	static clearUrlParams() {
		const newUrl =
			window.location.protocol +
			"//" +
			window.location.host +
			window.location.pathname;
		window.history.replaceState({ path: newUrl }, "", newUrl);
	}
}

export default PathnameHelper;
