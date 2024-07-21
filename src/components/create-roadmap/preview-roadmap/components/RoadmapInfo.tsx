"use client";

import FormInput from "@/components/common/input/FormInput";
import useInput from "@/components/common/input/hooks/useInput";
import RoadmapInfoSelectItems from "@/components/create-roadmap/preview-roadmap/components/RoadmapInfoSelectItems";
import RoadmapStyle from "@/components/create-roadmap/preview-roadmap/components/RoadmapStyle";
import { useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";

const RoadmapInfo = () => {
	const { roadmap } = useAppSelector(state => state.createRoadmap);

	const { value: roadmapName, changeValue: changeRoadmapName } = useInput("");
	const { value: roadmapDescription, changeValue: changeRoadmapDescription } =
		useInput("");

	useEffect(() => {
		if (roadmap) {
			changeRoadmapName(roadmap.title);
			changeRoadmapDescription(roadmap.description);
		}
	}, [roadmap]);

	return (
		<div className="p-4 sm:p-6">
			<h2 className="font-semibold text-xl sm:text-3xl my-2">
				Roadmap Information & style
			</h2>

			<form className="grid grid-cols-4 gap-1 sm:gap-4 mt-6">
				<FormInput
					type="text"
					name="roadmapName"
					label="Roadmap name"
					placeholder="Name"
					required={true}
					value={roadmapName}
					handleChangeValue={changeRoadmapName}
					customStyles="col-span-4"
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
				/>
			</form>

			<h2 className="font-semibold text-xl sm:text-3xl my-4">Roadmap style</h2>
			<RoadmapStyle />

			<button className="mt-6 shadow-[0_4px_14px_0_rgb(80,108,240,39%)] hover:shadow-[0_6px_20px_rgba(80,108,240,23%)] hover:bg-primary-ultramarineBlue/90 px-8 py-2 bg-primary-ultramarineBlue rounded-md text-white font-normal transition duration-200 ease-linear">
				Save
			</button>
		</div>
	);
};

export default RoadmapInfo;
