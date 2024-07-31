import useDisableScroll from "@/hooks/useDisableScrolling";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import useToggle from "@/hooks/useToggle";
import {
	changeSearchType,
	updatedFilterList,
} from "@/redux/slices/roadmapList/roadmapListSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

const useRoadmapsFilter = () => {
	const { currentState: filterIsOpen, toggle: toggleMobileFilter } =
		useToggle(false);
	const [searchTypeList, setSearchTypeList] = useState([
		{ label: { id: "roadmaps", name: "Roadmaps" }, checked: true },
		{ label: { id: "creators", name: "Creators" }, checked: false },
	]);
	const [roadmapTypeList, setRoadmapTypeList] = useState([
		{ label: { id: "all", name: "All" }, checked: false },
		{ label: { id: "example", name: "Example" }, checked: false },
		{ label: { id: "free", name: "Free" }, checked: false },
	]);

	const dispatch = useAppDispatch();
	const { searchType, filterList } = useAppSelector(state => state.roadmapList);

	useDisableScroll(filterIsOpen);
	const { responsive } = useSizeScreen(640);

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

	useEffect(() => {
		const selectedItem = searchTypeList.find(item => item.checked);

		selectedItem ? dispatch(changeSearchType(selectedItem.label.id)) : null;
	}, [searchTypeList]);

	useEffect(() => {
		const selectedItem = searchTypeList.find(item => item.checked);

		if (searchType !== selectedItem?.label.id) {
			const updatedSearchTypeList = searchTypeList.map(item => {
				if (item.label.id === searchType) {
					return {
						...item,
						checked: true,
					};
				} else {
					return {
						...item,
						checked: false,
					};
				}
			});

			setSearchTypeList(updatedSearchTypeList);
		}
	}, [searchType]);

	useEffect(() => {
		const selectedRoadmapType = roadmapTypeList.find(item => item.checked);

		selectedRoadmapType &&
			dispatch(
				updatedFilterList({
					filterKey: "roadmapType",
					id: selectedRoadmapType?.label.id,
				})
			);
	}, [roadmapTypeList]);

	console.log(filterList);

	return {
		toggleMobileFilter,
		searchTypeList,
		setSearchTypeList,
		roadmapTypeList,
		setRoadmapTypeList,
		responsive,
		mobileMenuVariant,
		filterIsOpen,
	};
};

export { useRoadmapsFilter };
