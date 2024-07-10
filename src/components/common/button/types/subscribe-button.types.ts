export type SubscribeButtonProps = {
	offer?: string;
	price: number | undefined;
	details?: string;
	onClick: () => void;
	isSubscribed?: boolean;
};
