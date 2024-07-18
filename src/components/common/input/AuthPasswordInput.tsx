"use client";

import { AuthInputProps } from "@/components/common/input/types";
import useToggle from "@/hooks/useToggle";
import {
	HIDDEN_PASSWORD_ICON,
	VISIBLE_PASSWORD_ICON,
} from "@public/icons/auth";
import React from "react";

const AuthPasswordInput = ({
	type,
	name,
	icon,
	placeholder,
	value,
	handleChangeValue,
	customStyles,
	validationError,
}: AuthInputProps) => {
	const { currentState: isVisiblePassword, toggle: togglePassword } =
		useToggle(false);

	return (
		<div className="mb-4">
			<div className="h-[50px] flex-jc-c rounded-[8px] border-[1.6px] border-[#E0E2E9]">
				<span className="text-[#ADB0CD] px-4">{icon}</span>

				<input
					type={isVisiblePassword ? "text" : type}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={handleChangeValue}
					className="w-full h-full outline-none bg-transparent text-[14px] placeholder:text-[14px] placeholder:font-poppins placeholder:font-medium placeholder:text-[#ADB0CD] text-[#202020]"
				/>

				<button
					onClick={togglePassword}
					type="button"
					className="[&>svg]:w-[22px] text-[#ADB0CD] px-4"
				>
					{isVisiblePassword ? HIDDEN_PASSWORD_ICON : VISIBLE_PASSWORD_ICON}
				</button>
			</div>

			{validationError ? (
				<p className="text-red-500 text-xs mt-1">{validationError}</p>
			) : null}
		</div>
	);
};

export default AuthPasswordInput;
