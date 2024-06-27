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
	inputRef,
	icon,
}: IFormInput) => {
	return (
		<div className={`${customStyles} flex-jc-c`}>
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
					className={`w-full h-[172px] min-h-[172px] border border-[#E0E0E0] mt-1 rounded-md p-4 justify-between gap-2 sm:text-xl font-normal bg-white outline-none focus:border-primary-ultramarineBlue resize-none ${customStyles}`}
				/>
			) : (
				<input
					ref={inputRef}
					type={type}
					className={`w-full h-[50px] mt-1 border border-[#E0E0E0] rounded-md p-4 justify-between gap-2 sm:text-xl font-normal bg-white outline-none focus:border-primary-ultramarineBlue ${customStyles}`}
					value={value}
					onChange={handleChangeValue}
					name={name}
					autoFocus={autoFocus}
					placeholder={placeholder}
					id={name}
				/>
			)}

			{icon}
		</div>
	);
};

export default FormInput;
