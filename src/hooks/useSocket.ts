import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useDispatch } from "react-redux";
import { NotificationType } from "@/enum/notificationType";
import TokensHelper from "@/helpers/tokensHelper";
import { pushMessage } from "@/redux/slices/conversation/conversationSlice";

export const useSocket = () => {
	const [socket, setSocket] = useState<Socket | null>(null);
	const dispatch = useDispatch();

	useEffect(() => {
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
					dispatch(pushMessage(data.message));
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

	return socket;
};
