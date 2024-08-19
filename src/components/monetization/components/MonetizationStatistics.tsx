"use client";

import ActivityMonetizationDropButton from "@/components/monetization/components/ActivityMonetizationDropButton";
import { NO_STATISTICS_ICON } from "@public/icons/monetization";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
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
			label: "First dataset",
			data: [33, 53, 85, 41, 44, 65],
			fill: true,
			backgroundColor: "#0C0B0B",
			borderColor: "#0C0B0B",
			lineTension: 0.3,
		},
	],
};

const MonetizationStatistics = () => {
	const { push } = useRouter();

	return (
		<div className="flex-grow font-inter mt-[24px] p-[16px] md:p-[24px]  border border-[#DCDCDC] bg-white rounded-[12px]">
			<div className="flex-jb-c">
				<h2 className="text-[20px] text-[#1E293B] font-semibold">Statistics</h2>

				<div className="flex gap-[15px]">
					<ActivityMonetizationDropButton text="All roadmaps">
						All roadmaps
					</ActivityMonetizationDropButton>
					<ActivityMonetizationDropButton text="$ Revenue">
						Revenue
					</ActivityMonetizationDropButton>
				</div>
			</div>

			<div className="w-full h-full flex-jc-c flex-col gap-[16px]">
				{/* <span>{NO_STATISTICS_ICON}</span>
				<p className="text-[#9C9DA4] text-[14px]">
					You don’t have any active roadmap
				</p>
				<button
					onClick={() => push("/builder")}
					className="bg-primary-ultramarineBlue text-white text-[14px] font-normal px-[14px] py-[8px] rounded-[8px] border border-transparent hover:bg-white hover:border-primary-ultramarineBlue hover:text-primary-ultramarineBlue transition duration-200"
				>
					Create roadmap
				</button> */}

				<Line data={data} options={options} />
			</div>
		</div>
	);
};

export default MonetizationStatistics;
