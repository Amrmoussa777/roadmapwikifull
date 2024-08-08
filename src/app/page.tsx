import { getUser } from "@/app/auth/services/getUser";
import CreatorHome from "@/components/creator-home/components/CreatorHome";
import LandingPage from "@/components/landing-page/components/landing-page/LandingPage";
import UserHome from "@/components/user-home/components/UserHome";
import { cookies } from "next/headers";

export default async function Home() {
	const cookieStore = cookies();
	const accessToken = cookieStore.get("accessToken")?.value;

	const currentUser = await getUser(accessToken);

	if (currentUser) {
		return currentUser.role === "CREATOR" ? <CreatorHome /> : <UserHome />;
	}

	return <LandingPage />;
}
