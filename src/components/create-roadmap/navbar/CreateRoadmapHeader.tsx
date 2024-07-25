import VerticalDivider from "@/components/common/divider/components/VerticalDivider";
import ShareModal from "@/components/common/modal/components/ShareModal";
import CreateRoadmapHeaderLoader from "@/components/create-roadmap/navbar/CreateRoadmapHeaderLoader";
import MenuButton from "@/components/landing-page/components/public-navbar/MenuButton";
import { useFetch } from "@/hooks/useFetch";
import { CurrentUserContext } from "@/providers/CurrentUserContext";
import { toggleRoadmapStatus } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { NAVBAR_MENU_ICON } from "@public/icons/roadmapPreview";
import { SAVE_ICON } from "@public/icons/roadmapSteps";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const CreateRoadmapHeader = ({
	sidebarMobile,
	toggleSidebarMobile,
}: {
	sidebarMobile: boolean;
	toggleSidebarMobile: () => void;
}) => {
	const { roadmap, isLoading } = useAppSelector(state => state.createRoadmap);
	const { currentUser } = useContext(CurrentUserContext);
	const { title, id, status } = roadmap || {};

	const { push } = useRouter();
	const dispatch = useAppDispatch();

	const { fetchData, loading } = useFetch();

	const handlePublishRoadmap = async () => {
		if (currentUser) {
			await fetchData("POST", `roadmap/${roadmap?.id}/publish`);
			dispatch(toggleRoadmapStatus());
		} else {
			return push("/auth/register");
		}
	};

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
						link={`https://roadmapwiki.com/roadmap/${id}`}
						messageText="Your roadmap has been published"
					>
						<button
							onClick={handlePublishRoadmap}
							disabled={status === "PUBLISHED"}
							className="w-[35px] sm:w-[100px] md:w-[132px] h-[35px] md:h-[40px] flex-jc-c gap-2 rounded-full text-white [&>svg]:w-[20px] [&>svg]:fill-white bg-primary-ultramarineBlue hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
						>
							{SAVE_ICON}{" "}
							<span className="hidden sm:block">
								{loading
									? "Loading..."
									: status === "DRAFT"
									? "Publish"
									: "Published"}
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
