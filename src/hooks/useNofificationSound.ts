const useNotificationSound = () => {
	const playNotification = (url: string) => {
		const audio = new Audio(url);
		audio.play();
	};

	return playNotification;
};

export default useNotificationSound;
