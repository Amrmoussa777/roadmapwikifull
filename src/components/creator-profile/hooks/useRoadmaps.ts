import { useFetch } from "@/hooks/useFetch";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

export const useRoadmaps = () => {
	const { user } = useAppSelector(state => state.userProfile);
	const [roadmaps, setRoadmaps] = useState<RoadmapType[]>([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [totalItems, setTotalItems] = useState(0);
	const { data, error, loading, fetchData } = useFetch();

	const handleGetCreatorRoadmaps = async (pageNumber: number) => {
		const { data, error } = await fetchData(
			"GET",
			`roadmap/?page=${pageNumber}&pageSize=10&userId=${user?.id}`
		);

		setTotalItems(error ? 0 : data.length);
		setRoadmaps(data);

		return data;
	};

	const handleShowMoreRoadmaps = async () => {
		const newRoadmaps = await handleGetCreatorRoadmaps(pageNumber + 1);
		setRoadmaps(prev => [...prev, ...newRoadmaps]);
		setTotalItems(newRoadmaps.length);

		setPageNumber(prev => prev + 1);
	};

	useEffect(() => {
		if (user && !error) {
			handleGetCreatorRoadmaps(1);
		}
	}, [user]);

	return {
		roadmaps,
		totalItems,
		handleShowMoreRoadmaps,
		loading,
	};
};
