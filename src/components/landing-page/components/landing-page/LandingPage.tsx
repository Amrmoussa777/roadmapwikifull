"use client";

import FAQ from "@/components/landing-page/components/faq/FAQ";
import Footer from "@/components/landing-page/components/footer/Footer";
import Hero from "@/components/landing-page/components/hero/Hero";
import ProductSections from "@/components/landing-page/components/product/ProductSections";
import SuperRoadmaps from "@/components/landing-page/components/super-roadmaps/SuperRoadmaps";
import { MotionConfig } from "framer-motion";

const LandingPage = () => {
	return (
		<MotionConfig reducedMotion="user">
			<main className="relative w-full overflow-x-hidden bg-[#F4F6FB]">
				<div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
					<div className="absolute -top-24 right-[-8%] h-[460px] w-[460px] rounded-full bg-[#506CF0]/30 blur-3xl" />
					<div className="absolute left-[-12%] top-[22%] h-[420px] w-[420px] rounded-full bg-[#7C5CFC]/25 blur-3xl" />
					<div className="absolute bottom-[18%] right-[8%] h-[320px] w-[320px] rounded-full bg-[#9BB6FF]/40 blur-3xl" />
					<div className="absolute bottom-[-80px] left-[18%] h-[280px] w-[280px] rounded-full bg-[#C4B5FD]/35 blur-3xl" />
				</div>

				<div className="relative z-10 mx-auto max-w-[1440px]">
					<Hero />
					<SuperRoadmaps />
					<ProductSections />
					<FAQ />
					<Footer />
				</div>
			</main>
		</MotionConfig>
	);
};

export default LandingPage;
