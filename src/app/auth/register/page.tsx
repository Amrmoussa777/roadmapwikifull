import React from "react";
import AuthLeftImage from "@public/auth-left.svg";
import RegisterForm from "@/components/auth/register/components/RegisterForm";
import Image from "@/components/common/image/CustomImage";

const page = () => {
	return (
		<div className="h-screen grid grid-cols-2">
			<RegisterForm />

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
