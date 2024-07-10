import PathnameHelper from "@/helpers/pathname.helper";
import { fetchRoadmapById } from "@/redux/slices/thunks/roadmaps/roadmapPreviewAsyncThunks";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRoadmapPreview = () => {
	const pathname = usePathname() as string;
	const roadmapId = PathnameHelper.getLastPathname(pathname);
	const dispatch = useAppDispatch();
	const { isLoading, error, roadmap } = useAppSelector(
		state => state.roadmapPreview
	);
	const { push } = useRouter();

	useEffect(() => {
		if (error) {
			push("/");
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, error, roadmap]);

	useEffect(() => {
		dispatch(fetchRoadmapById(roadmapId));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
