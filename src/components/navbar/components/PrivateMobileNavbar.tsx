import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import PrivateMobileNavbarButtons from "@/components/navbar/components/PrivateMobileNavbarButtons";
import PrivateNavbarCurrentUser from "@/components/navbar/components/PrivateNavbarCurrentUser";
import PrivateNavbarLinks from "@/components/navbar/components/PrivateNavbarLinks";
import React from "react";

const PrivateMobileNavbar = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
	return (
		<div
			className={`absolute w-full h-[calc(100vh-74px)] top-[74px] left-0 bg-white flex flex-col ${
				isMenuOpen ? "block" : "hidden"
			}`}
		>
			<PrivateNavbarLinks />

			<div className="mt-auto px-4 mb-4">
				<HorizontalDivider
					height="h-[1px]"
					bgColor="bg-[#F0F0F0]"
					customStyles="my-8"
				/>
				<PrivateNavbarCurrentUser />

				<PrivateMobileNavbarButtons />
			</div>
		</div>
	);
};

export default PrivateMobileNavbar;
