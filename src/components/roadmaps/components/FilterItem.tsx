"use client";

import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import CheckboxWithLabel from "@/components/common/selection-inputs/components/CheckboxWithLabel";
import {
	FilterItemProps,
	FilterListItem,
} from "@/components/roadmaps/types/index.types";
import PathnameHelper from "@/helpers/pathname.helper";
import { useSearchParams } from "next/navigation";
import React from "react";

const FilterItem = ({
	filterLabel,
	filterList,
	row,
	circle,
	setNewList,
	showMore,
	defaultListCount,
	lastFilterItem,
	multi,
}: FilterItemProps) => {
	const urlCategoryParam = useSearchParams().get("category");

	const handleChangeFilterItemList = (
		list: FilterListItem[],
		newItem: FilterListItem,
		setNewList: (list: FilterListItem[]) => void
	) => {
		if (newItem.label.id === urlCategoryParam) {
			PathnameHelper.clearUrlParams();
			setNewList(list);
			return;
		}

		if (multi) {
			const updatedList = list.map(item => {
				if (item.label.id === newItem.label.id && !item.checked) {
					return {
						...item,
						checked: true,
					};
				} else if (item.label.id === newItem.label.id && item.checked) {
					return { ...item, checked: false };
				} else {
					return item;
				}
			});

			setNewList(updatedList);
			return;
		}

		const updatedList = list.map(item => {
			if (item.label.id === newItem.label.id) {
				return {
					...item,
					checked: true,
				};
			} else {
				return { ...item, checked: false };
			}
		});

		setNewList(updatedList);
	};

	return (
		<>
			{!lastFilterItem ? (
				<HorizontalDivider
					height="h-[1px]"
					bgColor="bg-[#D8D8D8]"
					customStyles="my-4"
				/>
			) : null}

			<li className="mb-[25px]">
				<h3 className="text-[16px] text-[#484848] font-poppins font-medium">
					{filterLabel}
				</h3>

				<div className={row ? "flex items-center gap-[24px]" : ""}>
					{filterList.map(item => (
						<CheckboxWithLabel
							key={item.label.id}
							label={item.label}
							bgColor={
								circle
									? item.checked || urlCategoryParam === item.label.id
										? "bg-[#506CF0]"
										: "bg-white"
									: "bg-[#506CF0]"
							}
							checked={item.checked || urlCategoryParam === item.label.id}
							toggle={() =>
								handleChangeFilterItemList(filterList, item, setNewList)
							}
							customStyles={`${
								circle
									? "rounded-full [&>svg]:hidden border-[2px] border-[#DADADA]"
									: item.checked || urlCategoryParam === item.label.id
									? "bg-[#506CF0]"
									: "bg-[#F6F6F6]"
							} ${
								item.checked && urlCategoryParam === item.label.id && circle
									? "border-[8px] bg-white !border-[#506CF0]"
									: ""
							}`}
						/>
					))}
				</div>

				{showMore ? (
					<button
						onClick={showMore}
						className="mt-2 font-inter font-medium text-[#484848] text-[14px]"
					>
						{defaultListCount && defaultListCount < filterList.length
							? "Show less"
							: "Show more"}
					</button>
				) : null}
			</li>
		</>
	);
};

export default FilterItem;
