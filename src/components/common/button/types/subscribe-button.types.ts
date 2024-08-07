export type SubscribeButtonProps = {
	offer?: string;
	price:
		| {
				currency: string;
				amount: number;
		  }
		| null
		| undefined;
	details?: string;
	onClick: () => void;
	isSubscribed?: boolean;
};
