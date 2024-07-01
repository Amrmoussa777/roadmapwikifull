import FAQ from "@/components/landing-page/components/faq/FAQ";
import Hero from "@/components/landing-page/components/hero/Hero";
import MostViralCreators from "@/components/landing-page/components/most-viral-creators/MostViralCreators";
import MostViralRoadmaps from "@/components/landing-page/components/most-viral-roadmaps/MostViralRoadmaps";
import Navbar from "@/components/landing-page/components/navbar/Navbar";
import SuperRoadmaps from "@/components/landing-page/components/super-roadmaps/SuperRoadmaps";
import Testimonials from "@/components/landing-page/components/testimonials/Testimonials";

export default function Home() {
	return (
		<div className="max-w-[1440px] mx-auto">
			<Navbar />
			<Hero />
			<SuperRoadmaps />
			<MostViralCreators />
			<MostViralRoadmaps />
			<Testimonials />
			<FAQ />
		</div>
	);
}
