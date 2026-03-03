"use client";

import {
	DRIBBLE_ICON,
	IG_ICON,
	IN_ICON,
	PLAY_ICON,
} from "@public/icons/landingPage";
import React, { useRef } from "react";
import footerTopIcon from "@public/footer-top.svg";
import statusImage from "@public/hero-status.svg";
import Image from "@/components/common/image/CustomImage";
import RoadmapLogo from "@/components/landing-page/components/public-navbar/RoadmapLogo";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Footer = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<footer ref={ref} className="relative px-6 lg:px-[4.5rem] pt-[2rem] overflow-hidden bg-white">
			<div
				className="absolute inset-0 opacity-[0.2]"
				style={{
					backgroundImage:
						"radial-gradient(circle at 1px 1px, #E8E8E8 0.5px, transparent 0)",
					backgroundSize: "24px 24px",
				}}
			/>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="relative z-10 w-full py-[4rem] md:py-[8rem] rounded-[32px] overflow-hidden"
				style={{
					background:
						"linear-gradient(135deg, #506CF0 0%, #6C3AED 50%, #7C5CFC 100%)",
				}}
			>
				<div
					className="absolute inset-0 opacity-[0.06]"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
						backgroundSize: "32px 32px",
					}}
				/>

				<h3 className="relative z-10 font-extrabold text-[22px] md:text-[32px] lg:text-[52px] text-white text-center">
					Start Your Journey Now
				</h3>
				<p className="relative z-10 text-white/60 font-inter text-[14px] md:text-[16px] text-center max-w-[440px] mx-auto mt-3">
					Join thousands of learners already transforming their careers with expert-crafted roadmaps.
				</p>

				<div className="relative z-10 flex items-center justify-center gap-4 xl:gap-5 mt-[30px] md:mt-[36px]">
					<Link
						href={"/auth/register"}
						className="w-[148px] md:w-[200px] h-[44px] md:h-[52px] flex-jc-c text-[14px] md:text-[15px] text-[#506CF0] font-inter font-semibold bg-white rounded-full hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)] transition-all duration-300"
					>
						Create Roadmap
					</Link>
					<Link
						href={`/roadmap/28c6c08b-30cd-4717-8fd0-a47baa4c40fa`}
						className="w-[148px] md:w-[200px] h-[44px] md:h-[52px] flex-jc-c gap-2 text-[14px] md:text-[15px] text-white font-inter font-semibold border border-white/20 hover:border-white/40 hover:bg-white/[0.08] rounded-full transition-all duration-300"
					>
						<span className="w-full h-full flex-jc-c gap-2 hover:translate-x-[2px] transform transition duration-200">
							{PLAY_ICON} Watch demo
						</span>
					</Link>
				</div>

				<Image
					src={footerTopIcon}
					width={112}
					height={112}
					alt="footer-top-icon"
					className="absolute w-[90px] md:w-[112px] top-[-30px] right-[50px]"
				/>

				<Image
					src={statusImage}
					width={400}
					height={112}
					alt="footer-status"
					className="absolute w-[300px] md:w-[600px] bottom-[-10px] xl:bottom-[20px] right-[-150px] opacity-40"
				/>
			</motion.div>

			<div className="relative z-10 w-full md:h-[371.82px] p-6 md:p-12 bg-[#FAFBFC] mt-[3rem] rounded-t-[32px] border border-black/[0.04]">
				<div className="flex flex-col md:flex-row gap-8 md:gap-24">
					<div className="w-[200px]">
						<RoadmapLogo />
					</div>
					<div className="flex gap-6 md:gap-10">
						<div className="flex flex-col font-inter font-medium text-[15px] text-[#5A5A5A] [&>a]:py-1 [&>a:hover]:text-[#506CF0] [&>a]:transition-colors [&>a]:duration-200">
							<h3 className="font-inter font-bold text-[17px] text-[#111] mb-5">
								Explore
							</h3>
							<Link href="/roadmaps">Roadmaps</Link>
							<Link href="/how-it-works">How it works</Link>
							<Link href="/our-mission">Our mission</Link>
							<Link href="/builder">Create</Link>
						</div>

						<div className="flex flex-col font-inter font-medium text-[15px] text-[#5A5A5A] [&>a]:py-1 [&>a:hover]:text-[#506CF0] [&>a]:transition-colors [&>a]:duration-200">
							<h3 className="font-inter font-bold text-[17px] text-[#111] mb-5">
								Company
							</h3>
							<Link href="/about">About us</Link>
							<Link href="/careers">Careers</Link>
							<Link href="/contact">Contact</Link>
						</div>

						<div className="flex flex-col font-inter font-medium text-[15px] text-[#5A5A5A] [&>a]:py-1 [&>a:hover]:text-[#506CF0] [&>a]:transition-colors [&>a]:duration-200">
							<h3 className="font-inter font-bold text-[17px] text-[#111] mb-5">
								Legal
							</h3>
							<Link href="/terms">Terms of Service</Link>
							<Link href="/privacy">Privacy Policy</Link>
						</div>
					</div>
				</div>

				<div className="w-full flex-ic-c flex-col md:flex-row gap-6 md:gap-24 mt-6">
					<div className="w-fit md:w-[200px] flex-ic-c gap-2 [&>a]:w-[40px] [&>a]:h-[40px] [&>a]:flex-jc-c [&>a]:rounded-full [&>a]:border [&>a]:border-black/[0.06] text-[#5A5A5A] [&>a:hover]:shadow-[0_2px_12px_rgba(80,108,240,0.12)] [&>a:hover]:border-[#506CF0]/20 [&>a:hover]:text-[#506CF0] [&>a]:duration-300 [&>a]:transition-all">
						<a href="https://www.instagram.com/" target="_blank">
							{IG_ICON}
						</a>
						<a href="https://dribbble.com/" target="_blank">
							{DRIBBLE_ICON}
						</a>
						<a href="https://www.linkedin.com/" target="_blank">
							{IN_ICON}
						</a>
					</div>

					<p className="text-[#9CA3AF] font-inter font-normal text-[14px]">
						&copy; Roadmap. 2026 &mdash; All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
