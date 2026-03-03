import ButtonDotsLoader from "@/components/common/button/ButtonDotsLoader";
import { useFetch } from "@/hooks/useFetch";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const ArchiveRoadmapButton = () => {
	const { roadmapId } = useParams();
	const { fetchData, loading } = useFetch();
	const { push } = useRouter();

	const handleDeleteRoadmap = async () => {
		await fetchData("POST", `roadmap/${roadmapId}/archive`).then(() => {
			push("/builder");
		});
	};

	return (
		<button
			onClick={handleDeleteRoadmap}
			disabled={loading}
			className="relative overflow-hidden w-full md:w-[160px] h-[56px] rounded-[12px] flex-jc-c font-inter text-[18px] font-semibold text-start bg-[#A72C32] text-white mt-8"
		>
			{loading ? <ButtonDotsLoader customStyles="[&>div]:bg-white" /> : "Draft"}
		</button>
	);
};

export default ArchiveRoadmapButton;
