"use client";

import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import PathnameHelper from "@/helpers/pathname.helper";
import { useFetch } from "@/hooks/useFetch";
import useToggle from "@/hooks/useToggle";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const FollowButton = ({
	customStyles = "",
	isFollowed: initialIsFollowed,
	userId,
}: {
	customStyles?: string;
	isFollowed: boolean;
	userId: string;
}) => {
	const { currentUser } = useContext(CurrentUserContext);
	const { push } = useRouter();
	const pathname = usePathname() ?? "";
	const [hoverButtonText, setHoverButtonText] = useState("");
	const { fetchData, loading } = useFetch();
	const { currentState: isFollowed, toggle: toggleFollow } =
		useToggle(initialIsFollowed);

	const follow = async () => {
		await fetchData("POST", `users/${userId}/follow`);
	};

	const handleClickFollow = async () => {
		if (currentUser) {
			await follow();
			toggleFollow();
		} else {
			return push(`/auth/login?redirectPath=${pathname}&action=followUser`);
		}
	};

	const urlParams = new URLSearchParams(
		typeof window !== "undefined" ? location.search : ""
	);
	const action = urlParams.get("action");

	useEffect(() => {
		(async () => {
			if (action === "followUser" && currentUser) {
				await follow();
				toggleFollow();
				PathnameHelper.clearUrlParams();
			}
		})();
	}, [currentUser, action]);

	return (
		<button
			onClick={handleClickFollow}
			disabled={loading}
			onMouseEnter={() => setHoverButtonText(isFollowed ? "Unfollow" : "")}
			onMouseLeave={() => setHoverButtonText("")}
			className={`relative w-[120px] h-full px-6 bg-primary-ultramarineBlue text-white rounded-full border border-transparent hover:border-primary-ultramarineBlue disabled:hover:text-white disabled:hover:bg-primary-ultramarineBlue hover:bg-white hover:text-primary-ultramarineBlue transition duration-200 ${customStyles} overflow-hidden`}
		>
			{loading ? (
				<ButtonDotsLoader customStyles="[&>div]:bg-white" />
			) : hoverButtonText ? (
				hoverButtonText
			) : isFollowed ? (
				"Following"
			) : (
				"Follow"
			)}
		</button>
	);
};

export default FollowButton;
