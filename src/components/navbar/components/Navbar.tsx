import { getUser } from "@/app/auth/services/getUser";
import PublicNavbar from "@/components/landing-page/components/public-navbar/PublicNavbar";
import PrivateNavbar from "@/components/navbar/components/PrivateNavbar";

const Navbar = async () => {
	const currentUser = await getUser();

	return currentUser ? <PrivateNavbar /> : <PublicNavbar />;
};

export default Navbar;
