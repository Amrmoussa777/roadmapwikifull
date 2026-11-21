import React from "react";

const SurfaceCard = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={`rounded-[28px] border border-[#E6E9F2] bg-white shadow-[0_10px_40px_rgba(31,41,80,0.06)] ${className}`}
		>
			{children}
		</div>
	);
};

export default SurfaceCard;
