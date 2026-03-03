import { BottomButtonsProps } from "@/components/roadmaps/types/index.types";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import { toggleAppliedFilterMobile } from "@/redux/slices/roadmapList/roadmapListSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";

const BottomButtons: React.FC<BottomButtonsProps> = ({
	toggleMobileFilter,
	clearFilter,
}) => {
	const dispatch = useAppDispatch();
	const { responsive } = useSizeScreen(640);

	const handleApplyFilters = () => {
		dispatch(toggleAppliedFilterMobile(true));
		toggleMobileFilter();
	};

	useEffect(() => {
		if (responsive) {
			dispatch(toggleAppliedFilterMobile(false));
		} else {
			dispatch(toggleAppliedFilterMobile(true));
		}
	}, [responsive]);

	return (
		<div className="fixed bottom-0 w-full h-[76px] flex-jc-c sm:hidden gap-4 bg-white shadow-csm mt-auto p-[16px] font-inter font-semibold">
			<button
				onClick={clearFilter}
				className="w-[88px] h-[56px] rounded-[10px] bg-[#F6F6F6] text-[#606060]"
			>
				Clear
			</button>

			<button
				onClick={handleApplyFilters}
				className="w-full h-[56px] rounded-[10px] bg-primary-ultramarineBlue text-[#FCFCFD]"
			>
				Apply
			</button>
		</div>
	);
};

export default BottomButtons;
