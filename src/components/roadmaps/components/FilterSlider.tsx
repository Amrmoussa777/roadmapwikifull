import dynamic from "next/dynamic";
import { updatedFilterList } from "@/redux/slices/roadmapList/roadmapListSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useState } from "react";

const RangeSlider = dynamic(
	() => import("rsuite").then(mod => mod.RangeSlider),
	{
		ssr: false,
	}
);

import "rsuite/dist/rsuite-no-reset.min.css";

const FilterRangeSlider = () => {
	const [range, setRange] = useState<[number, number]>([0, 100]);

	const dispatch = useAppDispatch();
	const { filterList } = useAppSelector(state => state.roadmapList);

	const submitRange = () => {
		const oldRange = filterList["range"];

		oldRange
			? oldRange.toString() !== range.toString() &&
			  dispatch(
					updatedFilterList({
						filterKey: "range",
						value: range,
					})
			  )
			: dispatch(
					updatedFilterList({
						filterKey: "range",
						value: range,
					})
			  );
	};

	return (
		<li>
			<h3 className="text-[16px] text-[#484848] font-poppins font-medium mb-[16px]">
				Example Range
			</h3>

			<div className="w-full mx-auto flex flex-col">
				<RangeSlider
					defaultValue={range}
					handleStyle={{ backgroundColor: "#2E2E2E" }}
					renderTooltip={num => num}
					value={range}
					onChange={setRange}
					onChangeCommitted={submitRange}
				/>

				<div className="text-start flex justify-between mb-2 [&>span]:w-full mt-[14px] font-poppins text-[14px] text-[#484848]">
					<span>{range[0]}</span>

					<span className="text-end">{range[1]}</span>
				</div>
			</div>
		</li>
	);
};

export default FilterRangeSlider;
