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
	searchResultCount: null,
	totalItems: 0,
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

			// Push conversation if there are no messages at all
			const noMessages =
				state.activeConversation.conversation.messages.length < 1;
			if (noMessages)
				state.conversationList.unshift(state.activeConversation.conversation);

			// Push new message to the active conversation
			state.activeConversation.conversation.messages.unshift(newMessage);

			// Update the last message for the conversation list and move the conversation to the top
			const updatedConversationList = state.conversationList
				.map(item => {
					if (item.id === newMessage.conversationId) {
						return {
							...item,
							messages: [{ ...item.messages[0], content: newMessage.content }],
						};
					} else {
						return item;
					}
				})
				.sort((a, b) => (a.id === newMessage.conversationId ? -1 : 1)); // Move updated conversation to top

			state.conversationList = updatedConversationList;
		},
		pushMoreMessages: (state, action) => {
			const newMessages = action.payload;

			state.activeConversation.conversation?.messages.push(...newMessages);
		},
		setConversationList: (state, action) => {
			const { conversationList, searchResultCount } = action.payload;

			state.conversationList = conversationList;
			state.searchResultCount = searchResultCount;
		},
		setConversationTotalItem: (state, action) => {
			const newItems = action.payload;
			state.totalItems = newItems;
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
	setConversationTotalItem,
} = conversationSlice.actions;
export default conversationSlice.reducer;
