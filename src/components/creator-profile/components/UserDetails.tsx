import React from "react";
import { useAppSelector } from "@/redux/store";
import { SOCIAL_MEDIA_ICONS } from "@/config/socialMediaIcons";

const UserDetails = () => {
	const { user } = useAppSelector(state => state.userProfile);

	const { fullName, userName, occupation, socialMedia } = user || {};

	return (
		<div className="md:ml-[196px]">
			<div className="flex items-center flex-wrap">
				<h3 className="text-[24px] font-semibold text-black">{fullName}</h3>
				<span className="text-[16px] font-normal text-[#898989]">
					@{userName}
				</span>
			</div>

			<span className="text-[16px] font-normal text-[#898989] block">
				{occupation}
			</span>

			{socialMedia?.length ? (
				<div className="w-full flex gap-2 mt-1">
					{socialMedia.map(item => (
						<a
							key={item.id}
							target="_blank"
							href={`https://${item.link}`}
							className="w-[40px] h-[40px]"
						>
							{SOCIAL_MEDIA_ICONS[item.platform]}
						</a>
					))}
				</div>
			) : null}
		</div>
	);
};

export default UserDetails;
