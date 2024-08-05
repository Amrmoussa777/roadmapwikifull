"use client";

import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import React from "react";

const FormButton = ({
	buttonText,
	isLoading,
}: {
	buttonText: string;
	isLoading: boolean;
}) => {
	return (
		<button
			type="submit"
			disabled={isLoading}
			className="relative w-full h-[54px] my-5 font-poppins font-semibold text-[15px] text-white rounded-[8px] bg-primary-ultramarineBlue border border-transparent overflow-hidden hover:bg-white hover:text-primary-ultramarineBlue hover:border-primary-ultramarineBlue hover:shadow-lg disabled:hover:text-white disabled:hover:bg-primary-ultramarineBlue disabled:hover:border-transparent transition duration-200"
		>
			{buttonText}

			{isLoading ? <ButtonDotsLoader /> : null}
		</button>
	);
};

export default FormButton;
