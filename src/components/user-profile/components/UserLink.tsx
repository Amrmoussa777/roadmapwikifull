import { UserLinkProps } from "@/components/user-profile/types/user-profile-links.types";
import React from "react";

const UserLink = ({ link, disabled }: UserLinkProps) => {
	const { label, href, icon } = link;

	return (
		<li
			className={`w-full flex gap-2 [&>svg]:my-[8px] [&>svg]:text-[#79828B] col-span-2 md:col-span-1`}
		>
			<div className="flex-jc-c gap-2 [&>svg]:text-[#79828B]">
				{icon}
				<div className="flex flex-col">
					<span className="font-poppins text-[12px] text-[#606060]">
						{label}
					</span>

					<a
						href={href}
						target="_blank"
						contentEditable={disabled}
						suppressContentEditableWarning={true}
						className="font-inter font-medium text-primary-ultramarineBlue outline-none"
					>
						{href}
					</a>
				</div>
			</div>
		</li>
	);
};

export default UserLink;
