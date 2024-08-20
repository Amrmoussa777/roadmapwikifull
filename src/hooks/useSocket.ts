import { useContext, useEffect, useRef, useState } from "react";
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

export const useSocket = () => {
	const [socket, setSocket] = useState<Socket | null>(null);
	const { currentUser } = useContext(CurrentUserContext);
	const { conversation } = useAppSelector(
		state => state.conversation.activeConversation
	);
	const dispatch = useDispatch();
	const initialized = useRef(false);

	useEffect(() => {
		if (currentUser) {
			initialized.current = true;
		}
	}, [currentUser]);

	useEffect(() => {
		if (!initialized) return;

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

		const handleEvent = (event: NotificationType, data: any) => {
			switch (event) {
				case NotificationType.NEW_MESSAGE:
					const userId = data.message.userId;

					const sender = userId === currentUser?.id;

					dispatch(pushMessage(data.message));
					console.log({ data });

					console.log({ conversation });

					if (data.message.conversationId === conversation?.id) return;

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
	}, [initialized]);

	return socket;
};
