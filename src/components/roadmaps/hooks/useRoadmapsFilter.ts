import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
	changeSearchType,
	clearRoadmapFilter,
	updatedFilterList,
} from "@/redux/slices/roadmapList/roadmapListSlice";
import {
	categoriesList,
	roadmapDurationListData,
	searchTypeListData,
} from "@/components/roadmaps/data/filterLists";
import useDisableScroll from "@/hooks/useDisableScrolling";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import useToggle from "@/hooks/useToggle";
import { FilterListItem } from "@/components/roadmaps/types/index.types";
import { useSearchParams } from "next/navigation";
import PathnameHelper from "@/helpers/pathname.helper";

const useRoadmapsFilter = () => {
	const dispatch = useAppDispatch();
	const { searchType } = useAppSelector(state => state.roadmapList);
	const urlParams = useSearchParams() ?? new URLSearchParams();
	const [searchTypeList, setSearchTypeList] =
		useState<FilterListItem[]>(searchTypeListData);
	const [roadmapCategoryList, setRoadmapCategoryList] =
		useState<FilterListItem[]>(categoriesList);
	const [roadmapDurationList, setRoadmapDurationList] = useState<
		FilterListItem[]
	>(roadmapDurationListData);
	const [isShowMore, setIsShowMore] = useState(false);

	const { currentState: filterIsOpen, toggle: toggleMobileFilter } =
		useToggle(false);
	const { responsive } = useSizeScreen(640);

	useDisableScroll(filterIsOpen);

	const mobileMenuVariant = {
		opened: {
			x: "0",
			transition: {
				duration: 0.4,
				ease: [0.74, 0, 0.19, 1.02],
			},
		},
		closed: {
			x: "-1000px",
			transition: {
				duration: 1,
				ease: [0.74, 0, 0.19, 1.02],
			},
		},
	};

	const setSelectedItems = (
		list: FilterListItem[],
		key: "categories" | "durations"
	) => {
		const selectedItems = list
			.filter(item => item.checked)
			.map(item => item.label.id);

		dispatch(updatedFilterList({ filterKey: key, value: selectedItems }));
	};

	useEffect(() => {
		const selectedItem = searchTypeList.find(item => item.checked);

		if (selectedItem && selectedItem.label.id !== searchType) {
			dispatch(changeSearchType(selectedItem.label.id));
		}
	}, [searchTypeList]);

	useEffect(() => {
		setSelectedItems(roadmapCategoryList, "categories");
	}, [roadmapCategoryList]);

	useEffect(() => {
		setSelectedItems(roadmapDurationList, "durations");
	}, [roadmapDurationList]);

	useEffect(() => {
		if (!responsive && filterIsOpen) {
			toggleMobileFilter();
		}
	}, [responsive]);

	const showMoreCategories = () => {
		setIsShowMore(prev => !prev);
	};

	const clearFilter = () => {
		dispatch(clearRoadmapFilter());
		setSearchTypeList(searchTypeListData);
		setRoadmapCategoryList(categoriesList.slice(0, 15));
		setRoadmapDurationList(roadmapDurationListData);
		if (urlParams.size) PathnameHelper.clearUrlParams();

		if (responsive) {
			toggleMobileFilter();
		}
	};

	return {
		toggleMobileFilter,
		searchTypeList,
		setSearchTypeList,
		roadmapCategoryList,
		setRoadmapCategoryList,
		responsive,
		mobileMenuVariant,
		filterIsOpen,
		showMoreCategories,
		roadmapDurationList,
		setRoadmapDurationList,
		clearFilter,
		isShowMore,
	};
};

export { useRoadmapsFilter };
