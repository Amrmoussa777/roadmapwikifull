import { useCallback } from "react";

const useNotificationSound = () => {
	const playNotification = useCallback((url: string) => {
		const audio = new Audio(url);
		audio.play();
	}, []);

	return playNotification;
};

export default useNotificationSound;
