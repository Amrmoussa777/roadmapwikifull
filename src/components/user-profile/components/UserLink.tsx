import { UserLinkProps } from "@/components/user-profile/types/user-profile-links.types";
import { SOCIAL_MEDIA_ICONS } from "@/config/socialMediaIcons";
import { useFetch } from "@/hooks/useFetch";
import { deleteUserLink } from "@/redux/slices/user-profile/userProfileSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CROSS_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const UserLink = ({ socialMediaLink, disabled }: UserLinkProps) => {
	const { id, link, platform } = socialMediaLink;
	const { fetchData } = useFetch();
	const dispatch = useAppDispatch();
	const { links, user } = useAppSelector(state => state.userProfile);

	const handleDeleteLink = async () => {
		const updatedLinks = links.filter(link => link.id !== id);
		await fetchData("POST", `users/${user?.id}/social-media`, updatedLinks);
		dispatch(deleteUserLink(id));
	};

	return (
		<li
			className={`w-full flex-jb-c gap-2 [&>svg]:my-[8px] [&>svg]:text-[#79828B] col-span-2 md:col-span-1`}
		>
			<div className="flex-jc-c gap-2 [&>svg]:text-[#79828B]">
				{SOCIAL_MEDIA_ICONS[platform]}
				<div className="flex flex-col">
					<span className="font-poppins text-[12px] text-[#606060]">
						{platform}
					</span>

					<a
						href={link}
						target="_blank"
						className="font-inter font-medium text-primary-ultramarineBlue outline-none"
					>
						{link}
					</a>
				</div>
			</div>

			{!disabled ? (
				<button
					onClick={handleDeleteLink}
					className="w-[30px] h-[30px] flex-jc-c rounded-md text-[#666666] bg-[#F5F5F5] hover:shadow-md transition duration-200 border hover:border-primary-ultramarineBlue"
				>
					{CROSS_ICON}
				</button>
			) : null}
		</li>
	);
};

export default UserLink;
