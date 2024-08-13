import { useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";

const SidebarButtons = () => {
	const { conversationType } = useAppSelector(state => state.conversation);
	const [activeConversationType, setActiveConversationType] =
		useState(conversationType);

	useEffect(() => {
		setActiveConversationType(conversationType);
	}, [conversationType]);

	const buttons: { label: string; type: "messages" | "comments" }[] = [
		{ label: "Messages", type: "messages" },
		{ label: "Comments", type: "comments" },
	];

	return (
		<div className="h-[53px] flex justify-center gap-2 font-inter font-semibold text-[14px] text-[#979797] bg-white shadow-csm p-[10px] rounded-[12px]">
			{buttons.map(({ label, type }) => (
				<button
					key={type}
					className={`w-full h-full rounded-[6px] transition duration-200 ${
						activeConversationType === type
							? "bg-primary-ultramarineBlue text-white"
							: "hover:bg-primary-ultramarineBlue hover:text-white"
					}`}
					onClick={() => setActiveConversationType(type)}
				>
					{label}
				</button>
			))}
		</div>
	);
};

export default SidebarButtons;
