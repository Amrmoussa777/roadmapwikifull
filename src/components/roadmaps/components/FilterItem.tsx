"use client";

import CheckboxWithLabel from "@/components/common/selection-inputs/components/CheckboxWithLabel";
import { FilterItemProps } from "@/components/roadmaps/types/index.types";
import useToggle from "@/hooks/useToggle";
import React from "react";

const FilterItem = ({
	filterLabel,
	filterList,
	row,
	circle,
}: FilterItemProps) => {
	const { currentState, toggle } = useToggle();

	return (
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
								? currentState
									? "bg-[#506CF0]"
									: "bg-white"
								: "bg-[#506CF0]"
						}
						checked={currentState}
						toggle={toggle}
						customStyles={`${
							circle
								? "rounded-full [&>svg]:hidden border-[2px] border-[#DADADA]"
								: currentState
								? "bg-[#506CF0]"
								: "bg-[#F6F6F6]"
						} ${
							currentState && circle
								? "border-[8px] bg-white !border-[#506CF0]"
								: ""
						}`}
					/>
				))}
			</div>
		</li>
	);
};

export default FilterItem;
