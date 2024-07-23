import { useFetch } from "@/hooks/useFetch";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const DeleteRoadmapButton = () => {
	const { roadmapId } = useParams();
	const { fetchData, loading } = useFetch();
	const { push } = useRouter();

	const handleDeleteRoadmap = async () => {
		await fetchData("DELETE", `roadmap/${roadmapId}`).then(() => {
			push("/create-roadmap");
		});
	};

	return (
		<button
			onClick={handleDeleteRoadmap}
			disabled={loading}
			className="w-full md:w-[160px] h-[56px] rounded-[12px] flex-jc-c font-inter text-[18px] font-semibold text-start bg-[#A72C32] text-white mt-8"
		>
			{loading ? "Loading..." : "Delete"}
		</button>
	);
};

export default DeleteRoadmapButton;
