export type FAQItemType = {
	id: string;
	questionName: string;
	answer: string;
};

export type FAQItemProps = {
	data: FAQItemType;
	setActiveAnswer: (id: string) => void;
	activeAnswer: string;
};
