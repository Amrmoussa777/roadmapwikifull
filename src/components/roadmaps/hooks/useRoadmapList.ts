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
	const { fetchData, loading } = useFetch();
	const [totalItems, setTotalItems] = useState(0);
	const [params, setParams] = useState("");
	const initialLoadRef = useRef(true);
	const dispatch = useAppDispatch();

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

		return `${durationStr}${categoryStr}`;
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
			Object.keys(paramsList).length &&
			(appliedFilterMobile || !responsive)
		) {
			const builtParams = buildParamsString(filterList);

			resetPageNumber();
			setParams(builtParams);
		} else {
			setParams("");
		}
	}, [filterList, responsive, appliedFilterMobile]);

	useEffect(() => {
		if (initialLoadRef.current) {
			initialLoadRef.current = false;
			getFilteredRoadmaps(1, "");
		}
	}, []);

	useEffect(() => {
		if (pageNumber > 1) {
			getFilteredRoadmaps(pageNumber, params);
		} else if (pageNumber === 1) {
			getFilteredRoadmaps(1, params);
		}
	}, [pageNumber, params]);

	useEffect(() => {
		if (searchValue) {
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

	return { roadmapList, totalItems, loading, handleMoreRoadmaps };
};

export default useRoadmapList;
