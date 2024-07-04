import Image from "next/image";
import React from "react";
import DISCORD_ICON from "@public/socialMedia/discord.svg";
import LINKEDIN_ICON from "@public/socialMedia/lnkdin.svg";
import TWITTER_ICON from "@public/socialMedia/twitter.svg";
import YOUTUBE_ICON from "@public/socialMedia/yy.svg";

const socialMediaList = [
	{ href: "https://x.com", icon: TWITTER_ICON },
	{ href: "https://youtube.com", icon: YOUTUBE_ICON },
	{ href: "https://linkedin.com", icon: LINKEDIN_ICON },
	{ href: "https://discord.com", icon: DISCORD_ICON },
];

const UserDetails = () => {
	return (
		<div className="md:ml-[196px]">
			<div className="flex items-center flex-wrap sm:gap-2">
				<h3 className="text-[24px] font-semibold text-black">
					Mohamed Elhossiny
				</h3>
				<span className="text-[16px] font-normal text-[#898989]">
					@mhmdlogan
				</span>
			</div>

			<span className="text-[16px] font-normal text-[#898989] block">
				UI UX / Product Designer
			</span>

			<div className="w-full flex gap-2 mt-1">
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
	);
};

export default UserDetails;
