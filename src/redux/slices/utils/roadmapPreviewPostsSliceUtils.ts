import { RoadmapPostType } from "@/components/roadmap-preview/components/roadmap-discussion/types/roadmap-discussion-posts";

class RoadmapPreviewPostsUtils {
	/**

   * Deletes a reply from a specific post in the list of posts.

   * @param {RoadmapPostType[]} posts - The list of posts.
   * @param {number} postId - The ID of the post from which the reply should be deleted.
   * @param {number} replyId - The ID of the reply to be deleted.
   * @returns {RoadmapPostType[]} The updated list of posts with the specified reply removed.
   
   */

	static deletePostReply(
		posts: RoadmapPostType[],
		postId: number,
		replyId: number
	) {
		const filteredPostReplies = posts.map(post => {
			if (post.id === postId) {
				const filteredReplies = post.replies.filter(
					reply => reply.id !== replyId
				);

				return { ...post, replies: filteredReplies };
			}

			return post;
		});

		return filteredPostReplies;
	}
}

export default RoadmapPreviewPostsUtils;
