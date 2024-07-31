import { BottomButtonsProps } from "@/components/roadmaps/types/index.types";

const BottomButtons: React.FC<BottomButtonsProps> = ({
	toggleMobileFilter,
}) => (
	<div className="fixed bottom-0 w-full h-[76px] flex-jc-c sm:hidden gap-4 bg-white shadow-csm mt-auto p-[16px] font-inter font-semibold">
		<button
			onClick={toggleMobileFilter}
			className="w-[88px] h-full rounded-[10px] bg-[#F6F6F6] text-[#606060]"
		>
			Clear
		</button>
		<button
			onClick={toggleMobileFilter}
			className="w-full h-full rounded-[10px] bg-primary-ultramarineBlue text-[#FCFCFD]"
		>
			Apply
		</button>
	</div>
);

export default BottomButtons;
