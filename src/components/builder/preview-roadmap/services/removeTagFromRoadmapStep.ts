import HandleApiRequests from "@/helpers/handleApiRequests";

export const removeTagFromRoadmapStep = async (tagId: string) => {
	const data = await HandleApiRequests.handleApiRequest({
		method: "DELETE",
		endpoint: `roadmap/step/tag/${tagId}`,
	});

	return data;
};
