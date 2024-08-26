"use client";

import React from "react";
import Link from "next/link";
import { PaymentTabItemType } from "@/components/payment/types/paymentTabs.types";
import { usePathname } from "next/navigation";
import { ARROW_ICON } from "@public/icons/roadmapSteps";

const PaymentTabItem = ({ href, name, icon }: PaymentTabItemType) => {
	const currentPathname = usePathname();

	const isActive = currentPathname.includes(href);

	return (
		<Link
			href={href}
			className={`md:mr-[40px] flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start gap-1 md:gap-[8px] font-inter font-semibold text-[12px] md:text-[16px] text-[#79828B] p-2 md:py-[16px] md:px-[22px] rounded-[6px] transition duration-200 [&>svg]:hidden md:[&>svg]:inline-block [&>svg]:rotate-90 [&>svg]:ml-auto ${
				isActive
					? "[&>span]:text-primary-ultramarineBlue text-black bg-white"
					: "hover:bg-white"
			}`}
		>
			<span>{icon}</span> <h3>{name}</h3>
			{ARROW_ICON}
		</Link>
	);
};

export default PaymentTabItem;
