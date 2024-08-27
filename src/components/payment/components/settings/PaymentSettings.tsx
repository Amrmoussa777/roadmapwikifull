import PaymentMethodSelection from "@/components/payment/components/settings/PaymentMethodSelection";
import PaymentScheduleSelection from "@/components/payment/components/settings/PaymentScheduleSelection";
import React from "react";

const PaymentSettings = () => {
	return (
		<ul>
			<PaymentScheduleSelection />
			<PaymentMethodSelection />
		</ul>
	);
};

export default PaymentSettings;
