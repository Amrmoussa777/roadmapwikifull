import { ValidatorType } from "@/components/common/input/hooks/useInput";
import { z } from "zod";

export const registerSchema = z.object({
	fullName: z.string().min(4, "Name must be at least 4 characters long"),
	email: z.string().min(1, "Email is required"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const emailValidator: ValidatorType = value => {
	const result = registerSchema.shape.email.safeParse(value);
	return result.success ? null : result.error.errors[0].message;
};

export const passwordValidator: ValidatorType = value => {
	const result = registerSchema.shape.password.safeParse(value);
	return result.success ? null : result.error.errors[0].message;
};

export const fullNameValidator: ValidatorType = value => {
	const result = registerSchema.shape.fullName.safeParse(value);
	return result.success ? null : result.error.errors[0].message;
};
