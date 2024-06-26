import React from "react";
import { CHECK_ATTACHMENT_ICON } from "../../../../../public/icons/roadmapPreview";

const Verification = () => {
	return (
		<div className="my-4">
			<h3 className="font-inter text-[14px] font-medium text-[#606060]">
				Verification Process / Assignment
			</h3>

			<div className="h-[60px] border border-[#E0E0E0] px-4 py-2 rounded-[8px] mt-3 flex-jb-c">
				<div>
					<h3 className="text-[#92929D] font-normal text-[12px]">
						Redirect link
					</h3>
					<a
						href="https://www.w3.org/Provider/Style/dummy.html"
						className="text-[#506CF0] text-[14px]"
					>
						https://www.w3.org/Provider/Style/dummy.html
					</a>
				</div>

				{CHECK_ATTACHMENT_ICON}
			</div>
		</div>
	);
};

export default Verification;
