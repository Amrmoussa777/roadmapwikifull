"use client";

import dynamic from "next/dynamic";
import React from "react";
const Line = dynamic(() => import("react-chartjs-2").then(mod => mod.Line), {
	ssr: false,
});

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
} from "chart.js";
import MonetizationStatisticsFilters from "@/components/monetization/components/MonetizationStatisticsFilters";
import MonetizationStatisticsPlaceholder from "@/components/monetization/components/MonetizationStatisticsPlaceholder";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement
);

const options = {
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			displayColors: false,
			backgroundColor: "white",
			titleColor: "#0C0B0B",
			bodyColor: "#0C0B0B",
			footerColor: "#0C0B0B",
			borderWidth: 1,
			borderColor: "rgba(0, 0, 0, 0.052)",
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
	},
};

const data = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	datasets: [
		{
			data: [33, 53, 50, 60, 44, 65],
			backgroundColor: "#0C0B0B",
			borderColor: "#0C0B0B",
			lineTension: 0.3,
		},
	],
};

const MonetizationStatistics = () => {
	return (
		<div className="flex-grow font-inter mt-[24px] p-[16px] md:p-[24px]  border border-[#DCDCDC] bg-white rounded-[12px]">
			<div className="flex-jb-c">
				<h2 className="text-[20px] text-[#1E293B] font-semibold">Statistics</h2>

				<MonetizationStatisticsFilters />
			</div>

			<div className="w-full h-full flex-jc-c flex-col gap-[16px]">
				<MonetizationStatisticsPlaceholder />
				{/* <Line data={data} options={options} /> */}
			</div>
		</div>
	);
};

export default MonetizationStatistics;
