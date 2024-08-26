import { ValidatorType } from "@/components/common/input/hooks/useInput";
import { z } from "zod";

export const paymentInformationSchema = z.object({
	iban: z.string().min(34, "IBAN Must be 34 characters"),
	bankName: z.string().min(1, "Bank name is required"),
	swift: z
		.string()
		.min(8, "BIC/SWIFT Must be at least 8 characters")
		.max(11, "BIC/SWIFT Must be less then 11 characters"),
});

export const ibanValidator: ValidatorType = value => {
	const result = paymentInformationSchema.shape.iban.safeParse(value);
	return result.success ? null : result.error.errors[0].message;
};
export const bankNameValidator: ValidatorType = value => {
	const result = paymentInformationSchema.shape.bankName.safeParse(value);
	return result.success ? null : result.error.errors[0].message;
};
export const swiftValidator: ValidatorType = value => {
	const result = paymentInformationSchema.shape.swift.safeParse(value);
	return result.success ? null : result.error.errors[0].message;
};
