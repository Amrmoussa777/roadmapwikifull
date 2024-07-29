"use client";

import useToggle from "@/hooks/useToggle";
import { AT_MARK_ICON } from "@public/icons/creatorHome";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const GeneralStatisticsPreview = () => {
	const { currentState: isOptionsHidden, toggle: hideOptions } =
		useToggle(false);
	const data = {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
		datasets: [
			{
				label: "My First dataset",
				backgroundColor: [
					"#DCDCDC",
					"#DCDCDC",
					"#DCDCDC",
					"#DCDCDC",
					"#DCDCDC",
					"#506CF0",
					"#DCDCDC",
					"#DCDCDC",
					"#DCDCDC",
				],
				hoverBackgroundColor: "#506CF0",
				data: [4, 3, 6, 8, 10, 12, 8, 2, 1],
				categoryPercentage: 0.6,
				barPercentage: 1.4,
				borderRadius: 4,
			},
		],
	};

	const options = {
		responsive: true,
		aspectRatio: 7,
		tooltips: {
			bodyFontSize: 50,
		},
		scales: {
			x: {
				display: false,
			},
			y: {
				display: false,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
		hoverBackgroundColor: "#506CF0",
		backgroundColor: "#DCDCDC",
	};

	return (
		<div>
			<div className="flex gap-4 mt-[30px]">
				<button
					id="roadmapDuration"
					type="button"
					onClick={hideOptions}
					className="w-fit flex-jb-c roadmap-info-select text-[16px] sm:text-[18px] text-[#696969]"
				>
					All roadmaps
					<span
						className={`!text-[#3F3F3F] [&>svg]:transition-all ${
							isOptionsHidden ? "[&>svg]:rotate-0" : "[&>svg]:rotate-180"
						}`}
					>
						{ARROW_ICON}
					</span>
				</button>
				<button
					id="roadmapDuration"
					type="button"
					onClick={hideOptions}
					className="w-fit flex-jb-c roadmap-info-select text-[16px] sm:text-[18px] text-[#696969]"
				>
					<div className="flex-jc-c gap-1">{AT_MARK_ICON} Reach</div>
					<span
						className={`!text-[#3F3F3F] [&>svg]:transition-all ${
							isOptionsHidden ? "[&>svg]:rotate-0" : "[&>svg]:rotate-180"
						}`}
					>
						{ARROW_ICON}
					</span>
				</button>
			</div>

			<div className="h-full md:h-[203px] mt-[24px] px-[24px] py-[28px] flex-jb-c flex-col md:flex-row gap-8 border border-[#DCDCDC] rounded-[12px]">
				<div className="h-full flex flex-col justify-between">
					<h3 className="font-inter font-medium text-[16] text-[#383838]">
						Average Reach
					</h3>

					<p className="font-inter text-[#202020] mt-[16px]">
						<span className="font-bold text-[32px]">$1,480</span>
						<span className="text-[14px] ml-2">/month</span>
					</p>

					<p className="font-inter font-normal text-[14px] text-[#898989] mt-auto">
						Overall average example dummy txt
					</p>
				</div>

				<div className="w-[531px]">
					<Bar data={data} options={options} />

					<div className="flex-jb-c mt-4 font-inter [&>div>span]:font-semibold [&>div>span]:text-[#202020] text-[#898989] text-[14px]">
						<div>
							<span>$890</span>
							<p>Low</p>
						</div>
						<div>
							<span>$1,480</span>
							<p>Average</p>
						</div>
						<div>
							<span>$5,210</span>
							<p>High</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GeneralStatisticsPreview;
