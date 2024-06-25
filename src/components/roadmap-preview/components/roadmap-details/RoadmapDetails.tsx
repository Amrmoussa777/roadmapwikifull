"use client";

import React from "react";
import { DURATION_ICON } from "../../../../../public/icons/roadmapSteps";
import {
	STEPS_ICON,
	USERS_ICON,
} from "../../../../../public/icons/roadmapPreview";
import useToggle from "@/hooks/useToggle";
import { useAppSelector } from "@/redux/store";

const RoadmapDetails = () => {
	const { currentState: isMoreContent, toggle: toggleMoreContent } =
		useToggle(false);
	const { roadmap } = useAppSelector(state => state.roadmapPreview);
	const { description, duration, subscribers, stepsCount, tags } =
		roadmap || {};

	return (
		<div className="bg-white w-full lg:w-[500px] h-fit flex flex-col gap-4 p-4 py-3 rounded-md lg:sticky top-2">
			<div>
				<h3>Description</h3>
				<p className="text-grey-secondary">{description}</p>
			</div>

			<ul className="flex flex-col gap-2 [&>li>div]:flex [&>li]:items-center [&>li>div]:gap-1 [&>li>div>span]:my-auto [&>li>p]:text-grey-secondary">
				<li>
					<div>
						<span className="text-grey-icon">{DURATION_ICON}</span>
						<h3>Duration</h3>
					</div>
					<p>{duration}</p>
				</li>
				<li>
					<div>
						<span>{USERS_ICON}</span>
						<h3>Subscribers</h3>
					</div>
					<p>{subscribers}</p>
				</li>
				<li>
					<div>
						<span>{STEPS_ICON}</span>
						<h3>Steps</h3>
					</div>
					<p>{stepsCount}</p>
				</li>

				{isMoreContent ? (
					<li>
						<div>
							<h3>Tags</h3>
						</div>

						<div className="w-full flex gap-2 flex-wrap mt-1">
							{tags?.map(tag => (
								<span
									key={tag.id}
									className="h-[26px] flex-jc-c text-sm px-4 border border-grey-iconBorder rounded-full"
								>
									{tag.title}
								</span>
							))}
						</div>
					</li>
				) : null}

				<button onClick={toggleMoreContent} className="text-start">
					{isMoreContent ? "See less" : "See more..."}
				</button>
			</ul>
		</div>
	);
};

export default RoadmapDetails;
