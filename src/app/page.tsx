import { getUser } from "@/app/auth/services/getUser";
import CreatorHome from "@/components/creator-home/components/CreatorHome";
import UserHome from "@/components/user-home/components/UserHome";
import LandingPage from "@/components/landing-page/components/landing-page/LandingPage";

export default async function Home() {
	const currentUser = await getUser();


	if (!currentUser) {
		return <LandingPage />;
	}

	if (currentUser.role === "CREATOR") {
		return <CreatorHome />;
	}

	return <UserHome />;
}

