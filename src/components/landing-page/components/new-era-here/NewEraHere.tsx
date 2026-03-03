import React from "react";
import newEraHere from "@public/NEW ERA HERE.svg";
import newEraHere_1 from "@public/new-era-here-1.svg";
import newEraHere_2 from "@public/new-era-here-2.svg";
import newEraHere_3 from "@public/new-era-here-3.svg";
import Image from "@/components/common/image/CustomImage";
import NewAraFeature from "@/components/landing-page/components/new-era-here/NewAraFeature";

const NewEraHere = () => {
	return (
		<section className="relative py-[8rem] bg-white">
			<div className="bg-transparent">
				<Image
					src={newEraHere}
					width={400}
					height={400}
					alt="newEraHere"
					className="w-full"
				/>
			</div>

			<div className="flex justify-center xl:justify-between   flex-wrap  gap-2 px-6 lg:px-[4.5rem] mt-[4rem] lg:mt-[8rem] items-start ">
				<NewAraFeature
					image={newEraHere_1}
					title="Most easiest & structured"
					description="Explore streamlined roadmaps for clear, step-by-step learning journeys, making complex topics accessible and ensuring confident progress."
				/>
				<NewAraFeature
					image={newEraHere_2}
					title="Mentorship"
					description="Access personalized mentorship through adaptable roadmaps, receiving expert guidance to overcome challenges, achieve goals, and reach milestones at your pace."
				/>
				<NewAraFeature
					image={newEraHere_3}
					title="Community-driven"
					description="Join vibrant roadmap communities to post questions, discuss steps, and interact with peers. Collaborate, share knowledge, and advance together."
				/>
			</div>
		</section>
	);
};

export default NewEraHere;
