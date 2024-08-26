import PaymentTabs from "@/components/payment/components/PaymentTabs";
import { ChildrenType } from "@/providers/types/index.types";
import React from "react";

const layout = ({ children }: ChildrenType) => {
	return (
		<main className="max-w-[1440px] mx-auto p-0 lg:px-8 flex">
			<PaymentTabs />

			<div className="w-full h-screen bg-white p-4 sm:p-[20px] md:p-[40px]">
				{children}
			</div>
		</main>
	);
};

export default layout;
