import React from "react";
import { DIRECT_MESSAGE } from "../../../../../public/icons/roadmapPreview";
import Image from "next/image";
import DISCORD_ICON from "../../../../../public/socialMedia/discord.svg";
import LINKEDIN_ICON from "../../../../../public/socialMedia/lnkdin.svg";
import TWITTER_ICON from "../../../../../public/socialMedia/twitter.svg";
import YOUTUBE_ICON from "../../../../../public/socialMedia/yy.svg";

const experienceList = ["Front end", "UI/UX", "Version control"];
const socialMediaList = [
	{ href: "https://x.com", icon: TWITTER_ICON },
	{ href: "https://youtube.com", icon: YOUTUBE_ICON },
	{ href: "https://linkedin.com", icon: LINKEDIN_ICON },
	{ href: "https://discord.com", icon: DISCORD_ICON },
];

const RoadmapPreviewProfileInfo = () => {
	return (
		<>
			<div>
				<div className="flex-jc-c gap-1">
					<h2 className="text-2xl font-semibold">Amr khalil</h2>
					<p className="font-thin text-[#898989] text-[16px]">@amrkhalill</p>
				</div>

				<p className="text-center font-thin font-outfit text-[16px] text-[#898989]">
					Software engineer
				</p>
			</div>

			<div className="w-full h-[40px] flex-jc-c gap-2">
				<button className="w-full h-full px-6 bg-primary-ultramarineBlue text-white rounded-full">
					Follow
				</button>
				<button className="min-w-[40px] h-full flex-jc-c border-2 border-grey-iconBorder hover:border-grey-secondary rounded-full [&>svg]:fill-grey-secondary">
					{DIRECT_MESSAGE}
				</button>
			</div>

			<p className="text-grey-secondary text-[12px] font-light">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummytext ever
				example text
			</p>

			<div className="w-full flex flex-wrap md:flex-col items-center md:items-start gap-4">
				<div>
					<span className="font-poppins text-[12px] font-normal text-grey-secondary">
						Followers
					</span>
					<p className="font-inter font-[400px] text-[14px]">1299</p>
				</div>

				<div>
					<span className="font-poppins text-[12px] font-normal text-grey-secondary block">
						Roadmaps subscribers
					</span>
					<p className="font-inter font-[400px] text-[14px]">2000</p>
				</div>
			</div>

			<div className="w-full">
				<span className="font-poppins text-[12px] font-normal text-grey-secondary block mb-1">
					Experience
				</span>

				<div className="w-full flex gap-2 flex-wrap">
					{experienceList.map(item => (
						<span
							key={item}
							className="h-[30px] flex-jc-c px-4 border border-grey-iconBorder rounded-full text-[12px] font-medium font-inter"
						>
							{item}
						</span>
					))}
				</div>
			</div>

			<div className="w-full">
				<span className="font-poppins text-[12px] font-normal text-grey-secondary block mb-1">
					Social Media
				</span>

				<div className="w-full flex gap-2">
					{socialMediaList.map(item => (
						<a
							key={item.href}
							target="_blank"
							href={item.href}
							className="w-[40px] h-[40px]"
						>
							<Image
								width={100}
								height={100}
								src={item.icon}
								alt={item.href}
								className="w-full h-full"
							/>
						</a>
					))}
				</div>
			</div>
		</>
	);
};

export default RoadmapPreviewProfileInfo;
