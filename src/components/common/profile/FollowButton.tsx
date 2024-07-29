"use client";

import PathnameHelper from "@/helpers/pathname.helper";
import { useFetch } from "@/hooks/useFetch";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const FollowButton = ({ customStyles = "" }: { customStyles?: string }) => {
	const { roadmap } = useAppSelector(state => state.roadmapPreview);
	const { user } = roadmap || {};
	const { id } = user || {};
	const { currentUser } = useContext(CurrentUserContext);
	const { push } = useRouter();

	const { fetchData, loading } = useFetch();

	const follow = async () => {
		await fetchData("POST", `users/${id}/follow`);
	};

	const handleClickFollow = () => {
		if (currentUser) {
			follow;
		} else {
			return push(
				`/auth/login?redirectPath=/roadmap/${roadmap?.id}&action=followUser`
			);
		}
	};

	const urlParams = new URLSearchParams(location.search);
	const action = urlParams.get("action");

	useEffect(() => {
		if (action === "followUser" && currentUser) {
			follow();
			PathnameHelper.clearUrlParams();
		}
	}, [currentUser, action]);

	return (
		<button
			onClick={handleClickFollow}
			className={`w-full h-full px-6 bg-primary-ultramarineBlue text-white rounded-full border-2 border-transparent hover:border-primary-ultramarineBlue hover:bg-white hover:text-primary-ultramarineBlue transition duration-200 ${customStyles}`}
		>
			{loading ? "Loading..." : "Follow"}
		</button>
	);
};

export default FollowButton;
