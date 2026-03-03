import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import { FAQItemProps } from "@/components/landing-page/types/faq.types";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const FAQItem = ({ data, activeAnswer, setActiveAnswer }: FAQItemProps) => {
	const { id, answer, questionName } = data;
	const isAnswerOpen = id === activeAnswer;

	const handleToggleAnswer = () => {
		if (id === activeAnswer) {
			setActiveAnswer("");
		} else {
			setActiveAnswer(id);
		}
	};

	return (
		<li className="w-full bg-white rounded-xl border border-black/[0.05] shadow-[0_1px_6px_rgba(0,0,0,0.03)] mb-3 overflow-hidden hover:shadow-[0_2px_14px_rgba(80,108,240,0.06)] hover:border-[#506CF0]/10 transition-all duration-300">
			<button
				onClick={handleToggleAnswer}
				className="w-full h-[56px] flex-jb-c px-[21px] font-inter text-[16px] text-[#111] font-semibold"
			>
				<h3>{questionName}</h3>
				<span
					className={`${
						isAnswerOpen ? "" : "rotate-180"
					} transition-all duration-300 text-[#506CF0]`}
				>
					{ARROW_ICON}
				</span>
			</button>

			<AnimatePresence>
				{isAnswerOpen ? (
					<motion.div
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: "auto" },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.2 }}
					>
						<HorizontalDivider
							height="h-[1px]"
							bgColor="bg-black/[0.04]"
							customStyles="!my-0"
						/>

						<p className="p-4 text-[#6B7280] leading-[160%]">{answer}</p>
					</motion.div>
				) : null}
			</AnimatePresence>
		</li>
	);
};

export default FAQItem;
