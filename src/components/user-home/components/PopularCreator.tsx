import Avatar from "@/components/common/avatar/components/Avatar";
import FollowButton from "@/components/common/profile/FollowButton";
import PopularCreatorRating from "@/components/user-home/components/PopularCreatorRating";
import { PopularCreatorType } from "@/components/user-home/types/index.types";
import { USERS_ICON } from "@public/icons/roadmapPreview";
import Link from "next/link";
import React from "react";

const PopularCreator = ({
	fullName,
	id,
	image,
	occupation,
	userName,
	_count,
	isFollowed,
	experiences,
	averageRating,
	roadmapsSubscribers,
}: PopularCreatorType) => {
	return (
		<div className="w-full mr-auto p-[10px] border border-[#DCDCDC] rounded-[20px]">
			<div className="w-full h-full p-[12px] rounded-[10px] bg-primary-ultramarineBlue/10">
				{/* Header */}
				<div className="flex-jb-c">
					<Avatar
						name={fullName}
						image_url={image}
						customStyles="w-[36px] h-[36px] text-white"
					/>

					<FollowButton
						isFollowed={isFollowed}
						userId={id}
						customStyles="!w-[100px] !h-[35px] font-inter font-normal text-[14px] !p-0"
					/>
				</div>
				{/* Info */}
				<Link
					href={`user/${userName}`}
					className="block font-inter font-semibold text-[16px] text-[#141414] hover:text-primary-ultramarineBlue mt-[14px] transition duration-200"
				>
					{fullName}
				</Link>
				<p className="font-inter text-[12px] text-[#655F5F]">{occupation}</p>

				<PopularCreatorRating
					rate={{ stars: averageRating, reviews: _count.reviews }}
				/>

				{/* Experiences */}
				<ul className="flex items-center gap-2 mt-[14px]">
					{experiences.slice(0, 2).map(item => (
						<li
							key={item.id}
							className="w-fit h-[24px] px-4 flex-jc-c text-[10px] font-inter text-[#79828B] border border-[#D8D8D8] rounded-full"
						>
							{item.title}
						</li>
					))}
				</ul>

				<h3 className="flex items-center gap-2 font-inter font-medium text-[10px] text-[#655F5F] mt-[14px]">
					{USERS_ICON} {roadmapsSubscribers} Subscribers
				</h3>
			</div>
		</div>
	);
};

export default PopularCreator;
