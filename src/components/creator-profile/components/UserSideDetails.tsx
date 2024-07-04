"use client";

import useToggle from "@/hooks/useToggle";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React from "react";

const UserSideDetails = () => {
	const experiences = [
		{
			id: "9999cdb4-7891-48a9-a000-da2eb29c2f39",
			title: "Frontend Engineering",
			description: "Experienced frontend engineer",
		},
		{
			id: "ea376639-cad2-4bdc-a9a7-c3af17ec092c",
			title: "Scrum",
			description: "Experienced frontend engineer",
		},
		{
			id: "94a0dd29-c6ac-48c7-8c99-6f8dfab21961",
			title: "GIT",
			description: "Experienced frontend engineer",
		},
		{
			id: "8fb4bfc3-65d4-47db-b4b5-998e5da85f12",
			title: "React",
			description: "Experienced frontend engineer",
		},
		{
			id: "c72b28eb-79bd-45e1-919a-dec2d29c46cc",
			title: "HTML/CSS",
			description: "Experienced frontend engineer",
		},
	];

	const { currentState: isReadMore, toggle: toggleReadMore } = useToggle(false);

	return (
		<div className="relative md:sticky w-full md:max-w-[296px] h-fit md:top-4 mt-4 rounded-[12px] p-[18px] bg-white">
			<h3 className="text-[16px] font-normal text-[#383838]">
				Additional details
			</h3>

			<ul className="mt-4 flex flex-col gap-4 [&>li>p]:text-[12px] [&>li>p]:text-[#606060] [&>li>span]:font-inter [&>li>span]:text-[14px] [&>li>span]:font-medium [&>li>span]:text-[#383838]">
				<li>
					<p>Followers</p>
					<span>1200</span>
				</li>
				<li>
					<p>Roadmap Subscription</p>
					<span>4000</span>
				</li>
				<li>
					<p>Description</p>
					<span
						className={`!font-normal leading-[140%] ${
							isReadMore ? "line-clamp-none" : "line-clamp-1 md:line-clamp-3"
						}`}
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummytext
						ever example text
					</span>
					<button
						onClick={toggleReadMore}
						className={`flex-jc-c gap-1 text-[14px] font-inter font-normal [&>svg]:w-[20px] text-[#506CF0] ${
							isReadMore ? "[&>svg]:rotate-0" : "[&>svg]:rotate-180"
						} [&>svg]:transition-all`}
					>
						{isReadMore ? "Read less" : "Read more"} {ARROW_ICON}
					</button>
				</li>
				<li>
					<p>Email</p>
					<span>mhmdlogan@gmail.com</span>
				</li>
				<li>
					<p>Join date</p>
					<span>10 Feb 2024</span>
				</li>
				<li>
					<p>Experiences</p>

					{experiences ? (
						<div className="w-full flex gap-2 flex-wrap mt-2">
							{experiences.map(item => (
								<span
									key={item.id}
									className="h-[30px] flex-jc-c px-4 border border-grey-iconBorder rounded-full text-[12px] font-medium font-inter"
								>
									{item.title}
								</span>
							))}
						</div>
					) : null}
				</li>
			</ul>
		</div>
	);
};

export default UserSideDetails;
