import { useFetch } from "@/hooks/useFetch";
import { useToast } from "@/hooks/useToast";
import { updateRoadmap } from "@/redux/slices/roadmaps/roadmapPreviewSlice";
import { fetchUserByUsername } from "@/redux/slices/thunks/getUserByUsername";
import { useAppDispatch } from "@/redux/store";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRoadmapPreview = () => {
	const params = useParams<{ id?: string }>();
	const id = params?.id;
	const dispatch = useAppDispatch();
	const { error, loading, fetchData } = useFetch(true);
	const { warningToast } = useToast();
	const { push } = useRouter();

	useEffect(() => {
		const fetchRoadmapData = async () => {
			if (error && error !== "Unauthorized") {
				push("/");
				warningToast(error);
				return;
			}

			if (!id) return;
			const { data: roadmap } = await fetchData("GET", `roadmap/${id}`);

			dispatch(updateRoadmap(roadmap));
			dispatch(fetchUserByUsername(roadmap.user.userName));
		};

		fetchRoadmapData();
	}, [id]);

	return { loading, error };
};
