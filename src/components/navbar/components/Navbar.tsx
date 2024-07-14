"use client";

import PublicNavbar from "@/components/landing-page/components/public-navbar/PublicNavbar";
import PrivateNavbar from "@/components/navbar/components/PrivateNavbar";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { useContext } from "react";

const Navbar = () => {
	const { currentUser } = useContext(CurrentUserContext);

	return currentUser ? <PrivateNavbar /> : <PublicNavbar />;
};

export default Navbar;
