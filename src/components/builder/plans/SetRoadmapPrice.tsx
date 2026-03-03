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
import CustomizeRoadmapPlanFeatures from "@/components/builder/plans/CustomizeRoadmapPlanFeatures";
import { useToast } from "@/hooks/useToast";

const SetRoadmapPrice = () => {
	const params = useParams<{ roadmapId?: string }>();
	const roadmapId = params?.roadmapId;
	const { fetchData, loading } = useFetch();
	const dispatch = useAppDispatch();
	const { roadmap } = useAppSelector(state => state.createRoadmap);
	const { price } = roadmap || {};
	const { value: priceValue, changeValue: changePriceValue } = useInput(
		price?.amount ? `${price?.amount}` : "0"
	);
	const { successToast } = useToast();

	useEffect(() => {
		if (price && !priceValue) {
			changePriceValue(`${price.amount}`);
		}
	}, [price]);

	const handleChangePriceValue = (e: ITarget | string) => {
		changePriceValue(e);
	};

	const handleUpdateRoadmapData = async () => {
		if (!roadmapId) return;
		const newRoadmapData = {
			amount: Number(priceValue) || 0,
			currency: price?.currency || "USD",
			perks: price?.perks,
		};

		const { data: newPrice } = await fetchData(
			"POST",
			`roadmap/${roadmapId}/price`,
			newRoadmapData
		);

		successToast("Successfully set plan");
		dispatch(
			updateRoadmapData({
				price: newPrice,
			})
		);
	};

	return (
		<>
			<div className="flex items-start mt-4 justify-between">
				<div className="flex items-center gap-2">
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

				<CustomizeRoadmapPlanFeatures />
			</div>

			<button
				onClick={handleUpdateRoadmapData}
				disabled={loading}
				type="button"
				className="relative overflow-hidden w-[120px] h-[44px] flex-jc-c mt-auto gap-2 font-semibold bg-primary-ultramarineBlue text-white p-[10px] rounded-[8px]"
			>
				{loading ? (
					<ButtonDotsLoader customStyles="[&>div]:bg-white" />
				) : (
					<>Edit Plan {ARROW_PLAN_ICON}</>
				)}
			</button>
		</>
	);
};

export default SetRoadmapPrice;
