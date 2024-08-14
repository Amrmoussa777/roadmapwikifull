import { useLogout } from "@/components/auth/logout/hooks/useLogout";
import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import PrivateMobileNavbarButton from "@/components/navbar/components/PrivateMobileNavbarButton";
import { SIGN_OUT_ICON } from "@public/icons/navbar";
import React from "react";

const LogoutButton = () => {
	const { logout, loading } = useLogout();

	return (
		<div className="relative w-fit">
			<PrivateMobileNavbarButton
				text="Sign Out"
				icon={SIGN_OUT_ICON}
				customStyles="mt-4"
				onClick={logout}
			/>

			{loading ? (
				<ButtonDotsLoader customStyles="bg-white/80 [&>div]:!bg-primary-ultramarineBlue" />
			) : null}
		</div>
	);
};

export default LogoutButton;
