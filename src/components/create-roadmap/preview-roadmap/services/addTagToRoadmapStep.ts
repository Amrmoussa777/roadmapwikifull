import HandleApiRequests from "@/helpers/handleApiRequests";

export const addTagToRoadmapStep = async (
	newTagData: Record<string, string[] | string>
) => {
	const data = await HandleApiRequests.handleApiRequest({
		method: "POST",
		endpoint: `roadmap/step/tag`,
		body: newTagData,
	});

	return data;
};
