import CreatorProfile from "@/components/creator-profile/components/CreatorProfile";
import UserProfile from "@/components/user-profile/components/UserProfile";
import React from "react";
import { cookies } from "next/headers";
import { getUser } from "@/app/auth/services/getUser";

const page = async ({ params }: { params: { username: string } }) => {
	const accessToken = cookies().get("accessToken");
	const currentUser = await getUser(accessToken?.value);

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
