import HandleApiRequests from "@/helpers/handleApiRequests";
import { getPostRepliesArgs } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";

const getPostReplies = async ({
	postId,
	pageNumber,
	pageSize,
}: getPostRepliesArgs) => {
	const data = HandleApiRequests.handleApiRequest({
		method: "GET",
		endpoint: `posts/${postId}/comments?page=${pageNumber}&pageSize=${pageSize}`,
	});

	return data;
};

export { getPostReplies };
