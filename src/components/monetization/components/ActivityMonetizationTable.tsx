import ActivityMonetizationTableItem from "@/components/monetization/components/ActivityMonetizationTableItem";
import React from "react";

const ActivityMonetizationTable = () => {
	return (
		<div className="w-full !overflow-x-scroll mt-[24px]">
			<table className="w-full table-auto text-[14px]">
				<thead>
					<tr className="bg-[#EBECF2] text-[#696969] [&>th]:px-[24px] [&>th]:py-[14px] [&>th]:font-medium [&>th]:text-start [&>th]:text-[14px]">
						<th className="min-w-[250px] md:min-w-[346px]">Roadmap</th>
						<th className="min-w-[180px] md:min-w-[250px]">User</th>
						<th className="min-w-[150px] md:min-w-[200px]">Action</th>
						<th className="min-w-[88px] md:min-w-[100px]">Credit</th>
						<th className="md:min-w-[200px] min-w-[250px]">Date</th>
						<th className="md:min-w-[120px] min-w-[150px]">Status</th>
					</tr>
				</thead>
				<tbody className="[&>tr>td]:px-[24px] [&>tr>td]:h-[64px] font-medium text-[#606060]">
					{Array.from(Array(10)).map((_, i) => (
						<ActivityMonetizationTableItem key={i} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ActivityMonetizationTable;
