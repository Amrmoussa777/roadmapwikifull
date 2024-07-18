import { login } from "@/app/auth/login/service/login";
import {
	emailValidator,
	loginSchema,
	passwordValidator,
} from "@/components/auth/login/validation/loginValidation";
import useInput from "@/components/common/input/hooks/useInput";
import { useToast } from "@/hooks/useToast";
import { FormEvent, useState } from "react";

export const useLoginForm = () => {
	const {
		value: email,
		changeValue: changeEmail,
		error: emailError,
		handleSetError: setEmailError,
	} = useInput("", emailValidator);
	const {
		value: password,
		changeValue: changePassword,
		error: passwordError,
		handleSetError: setPasswordError,
	} = useInput("", passwordValidator);
	const [isLoading, setIsLoading] = useState(false);
	const { errorToast, successToast } = useToast();

	const handleSubmitRegistration = async (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Validate form data
		const formData = { email, password };
		const result = loginSchema.safeParse(formData);

		if (!result.success) {
			setEmailError(
				result.error.errors.find(err => err.path[0] === "email")?.message || ""
			);
			setPasswordError(
				result.error.errors.find(err => err.path[0] === "password")?.message ||
					""
			);

			setIsLoading(false);
			return;
		}

		// Clear previous errors
		const { message } = await login(formData);

		if (!message) {
			successToast("Logged in successfully");

			setTimeout(() => {
				location.replace("/");
			}, 1000);
		} else {
			errorToast(message);
		}

		setIsLoading(false);
	};

	return {
		email,
		changeEmail,
		changePassword,
		password,
		emailError,
		passwordError,
		isLoading,
		handleSubmitRegistration,
	};
};
