"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const FormButton = ({ buttonText }: { buttonText: string }) => {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			className="w-full h-[54px] my-5 font-poppins font-semibold text-[15px] text-white rounded-[8px] bg-primary-ultramarineBlue"
		>
			{pending ? "Loading..." : buttonText}
		</button>
	);
};

export default FormButton;
