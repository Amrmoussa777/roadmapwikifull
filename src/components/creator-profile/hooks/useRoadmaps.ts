import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useAppSelector } from "@/redux/store";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export const useRoadmaps = () => {
	const { user } = useAppSelector(state => state.userProfile);
	const [roadmaps, setRoadmaps] = useState<RoadmapType[]>([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [totalItems, setTotalItems] = useState(10);
	const [isLoading, setIsLoading] = useState(false);

	const handleGetCreatorRoadmaps = async (pageNumber: number) => {
		const accessToken = getCookie("accessToken");

		const res = await axios({
			method: "GET",
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/roadmap/?page=${pageNumber}&pageSize=10&userId=fd0680ea-f918-45f6-9b38-8ef45a16de62`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		const { data } = res;

		return data;
	};

	const handleShowMoreRoadmaps = async () => {
		setIsLoading(true);

		const newRoadmaps = await handleGetCreatorRoadmaps(pageNumber + 1);
		setIsLoading(false);
		setRoadmaps(prev => [...prev, ...newRoadmaps]);
		setTotalItems(newRoadmaps.length);

		setPageNumber(prev => prev + 1);
	};

	useEffect(() => {
		(async () => {
			if (user) {
				const roadmaps = await handleGetCreatorRoadmaps(1);

				setRoadmaps(roadmaps);
			}
		})();
	}, [user]);

	return {
		roadmaps,
		totalItems,
		handleShowMoreRoadmaps,
		isLoading,
	};
};
