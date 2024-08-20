import { useContext, useEffect, useRef, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";
import { useDispatch } from "react-redux";
import { NotificationType } from "@/enum/notificationType";
import TokensHelper from "@/helpers/tokensHelper";
import {
	increaseUnseenMessages,
	pushMessage,
} from "@/redux/slices/conversation/conversationSlice";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { useAppSelector } from "@/redux/store";
import { useParams } from "next/navigation";

export const useSocket = () => {
	const [socket, setSocket] = useState<Socket | null>(null);
	const { currentUser } = useContext(CurrentUserContext);
	const { conversation } = useAppSelector(
		state => state.conversation.activeConversation
	);
	const dispatch = useDispatch();
	const initialized = useRef(false);
	const { conversationId: paramConversationId } = useParams();
	const conversationIdRef = useRef(paramConversationId);

	useEffect(() => {
		if (currentUser) {
			initialized.current = true;
		}
	}, [currentUser]);

	useEffect(() => {
		if (!initialized.current) return;

		const { accessToken } = TokensHelper.getTokens();

		const newSocket = io(process.env.NEXT_PUBLIC_BASE_URL || "", {
			auth: {
				accessToken: `Bearer ${accessToken}`,
			},
			transports: ["websocket"],
		});

		newSocket.on("connect", () => {
			console.log("Connected to the WebSocket server.");
		});

		// Define handleEvent inside useEffect to access latest paramConversationId
		const handleEvent = (event: NotificationType, data: any) => {
			switch (event) {
				case NotificationType.NEW_MESSAGE:
					const { userId, conversationId } = data.message;

					const sender = userId === currentUser?.id;

					dispatch(pushMessage(data.message));

					if (conversationId === conversationIdRef.current) break;

					dispatch(
						increaseUnseenMessages({
							conversationId: data.conversationId,
							sender,
						})
					);
					break;
				default:
					console.warn(`Unhandled event type: ${event}`);
			}
		};

		Object.values(NotificationType).forEach(eventType => {
			newSocket.on(eventType, data => handleEvent(eventType, data));
		});

		newSocket.on("error", err => {
			console.error("Socket Error:", err);
		});

		newSocket.on("disconnect", reason => {
			console.log("Disconnected from WebSocket:", reason);
		});

		setSocket(newSocket);

		return () => {
			newSocket.close();
		};
	}, []);

	useEffect(() => {
		conversationIdRef.current = paramConversationId;
	}, [paramConversationId]);

	return socket;
};
