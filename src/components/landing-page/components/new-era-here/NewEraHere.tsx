import React from "react";
import newEraHere from "@public/NEW ERA HERE.svg";
import newEraHere_1 from "@public/new-era-here-1.svg";
import newEraHere_2 from "@public/new-era-here-2.svg";
import newEraHere_3 from "@public/new-era-here-3.svg";
import Image from "next/image";
import NewAraFeature from "@/components/landing-page/components/new-era-here/NewAraFeature";

const NewEraHere = () => {
	return (
		<section className="relative py-[8rem]">
			<div className=" bg-white">
				<Image
					src={newEraHere}
					width={400}
					height={400}
					alt="newEraHere"
					className="w-full"
				/>
			</div>

			<div className="flex-jc-c xl:flex-jb-c flex-wrap gap-2 px-6 lg:px-[4.5rem] mt-[4rem] lg:mt-[8rem]">
				<NewAraFeature
					image={newEraHere_1}
					title="Most easiest & structured "
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industry's standard dummy text ever."
				/>
				<NewAraFeature
					image={newEraHere_2}
					title="Demos & best monitor"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industry's standard dummy text ever."
				/>
				<NewAraFeature
					image={newEraHere_3}
					title="Flexible environment"
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industry's standard dummy text ever."
				/>
			</div>
		</section>
	);
};

export default NewEraHere;
