"use client";

import React, { createContext, useRef } from "react";
import { ChildrenType } from "@/providers/types/index.types";

type AudioContextType = {
	playAudio: (src: string) => void;
};

export const AudioContext = createContext<AudioContextType | null>(null);

const AudioProvider = ({ children }: ChildrenType) => {
	const audioPlayer = useRef<HTMLAudioElement | null>(null);

	const playAudio = () => {
		const audio = audioPlayer.current;

		if (audio) {
			audio.play();
		}
	};

	return (
		<AudioContext.Provider value={{ playAudio }}>
			<button onClick={playAudio}>Play</button>
			<audio ref={audioPlayer} src={"/new-message-sound.wav"} />

			{children}
		</AudioContext.Provider>
	);
};

export default AudioProvider;
