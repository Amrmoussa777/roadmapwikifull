"use client";

import FormButton from "@/components/auth/login/components/FormButton";
import DropSelect from "@/components/builder/preview-roadmap/components/RoadmapInfoSelect";
import FormInput from "@/components/common/input/FormInput";
import { usePaymentInformationForm } from "@/components/payment/hooks/usePaymentInformationForm";
import { ROADMAP_PLAN_CURRENCY_ICONS } from "@/config/roadmapCurrencyIcons";
import React from "react";

const PaymentInformationForm = () => {
	const {
		currency,
		handleChangeCurrency,
		ibanValue,
		changeIban,
		bankNameValue,
		changeBankName,
		swiftValue,
		changeSwift,
		handlePaymentInformationSubmit,
		swiftValidationError,
		bankNameValidationError,
		ibanValidationError,
	} = usePaymentInformationForm();

	return (
		<form
			onSubmit={handlePaymentInformationSubmit}
			className="grid grid-cols-2 gap-[20px]"
		>
			<FormInput
				type="text"
				name="iban"
				label="Enter your IBAN"
				placeholder="Enter your IBAN"
				customStyles="col-span-2 sm:col-span-2"
				value={ibanValue}
				handleChangeValue={changeIban}
				validationError={ibanValidationError}
			/>
			<FormInput
				type="text"
				name="bankName"
				label="Bank name"
				placeholder="Enter your bank name"
				customStyles="col-span-2 sm:col-span-2"
				value={bankNameValue}
				handleChangeValue={changeBankName}
				validationError={bankNameValidationError}
			/>
			<FormInput
				type="text"
				name="swiftORBic"
				label="BIC/SWIFT"
				placeholder="112235"
				customStyles="col-span-2 sm:col-span-1"
				value={swiftValue}
				handleChangeValue={changeSwift}
				validationError={swiftValidationError}
			/>

			<DropSelect
				label={{ id: "currency", name: "Currency" }}
				activeOption={
					<span className="flex-jc-c gap-1 sm:gap-2 sm:text-[18px] [&>svg]:fill-red-500 font-poppins">
						<span className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg text-primary-ultramarineBlue">
							{currency.icon}
						</span>
						{currency.name}
					</span>
				}
				customStyles="[&>button]:min-h-[50px] [&>button]:h-[50px] [&>button]:!rounded-md [&>div]:h-fit !col-span-2 sm:!col-span-1 [&>button>span>svg]:!text-[#ADAEB5]"
			>
				{ROADMAP_PLAN_CURRENCY_ICONS.map(item => (
					<button
						type="button"
						key={item.name}
						onClick={() => handleChangeCurrency(item)}
						className="flex items-center gap-2 !px-4 sm:gap-2 !text-[14px] md:!text-[16px]"
					>
						<span className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg [&>svg]:text-[#ADAEB5]">
							{item.icon}
						</span>{" "}
						<span className="text-[#ADAEB5] font-poppins">{item.name}</span>
					</button>
				))}
			</DropSelect>

			<FormButton
				buttonText="Complete Information"
				isLoading={false}
				customStyles="w-full sm:max-w-[300px] col-span-2"
			/>
		</form>
	);
};

export default PaymentInformationForm;
