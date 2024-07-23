"use client";

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
			className="w-full h-[54px] my-5 font-poppins font-semibold text-[15px] text-white rounded-[8px] bg-primary-ultramarineBlue border border-transparent hover:bg-white hover:text-primary-ultramarineBlue hover:border-primary-ultramarineBlue hover:shadow-lg transition duration-200"
		>
			{isLoading ? "Loading..." : buttonText}
		</button>
	);
};

export default FormButton;
