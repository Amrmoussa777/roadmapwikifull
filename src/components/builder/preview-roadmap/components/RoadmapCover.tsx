"use client";

import Image from "@/components/common/image/CustomImage";
import React from "react";
import roadmapPlaceholderCover from "@public/roadmap.svg";
import ChangeCover from "@/components/creator-profile/components/ChangeCover";
import useToggle from "@/hooks/useToggle";
import { EDIT_ICON } from "@public/icons/userProfile";
import { useFetch } from "@/hooks/useFetch";
import { useAppDispatch } from "@/redux/store";
import { updateRoadmapData } from "@/redux/slices/create-roadmap/createRoadmapSlice";

const RoadmapCover = ({
	roadmapId = "",
	defaultCover = "",
}: {
	roadmapId?: string;
	defaultCover?: string;
}) => {
	const { currentState: uploadModal, toggle: toggleUploadModal } =
		useToggle(false);
	const { fetchData } = useFetch();

	const dispatch = useAppDispatch();

	const handleUpdateRoadmapData = async (key: string) => {
		const newRoadmapData = { cover: key };

		const { data } = await fetchData(
			"PATCH",
			`roadmap/${roadmapId}`,
			newRoadmapData
		);

		const { cover: newCover } = data;
		dispatch(updateRoadmapData({ cover: newCover }));
	};

	return (
		<div className="col-span-4">
			<label className="text-[14px] font-poppins text-[#666666]">{`Roadmap cover`}</label>

			<div className="relative min-h-[75px] h-[75px] overflow-hidden border border-[#E0E0E0] rounded-md">
				<Image
					src={defaultCover || roadmapPlaceholderCover}
					width={400}
					height={200}
					quality={100}
					alt="roadmap-cover"
					className={`w-full h-full object-cover bg-white !rounded-md ${
						!defaultCover ? "opacity-5" : ""
					}`}
				/>

				<button
					onClick={toggleUploadModal}
					className={`absolute right-4 top-2/4 -translate-y-2/4 w-[40px] h-[40px] flex-jc-c rounded-full bg-primary-dark/40 text-white border border-white/20`}
				>
					{EDIT_ICON}
				</button>
			</div>

			<ChangeCover
				uploadModal={uploadModal}
				toggleUploadModal={toggleUploadModal}
				ratio="1400 X 160px"
				title="Upload cover"
				imageHeight={148}
				handleSaveCover={handleUpdateRoadmapData}
			/>
		</div>
	);
};

export default RoadmapCover;
