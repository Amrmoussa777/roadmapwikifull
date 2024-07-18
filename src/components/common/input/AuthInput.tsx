import { AuthInputProps } from "@/components/common/input/types";
import React from "react";

const AuthInput = ({
	type,
	name,
	icon,
	placeholder,
	customStyles,
	value,
	validationError,
	handleChangeValue,
}: AuthInputProps) => {
	return (
		<div className="mb-4">
			<div className="h-[50px] flex-jc-c rounded-[8px] border-[1.6px] border-[#E0E2E9]">
				<span className="text-[#ADB0CD] px-4">{icon}</span>

				<input
					name={name}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={handleChangeValue}
					className="w-full h-full outline-none bg-transparent text-[14px] placeholder:text-[14px] placeholder:font-poppins placeholder:font-medium placeholder:text-[#ADB0CD] text-[#202020]"
				/>
			</div>

			{validationError ? (
				<p className="text-red-500 text-xs mt-1">{validationError}</p>
			) : null}
		</div>
	);
};

export default AuthInput;
