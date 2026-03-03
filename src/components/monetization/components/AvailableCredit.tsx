import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import WithdrawButton from "@/components/monetization/components/WithdrawButton";
import { AVAILABLE_CREDIT } from "@public/icons/monetization";
import React from "react";

const AvailableCredit = () => {
	return (
		<div className="w-full md:w-[330px] p-[16px] md:p-[24px] md:pb-0 font-inter border border-[#DCDCDC] bg-[#F5F6FE] rounded-[12px]">
			<div className="flex-jb-c">
				<h3 className="text-[#1E293B] text-[14px] md:text-[16px] font-medium">
					Available Credit
				</h3>

				<WithdrawButton customStyle="md:hidden flex-jc-c" />
			</div>

			<HorizontalDivider
				height="h-[1px]"
				bgColor="bg-[#DCDCDC]"
				customStyles="my-[16px]"
			/>

			<div className="flex items-end gap-[24px] md:block">
				{/* Ballance */}
				<div>
					<span className="font-extrabold text-[22px] md:text-[40px] text-black">
						$ 2,500
					</span>
					<div className="relative w-[141px] h-[6px] bg-[#DADDE8] rounded-full mt-[8px]">
						<span
							style={{ width: "20%" }}
							className="absolute h-full top-0 left-0 bg-primary-ultramarineBlue rounded-full"
						/>
					</div>

					<p className="text-[12px] md:text-[14px] text-[#696969] mt-[8px]">
						Your current ballance
					</p>
				</div>

				{/* Pending */}
				<div>
					<span className="block mt-[20px] font-semibold md:text-[20px] text-[#606060]">
						$ 200
					</span>
					<p className="text-[12px] md:text-[14px] text-[#696969]">
						Pending requests
					</p>
				</div>
			</div>

			<WithdrawButton customStyle="hidden md:flex-jc-c" />

			<span className="hidden md:block mt-[28px] text-[#b3b4bc]">
				{AVAILABLE_CREDIT}
			</span>
		</div>
	);
};

export default AvailableCredit;
