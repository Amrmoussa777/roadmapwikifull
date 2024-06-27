import React from "react";
import { DIRECT_MESSAGE } from "../../../../../public/icons/roadmapPreview";
import Image from "next/image";
import DISCORD_ICON from "../../../../../public/socialMedia/discord.svg";
import LINKEDIN_ICON from "../../../../../public/socialMedia/lnkdin.svg";
import TWITTER_ICON from "../../../../../public/socialMedia/twitter.svg";
import YOUTUBE_ICON from "../../../../../public/socialMedia/yy.svg";
import { useAppSelector } from "@/redux/store";

const socialMediaList = [
	{ href: "https://x.com", icon: TWITTER_ICON },
	{ href: "https://youtube.com", icon: YOUTUBE_ICON },
	{ href: "https://linkedin.com", icon: LINKEDIN_ICON },
	{ href: "https://discord.com", icon: DISCORD_ICON },
];

const RoadmapPreviewProfileInfo = () => {
	const { user } = useAppSelector(state => state.roadmapPreview.roadmap) || {};

	return (
		<>
			<div className="w-full">
				<div className="flex-jc-c gap-1">
					<h2 className="text-2xl font-semibold line-clamp-1">
						{user?.userName.slice(0, 10)}
					</h2>
					<p className="font-thin text-[#898989] text-[16px]">@9abour</p>
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

			<ul className="w-full flex flex-wrap md:flex-col items-center md:items-start [&>li]:flex [&>li]:flex-col [&>li]:md:block gap-4">
				<li>
					<span className="font-poppins text-[12px] font-normal text-grey-secondary">
						Followers
					</span>
					<p className="font-inter font-normal text-[14px]">
						{user?.followers}
					</p>
				</li>

				<li>
					<span className="font-poppins text-[12px] font-normal text-grey-secondary block">
						Roadmaps subscribers
					</span>
					<p className="font-inter font-normal text-[14px]">
						{user?.roadmapsSubscribers}
					</p>
				</li>
			</ul>

			<div className="w-full">
				<span className="font-poppins text-[12px] font-normal text-grey-secondary block mb-1">
					Experience
				</span>

				{user?.experiences ? (
					<div className="w-full flex gap-2 flex-wrap">
						{user.experiences.map(item => (
							<span
								key={item.id}
								className="h-[30px] flex-jc-c px-4 border border-grey-iconBorder rounded-full text-[12px] font-medium font-inter"
							>
								{item.title}
							</span>
						))}
					</div>
				) : null}
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
