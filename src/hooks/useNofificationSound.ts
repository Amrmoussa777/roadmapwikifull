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
			try {
				// Await the promise returned by play()
				await audio.play();
				console.log("Audio played successfully");
			} catch (error) {
				console.error("Failed to play audio:", error);
			}
		}
	};

	return { play };
};
