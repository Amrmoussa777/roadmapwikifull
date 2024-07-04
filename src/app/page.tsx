import FAQ from "@/components/landing-page/components/faq/FAQ";
import Footer from "@/components/landing-page/components/footer/Footer";
import Hero from "@/components/landing-page/components/hero/Hero";
import MostViralCreators from "@/components/landing-page/components/most-viral-creators/MostViralCreators";
import MostViralRoadmaps from "@/components/landing-page/components/most-viral-roadmaps/MostViralRoadmaps";
import Navbar from "@/components/landing-page/components/navbar/Navbar";
import NewEraHere from "@/components/landing-page/components/new-era-here/NewEraHere";
import SuperRoadmaps from "@/components/landing-page/components/super-roadmaps/SuperRoadmaps";
import Testimonials from "@/components/landing-page/components/testimonials/Testimonials";

export default function Home() {
	return (
		<>
			<Navbar />
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
		</>
	);
}
