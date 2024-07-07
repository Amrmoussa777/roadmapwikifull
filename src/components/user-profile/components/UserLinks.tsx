"use client";

import UserProfileEditButton from "@/components/common/button/UserProfileEditButton";
import UserProfileSaveButton from "@/components/common/button/UserProfileSaveButton";
import UserLink from "@/components/user-profile/components/UserLink";
import useToggle from "@/hooks/useToggle";
import { useAppSelector } from "@/redux/store";
import { ADD_ICON } from "@public/icons/userProfile";
import React from "react";

const UserLinks = () => {
	const { currentState: isEditEnabled, toggle: toggleEdit } = useToggle(false);
	const { links } = useAppSelector(state => state.userProfile);

	return (
		<div id="links" className="bg-white sm:rounded-[12px] p-[18px]">
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					Links
				</h3>

				<UserProfileEditButton
					isEditEnabled={isEditEnabled}
					toggleEdit={toggleEdit}
				/>
			</div>

			<ul className="flex flex-col gap-2">
				{links.map(link => (
					<UserLink key={link.href} link={link} disabled={isEditEnabled} />
				))}
			</ul>

			{isEditEnabled ? (
				<>
					<button className="flex items-center gap-2 mt-8 font-inter text-[16px] text-primary-ultramarineBlue">
						<span className="w-[40px] h-[40px] flex-jc-c bg-primary-ultramarineBlue text-white rounded-full">
							{ADD_ICON}
						</span>{" "}
						Add link
					</button>

					<UserProfileSaveButton
						toggleEdit={toggleEdit}
						handleCancel={toggleEdit}
					/>
				</>
			) : null}
		</div>
	);
};

export default UserLinks;
