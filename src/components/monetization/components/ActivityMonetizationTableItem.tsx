import Avatar from "@/components/common/avatar/components/Avatar";
import { ROADMAP_ICON } from "@public/icons/landingPage";
import Link from "next/link";
import React from "react";

const ActivityMonetizationTableItem = () => {
	return (
		<tr className="hover:bg-[#F5F6FE] transition duration-200">
			<td className="flex items-center gap-2 md:gap-4 text-[#171717]">
				<span className="w-[32px] md:w-[48px] h-[32px] md:h-[48px] flex-jc-c bg-primary-ultramarineBlue text-white rounded-[7px]">
					{ROADMAP_ICON}
				</span>{" "}
				<Link
					href={`/roadmaps`}
					className="hover:text-primary-ultramarineBlue transition duration-200"
				>
					DevOps roadmap
				</Link>
			</td>
			<td>
				<div className="flex-ic-c gap-2">
					<Avatar
						name={"Mohamed AbdSabour"}
						customStyles="w-[30px] h-[30px] rounded-full !border-none object-cover [&>img]:border-none !bg-primary-ultramarineBlue text-white"
					/>{" "}
					<Link
						href={`/user/9abour`}
						className="hover:text-primary-ultramarineBlue transition duration-200"
					>
						Omar Mohamed
					</Link>
				</div>
			</td>
			<td>Subscribe - Free plan</td>
			<td className="text-[#10B26B]">+20 $</td>
			<td>22 Feb 2023 - 12:30</td>
			<td>
				<div className="w-fit px-4 py-2 bg-[#FFAC32]/10 text-[#FFAC32] rounded-full">
					Pending
				</div>
			</td>
		</tr>
	);
};

export default ActivityMonetizationTableItem;
