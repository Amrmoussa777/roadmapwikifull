import { ReactNode } from "react";

export type ModalProps = {
	title: string;
	children: ReactNode;
	open: boolean;
	toggleShareModal: () => void;
};

export interface ShareModalProps extends ModalProps {
	link: string;
	messageText: string;
}
