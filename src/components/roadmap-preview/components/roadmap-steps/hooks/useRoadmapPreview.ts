import { useFetch } from "@/hooks/useFetch";
import { useToast } from "@/hooks/useToast";
import { updateRoadmap } from "@/redux/slices/roadmaps/roadmapPreviewSlice";
import { getRoadmapPosts } from "@/redux/slices/thunks/roadmaps/getRoadmapPosts";
import { useAppDispatch } from "@/redux/store";
import { fetchAnonymousToken } from "@/services/fetchAnonymousToken";
import { getCookie, setCookie } from "cookies-next";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRoadmapPreview = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { error, loading, fetchData } = useFetch();
	const { warningToast } = useToast();
	const accessToken = getCookie("accessToken");

	const { push } = useRouter();

	useEffect(() => {
		(async () => {
			if (error && error !== "Unauthorized") {
				push("/");
				warningToast(error);
			} else if (!accessToken) {
				const AnonymousToken = await fetchAnonymousToken();
				setCookie("accessToken", AnonymousToken);

				const { data: roadmap } = await fetchData("GET", `roadmap/${id}`);

				dispatch(updateRoadmap(roadmap));
				dispatch(
					getRoadmapPosts({ roadmapId: id, pageNumber: 1, pageSize: 5 })
				);
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	useEffect(() => {
		if (!error && accessToken) {
			(async () => {
				const { data: roadmap } = await fetchData("GET", `roadmap/${id}`);

				dispatch(updateRoadmap(roadmap));
			})();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return { loading, error };
};
