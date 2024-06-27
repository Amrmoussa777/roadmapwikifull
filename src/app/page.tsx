import Hero from "@/components/landing-page/components/hero/Hero";
import Navbar from "@/components/landing-page/components/navbar/Navbar";

export default function Home() {
	return (
		<div className="max-w-[1440px] mx-auto">
			<Navbar />
			<Hero />
		</div>
	);
}
