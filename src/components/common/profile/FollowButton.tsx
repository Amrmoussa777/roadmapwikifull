"use client";

import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import PathnameHelper from "@/helpers/pathname.helper";
import { useFetch } from "@/hooks/useFetch";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { updateUserData } from "@/redux/slices/user-profile/userProfileSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const FollowButton = ({ customStyles = "" }: { customStyles?: string }) => {
	const { user } = useAppSelector(state => state.userProfile);
	const { id } = user || {};
	const { currentUser } = useContext(CurrentUserContext);
	const { push } = useRouter();
	const pathname = usePathname();
	const [hoverButtonText, setHoverButtonText] = useState("");
	const dispatch = useAppDispatch();
	const { fetchData, loading } = useFetch();

	const follow = async () => {
		await fetchData("POST", `users/${id}/follow`);
		dispatch(updateUserData({ isFollowed: !user?.isFollowed }));
	};

	const handleClickFollow = () => {
		if (currentUser) {
			follow();
		} else {
			return push(`/auth/login?redirectPath=${pathname}&action=followUser`);
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

	if (id && currentUser && id !== currentUser.id)
		return (
			<button
				onClick={handleClickFollow}
				disabled={loading}
				onMouseEnter={() =>
					setHoverButtonText(user?.isFollowed ? "Un follow" : "")
				}
				onMouseLeave={() => setHoverButtonText("")}
				className={`relative w-full h-full px-6 bg-primary-ultramarineBlue text-white rounded-full border-2 border-transparent hover:border-primary-ultramarineBlue disabled:hover:text-white disabled:hover:bg-primary-ultramarineBlue hover:bg-white hover:text-primary-ultramarineBlue transition duration-200 ${customStyles} overflow-hidden`}
			>
				{hoverButtonText
					? hoverButtonText
					: user?.isFollowed
					? "Following"
					: "Follow"}

				{loading ? <ButtonDotsLoader /> : null}
			</button>
		);
};

export default FollowButton;
