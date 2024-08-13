import { ConversationSliceState } from "@/redux/slices/conversation/types/index.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ConversationSliceState = {
	conversationList: [],
	comments: [],
	conversationType: "messages",
	activeConversation: {
		loading: true,
		conversation: null,
		receiver: null,
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
					receiver: null,
					loading: false,
				};
				return;
			}

			if (payload === "loading") {
				state.activeConversation = {
					conversation: null,
					receiver: null,
					loading: true,
				};
				return;
			}

			const { activeConversation, receiver } = payload;
			state.activeConversation = {
				conversation: activeConversation,
				receiver,
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

			const updatedConversationList = state.conversationList.map(item => {
				if (item.id === newMessage.conversationId) {
					const messages = [
						{ ...item.messages[0], content: newMessage.content },
					];

					const newData = {
						...item,
						messages,
					};

					return newData;
				} else {
					return item;
				}
			});

			state.conversationList = updatedConversationList;
		},
		pushMoreMessages: (state, action) => {
			const newMessages = action.payload;

			state.activeConversation.conversation?.messages.push(newMessages);
		},
		setConversationList: (state, action) => {
			const conversationList = action.payload;

			state.conversationList = conversationList;
		},
	},
});

export const {
	setActiveConversation,
	toggleConversationType,
	updateFormChatContent,
	pushMessage,
	pushMoreMessages,
	setConversationList,
} = conversationSlice.actions;
export default conversationSlice.reducer;
