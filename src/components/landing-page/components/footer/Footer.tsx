"use client";

import RoadmapLogo from "@/components/landing-page/components/public-navbar/RoadmapLogo";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const exploreLinks = [
	{ href: "/roadmaps", label: "Roadmaps" },
	{ href: "/how-it-works", label: "How it works" },
	{ href: "/our-mission", label: "Our mission" },
	{ href: "/auth/register", label: "Create an account" },
];

const Footer = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<footer ref={ref} className="relative px-6 pb-8 pt-8 lg:px-[4.5rem]">
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="relative overflow-hidden rounded-[32px] border border-white/30 px-6 py-14 text-center shadow-[0_16px_50px_rgba(80,108,240,0.18)] md:px-12 md:py-16"
			>
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(135deg, rgba(80,108,240,0.92) 0%, rgba(108,58,237,0.88) 55%, rgba(124,92,252,0.9) 100%)",
					}}
				/>
				<div className="glass-overlay absolute inset-0 bg-white/10 backdrop-blur-xl" />
				<div
					className="absolute -left-16 top-[-40px] h-48 w-48 rounded-full bg-white/25 blur-3xl"
					aria-hidden
				/>
				<div
					className="absolute bottom-[-50px] right-[-20px] h-56 w-56 rounded-full bg-[#C4B5FD]/40 blur-3xl"
					aria-hidden
				/>

				<div className="relative z-10 mx-auto max-w-[640px]">
					<h2 className="text-[28px] font-extrabold text-white md:text-[44px]">
						Open the library, or publish a path.
					</h2>
					<p className="mx-auto mt-4 max-w-[460px] font-inter text-[15px] leading-[24px] text-white/80 md:text-[16px]">
						Browse published roadmaps without an account. Publishing one
						starts after you sign up.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Link
							href="/roadmaps"
							className="flex h-[48px] w-full items-center justify-center rounded-full bg-white px-6 font-inter text-[15px] font-semibold text-[#4A62E0] sm:w-auto"
						>
							Browse roadmaps
						</Link>
						<Link
							href="/auth/register"
							className="flex h-[48px] w-full items-center justify-center rounded-full border border-white/40 bg-white/15 px-6 font-inter text-[15px] font-semibold text-white sm:w-auto"
						>
							Create an account
						</Link>
					</div>
				</div>
			</motion.div>

			<div className="mt-6 rounded-[28px] border border-[#E6E9F2] bg-white px-6 py-8 shadow-[0_10px_40px_rgba(31,41,80,0.06)] md:px-10 md:py-10">
				<div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
					<RoadmapLogo />
					<nav aria-label="Footer">
						<h3 className="font-inter text-[13px] font-semibold uppercase tracking-[0.12em] text-[#6B7280]">
							Explore
						</h3>
						<ul className="mt-4 space-y-2">
							{exploreLinks.map(link => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="font-inter text-[15px] font-medium text-[#3D3D3D] transition-colors duration-200 hover:text-[#506CF0]"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<p className="mt-8 font-inter text-[14px] text-[#6B7280]">
					&copy; Roadmap. 2026
				</p>
			</div>
		</footer>
	);
};

export default Footer;
