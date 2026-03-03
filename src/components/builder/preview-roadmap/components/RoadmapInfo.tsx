"use client";

import FormInput from "@/components/common/input/FormInput";
import useInput from "@/components/common/input/hooks/useInput";
import RoadmapInfoLoader from "@/components/builder/preview-roadmap/components/RoadmapInfoLoader";
import RoadmapStyle from "@/components/builder/preview-roadmap/components/RoadmapStyle";
import { useFetch } from "@/hooks/useFetch";
import { updateRoadmapData } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import RoadmapCover from "@/components/builder/preview-roadmap/components/RoadmapCover";
const RoadmapTags = dynamic(
	() => import("@/components/builder/preview-roadmap/components/RoadmapTags"),
	{ ssr: false }
);
const RoadmapInfoSelectItems = dynamic(
	() =>
		import(
			"@/components/builder/preview-roadmap/components/RoadmapInfoSelectItems"
		),
	{ ssr: false }
);

const RoadmapInfo = () => {
	const { roadmap, isLoading } = useAppSelector(state => state.createRoadmap);
	const dispatch = useAppDispatch();

	const { value: roadmapName, changeValue: changeRoadmapName } = useInput("");
	const { value: roadmapDescription, changeValue: changeRoadmapDescription } =
		useInput("");
	const { fetchData } = useFetch();

	const handleUpdateRoadmapData = async (
		newRoadmapData: Record<string, string>
	) => {
		await fetchData("PATCH", `roadmap/${roadmap?.id}`, newRoadmapData);
		dispatch(updateRoadmapData(newRoadmapData));
	};

	useEffect(() => {
		if (roadmap) {
			changeRoadmapName(roadmap.title);
			changeRoadmapDescription(roadmap.description);
		}
	}, [roadmap]);

	if (isLoading) return <RoadmapInfoLoader />;

	return (
		<div className="p-4 sm:p-6 pb-[100px] lg:pb-0">
			<h2 className="font-semibold text-xl sm:text-3xl my-2">
				Roadmap Information & style
			</h2>

			<div className="grid grid-cols-4 gap-1 sm:gap-4 mt-6">
				<RoadmapCover
					roadmapId={roadmap?.id}
					defaultCover={roadmap?.cover || ""}
				/>

				<FormInput
					type="text"
					name="roadmapName"
					label="Roadmap name"
					placeholder="Name"
					required={true}
					value={roadmapName}
					handleChangeValue={changeRoadmapName}
					customStyles="col-span-4"
					onBlur={() => {
						if (roadmapName !== roadmap?.title)
							handleUpdateRoadmapData({ title: roadmapName });
					}}
				/>

				<RoadmapInfoSelectItems />

				<FormInput
					type="textarea"
					name="roadmapDescription"
					label="Roadmap description"
					placeholder="Description"
					required={true}
					value={roadmapDescription}
					handleChangeValue={changeRoadmapDescription}
					customStyles="col-span-4"
					onBlur={() => {
						if (roadmapDescription !== roadmap?.description)
							handleUpdateRoadmapData({ description: roadmapDescription });
					}}
				/>

				<RoadmapTags />
			</div>

			<h2 className="font-semibold text-xl sm:text-3xl my-4">Roadmap style</h2>

			<RoadmapStyle />
		</div>
	);
};

export default RoadmapInfo;
