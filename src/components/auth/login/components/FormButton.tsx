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
			className="w-full h-[54px] my-5 font-poppins font-semibold text-[15px] text-white rounded-[8px] bg-primary-ultramarineBlue"
		>
			{isLoading ? "Loading..." : buttonText}
		</button>
	);
};

export default FormButton;
