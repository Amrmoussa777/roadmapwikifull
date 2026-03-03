import PaymentTabItem from "@/components/payment/components/PaymentTabItem";
import {
	PAYMENT_HISTORY_ICON,
	PAYMENT_INFORMATION_ICON,
	PAYMENT_SCHEDULE_ICON,
	PAYMENT_SETTINGS_ICON,
} from "@public/icons/payment";
import React from "react";

const PaymentTabs = () => {
	const tabs = [
		{
			href: "/payment/settings",
			name: "Settings",
			icon: PAYMENT_SETTINGS_ICON,
			extraPaths: [
				{
					href: "/payment/settings/information",
					name: "Information",
					icon: PAYMENT_INFORMATION_ICON,
				},
				{
					href: "/payment/settings/schedule",
					name: "Schedule",
					icon: PAYMENT_SCHEDULE_ICON,
				},
			],
		},
		{ href: "/payment/history", name: "History", icon: PAYMENT_HISTORY_ICON },
	];

	return (
		<div
			className={`w-[60px] md:min-w-[300px] lg:min-w-[330px] flex flex-col gap-[12px] md:gap-[24px] p-2 md:p-0 md:pl-6 lg:pl-8 m-0 md:mt-[40px] border-r border-grey-primary`}
		>
			{tabs.map(tab => (
				<PaymentTabItem key={tab.href} {...tab} />
			))}
		</div>
	);
};

export default PaymentTabs;
