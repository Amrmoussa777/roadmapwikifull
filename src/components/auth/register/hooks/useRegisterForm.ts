import { register } from "@/app/auth/register/service/register";
import {
	emailValidator,
	fullNameValidator,
	registerSchema,
	passwordValidator,
} from "@/components/auth/login/validation/registerValidation";
import useInput from "@/components/common/input/hooks/useInput";
import { useToast } from "@/hooks/useToast";
import { FormEvent, useState } from "react";

export const useRegisterForm = () => {
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
	const {
		value: fullName,
		changeValue: changeFullName,
		error: fullNameError,
		handleSetError: setFullNameError,
	} = useInput("", fullNameValidator);

	const [isLoading, setIsLoading] = useState(false);
	const { errorToast, successToast } = useToast();

	const handleSubmitRegistration = async (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Validate form data
		const formData = { email, password, fullName };
		const result = registerSchema.safeParse(formData);

		if (!result.success) {
			setFullNameError(
				result.error.errors.find(err => err.path[0] === "fullName")?.message ||
					""
			);
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
		const { message } = await register(formData);

		if (!message) {
			successToast("Registration successful");

			const urlParams = new URLSearchParams(location.search);

			const redirectPath = urlParams.get("redirectPath");

			const newParams = new URLSearchParams();

			urlParams.forEach((value, key) => {
				if (key !== "redirectPath") {
					newParams.append(key, value);
				}
			});

			setTimeout(() => {
				if (redirectPath) {
					location.replace(`${redirectPath}?${newParams}`);
				} else {
					location.replace("/");
				}
			}, 1000);
		} else {
			errorToast(message);
		}

		setIsLoading(false);
	};

	return {
		fullName,
		changeFullName,
		fullNameError,
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
