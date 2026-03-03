import PaymentTabs from "@/components/payment/components/PaymentTabs";
import { ChildrenType } from "@/providers/types/index.types";
import React from "react";

const layout = ({ children }: ChildrenType) => {
	return (
		<main className="max-w-[1440px] mx-auto p-0 lg:px-8 flex">
			<PaymentTabs />

			<div className="w-[calc(100%-75px)] md:w-[calc(100%-300px)] lg:w-[calc(100%-330px)] h-screen bg-white p-4 sm:p-[20px] md:p-[40px]">
				{children}
			</div>
		</main>
	);
};

export default layout;
