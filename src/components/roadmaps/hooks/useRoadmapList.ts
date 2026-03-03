import { useEffect, useState, useRef } from "react";
import { useFetch } from "@/hooks/useFetch";
import ParamsHelper from "@/helpers/params.helper";
import { usePaginationPageNumber } from "@/components/roadmaps/hooks/usePaginationPageNumber";
import {
	pushRoadmapList,
	updatedFilterList,
	updateRoadmapList,
} from "@/redux/slices/roadmapList/roadmapListSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import { useSearchParams } from "next/navigation";

const useRoadmapList = () => {
	const {
		roadmapList,
		filterList,
		appliedFilterMobile,
		searchValue,
		searchType,
	} = useAppSelector(state => state.roadmapList);
	const { handleMore, resetPageNumber, pageNumber } = usePaginationPageNumber();
	const { fetchData, loading } = useFetch(true);
	const [totalItems, setTotalItems] = useState(0);
	const [params, setParams] = useState("");
	const initialized = useRef(false);
	const dispatch = useAppDispatch();
	const urlParams = useSearchParams() ?? new URLSearchParams();
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
		(async () => {
			if (!initialized.current) {
				initialized.current = true;
				const category = urlParams.get("category");

				if (category) {
					setParams(`&category=${category}`);
					await getFilteredRoadmaps(1, `&category=${category}`);
					dispatch(
						updatedFilterList({ filterKey: "categories", value: [category] })
					);
				}
			}
		})();
	}, [urlParams]);

	useEffect(() => {
		if (!urlParams.get("category")) {
			getFilteredRoadmaps(pageNumber, params);
		}
	}, [pageNumber, params, urlParams]);

	useEffect(() => {
		if (typeof searchValue === "undefined") return;

		resetPageNumber();
		const filterParams = buildParamsString(filterList);
		if (searchType === "roadmaps") {
			const newParams = filterParams + `&search=${searchValue}`;
			setParams(newParams);
		} else {
			const newParams = filterParams + `&search_creator=${searchValue}`;
			setParams(newParams);
		}
	}, [searchValue]);

	return {
		roadmapList,
		totalItems,
		loading,
		handleMore,
	};
};

export default useRoadmapList;
