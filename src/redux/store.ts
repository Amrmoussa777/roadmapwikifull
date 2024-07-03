import roadmapPreviewPostsSlice from "@/redux/slices/roadmaps/roadmapPreviewPostsSlice";
import roadmapPreviewSlice from "@/redux/slices/roadmaps/roadmapPreviewSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		roadmapPreview: roadmapPreviewSlice,
		roadmapPreviewPosts: roadmapPreviewPostsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
