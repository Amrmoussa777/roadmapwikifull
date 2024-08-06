import { getUser } from "@/app/auth/services/getUser";
import CreatorHome from "@/components/creator-home/components/CreatorHome";
import FAQ from "@/components/landing-page/components/faq/FAQ";
import Footer from "@/components/landing-page/components/footer/Footer";
import Hero from "@/components/landing-page/components/hero/Hero";
import MostViralCreators from "@/components/landing-page/components/most-viral-creators/MostViralCreators";
import MostViralRoadmaps from "@/components/landing-page/components/most-viral-roadmaps/MostViralRoadmaps";
import NewEraHere from "@/components/landing-page/components/new-era-here/NewEraHere";
import SuperRoadmaps from "@/components/landing-page/components/super-roadmaps/SuperRoadmaps";
import Testimonials from "@/components/landing-page/components/testimonials/Testimonials";
import UserHome from "@/components/user-home/components/UserHome";
import { cookies } from "next/headers";

export default async function Home() {
	const accessToken = cookies().get("accessToken");
	const refreshToken = cookies().get("refreshToken");
	const currentUser = await getUser(accessToken?.value, refreshToken?.value);

	return currentUser ? (
		currentUser.role !== "CREATOR" ? (
			<CreatorHome />
		) : (
			<UserHome />
		)
	) : (
		<main className="relative max-w-[1440px] mx-auto">
			<Hero />
			<SuperRoadmaps />
			<MostViralCreators />
			<MostViralRoadmaps />
			<Testimonials />
			<FAQ />
			<NewEraHere />
			<Footer />
		</main>
	);
}
