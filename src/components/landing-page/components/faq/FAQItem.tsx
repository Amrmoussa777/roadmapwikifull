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
		<li className="mb-3 w-full overflow-hidden rounded-2xl border border-white/70 bg-white/50 shadow-[0_8px_28px_rgba(31,41,80,0.06),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl transition-all duration-300 hover:border-[#506CF0]/20">
			<button
				onClick={handleToggleAnswer}
				className="flex min-h-[56px] w-full items-center justify-between gap-4 px-[21px] py-3 text-left font-inter text-[16px] font-semibold text-[#111]"
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
