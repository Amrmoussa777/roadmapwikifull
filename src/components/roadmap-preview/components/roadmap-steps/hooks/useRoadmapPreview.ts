import PathnameHelper from "@/helpers/pathname.helper";
import { useToast } from "@/hooks/useToast";
import { fetchRoadmapById } from "@/redux/slices/thunks/roadmaps/roadmapPreviewAsyncThunks";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchAnonymousToken } from "@/services/fetchAnonymousToken";
import { setCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRoadmapPreview = () => {
	const pathname = usePathname() as string;
	const roadmapId = PathnameHelper.getLastPathname(pathname);
	const dispatch = useAppDispatch();
	const { isLoading, error, roadmap } = useAppSelector(
		state => state.roadmapPreview
	);

	const { warningToast } = useToast();

	const { push } = useRouter();

	useEffect(() => {
		(async () => {
			if (error) {
				push("/");
				warningToast(error);
			} else if (error && error === "Unauthorized") {
				const AnonymousToken = await fetchAnonymousToken();
				setCookie("accessToken", AnonymousToken);
				dispatch(fetchRoadmapById(roadmapId));
			}
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error, roadmap, isLoading]);

	useEffect(() => {
		if (!error && !roadmap) {
			setTimeout(() => {
				dispatch(fetchRoadmapById(roadmapId));
			}, 1000);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
