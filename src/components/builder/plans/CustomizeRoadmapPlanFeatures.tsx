"use client";

import FormInput from "@/components/common/input/FormInput";
import useInput from "@/components/common/input/hooks/useInput";
import { useToast } from "@/hooks/useToast";
import { CHECK_PLAN } from "@public/icons/plans";
import React, { FormEvent, useState } from "react";

const CustomizeRoadmapPlanPerks = () => {
	const [perks, setPerks] = useState([
		"Lorem Ipsum is simply dummy text.",
		"User can view full roadmap.",
		"Lorem Ipsum is simply dummy text Example.",
		"User can contact with admin.",
	]);

	const {
		value: perksValue,
		changeValue: changeNewPerksValue,
		reset: resetNewPerksValue,
	} = useInput("");
	const { errorToast } = useToast();

	const handleDeletePerks = (perk: string) => {
		const filteredPerk = perks.filter(item => item !== perk);

		setPerks(filteredPerk);
	};

	const handleAddPerks = (e: FormEvent) => {
		e.preventDefault();

		const duplicated = perks.find(item => item === perksValue);

		console.log({ duplicated });

		if (duplicated) return errorToast("This feature is already exists");

		setPerks(prev => [...prev, perksValue]);
		resetNewPerksValue();
	};

	return (
		<div>
			<ul className="flex flex-col gap-[16px] mt-8 sm:mt-0 text-[#AEAEAE] font-normal font-sans text-[14px]">
				{perks.map(item => (
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

			<form onSubmit={handleAddPerks} className="w-full mt-4">
				<FormInput
					type="text"
					name="featureName"
					label="Feature name"
					placeholder="Feature"
					required={true}
					value={perksValue}
					handleChangeValue={changeNewPerksValue}
					onBlur={resetNewPerksValue}
				/>

				<button
					onClick={handleAddPerks}
					disabled={!perksValue.length}
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
