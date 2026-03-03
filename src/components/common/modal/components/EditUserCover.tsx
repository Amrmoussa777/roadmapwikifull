import React, { useRef } from "react";
import { ModalProps } from "@/components/common/modal/types/index.types";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { CROSS_ICON } from "@public/icons/roadmapSteps";

const EditUserCoverModal = ({
	title,
	children,
	open,
	toggleShareModal,
}: ModalProps) => {
	const divRef = useRef<HTMLDivElement>(null);

	useOnClickOutside(toggleShareModal, [divRef]);

	return (
		<Dialog open={open}>
			<DialogContent>
				<div
					ref={divRef}
					className="w-[350px] sm:w-[544px] rounded-[15px] shadow-clg p-8 bg-white"
				>
					<div className="flex-jb-c">
						<h3 className="font-inter font-medium text-[24px] text-[#23262F]">
							{title}
						</h3>

						<button onClick={toggleShareModal} className="text-[#332626]">
							{CROSS_ICON}
						</button>
					</div>
					{children}
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default EditUserCoverModal;
