"use client";

import CreatorItem from "@/components/landing-page/components/most-viral-creators/CreatorItem";
import React from "react";

const MostViralCreators = () => {
	return (
		<section className="px-4 py-[4.5rem] bg-white">
			<div className="heading-section [&>*]:!text-[#171618]">
				<h2>With the Most Viral Creators</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has beenthe industry's standard dummy text ever
					since the 1500s
				</p>
			</div>

			<div className="flex-jc-c overflow-x-scroll gap-4 mt-16 hidden-scrollbar">
				{Array.from(Array(10)).map((item, index) => (
					<CreatorItem key={index} />
				))}
			</div>
		</section>
	);
};

export default MostViralCreators;
