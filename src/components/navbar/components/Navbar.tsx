import { getUser } from "@/app/auth/services/getUser";
import PublicNavbar from "@/components/landing-page/components/public-navbar/PublicNavbar";
import PrivateNavbar from "@/components/navbar/components/PrivateNavbar";
import { cookies } from "next/headers";

const Navbar = async () => {
	const accessToken = cookies().get("accessToken");
	const refreshToken = cookies().get("refreshToken");
	const currentUser = await getUser(accessToken?.value, refreshToken?.value);

	return currentUser ? <PrivateNavbar /> : <PublicNavbar />;
};

export default Navbar;
