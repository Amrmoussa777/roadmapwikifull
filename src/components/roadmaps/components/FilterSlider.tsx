import React, { useState } from "react";
import { RangeSlider } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

const FilterRangeSlider = () => {
	const [range, setRange] = useState<[number, number]>([0, 100]);

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
