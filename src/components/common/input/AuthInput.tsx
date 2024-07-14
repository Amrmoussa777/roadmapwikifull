import { AuthInputProps } from "@/components/common/input/types";
import React from "react";

const AuthInput = ({
	type,
	name,
	icon,
	placeholder,
	customStyles,
	value,
	handleChangeValue,
}: AuthInputProps) => {
	return (
		<div className="h-[50px] flex-jc-c mb-4 px-4 rounded-[8px] border-[1.6px] border-[#E0E2E9]">
			<span className="text-[#ADB0CD]">{icon}</span>

			<input
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleChangeValue}
				className="w-full h-full outline-none bg-transparent pl-4 text-[14px] placeholder:text-[14px] placeholder:font-poppins placeholder:font-medium placeholder:text-[#ADB0CD] text-[#202020]"
			/>
		</div>
	);
};

export default AuthInput;
