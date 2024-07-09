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
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiZTY2MDhmMS1lNjM3LTQyOWQtYTU3Ny1mMmEzOGI0ODBkNzYiLCJ1c2VybmFtZSI6Im1vaGFtZWQyLmFiZHNhYm91ckByb2FkbWFwd2lraS5jb20iLCJpYXQiOjE3MjA1MDM3MTEsImV4cCI6MTcyMDU5MDExMX0.4nY5fOZEatNRlkw--usCZPa42RLRbXuJvQc7kJeezfg`,
		},
	});
	const { data } = res;

	return data;
};

export { getPostReplies };
