"use client";

import useAudioPlayer from "@/components/conversation/hooks/useAudioPlayer";
import { MessageProps } from "@/components/conversation/types/index.types";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import {
	PLAY_RECORD_ICON,
	STOP_RECORD_ICON,
	VISUALIZER_SVG,
} from "@public/icons/conversation";
import React, { useContext, useEffect, useState } from "react";

const MessageRecord = ({ message }: MessageProps) => {
	const { currentUser } = useContext(CurrentUserContext);
	const { userId, attachments } = message;
	const url = attachments[0].url;
	const { isPlaying, currentTime, audioRef, play, stop } = useAudioPlayer(url);
	const [duration, setDuration] = useState(0);

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, "0");
		return `${minutes}:${seconds}`;
	};

	useEffect(() => {
		const audio = audioRef.current;

		if (audio) {
			audio.addEventListener("loadedmetadata", () => {
				setDuration(audio.duration);
			});
		}
	}, [audioRef]);

	return (
		<div
			className={`w-[300px] sm:w-[344px] h-[56px] px-[24px] flex-jb-c ${
				currentUser?.id === userId
					? "text-white"
					: "text-primary-ultramarineBlue"
			}`}
		>
			<button
				onClick={() => (isPlaying ? stop() : play())}
				type="button"
				className={`w-[24px] min-w-[24px] h-[24px] min-h-[24px] flex-jc-c rounded-full [&>svg]:w-[20px] [&>svg]:h-[20px] ${
					currentUser?.id === userId
						? "text-primary-ultramarineBlue bg-white"
						: "text-white bg-primary-ultramarineBlue"
				}`}
			>
				{isPlaying ? STOP_RECORD_ICON : PLAY_RECORD_ICON}
			</button>
			<div className="relative [&>span>svg]:w-[160px] [&>span>svg]:md:w-full">
				<div
					style={{ width: "50px" }}
					className="absolute w-full h-full top-0 left-0 text-red-600 z-10"
				>
					<span className="[&>svg]:object-fill">{VISUALIZER_SVG}</span>
				</div>

				<span>{VISUALIZER_SVG}</span>
			</div>
			<span>{formatTime(currentTime ? currentTime : duration)}</span>
			<audio ref={audioRef} controls className="hidden">
				<source
					src={"https://www.computerhope.com/jargon/m/example.mp3"}
					type="audio/mpeg"
				/>
			</audio>
		</div>
	);
};

export default MessageRecord;
