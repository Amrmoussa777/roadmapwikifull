import roadmapPreviewPostsSlice from "@/redux/slices/roadmaps/roadmapPreviewPostsSlice";
import roadmapPreviewRepliesSlice from "@/redux/slices/roadmaps/roadmapPreviewRepliesSlice";
import roadmapPreviewSlice from "@/redux/slices/roadmaps/roadmapPreviewSlice";
import userProfileSlice from "@/redux/slices/user-profile/userProfileSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		roadmapPreview: roadmapPreviewSlice,
		roadmapPreviewPosts: roadmapPreviewPostsSlice,
		userProfile: userProfileSlice,
		roadmapPreviewReplies: roadmapPreviewRepliesSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
