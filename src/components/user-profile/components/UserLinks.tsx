"use client";

import UserProfileEditButton from "@/components/common/button/UserProfileEditButton";
import UserProfileSaveButton from "@/components/common/button/UserProfileSaveButton";
import NumberStats from "@/components/common/states/NumberStats";
import AddLinkForm from "@/components/user-profile/components/AddLinkForm";
import UserLink from "@/components/user-profile/components/UserLink";
import UserLinksLoader from "@/components/user-profile/components/loading/UserLinksLoader";
import useToggle from "@/hooks/useToggle";
import { useAppSelector } from "@/redux/store";
import React from "react";

const UserLinks = () => {
	const { currentState: isEditEnabled, toggle: toggleEdit } = useToggle(false);
	const { links, isLoading } = useAppSelector(state => state.userProfile);

	if (isLoading) return <UserLinksLoader />;

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

			{links.length ? (
				<ul className="flex flex-col gap-2">
					{links.map(link => (
						<UserLink key={link.href} link={link} disabled={isEditEnabled} />
					))}
				</ul>
			) : (
				<NumberStats
					text="No social media links yet"
					customStyles="!text-[14px] text-start"
				/>
			)}

			{isEditEnabled ? (
				<>
					<AddLinkForm />

					<UserProfileSaveButton
						handleSave={toggleEdit}
						handleCancel={toggleEdit}
					/>
				</>
			) : null}
		</div>
	);
};

export default UserLinks;
