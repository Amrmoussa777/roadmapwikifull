import { useEffect, useRef } from "react";

export const useNotificationSound = (url: string) => {
	const messageSound = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		// Initialize the audio element with the new URL
		messageSound.current = new Audio(url);
	}, [url]);

	const play = async () => {
		const audio = messageSound.current;

		if (audio) {
			await audio.play();
		}
	};

	return { play };
};
