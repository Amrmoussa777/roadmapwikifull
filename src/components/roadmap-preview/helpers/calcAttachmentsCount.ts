import { RoadmapStepAttachmentType } from "@/components/roadmap-preview/types/roadmapSteps.types";

/**
 * Calculates the count of different types of attachments.
 *
 * @param {RoadmapStepAttachmentType[]} attachments - The list of attachments to count.
 * @returns {Object} An object containing the count of images, videos, and files.
 */
export const calcAttachmentsCount = (
	attachments: RoadmapStepAttachmentType[]
) => {
	const initialAttachments = {
		images: { count: 0 },
		videos: { count: 0 },
		files: { count: 0 },
	};

	const newOrderedAttachments = { ...initialAttachments };

	attachments.forEach(attachment => {
		if (attachment.type.includes("IMAGE")) {
			newOrderedAttachments.images.count += 1;
		} else if (attachment.type.includes("VIDEO")) {
			newOrderedAttachments.videos.count += 1;
		} else {
			newOrderedAttachments.files.count += 1;
		}
	});

	return newOrderedAttachments;
};
