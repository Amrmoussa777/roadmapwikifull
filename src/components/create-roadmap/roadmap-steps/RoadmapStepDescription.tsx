import { useFetch } from "@/hooks/useFetch";
import { updateRoadmapStepData } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { useAppDispatch } from "@/redux/store";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Editor = dynamic(
	() => import("@/components/common/Editor/components/Editor")
);

const RoadmapStepDescription = ({
	defaultDescription,
	stepId,
	title,
	duration,
}: {
	defaultDescription: string;
	stepId: string;
	title: string;
	duration: string;
}) => {
	const [description, setDescription] = useState<string>(defaultDescription);
	const dispatch = useAppDispatch();
	const { fetchData } = useFetch();

	const updateDescription = async () => {
		if (description === defaultDescription) return;

		const newData = { description, title, duration };

		await fetchData("PATCH", `roadmap/step/${stepId}`, newData)
			.then(() =>
				dispatch(updateRoadmapStepData({ stepId, newData: { description } }))
			)
			.catch(() => setDescription(defaultDescription));
	};

	return (
		<div>
			<Editor
				value={description}
				changeValue={setDescription}
				onBlur={updateDescription}
			/>
		</div>
	);
};

export default RoadmapStepDescription;
