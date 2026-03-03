import { getUser } from "@/app/auth/services/getUser";
import FullPageLoader from "@/components/common/loader/FullPageLoader";
import React, { Suspense, lazy } from "react";

const CreatorHome = lazy(
	() => import("@/components/creator-home/components/CreatorHome")
);
const UserHome = lazy(
	() => import("@/components/user-home/components/UserHome")
);
const LandingPage = lazy(
	() => import("@/components/landing-page/components/landing-page/LandingPage")
);

export default async function Home() {
	const currentUser = await getUser();
	console.log("currentUser2333", currentUser)
	return (
		<Suspense fallback={<FullPageLoader />}>
			{currentUser ? (
				currentUser.role === "CREATOR" ? (
					<CreatorHome />
				) : (
					<UserHome />
				)
			) : (
				<LandingPage />
			)}
		</Suspense>
	);
}
