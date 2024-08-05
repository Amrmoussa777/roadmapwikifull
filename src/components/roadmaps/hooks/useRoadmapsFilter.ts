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

const useRoadmapsFilter = () => {
	const dispatch = useAppDispatch();
	const { searchType } = useAppSelector(state => state.roadmapList);

	const [searchTypeList, setSearchTypeList] =
		useState<FilterListItem[]>(searchTypeListData);
	const [roadmapCategoryList, setRoadmapCategoryList] = useState<
		FilterListItem[]
	>(categoriesList.slice(0, 15));
	const [roadmapDurationList, setRoadmapDurationList] = useState<
		FilterListItem[]
	>(roadmapDurationListData);

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
		setRoadmapCategoryList(
			roadmapCategoryList.length > 15
				? categoriesList.slice(0, 15)
				: categoriesList
		);
	};

	const clearFilter = () => {
		dispatch(clearRoadmapFilter());
		setSearchTypeList(searchTypeListData);
		setRoadmapCategoryList(categoriesList.slice(0, 15));
		setRoadmapDurationList(roadmapDurationListData);

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
	};
};

export { useRoadmapsFilter };
