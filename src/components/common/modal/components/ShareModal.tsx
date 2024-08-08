import HorizontalDivider from "@/components/common/divider/components/HorizontalDivider";
import { ShareModalProps } from "@/components/common/modal/types/index.types";
import { DialogContent } from "@/components/ui/dialog";
import { SOCIAL_MEDIA_ICONS } from "@/config/socialMediaIcons";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useToast } from "@/hooks/useToast";
import { COPY_ICON } from "@public/icons/roadmapSteps";
import { CROSS_ICON } from "@public/icons/userProfile";
import { Dialog } from "@radix-ui/react-dialog";
import React, { useRef } from "react";

const ShareModal = ({
	title,
	messageText,
	link,
	children,
	open,
	toggleShareModal,
}: ShareModalProps) => {
	const socialMedia = [
		{ id: 1, link: "https://facebook.com/", platform: "FACEBOOK" },
		{ id: 2, link: "https://instagram.com/", platform: "INSTAGRAM" },
		{ id: 1, link: "https://x.com/", platform: "TWITTER" },
		{ id: 1, link: "https://youtube.com/", platform: "YOUTUBE" },
		{ id: 1, link: "https://www.linkedin.com/", platform: "LINKEDIN" },
	];

	const { successToast } = useToast();

	const handleCopy = async () => {
		await navigator.clipboard.writeText(link);
		successToast("Link copied to clipboard");
	};

	const divRef = useRef<HTMLDivElement>(null);

	useOnClickOutside(toggleShareModal, [divRef]);
	return (
		<Dialog open={open}>
			{children}

			<DialogContent>
				<div
					ref={divRef}
					className="w-[80%] md:w-[544px] mx-auto rounded-[15px] shadow-clg p-8 bg-white"
				>
					<div className="flex-jb-c">
						<h3 className="font-inter font-medium text-[24px] text-[#23262F]">
							{title}
						</h3>

						<button onClick={toggleShareModal} className="text-[#332626]">
							{CROSS_ICON}
						</button>
					</div>

					<p className="mt-[32px] font-inter font-medium text-[#87898E] text-[16px] text-center">
						{messageText}
					</p>

					<div className="flex-jc-c my-[32px]">
						<HorizontalDivider height="h-[1px]" bgColor="bg-[#E0E0E0]" />
						<p className="w-56 text-center font-inter text-[#87898E] text-[14px]">
							or copy link
						</p>
						<HorizontalDivider height="h-[1px]" bgColor="bg-[#E0E0E0]" />
					</div>

					{socialMedia?.length ? (
						<div className="w-full flex-jc-c gap-2 mt-1 mb-[32px]">
							{socialMedia?.map(item => (
								<a
									key={item.id}
									target="_blank"
									href={item.link}
									className="w-[40px] h-[40px]"
								>
									{SOCIAL_MEDIA_ICONS[item.platform]}
								</a>
							))}
						</div>
					) : null}

					<div className="h-[56px] flex-jb-c px-4 border-2 border-[#DFDFE6] rounded-[12px]">
						<a
							href={link}
							target="_blank"
							className="text-[#87898E] font-inter font-normal text-[14px] line-clamp-1"
						>
							{link}
						</a>
						<button onClick={handleCopy} className="flex-jc-c text-[#87898E]">
							{COPY_ICON}
						</button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ShareModal;
