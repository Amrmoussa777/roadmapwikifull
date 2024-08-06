import Avatar from "@/components/common/avatar/components/Avatar";
import FollowButton from "@/components/common/profile/FollowButton";
import PopularCreatorRating from "@/components/user-home/components/PopularCreatorRating";
import { PopularCreatorType } from "@/components/user-home/types/index.types";
import { USERS_ICON } from "@public/icons/roadmapPreview";
import React from "react";

const PopularCreator = ({
	fullName,
	id,
	image,
	occupation,
	rate,
	tags,
	subscribers,
}: PopularCreatorType) => {
	return (
		<div className="w-full mr-auto p-[10px] border border-[#DCDCDC] rounded-[20px]">
			<div className="w-full h-full p-[12px] rounded-[10px] bg-primary-ultramarineBlue/10">
				{/* Header */}
				<div className="flex-jb-c">
					<Avatar
						name={fullName}
						image_url=""
						customStyles="w-[36px] h-[36px] text-white"
					/>

					<FollowButton customStyles="!w-[100px] !h-[35px] font-inter font-normal text-[14px] !p-0" />
				</div>
				{/* Info */}
				<h3 className="font-inter font-semibold text-[16px] text-[#141414] mt-[14px]">
					{fullName}
				</h3>
				<p className="font-inter text-[12px] text-[#655F5F]">{occupation}</p>

				<PopularCreatorRating rate={rate} />

				{/* Tags */}
				<ul className="flex items-center gap-2 mt-[14px]">
					{tags.map(tag => (
						<li
							key={tag.id}
							className="w-full md:w-[75px] h-[24px] flex-jc-c text-[10px] font-inter text-[#79828B] border border-[#D8D8D8] rounded-full"
						>
							{tag.name}
						</li>
					))}
				</ul>

				<h3 className="flex items-center gap-2 font-inter font-medium text-[10px] text-[#655F5F] mt-[14px]">
					{USERS_ICON} {subscribers} Subscribers
				</h3>
			</div>
		</div>
	);
};

export default PopularCreator;
