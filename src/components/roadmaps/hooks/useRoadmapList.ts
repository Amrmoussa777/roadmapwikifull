import { useEffect, useState, useRef } from "react";
import { useFetch } from "@/hooks/useFetch";
import ParamsHelper from "@/helpers/params.helper";
import { useRoadmapPagination } from "@/components/roadmaps/hooks/useRoadmapsPagination";
import {
	pushRoadmapList,
	updateRoadmapList,
} from "@/redux/slices/roadmapList/roadmapListSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import useToggle from "@/hooks/useToggle";

const useRoadmapList = () => {
	const {
		roadmapList,
		filterList,
		appliedFilterMobile,
		searchValue,
		searchType,
	} = useAppSelector(state => state.roadmapList);
	const { handleMoreRoadmaps, resetPageNumber, pageNumber } =
		useRoadmapPagination();

	const { fetchData, loading } = useFetch(true);
	const [totalItems, setTotalItems] = useState(0);
	const [params, setParams] = useState("");
	const initialized = useRef(false);
	const dispatch = useAppDispatch();
	const [roadmapShareId, setRoadmapShareId] = useState("");
	const { currentState: shareModal, toggle: toggleShareModal } =
		useToggle(false);

	const handleShareRoadmap = (roadmapId: string) => {
		setRoadmapShareId(roadmapId);
		toggleShareModal();
	};

	const { responsive } = useSizeScreen(640);

	const buildParamsString = (filterList: Record<string, string[]>) => {
		const paramsList = ParamsHelper.getEndpointParams(filterList);
		const durationStr =
			paramsList.durations?.map(duration => `duration=${duration}`).join("&") ||
			"";
		const categoryStr =
			paramsList.categories
				?.map(category => `category=${category}`)
				.join("&") || "";

		return `${durationStr}&${categoryStr}`;
	};

	const getFilteredRoadmaps = async (
		currentPageNumber: number,
		currentParams: string
	) => {
		const { data: newRoadmaps } = await fetchData(
			"GET",
			`roadmap/?page=${currentPageNumber}&pageSize=${10}&${currentParams}`
		);

		if (currentPageNumber === 1) {
			dispatch(updateRoadmapList(newRoadmaps));
		} else if (currentPageNumber > 1) {
			dispatch(pushRoadmapList(newRoadmaps));
		} else if (params) {
			dispatch(updateRoadmapList(newRoadmaps));
		}
		setTotalItems(newRoadmaps.length);
	};

	useEffect(() => {
		const paramsList = ParamsHelper.getEndpointParams(filterList);

		if (
			Object.values(paramsList).length &&
			(appliedFilterMobile || !responsive)
		) {
			const builtParams = buildParamsString(filterList);

			setParams(builtParams);
		} else {
			setParams("");
		}
		resetPageNumber();
	}, [filterList, responsive, appliedFilterMobile]);

	useEffect(() => {
		if (!initialized.current) {
			initialized.current = true;
			getFilteredRoadmaps(1, "");
		}
	}, []);

	useEffect(() => {
		getFilteredRoadmaps(pageNumber, params);
	}, [pageNumber, params]);

	useEffect(() => {
		if (searchValue) {
			resetPageNumber();
			const filterParams = buildParamsString(filterList);
			if (searchType === "roadmaps") {
				const newParams = filterParams + `&search=${searchValue}`;
				setParams(newParams);
			} else {
				const newParams = filterParams + `&search_creator=${searchValue}`;
				setParams(newParams);
			}
		}
	}, [searchValue]);

	return {
		roadmapList,
		totalItems,
		loading,
		handleMoreRoadmaps,
		shareModal,
		handleShareRoadmap,
		roadmapShareId,
		toggleShareModal,
	};
};

export default useRoadmapList;
