"use client";

import FilterItem from "@/components/roadmaps/components/FilterItem";
import FilterRangeSlider from "@/components/roadmaps/components/FilterSlider";
import useDisableScroll from "@/hooks/useDisableScrolling";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import useToggle from "@/hooks/useToggle";
import { FILTER_ICON } from "@public/icons/roadmaps";
import React from "react";

const RoadmapsFilter = () => {
	const { currentState: filterIsOpen, toggle } = useToggle(false);

	useDisableScroll(filterIsOpen);
	const { responsive } = useSizeScreen(640);

	return (
		<>
			<div
				className={`sm:block w-full sm:w-[225px] min-w-[225px] ${
					filterIsOpen && responsive
						? "fixed w-screen h-screen overflow-y-scroll top-0 flex flex-col justify-between left-0 bg-white z-50"
						: "hidden"
				}`}
			>
				<div className="p-[24px] pb-[76px] sm:pb-[24px] pt-[24px] sm:pt-0">
					<h3 className="text-[18px] text-[#484848] font-poppins font-medium mb-[25px]">
						Filter
					</h3>

					<ul>
						{responsive ? (
							<FilterItem
								filterLabel="Search for"
								filterList={[
									{ label: { id: "1", name: "Roadmaps" } },
									{ label: { id: "2", name: "Creators" } },
								]}
								row
								circle
							/>
						) : null}

						<FilterItem
							filterLabel="Roadmap type"
							filterList={[
								{ label: { id: "1", name: "All" } },
								{ label: { id: "2", name: "Example" } },
								{ label: { id: "3", name: "Free" } },
							]}
						/>

						<FilterItem
							filterLabel="Steps"
							filterList={[
								{ label: { id: "1", name: "All" } },
								{ label: { id: "2", name: "2-10 steps" } },
								{ label: { id: "3", name: "10-20 steps" } },
								{ label: { id: "4", name: "50 > steps" } },
							]}
						/>

						<FilterRangeSlider />

						<FilterItem
							filterLabel="Creator"
							filterList={[
								{ label: { id: "1", name: "All" } },
								{ label: { id: "2", name: "My roadmaps" } },
								{ label: { id: "3", name: "Verified" } },
								{ label: { id: "4", name: "Example text" } },
							]}
						/>
					</ul>
				</div>

				<div className="fixed bottom-0 w-full h-[76px] flex-jc-c sm:hidden gap-4 bg-white shadow-csm mt-auto p-[16px] font-inter font-semibold">
					<button
						onClick={toggle}
						className="w-[88px] h-full rounded-[10px] bg-[#F6F6F6] text-[#606060]"
					>
						Clear
					</button>
					<button className="w-full h-full rounded-[10px] bg-primary-ultramarineBlue text-[#FCFCFD]">
						Apply
					</button>
				</div>
			</div>

			<button
				onClick={toggle}
				className="block sm:hidden fixed w-[58px] h-[58px] right-[20px] bottom-[20px] bg-white text-[#42505C] rounded-full flex-jc-c shadow-csm"
			>
				{FILTER_ICON}
			</button>
		</>
	);
};

export default RoadmapsFilter;
