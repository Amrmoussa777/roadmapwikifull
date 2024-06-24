"use client";

import React from "react";
import { IFormInput } from "./types";

const FormInput = ({
	type,
	label,
	placeholder,
	customStyles,
	required,
	name,
	autoFocus,
	handleChangeValue,
	value,
}: IFormInput) => {
	return (
		<div className={`${customStyles}`}>
			{label ? (
				<label htmlFor={name} className="text-[#666666]">{`${label}${
					required ? "*" : ""
				}`}</label>
			) : null}

			{type === "textarea" ? (
				<textarea
					value={value}
					onChange={handleChangeValue}
					name={name}
					autoFocus={autoFocus}
					placeholder={placeholder}
					className={`w-full h-[172px] min-h-[172px] border border-[#E0E0E0] mt-1 rounded-xl p-4 justify-between gap-2 sm:text-xl bg-white outline-none focus:border-primary-ultramarineBlue resize-none ${customStyles}`}
				/>
			) : (
				<input
					type={type}
					className={`w-full h-[55px] min-h-[55px] mt-1 border border-[#E0E0E0] rounded-xl p-4 justify-between gap-2 sm:text-xl bg-white outline-none focus:border-primary-ultramarineBlue ${customStyles}`}
					value={value}
					onChange={handleChangeValue}
					name={name}
					autoFocus={autoFocus}
					placeholder={placeholder}
					id={name}
				/>
			)}
		</div>
	);
};

export default FormInput;
