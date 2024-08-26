import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import CreateRoadmapHeaderLoader from "@/components/builder/navbar/CreateRoadmapHeaderLoader";
import MenuButton from "@/components/landing-page/components/public-navbar/MenuButton";
import PathnameHelper from "@/helpers/pathname.helper";
import { useFetch } from "@/hooks/useFetch";
import useToggle from "@/hooks/useToggle";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { toggleRoadmapStatus } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { NAVBAR_MENU_ICON, SHARE_ICON } from "@public/icons/roadmapPreview";
import { SAVE_ICON } from "@public/icons/roadmapSteps";
import { useParams, useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import dynamic from "next/dynamic";

const ShareModal = dynamic(
	() => import("@/components/common/modal/components/ShareModal"),
	{ ssr: false }
);

const CreateRoadmapHeader = ({
	sidebarMobile,
	toggleSidebarMobile,
}: {
	sidebarMobile: boolean;
	toggleSidebarMobile: () => void;
}) => {
	const { roadmapId } = useParams();
	const { roadmap, isLoading } = useAppSelector(state => state.createRoadmap);
	const { currentUser } = useContext(CurrentUserContext);
	const { title, id, status } = roadmap || {};
	const { currentState: shareModal, toggle: toggleShareModal } =
		useToggle(false);

	const { push } = useRouter();
	const dispatch = useAppDispatch();

	const { fetchData, loading } = useFetch();

	const publishRoadmap = async () => {
		await fetchData("POST", `roadmap/${roadmapId}/publish`);
		toggleShareModal();
		dispatch(toggleRoadmapStatus());
	};

	const handleClickPublishRoadmap = () => {
		if (status !== "DRAFT") return toggleShareModal();

		if (currentUser) {
			publishRoadmap();
		} else {
			return push(
				`/auth/register?redirectPath=/builder/${roadmap?.id}/steps&action=publish`
			);
		}
	};

	// Handle callback
	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);

		if (urlParams.get("action") === "publish" && status && status === "DRAFT") {
			setTimeout(() => {
				publishRoadmap();

				PathnameHelper.clearUrlParams();
			}, 1000);
		}
	}, [status]);

	if (isLoading) return <CreateRoadmapHeaderLoader />;

	return (
		<div className="w-full bg-white">
			<div className="h-[60px] sm:h-[82px] flex-jb-c px-4 sm:px-6">
				<div className="flex-jc-c h-full sm:hidden">
					<MenuButton
						isMenuOpen={sidebarMobile}
						setIsMenuOpen={toggleSidebarMobile}
					/>

					<VerticalDivider
						width="min-w-[2px]"
						bgColor="bg-[#F0F0F0]"
						customStyles="h-[20px] my-auto rounded-full"
					/>
				</div>

				<h3 className="text-md sm:text-[20px] text-[#181818]">
					<b>{title}</b> Road Map
				</h3>

				<div className="flex-jc-c gap-2">
					<ShareModal
						title="Share link"
						link={`https://roadmapwiki.com/roadmap/${id}`}
						messageText="Your roadmap has been published"
						open={shareModal}
						toggleShareModal={toggleShareModal}
					>
						<button
							onClick={handleClickPublishRoadmap}
							className="relative overflow-hidden w-[35px] sm:w-[100px] md:w-[132px] h-[35px] md:h-[40px] flex-jc-c gap-2 rounded-full text-white [&>svg]:w-[20px] [&>svg]:fill-white bg-primary-ultramarineBlue hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
						>
							{loading ? null : status === "PUBLISHED" ? SHARE_ICON : SAVE_ICON}{" "}
							<span className="hidden sm:block">
								{loading ? (
									<ButtonDotsLoader customStyles="[&>div]:bg-white" />
								) : status === "DRAFT" ? (
									"Publish"
								) : (
									"Share"
								)}
							</span>
						</button>
					</ShareModal>

					<button className="w-[35px] md:w-[40px] h-[35px] md:h-[40px] flex-jc-c border border-[#181818] rounded-full hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
						{NAVBAR_MENU_ICON}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateRoadmapHeader;
