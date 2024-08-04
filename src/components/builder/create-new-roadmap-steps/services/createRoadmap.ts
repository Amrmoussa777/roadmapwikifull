import HandleApiRequests from "@/helpers/handleApiRequests";

export const createRoadmap = async (
	newRoadmapData: Record<string, string | string[] | null>
) => {
	const data = await HandleApiRequests.handleApiRequest({
		method: "POST",
		endpoint: `roadmap`,
		body: newRoadmapData,
	});

	return data;
};
