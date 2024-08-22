import useToggle from "@/hooks/useToggle";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
	ROADMAP_PLAN_CURRENCY_ICONS,
	ROADMAP_PLAN_CURRENCY_OBJ_ICONS,
} from "@/config/roadmapCurrencyIcons";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { updateRoadmapData } from "@/redux/slices/create-roadmap/createRoadmapSlice";

const CustomizeRoadmapCurrency = () => {
	const { roadmap } = useAppSelector(state => state.createRoadmap);
	const { price } = roadmap || {};
	const { currentState: isCurrencyListOpen, toggle: toggleCurrencyList } =
		useToggle(false);
	const [selectedCurrency, setSelectedCurrency] = useState(
		price?.currency || "USD"
	);
	const dispatch = useAppDispatch();

	const buttonRef = useRef<HTMLButtonElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	useOnClickOutside(toggleCurrencyList, [buttonRef, divRef]);

	const handleChangeCurrency = (currencyName: string) => {
		const newPrice = {
			amount: Number(price?.amount) || 0,
			currency: selectedCurrency,
			perks: price?.perks || [],
		};

		setSelectedCurrency(currencyName);
		dispatch(
			updateRoadmapData({
				price: newPrice,
			})
		);
		toggleCurrencyList();
	};

	return (
		<div ref={divRef} className="relative">
			<button
				onClick={toggleCurrencyList}
				type="button"
				className="w-[20px] flex-jc-c text-[#4D4D4D]"
			>
				{ROADMAP_PLAN_CURRENCY_OBJ_ICONS[selectedCurrency]}
			</button>

			<AnimatePresence>
				{isCurrencyListOpen ? (
					<motion.div
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.1 }}
						className="absolute top-[30px] flex flex-col overflow-hidden bg-white shadow-csm border border-[#E0E0E0] rounded-md [&>button>svg]:w-[16px] [&>button>svg]:h-[16px] z-10"
					>
						{ROADMAP_PLAN_CURRENCY_ICONS.map(currency => (
							<button
								onClick={() => handleChangeCurrency(currency.name)}
								key={currency.name}
								ref={buttonRef}
								type="button"
								className="w-[120px] flex-ic-c gap-2 p-2 text-[#4D4D4D] hover:bg-primary-ultramarineBlue/20"
							>
								{currency.icon} {currency.name}
							</button>
						))}
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
};

export default CustomizeRoadmapCurrency;
