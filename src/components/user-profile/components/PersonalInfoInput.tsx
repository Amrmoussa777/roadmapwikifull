import useInput from "@/components/common/input/hooks/useInput";
import { PersonalInfoInputProps } from "@/components/user-profile/types/user-profile-tab.types";
import React, { useEffect } from "react";

const PersonalInfoInput = ({
	type,
	icon,
	label,
	disabled,
	name,
	customStyles,
	defaultValue = "",
	onFormValueChange,
}: PersonalInfoInputProps) => {
	const { value, changeValue } = useInput(defaultValue);

	useEffect(() => {
		if (defaultValue) {
			changeValue(defaultValue);
		}
	}, [defaultValue]);

	useEffect(() => {
		onFormValueChange({ value, key: name });
	}, [value]);

	return (
		<div
			className={`w-full flex gap-2 [&>svg]:my-[8px] [&>svg]:text-[#79828B] col-span-2 md:col-span-1 ${customStyles}`}
		>
			{icon}{" "}
			<div className="w-full">
				<label className="font-poppins text-[12px] text-[#606060]">
					{label}
				</label>
				{type === "textarea" ? (
					<textarea
						className={`w-full h-[100px] font-inter font-medium text-[#383838] bg-background text-[16px] outline-none resize-none hidden-scrollbar rounded-[5px] ${
							!disabled ? "bg-[#6f6f6f]/5" : "bg-background"
						}`}
						value={value}
						onChange={changeValue}
						disabled={disabled}
						name={name}
					/>
				) : (
					<input
						className={`w-full block font-inter font-medium text-[#383838] text-[16px] outline-none rounded-[5px] ${
							!disabled ? "bg-[#6f6f6f]/5" : "bg-background"
						}`}
						type={type}
						value={value}
						onChange={changeValue}
						disabled={disabled}
						name={name}
					/>
				)}
			</div>
		</div>
	);
};

export default PersonalInfoInput;
