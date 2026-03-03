import ActivityMonetizationDropButton from "@/components/monetization/components/ActivityMonetizationDropButton";
import React, { useState } from "react";

const MonetizationStatisticsFilters = () => {
	const [filters, setFilters] = useState([
		{
			active: "All roadmaps",
			list: [
				{
					id: "allRoadmaps",
					name: "All roadmaps",
				},
				{
					id: "allRoadmaps",
					name: "All roadmaps",
				},
			],
		},
		{
			active: "$ Revenue",
			list: [
				{
					id: "revenue",
					name: "$ Revenue",
				},
			],
		},
	]);

	return (
		<div className="flex gap-[15px]">
			{filters.map(item => (
				<ActivityMonetizationDropButton key={item.active} active={item.active}>
					{item.list.map(listItem => (
						<button
							key={listItem.id}
							className="monetization-statistics-filters-drop-button"
						>
							{listItem.name}
						</button>
					))}
				</ActivityMonetizationDropButton>
			))}
		</div>
	);
};

export default MonetizationStatisticsFilters;
