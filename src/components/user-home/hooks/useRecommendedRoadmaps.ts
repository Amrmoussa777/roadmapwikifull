"use client";

import { useFetch } from "@/hooks/useFetch";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { RoadmapType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { useContext, useEffect, useRef, useState } from "react";

export const useRecommendedRoadmaps = () => {
	const [roadmapList, setRoadmapList] = useState<RoadmapType[]>([]);
	const { currentUser } = useContext(CurrentUserContext);
	const { loading, fetchData } = useFetch(true);
	const initialized = useRef(false);

	useEffect(() => {
		(async () => {
			if (currentUser && !initialized.current) {
				initialized.current = true;
				const { data } = await fetchData(
					"GET",
					`roadmap/?page=1&pageSize=5&recommended=true`
				);

				setRoadmapList(data);
			}
		})();
	}, [currentUser]);

	return {
		roadmapList,
		loading,
	};
};
