import { getPostRepliesArgs } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import axios from "axios";
import { getCookie } from "cookies-next";

const getPostReplies = async ({
	postId,
	pageNumber,
	pageSize,
}: getPostRepliesArgs) => {
	const accessToken = getCookie("accessToken");

	const res = await axios({
		method: "GET",
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${postId}/comments?page=${pageNumber}&pageSize=${pageSize}`,
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const { data } = res;

	return data;
};

export { getPostReplies };
