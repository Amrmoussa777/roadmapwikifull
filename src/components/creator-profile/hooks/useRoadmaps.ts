import { useFetch } from "@/hooks/useFetch";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppSelector } from "@/redux/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useRoadmaps = () => {
	const { user } = useAppSelector(state => state.userProfile);
	const [roadmaps, setRoadmaps] = useState<RoadmapType[]>([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [totalItems, setTotalItems] = useState(0);
	const { loading, fetchData } = useFetch();
	const params = useParams<{ username?: string }>();
	const username = params?.username;

	const handleGetCreatorRoadmaps = async (pageNumber: number) => {
		const { data } = await fetchData(
			"GET",
			`roadmap/?page=${pageNumber}&pageSize=10&userId=${user?.id}`
		);

		setTotalItems(data.length);
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
		if (user && username === user.userName) {
			handleGetCreatorRoadmaps(1);
		}
	}, [username, user]);

	return {
		roadmaps,
		totalItems,
		handleShowMoreRoadmaps,
		loading,
	};
};
