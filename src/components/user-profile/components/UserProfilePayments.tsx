import { ARROW_ICON } from "@public/icons/roadmapSteps";
import {
	PAYMENTS_ICON,
	TRANSACTION_HISTORY_ICON,
} from "@public/icons/userProfile";
import Link from "next/link";
import React from "react";

const UserProfilePayments = () => {
	return (
		<div id="payments" className="bg-white rounded-[12px] p-[18px]">
			<div className="flex-jb-c mb-4">
				<h3 className="font-inter font-semibold text-[18px] text-[#202020]">
					Payments Info
				</h3>
			</div>

			<ul>
				<li className="flex-jb-c bg-[#F5F5F5] py-[20px] px-[24px]">
					<Link
						href={"/user/userId/payments"}
						className="w-full flex-jc-c gap-2"
					>
						<div className="flex items-center gap-2">
							<span className="block text-[#79828B]">
								{TRANSACTION_HISTORY_ICON}
							</span>
							<div className="flex flex-col">
								<span className="font-inter font-medium text-[16px] text-black">
									Transaction history
								</span>

								<p className="font-poppins font-normal text-[#606060] text[12px]">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</p>
							</div>
						</div>

						<span className="rotate-90 text-[#898989]">{ARROW_ICON}</span>
					</Link>
				</li>
				<li className="flex-jb-c bg-[#F5F5F5] py-[20px] px-[24px]">
					<Link
						href={"/user/userId/payments"}
						className="w-full flex-jc-c gap-2"
					>
						<div className="flex items-center gap-2">
							<span className="block text-[#79828B]">{PAYMENTS_ICON}</span>
							<div className="flex flex-col">
								<span className="font-inter font-medium text-[16px] text-black">
									Payment options
								</span>

								<p className="font-poppins font-normal text-[#606060] text[12px]">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</p>
							</div>
						</div>

						<span className="rotate-90 text-[#898989]">{ARROW_ICON}</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default UserProfilePayments;
