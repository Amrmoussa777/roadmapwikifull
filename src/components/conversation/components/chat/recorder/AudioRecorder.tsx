import { AudioRecorderProps } from "@/components/conversation/types/index.types";
import { MIC_ICON, STOP_RECORDING_ICON } from "@public/icons/conversation";
import { DIRECT_MESSAGE } from "@public/icons/roadmapPreview";
import React, { useRef } from "react";

const AudioRecorder = ({
	handleSendRecord,
	isRecording,
	handleToggleRecording,
}: AudioRecorderProps) => {
	const mediaRecorder = useRef<MediaRecorder | null>(null);
	const audioChunks = useRef<Blob[]>([]);

	const startRecording = async () => {
		if (isRecording) return;

		handleToggleRecording(true);
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		mediaRecorder.current = new MediaRecorder(stream);
		audioChunks.current = [];

		mediaRecorder.current.addEventListener(
			"dataavailable",
			(event: BlobEvent) => {
				audioChunks.current.push(event.data);
			}
		);

		mediaRecorder.current.addEventListener("stop", () => {
			const audioBlob = new Blob(audioChunks.current, { type: "audio/mpeg" });
			console.log(audioBlob);
			handleSendRecord(audioBlob);
		});

		mediaRecorder.current.start();
	};

	const stopRecording = async () => {
		if (!isRecording || !mediaRecorder.current) return;

		handleToggleRecording(false);
		mediaRecorder.current.stop();
	};

	const reset = () => {
		handleToggleRecording(false);
		audioChunks.current = [];
	};

	return (
		<div>
			<div>
				{isRecording ? (
					<div className="flex gap-2">
						<button
							onClick={stopRecording}
							type="button"
							className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] [&>svg]:w-[30px] [&>svg]:h-[30px] flex-jc-c bg-[#F8F9FD] text-primary-ultramarineBlue border border-primary-ultramarineBlue/15 rounded-[8px] hover:bg-primary-ultramarineBlue hover:text-white duration-200 transition"
						>
							{DIRECT_MESSAGE}
						</button>
						<button
							onClick={reset}
							type="button"
							className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] [&>svg]:w-[30px] [&>svg]:h-[30px] flex-jc-c bg-[#F8F9FD] text-primary-ultramarineBlue border border-primary-ultramarineBlue/15 rounded-[8px] hover:bg-primary-ultramarineBlue hover:text-white duration-200 transition"
						>
							{STOP_RECORDING_ICON}
						</button>
					</div>
				) : (
					<button
						onClick={startRecording}
						type="button"
						className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] [&>svg]:w-[30px] [&>svg]:h-[30px] flex-jc-c bg-[#F8F9FD] text-primary-ultramarineBlue border border-primary-ultramarineBlue/15 rounded-[8px] hover:bg-primary-ultramarineBlue hover:text-white duration-200 transition"
					>
						{MIC_ICON}
					</button>
				)}
			</div>
		</div>
	);
};

export default AudioRecorder;
