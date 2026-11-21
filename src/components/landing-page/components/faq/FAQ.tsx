"use client";

import FAQItem from "@/components/landing-page/components/faq/FAQItem";
import { FAQItemType } from "@/components/landing-page/types/faq.types";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";

const FAQList: FAQItemType[] = [
	{
		id: "1",
		questionName: "What is Roadmap?",
		answer:
			"Roadmap is a product for structured paths. A creator publishes a roadmap made of ordered steps. A learner subscribes and follows those steps.",
	},
	{
		id: "2",
		questionName: "How do I start?",
		answer:
			"Search the library on this page. Subscribing happens on the roadmap page, after you create an account.",
	},
	{
		id: "3",
		questionName: "Can I publish my own roadmap?",
		answer:
			"Yes. After you sign in, the builder is where you add steps, descriptions, durations, tags, files, verification links, and a price.",
	},
	{
		id: "4",
		questionName: "Does a roadmap cost money?",
		answer:
			"The creator sets the price and currency. An amount of zero means the roadmap is free. The price is visible on the roadmap before you subscribe.",
	},
	{
		id: "5",
		questionName: "Where do questions go?",
		answer:
			"Each roadmap has a discussion. You can post there and reply to other posts on that roadmap.",
	},
];

const FAQ = () => {
	const [activeAnswer, setActiveAnswer] = useState("");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section ref={ref} className="px-6 pb-8 lg:px-[4.5rem] lg:pb-16">
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="mx-auto max-w-[720px] text-center"
			>
				<h2 className="text-[32px] font-bold leading-tight text-[#171618] md:text-[44px]">
					Questions
				</h2>
				<p className="mx-auto mt-4 max-w-[520px] font-inter text-[16px] leading-[26px] text-[#6B7280]">
					These answers describe the product as it works today.
				</p>
			</motion.div>

			<ul className="relative z-10 mx-auto mt-10 w-full max-w-[760px]">
				{FAQList.map(item => (
					<FAQItem
						key={item.id}
						data={item}
						setActiveAnswer={setActiveAnswer}
						activeAnswer={activeAnswer}
					/>
				))}
			</ul>
		</section>
	);
};

export default FAQ;
