import useInput from "@/components/common/input/hooks/useInput";
import {
	bankNameValidator,
	ibanValidator,
	paymentInformationSchema,
	swiftValidator,
} from "@/components/payment/validation/paymentInfoValidation";
import {
	ROADMAP_PLAN_CURRENCY_ICONS,
	RoadmapCurrencyIconType,
} from "@/config/roadmapCurrencyIcons";
import { FormEvent, useState } from "react";

export const usePaymentInformationForm = () => {
	const [currency, setCurrency] = useState(ROADMAP_PLAN_CURRENCY_ICONS[0]);
	const {
		value: ibanValue,
		changeValue: changeIban,
		reset: resetIban,
		handleSetError: setIbanError,
		error: ibanValidationError,
	} = useInput("", ibanValidator);
	const {
		value: bankNameValue,
		changeValue: changeBankName,
		reset: resetBankName,
		handleSetError: setBankNameError,
		error: bankNameValidationError,
	} = useInput("", bankNameValidator);
	const {
		value: swiftValue,
		changeValue: changeSwift,
		reset: resetSwift,
		handleSetError: setSwiftError,
		error: swiftValidationError,
	} = useInput("", swiftValidator);

	const handleChangeCurrency = (newCurrency: RoadmapCurrencyIconType) => {
		setCurrency(newCurrency);
	};

	const handlePaymentInformationSubmit = async (e: FormEvent) => {
		e.preventDefault();

		// Validate form data
		const formData = {
			iban: ibanValue,
			bankName: bankNameValue,
			swift: swiftValue,
		};
		const result = paymentInformationSchema.safeParse(formData);

		if (!result.success) {
			setIbanError(
				result.error.errors.find(err => err.path[0] === "iban")?.message || ""
			);
			setBankNameError(
				result.error.errors.find(err => err.path[0] === "bankName")?.message ||
					""
			);
			setSwiftError(
				result.error.errors.find(err => err.path[0] === "swift")?.message || ""
			);
		}
	};

	return {
		currency,
		ibanValue,
		changeIban,
		resetIban,
		bankNameValue,
		changeBankName,
		resetBankName,
		swiftValue,
		changeSwift,
		swiftValidationError,
		bankNameValidationError,
		ibanValidationError,
		resetSwift,
		handleChangeCurrency,
		handlePaymentInformationSubmit,
	};
};
