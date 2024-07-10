import ThirdPartyAuthButton from "@/components/common/button/ThirdPartyAuthButton";
import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import AuthInput from "@/components/common/input/AuthInput";
import AuthPasswordInput from "@/components/common/input/AuthPasswordInput";
import RoadmapLogo from "@/components/landing-page/components/navbar/RoadmapLogo";
import {
	EMAIL_INPUT_ICON,
	FACEBOOK_ICON,
	GOOGLE_ICON,
	PASSWORD_INPUT_ICON,
} from "@public/icons/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthLeftImage from "@public/auth-left.svg";
import { login } from "@/app/auth/login/service/login";
import LoginButton from "@/components/auth/login/components/LoginButton";

const page = () => {
	return (
		<div className="h-screen grid grid-cols-2">
			<form
				action={login}
				className="col-span-2 lg:col-span-1 px-8 py-8 bg-white"
			>
				<div className="sm:w-[400px] h-full mx-auto flex flex-col">
					<div className="my-auto">
						<RoadmapLogo
							extension=".io"
							customStyles="[&>svg]:w-[40px] [&>svg]:h-[40px] text-[32px]"
						/>

						<h2 className="mt-[88px] font-poppins font-semibold text-[30px] text-[#171725]">
							Log In
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
								type="email"
								icon={EMAIL_INPUT_ICON}
								name="email"
								placeholder="Your email"
							/>
							<AuthPasswordInput
								type="password"
								icon={PASSWORD_INPUT_ICON}
								name="password"
								placeholder="Your password"
							/>
						</div>

						<LoginButton />

						<button className="w-full h-[54px] font-poppins font-medium text-[15px] text-black rounded-[8px] border-[1.6px] border-[#E0E2E9]">
							Create roadmap without login
						</button>
					</div>

					<div className="mt-auto">
						<p className="inline-block text-[#79828B] text-[15px] font-normal font-poppins">
							Don’t have an account?
						</p>{" "}
						<Link
							href="/auth/register"
							className="font-semibold text-[15px] font-poppins text-primary-ultramarineBlue"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</form>

			<div className="relative h-full bg-primary-ultramarineBlue col-span-1 overflow-hidden hidden lg:block">
				<Image
					src={AuthLeftImage}
					width={400}
					height={400}
					alt=""
					className="absolute w-full h-full -right-[25%]"
				/>
			</div>
		</div>
	);
};

export default page;
