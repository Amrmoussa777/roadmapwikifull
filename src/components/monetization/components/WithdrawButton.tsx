import { WITHDRAW_ICON } from "@public/icons/monetization";
import React from "react";

const WithdrawButton = ({ customStyle = "" }: { customStyle?: string }) => {
	return (
		<button
			className={`gap-[4px] md:gap-[8px] text-[12px] md:text-[14px] font-semibold md:mt-[20px] p-[8px] md:py-[10px] md:px-[20px] border bg-primary-ultramarineBlue text-white hover:bg-white hover:text-primary-ultramarineBlue border-primary-ultramarineBlue hover:shadow-md rounded-[5px] transition duration-200 ${customStyle}`}
		>
			<span className="[&>svg]:w-[18px] [&>svg]:h-[18px] md:[&>svg]:w-[24px] md:[&>svg]:h-[24px]">
				{WITHDRAW_ICON}
			</span>
			<p>
				Withdraw <span className="hidden md:inline-block">credits</span>
			</p>
		</button>
	);
};

export default WithdrawButton;
