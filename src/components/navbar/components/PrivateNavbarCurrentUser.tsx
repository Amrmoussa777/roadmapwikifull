"use client";

import Avatar from "@/components/common/avatar/components/Avatar";
import PrivateNavbarCurrentUserLoader from "@/components/navbar/components/loading/PrivateNavbarCurrentUserLoader";
import PrivateNavbarCurrentUserButtons from "@/components/navbar/components/PrivateNavbarCurrentUserButtons";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import useToggle from "@/hooks/useToggle";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef } from "react";

const PrivateNavbarCurrentUser = () => {
	const { currentUser } = useContext(CurrentUserContext);
	const { fullName, userName, image } = currentUser || {};
	const firstName = fullName?.split(" ")[0];
	const { currentState: isUserButtonsVisible, toggle: toggleUserButtons } =
		useToggle(false);
	const pathname = usePathname() ?? "";
	const { push } = useRouter();
	const { responsive } = useSizeScreen(768);

	useEffect(() => {
		if (isUserButtonsVisible) {
			toggleUserButtons();
		}
	}, [pathname]);

	const handleUserClickButton = () => {
		if (responsive) {
			return push(`/user/${userName}`);
		}

		toggleUserButtons();
	};

	const buttonRef = useRef<HTMLButtonElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	useOnClickOutside(toggleUserButtons, [buttonRef, divRef]);

	if (!currentUser) return <PrivateNavbarCurrentUserLoader />;

	return (
		<div className="relative w-full justify-end items-start text-start md:text-end gap-2 flex flex-row-reverse md:flex-row md:flex-jc-c">
			<button
				onClick={handleUserClickButton}
				ref={buttonRef}
				className="justify-end items-start text-start md:text-end gap-2 flex flex-row-reverse md:flex-row md:flex-jc-c"
			>
				<div>
					<h3 className="font-medium text-black text-[14px] leading-[1]">
						HI, {firstName}
					</h3>
					<span className="font-normal text-[12px] text-[#79828B] leading-[1]">
						{userName}
					</span>
				</div>

				<Avatar
					image_url={image}
					name={fullName || ""}
					customStyles="w-[40px] h-[40px] rounded-full !border-none object-cover [&>img]:border-none !bg-primary-ultramarineBlue text-white"
				/>
			</button>

			<AnimatePresence>
				{isUserButtonsVisible ? (
					<motion.div
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.1 }}
						ref={divRef}
						className="absolute min-w-[300px] w-[300px] right-0 top-[82px] flex flex-col p-4 bg-white shadow-clg border border-primary-ultramarineBlue/20 rounded-xl z-10"
					>
						<PrivateNavbarCurrentUserButtons />
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
};

export default PrivateNavbarCurrentUser;
