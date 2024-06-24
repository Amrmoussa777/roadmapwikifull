import React from "react";
import { DURATION_ICON } from "../../../../../public/icons/roadmapSteps";
import {
	STEPS_ICON,
	USERS_ICON,
} from "../../../../../public/icons/roadmapPreview";

const roadmapTags = [
	{
		id: "1",
		title: "HTML",
	},
	{
		id: "2",
		title: "CSS",
	},
	{
		id: "3",
		title: "React",
	},
	{
		id: "4",
		title: "Next",
	},
	{
		id: "5",
		title: "Tailwind",
	},
	{
		id: "6",
		title: "Git",
	},
];

const RoadmapDetails = () => {
	return (
		<div className="bg-white w-[500px] h-fit hidden lg:flex flex-col gap-4 p-4 py-3 rounded-md sticky top-2">
			<div>
				<h3>Description</h3>
				<p className="text-grey-secondary">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummytext ever
					example text
				</p>
			</div>

			<ul className="flex flex-col gap-2 [&>li>div]:flex [&>li]:items-center [&>li>div]:gap-1 [&>li>div>span]:my-auto [&>li>p]:text-grey-secondary">
				<li>
					<div>
						<span className="text-grey-icon">{DURATION_ICON}</span>
						<h3>Duration</h3>
					</div>
					<p>12 weeks</p>
				</li>
				<li>
					<div>
						<span>{USERS_ICON}</span>
						<h3>Subscribers</h3>
					</div>
					<p>2000</p>
				</li>
				<li>
					<div>
						<span>{STEPS_ICON}</span>
						<h3>Steps</h3>
					</div>
					<p>12</p>
				</li>

				<li>
					<div>
						<h3>Steps</h3>
					</div>

					<div className="w-full flex gap-2 flex-wrap mt-1">
						{roadmapTags.map(tag => (
							<span
								key={tag.id}
								className="h-[26px] flex-jc-c text-sm px-4 border border-grey-iconBorder rounded-full"
							>
								{tag.title}
							</span>
						))}
					</div>
				</li>
			</ul>
		</div>
	);
};

export default RoadmapDetails;
