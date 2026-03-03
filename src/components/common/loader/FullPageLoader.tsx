import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import React from "react";

const FullPageLoader = () => {
	return (
		<div className="fixed top-0 left-0 w-screen h-screen flex-jc-c bg-white z-50">
			<ButtonDotsLoader customStyles="[&>div]:!bg-primary-ultramarineBlue" />
		</div>
	);
};

export default FullPageLoader;
