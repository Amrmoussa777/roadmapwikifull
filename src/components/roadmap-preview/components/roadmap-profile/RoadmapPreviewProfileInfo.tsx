import React from "react";
import { DIRECT_MESSAGE } from "../../../../../public/icons/roadmapPreview";
import Image from "next/image";
import DISCORD_ICON from "../../../../../public/socialMedia/discord.svg";
import LINKEDIN_ICON from "../../../../../public/socialMedia/lnkdin.svg";
import TWITTER_ICON from "../../../../../public/socialMedia/twitter.svg";
import YOUTUBE_ICON from "../../../../../public/socialMedia/yy.svg";

const experienceList = ["Front end", "UI/UX", "Version control"];
const socialMediaList = [
	{ href: "https://discord.com", icon: DISCORD_ICON },
	{ href: "https://linkedin.com", icon: LINKEDIN_ICON },
	{ href: "https://x.com", icon: TWITTER_ICON },
	{ href: "https://youtube.com", icon: YOUTUBE_ICON },
];

const RoadmapPreviewProfileInfo = () => {
	return (
		<>
			<div>
				<div className="flex-jc-c gap-2">
					<h2 className="text-2xl font-semibold">Amr khalil</h2>
					<p className="font-normal text-[#898989]">@amrkhalill</p>
				</div>

				<p className="text-center font-normal text-[#898989]">
					Software engineer
				</p>
			</div>

			<div className="w-full h-[40px] flex-jc-c gap-2">
				<button className="w-full h-full px-6 bg-primary-ultramarineBlue text-white rounded-full">
					Follow
				</button>
				<button className="min-w-[40px] h-full flex-jc-c border border-grey-iconBorder rounded-full [&>svg]:fill-grey-secondary">
					{DIRECT_MESSAGE}
				</button>
			</div>

			<p className="font-normal text-grey-secondary text-sm">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</p>

			<div className="w-full">
				<span className="text-sm font-normal text-grey-secondary">
					Followers
				</span>
				<p>1299</p>

				<span className="text-sm font-normal text-grey-secondary block mt-4">
					Roadmaps subscribers
				</span>
				<p className="">2000</p>
			</div>

			<div className="w-full">
				<span className="text-sm font-normal text-grey-secondary block mb-1">
					Experience
				</span>

				<div className="w-full flex gap-2 flex-wrap">
					{experienceList.map(item => (
						<span
							key={item}
							className="h-[26px] flex-jc-c text-sm px-2 border border-grey-iconBorder rounded-full"
						>
							{item}
						</span>
					))}
				</div>
			</div>

			<div className="w-full">
				<span className="text-sm font-normal text-grey-secondary block mb-1">
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
