import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import { FAQItemProps } from "@/components/landing-page/types/faq.types";
import { ARROW_ICON } from "@public/icons/roadmapSteps";
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
		<li className="w-full shadow-csm rounded-[4px] mb-3">
			<button
				onClick={handleToggleAnswer}
				className="w-full h-[56px] flex-jb-c rounded-[4px] border-l-2 border-primary-ultramarineBlue px-[21px] font-inter text-[17px] text-[#171618] font-semibold"
			>
				<h3>{questionName}</h3>
				<span className={`${isAnswerOpen ? "" : "rotate-180"} transition-all`}>
					{ARROW_ICON}
				</span>
			</button>

			{isAnswerOpen ? (
				<>
					<HorizontalDivider
						height="h-[1px]"
						bgColor="bg-[#E0E0E0]"
						customStyles="!my-0"
					/>

					<p className="p-4">{answer}</p>
				</>
			) : null}
		</li>
	);
};

export default FAQItem;
