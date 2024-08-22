"use client";

import CustomizeRoadmapCurrency from "@/components/builder/plans/CustomizeRoadmapCurrency";
import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import useInput from "@/components/common/input/hooks/useInput";
import { ITarget } from "@/hooks/types/index.types";
import { useFetch } from "@/hooks/useFetch";
import { updateRoadmapData } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ARROW_PLAN_ICON } from "@public/icons/plans";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const SetRoadmapPrice = () => {
	const { roadmapId } = useParams();
	const { fetchData, loading } = useFetch();
	const dispatch = useAppDispatch();
	const { roadmap } = useAppSelector(state => state.createRoadmap);
	const { price } = roadmap || {};
	const { value: priceValue, changeValue: changePriceValue } = useInput(
		price?.amount ? `${price?.amount}` : "0"
	);

	useEffect(() => {
		if (price) {
			changePriceValue(`${price.amount}`);
		}
	}, [price]);

	const handleChangePriceValue = (e: ITarget | string) => {
		changePriceValue(e);
	};

	const handleUpdateRoadmapData = async () => {
		const newRoadmapData = {
			amount: Number(priceValue),
			currency: price?.currency,
			perks: price?.perks,
		};

		const { data: newPrice } = await fetchData(
			"POST",
			`roadmap/${roadmapId}/price`,
			newRoadmapData
		);

		dispatch(
			updateRoadmapData({
				price: newPrice,
			})
		);
	};

	return (
		<>
			<div className="mt-6 mb-4 sm:mb-16 flex items-center gap-2">
				<CustomizeRoadmapCurrency />

				<input
					type="number"
					value={priceValue}
					onChange={handleChangePriceValue}
					onBlur={() =>
						dispatch(
							updateRoadmapData({
								price: { ...price, amount: priceValue },
							})
						)
					}
					className="w-[40px] text-[#4D4D4D] text-[18px] font-inter font-bold outline-none border-b-2 border-[#A6A6A6] hidden-input-number-arrows"
				/>
				<span className="text-[#4D4D4D] font-inter">/user</span>
			</div>

			<button
				onClick={handleUpdateRoadmapData}
				disabled={loading}
				type="button"
				className="relative overflow-hidden w-[120px] h-[44px] flex-jc-c mt-auto gap-2 font-semibold bg-primary-ultramarineBlue text-white p-[10px] rounded-[8px]"
			>
				{loading ? <ButtonDotsLoader /> : <>Set Plan {ARROW_PLAN_ICON}</>}
			</button>
		</>
	);
};

export default SetRoadmapPrice;
