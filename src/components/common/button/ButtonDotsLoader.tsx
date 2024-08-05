import React from "react";

const ButtonDotsLoader = ({ customStyles = "" }: { customStyles?: string }) => {
	return (
		<div
			className={`absolute w-full h-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 [&>div]:bg-white flex space-x-2 justify-center items-center ${customStyles}`}
		>
			<div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
			<div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
			<div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
		</div>
	);
};

export default ButtonDotsLoader;
