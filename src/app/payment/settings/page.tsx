import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import PaymentInformationForm from "@/components/payment/components/settings/PaymentInformationForm";
import React from "react";

const page = () => {
	return (
		<section className="font-inter">
			<h2 className="font-bold text-[20px] md:text-[24px] text-[#111111]">
				Payment settings
			</h2>

			<h3 className="font-bold text-[20px] text-[#383838] font-semibold mt-[40px]">
				Set your information
			</h3>

			<HorizontalDivider
				height="h-[1px]"
				bgColor="bg-[#DADDE8]"
				customStyles="my-[24px]"
			/>

			<PaymentInformationForm />
		</section>
	);
};

export default page;
