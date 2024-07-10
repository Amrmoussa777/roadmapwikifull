import { getPostRepliesArgs } from "@/redux/slices/roadmaps/types/roadmap-preview-posts-slice-types";
import axios from "axios";

const getPostReplies = async ({
	postId,
	pageNumber,
	pageSize,
}: getPostRepliesArgs) => {
	const res = await axios({
		method: "GET",
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${postId}/comments?page=${pageNumber}&pageSize=${pageSize}`,
		headers: {
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmZDA2ODBlYS1mOTE4LTQ1ZjYtOWIzOC04ZWY0NWExNmRlNjIiLCJ1c2VybmFtZSI6Ik1heGltbWlsbGlhbiBKb25lcyIsImlhdCI6MTcyMDU5NjM4MywiZXhwIjoxNzIwNjgyNzgzfQ.Xd-7qv1Zrf5rvT_f6_tJht7b4YB9I74CreSUWX9gIH0`,
		},
	});
	const { data } = res;

	return data;
};

export { getPostReplies };
