"use client";

import Image from "@/components/common/image/CustomImage";
import React, { useRef, useState } from "react";
import questionsImage from "@public/landing-questions.svg";
import FAQItem from "@/components/landing-page/components/faq/FAQItem";
import { FAQItemType } from "@/components/landing-page/types/faq.types";
import { motion, useInView } from "framer-motion";

const FAQ = () => {
	const [activeAnswer, setActiveAnswer] = useState("");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const FAQList: FAQItemType[] = [
		{
			id: "1",
			questionName: "What is Roadmap?",
			answer:
				"Roadmap is a platform where experts create structured, step-by-step learning paths on any topic. Whether you want to break into tech, learn a new skill, or advance your career, you can follow a curated roadmap that guides you from start to finish with clear milestones and resources.",
		},
		{
			id: "2",
			questionName: "How can Roadmap help me reach my goals?",
			answer:
				"Instead of spending hours searching for scattered tutorials, Roadmap gives you a proven path to follow. Each roadmap is created by an industry expert, includes estimated timelines, and lets you track your progress. You can also join the community discussion on every step to get help when you're stuck.",
		},
		{
			id: "3",
			questionName: "How do I get started with Roadmap?",
			answer:
				"Simply create a free account, browse our library of roadmaps, and subscribe to the ones that match your goals. You'll see every step laid out with descriptions, durations, and resources. As you complete each step, you can mark your progress and engage with the community.",
		},
		{
			id: "4",
			questionName: "Can I create my own roadmaps?",
			answer:
				"Absolutely! If you have expertise in a topic, you can become a creator on Roadmap. Use our intuitive builder to create step-by-step learning paths, add resources and verifications, set pricing, and share your knowledge with thousands of learners around the world.",
		},
		{
			id: "5",
			questionName: "Is Roadmap free to use?",
			answer:
				"Roadmap offers both free and premium content. Many roadmaps are completely free, while some expert-created paths may have a one-time fee set by the creator. You can browse and preview any roadmap before subscribing, so you always know what you're getting.",
		},
	];

	return (
		<section ref={ref} className="relative px-6 lg:px-[4.5rem] py-[5rem] bg-[#FAFBFC]">
			<div
				className="absolute inset-0 opacity-[0.3]"
				style={{
					backgroundImage:
						"radial-gradient(circle at 1px 1px, #E0E0E0 0.5px, transparent 0)",
					backgroundSize: "28px 28px",
				}}
			/>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="relative z-10"
			>
				<h2 className="text-[24px] md:text-[44px] font-bold text-center leading-tight text-[#111]">
					Frequently Asked Questions
				</h2>
				<p className="text-[13px] md:text-[16px] font-inter font-normal text-center leading-[24px] text-[#6B7280] max-w-[520px] mx-auto mt-4">
					Everything you need to know about Roadmap. Can&apos;t find what you&apos;re looking for? Reach out to our team.
				</p>
			</motion.div>

			<div className="relative z-10 flex-jc-c flex-col lg:flex-row gap-8 lg:gap-4 mt-14">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={isInView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
				>
					<Image src={questionsImage} width={400} height={400} alt="questions" />
				</motion.div>

				<motion.ul
					initial={{ opacity: 0, x: 30 }}
					animate={isInView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
					className="w-full max-w-[550px]"
				>
					{FAQList.map(item => (
						<FAQItem
							key={item.id}
							data={item}
							setActiveAnswer={setActiveAnswer}
							activeAnswer={activeAnswer}
						/>
					))}
				</motion.ul>
			</div>
		</section>
	);
};

export default FAQ;
