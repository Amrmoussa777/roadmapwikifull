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
}

export default PathnameHelper;
