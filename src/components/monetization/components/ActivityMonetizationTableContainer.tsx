import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import ActivityMonetizationSearchInput from "@/components/monetization/components/ActivityMonetizationSearchInput";
import ActivityMonetizationTable from "@/components/monetization/components/ActivityMonetizationTable";
import ActivityMonetizationTableFilters from "@/components/monetization/components/ActivityMonetizationTableFilters";
import React from "react";

const ActivityMonetizationTableContainer = () => {
	return (
		<div className="overflow-hidden font-inter mt-[24px] p-[16px] md:p-[24px] border border-[#DCDCDC] bg-white rounded-[12px]">
			<div className="flex justify-start lg:flex-jb-c flex-col lg:flex-row gap-4">
				<h2 className="text-[20px] text-[#1E293B] font-semibold">
					Recent Activity
				</h2>

				<div className="flex-grow md:flex-grow-0 flex-jb-c flex-col-reverse sm:flex-row">
					<ActivityMonetizationSearchInput />

					<VerticalDivider
						width="w-[1px]"
						bgColor="bg-[#D8D8D8]"
						customStyles="h-[24px] mx-[15px] my-auto hidden sm:block"
					/>

					<HorizontalDivider
						height="h-[1px]"
						bgColor="bg-[#D8D8D8]"
						customStyles="my-[15px] sm:hidden"
					/>
					<ActivityMonetizationTableFilters />
				</div>
			</div>

			<ActivityMonetizationTable />
		</div>
	);
};

export default ActivityMonetizationTableContainer;
