"use client";

import Image from "next/image";
import React, { useState } from "react";
import questionsImage from "@public/landing-questions.svg";
import FAQItem from "@/components/landing-page/components/faq/FAQItem";
import { FAQItemType } from "@/components/landing-page/types/faq.types";

const FAQ = () => {
	const [activeAnswer, setActiveAnswer] = useState("1");

	const FAQList: FAQItemType[] = [
		{
			id: "1",
			questionName: "What is Roadmap.io?",
			answer:
				"Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
		{
			id: "2",
			questionName: "Can Roadmap add value to me?",
			answer:
				"Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
		{
			id: "3",
			questionName: "How do I use Roadmap?",
			answer:
				"Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
		{
			id: "4",
			questionName: "What is Roadmap.io?",
			answer:
				"Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
		{
			id: "5",
			questionName: "Can Roadmap add value to me?",
			answer:
				"Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
	];

	return (
		<section className="px-6 lg:px-[4.5rem] py-[4.5rem] bg-[#F8F9FA]">
			<div className="heading-section [&>*]:!text-[#171618]">
				<h2>Frequently Asked Questions</h2>
			</div>

			<div className="flex-jc-c flex-col lg:flex-row gap-8 lg:gap-4 mt-16">
				<Image src={questionsImage} width={400} height={400} alt="questions" />

				<ul className="w-full max-w-[550px]">
					{FAQList.map(item => (
						<FAQItem
							key={item.id}
							data={item}
							setActiveAnswer={setActiveAnswer}
							activeAnswer={activeAnswer}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default FAQ;
