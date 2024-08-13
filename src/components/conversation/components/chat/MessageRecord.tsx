"use client";

import useAudioPlayer from "@/components/conversation/hooks/useAudioPlayer";
import { MessageProps } from "@/components/conversation/types/index.types";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import {
	PLAY_RECORD_ICON,
	STOP_RECORD_ICON,
	VISUALIZER_SVG,
} from "@public/icons/conversation";
import React, { useContext } from "react";

const MessageRecord = ({ message }: MessageProps) => {
	const { currentUser } = useContext(CurrentUserContext);
	const { userId, attachments } = message;

	const { isPlaying, currentTime, audioRef, play, stop } = useAudioPlayer(
		attachments[0].url
	);

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, "0");
		return `${minutes}:${seconds}`;
	};

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
			<span className="[&>svg]:w-[160px] [&>svg]:md:w-full">
				{VISUALIZER_SVG}
			</span>
			<span>{formatTime(currentTime)}</span>
			<audio ref={audioRef} controls className="hidden">
				<source src={attachments[0].url} type="audio/wav" />
			</audio>
		</div>
	);
};

export default MessageRecord;
