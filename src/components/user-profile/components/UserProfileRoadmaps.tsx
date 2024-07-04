"use client";

import UserProfileSaveButton from "@/components/common/button/UserProfileSaveButton";
import UserProfileRoadmap from "@/components/user-profile/components/UserProfileRoadmap";
import useToggle from "@/hooks/useToggle";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import Link from "next/link";
import React from "react";

const UserProfileRoadmaps = () => {
	const { currentState: isEditEnabled, toggle: toggleEdit } = useToggle(false);

	return (
		<div id="subscribes" className="bg-white rounded-[12px] p-[18px]">
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					Subscribes
					<span className="w-[25px] h-[24px] ml-2 rounded-full inline-flex justify-center items-center text-[14px] text-[#79828B] bg-black/5">
						4
					</span>
				</h3>

				<Link
					href={`user/userId/roadmap-list`}
					className="font-inter font-medium text-[14px] flex-jc-c [&>svg]:w-[16px] [&>svg]:rotate-90 text-[#606060]"
				>
					View all {ARROW_ICON}
				</Link>
			</div>

			<ul>
				<UserProfileRoadmap />
			</ul>

			{isEditEnabled ? <UserProfileSaveButton toggleEdit={toggleEdit} /> : null}
		</div>
	);
};

export default UserProfileRoadmaps;
