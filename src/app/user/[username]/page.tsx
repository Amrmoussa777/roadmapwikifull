import CreatorProfile from "@/components/creator-profile/components/CreatorProfile";
import UserProfile from "@/components/user-profile/components/UserProfile";
import React from "react";
import { getUser } from "@/app/auth/services/getUser";

const page = async ({ params }: { params: { username: string } }) => {
	const currentUser = await getUser();

	const { username } = params;

	return (
		<>
			{currentUser?.userName === username ? (
				<UserProfile />
			) : (
				<CreatorProfile />
			)}
		</>
	);
};

export default page;
