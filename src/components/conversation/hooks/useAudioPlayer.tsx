import { useState, useRef, useEffect } from "react";

const useAudioPlayer = (src: string) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		const audio = audioRef.current;

		if (audio) {
			// Function to handle time update event
			const handleTimeUpdate = () => {
				if (!isNaN(audio.currentTime)) {
					setCurrentTime(audio.currentTime);
				}
			};

			// Function to handle audio ended event
			const handleEnded = () => {
				setCurrentTime(0);
				setIsPlaying(false);
			};

			// Add event listeners
			audio.addEventListener("timeupdate", handleTimeUpdate);
			audio.addEventListener("ended", handleEnded);

			// Cleanup event listeners on unmount
			return () => {
				if (audio) {
					audio.removeEventListener("timeupdate", handleTimeUpdate);
					audio.removeEventListener("ended", handleEnded);
				}
			};
		}
	}, [src]);

	const play = () => {
		if (audioRef.current) {
			audioRef.current.play();
			setIsPlaying(true);
		}
	};

	const stop = () => {
		if (audioRef.current) {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	};

	return {
		isPlaying,
		currentTime,
		audioRef,
		play,
		stop,
	};
};

export default useAudioPlayer;
