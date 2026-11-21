import React from "react";

const GlassCard = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={`rounded-[28px] border border-white/70 bg-white/50 shadow-[0_10px_40px_rgba(31,41,80,0.08),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl ${className}`}
		>
			{children}
		</div>
	);
};

export default GlassCard;
