import { combineReducers } from "@reduxjs/toolkit";
import roadmapPreviewPostsSlice from "@/redux/slices/roadmaps/roadmapPreviewPostsSlice";
import roadmapPreviewRepliesSlice from "@/redux/slices/roadmaps/roadmapPreviewRepliesSlice";
import roadmapPreviewSlice from "@/redux/slices/roadmaps/roadmapPreviewSlice";
import roadmapListSlice from "@/redux/slices/roadmapList/roadmapListSlice";
import userProfileSlice from "@/redux/slices/user-profile/userProfileSlice";
import createRoadmapSlice from "@/redux/slices/create-roadmap/createRoadmapSlice";
import conversationSlice from "@/redux/slices/conversation/conversationSlice";

const appReducer = combineReducers({
	roadmapPreview: roadmapPreviewSlice,
	roadmapPreviewPosts: roadmapPreviewPostsSlice,
	userProfile: userProfileSlice,
	roadmapPreviewReplies: roadmapPreviewRepliesSlice,
	createRoadmap: createRoadmapSlice,
	roadmapList: roadmapListSlice,
	conversation: conversationSlice,
});

const rootReducer = (state: any, action: any) => {
	if (action.type === "RESET_STORE") {
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;
