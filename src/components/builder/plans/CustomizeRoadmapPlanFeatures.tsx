"use client";

import FormInput from "@/components/common/input/FormInput";
import useInput from "@/components/common/input/hooks/useInput";
import { useToast } from "@/hooks/useToast";
import { updateRoadmapData } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CHECK_PLAN } from "@public/icons/plans";
import React, { FormEvent } from "react";

const CustomizeRoadmapPlanPerks = () => {
	const { roadmap } = useAppSelector(state => state.createRoadmap);
	const { price } = roadmap || {};
	const { perks } = price || {};

	const {
		value: perkValue,
		changeValue: changeNewPerkValue,
		reset: resetNewPerkValue,
	} = useInput("");
	const { errorToast } = useToast();
	const dispatch = useAppDispatch();

	const handleDeletePerks = (perk: string) => {
		const filteredPerk = perks?.filter(item => item !== perk);

		dispatch(
			updateRoadmapData({
				price: {
					...price,
					perks: filteredPerk,
				},
			})
		);
	};

	const handleAddPerks = (e: FormEvent) => {
		e.preventDefault();

		const duplicated = perks?.find(item => item === perkValue);

		if (duplicated) return errorToast("This feature is already exists");

		const newPerks = [...(perks || []), perkValue];

		const newPrice = {
			amount: Number(price?.amount) || 0,
			currency: price?.currency,
			perks: newPerks || [],
		};

		dispatch(
			updateRoadmapData({
				price: newPrice,
			})
		);

		resetNewPerkValue();
	};

	return (
		<div className="mb-10">
			{perks?.length ? (
				<ul className="flex flex-col gap-[16px] sm:mt-0 text-[#AEAEAE] font-normal font-sans text-[14px] mb-4">
					{perks?.map(item => (
						<li key={item} className="flex gap-2 group">
							<button
								onClick={() => handleDeletePerks(item)}
								className="flex-ic-c gap-2"
							>
								<span className="group-hover:[&>svg>path]:stroke-white transition duration-200">
									{CHECK_PLAN}
								</span>{" "}
								<p className="group-hover:line-through">{item}</p>
							</button>
						</li>
					))}
				</ul>
			) : null}

			<form onSubmit={handleAddPerks} className="w-full">
				<FormInput
					type="text"
					name="featureName"
					label="Feature name"
					placeholder="Feature"
					required={true}
					value={perkValue || ""}
					handleChangeValue={changeNewPerkValue}
				/>

				<button
					disabled={!perkValue}
					type="submit"
					className="w-[100px] my-2 flex-jc-c gap-2 font-semibold bg-[#AEAEAE] text-white p-[6px] rounded-[8px]"
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default CustomizeRoadmapPlanPerks;
