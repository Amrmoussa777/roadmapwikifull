import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import useToggle from "@/hooks/useToggle";
import { EMOJI_ICON } from "@public/icons/conversation";
import EmojiPicker from "emoji-picker-react";
import React, { useRef, useEffect } from "react";

interface EmojiFormProps {
	textInputRef: React.RefObject<HTMLInputElement>;
}

const EmojiForm: React.FC<EmojiFormProps> = ({ textInputRef }) => {
	const { currentState: isEmojiOpen, toggle: toggleEmoji } = useToggle(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const divRef = useRef<HTMLDivElement>(null);
	useOnClickOutside(toggleEmoji, [buttonRef, divRef]);

	useEffect(() => {
		if (isEmojiOpen && textInputRef.current) {
			textInputRef.current.focus();
		}
	}, [isEmojiOpen, textInputRef]);

	return (
		<div className="relative">
			<button
				type="button"
				className="h-full flex-jc-c text-[#79828B] pr-4"
				onClick={toggleEmoji}
				ref={buttonRef}
			>
				{EMOJI_ICON}
			</button>

			{isEmojiOpen ? (
				<div
					ref={divRef}
					className="absolute left-0 top-[-410px] w-[300px] h-[400px]"
				>
					<EmojiPicker className="!w-full !h-full" />
				</div>
			) : null}
		</div>
	);
};

export default EmojiForm;
