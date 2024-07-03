import {
	DRIBBLE_ICON,
	IG_ICON,
	IN_ICON,
	PLAY_ICON,
} from "@public/icons/landingPage";
import React from "react";
import footerTopIcon from "@public/footer-top.svg";
import statusImage from "@public/hero-status.svg";
import Image from "next/image";
import RoadmapLogo from "@/components/landing-page/components/navbar/RoadmapLogo";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="px-6 lg:px-[4.5rem] pt-[2rem] overflow-hidden">
			<div className="relative w-full py-[4rem] md:py-[10rem] bg-primary-ultramarineBlue rounded-[32px]">
				<h3 className="font-extrabold text-[22px] md:text-[32px] lg:text-[52px] text-white text-center">
					Start Your Journey Now
				</h3>

				<div className="flex items-center justify-center gap-4 xl:gap-6 mt-[40px] md:mt-[40px]">
					<button className="w-[148px] md:w-[208px] h-[42px] md:h-[56px] flex-jc-c text-[14px] md:text-[16px] p-[16px] text-primary-ultramarineBlue font-inter font-semibold bg-white rounded-[10px]">
						Create Roadmap
					</button>
					<button className="w-[148px] md:w-[208px] h-[42px] md:h-[56px] flex-jc-c gap-2 text-[14px] md:text-[16px] p-[16px] text-white font-inter font-semibold bg-primary-ultramarineBlue border-2 border-[#ACB5B7] rounded-[10px]">
						{PLAY_ICON} Watch demo
					</button>
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
					className="absolute w-[300px] md:w-[600px] bottom-[-10px] xl:bottom-[20px] right-[-150px]"
				/>
			</div>
			<div className="w-full md:h-[371.82px] p-6 md:p-12 bg-[#F7F7F7] mt-[4rem] rounded-t-[32px]">
				<div className="flex flex-col md:flex-row gap-8 md:gap-24">
					<div className="w-[200px]">
						<RoadmapLogo />
					</div>
					<div className="flex gap-6 md:gap-10">
						<div className="flex flex-col font-inter font-medium text-[16px] text-[#171618]">
							<h3 className="font-inter font-bold text-[18px] text-[#171619] mb-6">
								Explore
							</h3>

							<Link href="/">Docs</Link>
							<Link href="/">Integrations</Link>
							<Link href="/">Slack</Link>
							<Link href="/">Pricing</Link>
							<Link href="/">Example</Link>
							<Link href="/">Blog</Link>
						</div>

						<div className="flex flex-col font-inter font-medium text-[16px] text-[#171618]">
							<h3 className="font-inter font-bold text-[18px] text-[#171619] mb-6">
								Company
							</h3>

							<Link href="/">Example txt</Link>
							<Link href="/">Press Kit</Link>
							<Link href="/">Status</Link>
						</div>

						<div className="flex flex-col font-inter font-medium text-[16px] text-[#171618]">
							<h3 className="font-inter font-bold text-[18px] text-[#171619] mb-6">
								Legal
							</h3>

							<Link href="/">Terms of Service</Link>
							<Link href="/">Privacy Policy</Link>
						</div>
					</div>
				</div>

				<div className="w-full flex-ic-c flex-col md:flex-row gap-6 md:gap-24 mt-6">
					<div className="w-fit md:w-[200px] flex-ic-c gap-2 [&>a]:w-[42px] [&>a]:h-[42px] [&>a]:flex-jc-c [&>a]:rounded-full [&>a]:border [&>a]:border-[#38388A]/15 text-black">
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

					<p className="text-[#5A5A5B] font-inter font-normal text-[14px]">
						© Roadmap. 2024 — All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
