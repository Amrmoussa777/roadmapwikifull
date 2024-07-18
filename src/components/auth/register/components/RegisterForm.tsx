"use client";

import { register } from "@/app/auth/register/service/register";
import FormButton from "@/components/auth/login/components/FormButton";
import ThirdPartyAuthButton from "@/components/common/button/ThirdPartyAuthButton";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import AuthInput from "@/components/common/input/AuthInput";
import AuthPasswordInput from "@/components/common/input/AuthPasswordInput";
import useInput from "@/components/common/input/hooks/useInput";
import RoadmapLogo from "@/components/landing-page/components/public-navbar/RoadmapLogo";
import {
	EMAIL_INPUT_ICON,
	GOOGLE_ICON,
	PASSWORD_INPUT_ICON,
	USER_INPUT_ICON,
} from "@public/icons/auth";
import { FACEBOOK_ICON } from "@public/icons/socialMedia";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

const RegisterForm = () => {
	const {
		value: fullName,
		changeValue: changeFullName,
		reset: resetFullName,
	} = useInput("");
	const {
		value: email,
		changeValue: changeEmail,
		reset: resetEmail,
	} = useInput("");
	const {
		value: password,
		changeValue: changePassword,
		reset: resetPassword,
	} = useInput("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmitRegistration = async (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		const formData = { fullName, email, password };

		await register(formData);
		setIsLoading(false);
	};

	return (
		<form
			onSubmit={handleSubmitRegistration}
			className="col-span-2 lg:col-span-1 px-4 sm:px-8 py-8 bg-white"
		>
			<div className="w-[400px] h-full mx-auto flex flex-col">
				<div className="my-auto">
					<RoadmapLogo
						extension=".io"
						customStyles="[&>svg]:w-[40px] [&>svg]:h-[40px] text-[32px]"
					/>

					<h2 className="mt-[88px] font-poppins font-semibold text-[30px] text-[#171725]">
						Sign Up
					</h2>

					<div className="flex-jb-c gap-4 mt-[32px]">
						<ThirdPartyAuthButton
							thirdPartyProviderIcon={GOOGLE_ICON}
							thirdPartyProviderName="Google"
							onClick={() => {}}
						/>
						<ThirdPartyAuthButton
							thirdPartyProviderIcon={FACEBOOK_ICON}
							thirdPartyProviderName="Facebook"
							onClick={() => {}}
						/>
					</div>

					<div className="flex-jc-c my-[26px]">
						<HorizontalDivider height="h-[1px]" bgColor="bg-[#E4E6EC]" />
						<span className="font-poppins font-medium bg-white text-[#969AB8] p-4">
							or
						</span>
						<HorizontalDivider height="h-[1px]" bgColor="bg-[#E4E6EC]" />
					</div>

					<div>
						<AuthInput
							type="text"
							icon={USER_INPUT_ICON}
							name="fullName"
							placeholder="Your name"
							value={fullName}
							handleChangeValue={changeFullName}
						/>
						<AuthInput
							type="email"
							icon={EMAIL_INPUT_ICON}
							name="email"
							placeholder="Your email"
							value={email}
							handleChangeValue={changeEmail}
						/>
						<AuthPasswordInput
							type="password"
							icon={PASSWORD_INPUT_ICON}
							name="password"
							placeholder="Your password"
							value={password}
							handleChangeValue={changePassword}
						/>
					</div>

					<FormButton buttonText="Sign up" isLoading={isLoading} />

					<button
						type="button"
						className="w-full h-[54px] font-poppins font-medium text-[15px] text-black rounded-[8px] border-[1.6px] border-[#E0E2E9]"
					>
						Create roadmap without register
					</button>
				</div>

				<div className="mt-auto">
					<p className="inline-block text-[#79828B] text-[15px] font-normal font-poppins">
						Already have an account?
					</p>{" "}
					<Link
						href="/auth/login"
						className="font-semibold text-[15px] font-poppins text-primary-ultramarineBlue"
					>
						Log in
					</Link>
				</div>
			</div>
		</form>
	);
};

export default RegisterForm;
