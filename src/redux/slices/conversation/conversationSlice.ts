import { ConversationSliceState } from "@/redux/slices/conversation/types/index.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ConversationSliceState = {
	messages: [],
	comments: [],
	conversationType: "messages",
	activeConversation: {
		loading: true,
		conversation: null,
		user: null,
	},
	formContent: {},
};

const conversationSlice = createSlice({
	name: "conversationSlice",
	initialState,
	reducers: {
		setActiveConversation: (state, action) => {
			const { payload } = action;

			if (!payload) {
				state.activeConversation = {
					conversation: null,
					user: null,
					loading: false,
				};
				return;
			}

			if (payload === "loading") {
				state.activeConversation = {
					conversation: null,
					user: null,
					loading: true,
				};
				return;
			}

			const { activeConversation, user } = payload;
			state.activeConversation = {
				conversation: activeConversation,
				user,
				loading: false,
			};
		},

		toggleConversationType: state => {
			state.conversationType =
				state.conversationType === "comments" ? "messages" : "comments";
		},
		updateFormChatContent: (state, action) => {
			const { key, value } = action.payload;

			if (!value || !value.length) {
				delete state.formContent[key];
				return;
			}

			state.formContent = {
				...state.formContent,
				[key]: value,
			};
		},
		pushMessage: (state, action) => {
			if (!state.activeConversation.conversation) return;
			const newMessage = action.payload;

			state.activeConversation.conversation.messages.unshift(newMessage);
		},
	},
});

export const {
	setActiveConversation,
	toggleConversationType,
	updateFormChatContent,
	pushMessage,
} = conversationSlice.actions;
export default conversationSlice.reducer;
