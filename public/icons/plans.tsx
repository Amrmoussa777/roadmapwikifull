const EURO_CURRENCY_ICON = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			d="M15 21q-2.95 0-5.25-1.675T6.5 15H3v-2h3.05q-.075-.6-.062-1.112T6.05 11H3V9h3.5q.95-2.65 3.25-4.325T15 3q1.725 0 3.263.613T21 5.3l-1.425 1.4q-.925-.8-2.087-1.25T15 5q-2.125 0-3.8 1.113T8.675 9H15v2H8.075q-.1.675-.075 1.188t.075.812H15v2H8.675q.85 1.775 2.525 2.888T15 19q1.325 0 2.488-.45t2.087-1.25L21 18.7q-1.2 1.075-2.738 1.688T15 21"
		/>
	</svg>
);
const USD_CURRENCY_ICON = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 16 16"
	>
		<path
			fill="currentColor"
			d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73z"
		/>
	</svg>
);
const RUB_CURRENCY_ICON = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 256 256"
	>
		<path
			fill="currentColor"
			d="M148 152a60 60 0 0 0 0-120H88a8 8 0 0 0-8 8v96H56a8 8 0 0 0 0 16h24v16H56a8 8 0 0 0 0 16h24v32a8 8 0 0 0 16 0v-32h48a8 8 0 0 0 0-16H96v-16ZM96 48h52a44 44 0 0 1 0 88H96Z"
		/>
	</svg>
);

const CHECK_PLAN = (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="1" y="1" width="18" height="18" rx="9" fill="white" />
		<rect x="1" y="1" width="18" height="18" rx="9" stroke="black" />
		<circle cx="10" cy="10" r="9" fill="white" />
		<path
			d="M6 9.94545L8.84444 13L14 7"
			stroke="black"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const ARROW_PLAN_ICON = (
	<svg
		width="16"
		height="12"
		viewBox="0 0 16 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M15.0303 6.53033C15.3232 6.23744 15.3232 5.76256 15.0303 5.46967L10.2574 0.696699C9.96447 0.403806 9.48959 0.403806 9.1967 0.696699C8.90381 0.989593 8.90381 1.46447 9.1967 1.75736L13.4393 6L9.1967 10.2426C8.90381 10.5355 8.90381 11.0104 9.1967 11.3033C9.48959 11.5962 9.96447 11.5962 10.2574 11.3033L15.0303 6.53033ZM0.5 6.75H14.5V5.25H0.5V6.75Z"
			fill="white"
		/>
	</svg>
);

export {
	EURO_CURRENCY_ICON,
	CHECK_PLAN,
	ARROW_PLAN_ICON,
	USD_CURRENCY_ICON,
	RUB_CURRENCY_ICON,
};
