import PathnameHelper from "@/helpers/pathname.helper";
import { fetchRoadmapById } from "@/redux/slices/thunks/roadmapPreviewAsyncThunks";
import { useAppDispatch } from "@/redux/store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const useRoadmapPreview = () => {
	const pathname = usePathname() as string;
	const roadmapId = PathnameHelper.getLastPathname(pathname);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchRoadmapById(roadmapId));
	}, []);
};
