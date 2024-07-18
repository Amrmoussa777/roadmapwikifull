import { ValidatorType } from "@/components/common/input/hooks/useInput";
import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().min(1, "Email is required"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const emailValidator: ValidatorType = value => {
	const result = loginSchema.shape.email.safeParse(value);
	return result.success ? null : result.error.errors[0].message;
};

export const passwordValidator: ValidatorType = value => {
	const result = loginSchema.shape.password.safeParse(value);
	return result.success ? null : result.error.errors[0].message;
};
