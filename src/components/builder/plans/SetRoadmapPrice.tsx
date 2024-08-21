"use client";

import useInput from "@/components/common/input/hooks/useInput";
import { useFetch } from "@/hooks/useFetch";
import { updateRoadmapData } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ARROW_PLAN_ICON, EURO_CURRENCY_ICON } from "@public/icons/plans";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const SetRoadmapPrice = () => {
	const { roadmapId } = useParams();
	const { fetchData } = useFetch();
	const dispatch = useAppDispatch();
	const { roadmap } = useAppSelector(state => state.createRoadmap);
	const { price: oldPrice } = roadmap || {};
	const { value: price, changeValue: changePrice } = useInput(
		`${oldPrice?.amount}` || "0"
	);

	useEffect(() => {
		if (oldPrice) {
			changePrice(`${oldPrice.amount}`);
		}
	}, [oldPrice]);

	const handleUpdateRoadmapData = async () => {
		const newRoadmapData = {
			amount: Number(price),
			currency: "USD",
		};

		const { data } = await fetchData(
			"POST",
			`roadmap/${roadmapId}/price`,
			newRoadmapData
		);

		const { amount, currency } = data;

		dispatch(
			updateRoadmapData({
				price: { amount, currency },
			})
		);
	};

	return (
		<div>
			<div className="mt-6 mb-4 sm:mb-16 flex items-center gap-2">
				<span className="text-[#4D4D4D] inline-block">
					{EURO_CURRENCY_ICON}
				</span>
				<input
					type="number"
					value={price}
					onChange={changePrice}
					className="w-[40px] text-[#4D4D4D] text-[18px] font-inter font-bold outline-none border-b-2 border-[#A6A6A6] hidden-input-number-arrows"
				/>
				<span className="text-[#4D4D4D] font-inter">/user</span>
			</div>

			<button
				onClick={handleUpdateRoadmapData}
				disabled={`${oldPrice?.amount}` === price}
				className="w-[120px] flex-jc-c gap-2 font-semibold mt-auto bg-primary-ultramarineBlue text-white p-[10px] rounded-[8px]"
			>
				Set price {ARROW_PLAN_ICON}
			</button>
		</div>
	);
};

export default SetRoadmapPrice;
