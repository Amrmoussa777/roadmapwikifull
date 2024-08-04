import React from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";
import LightGallery from "lightgallery/react";
import lgVideo from "lightgallery/plugins/video";
import { CROSS_ATTACHMENT_ICON } from "@public/icons/roadmapSteps";
import { useRenderPreviewFile } from "@/components/builder/roadmap-steps/file-upload/hooks/useRenderPreviewFile";
import { useAppDispatch } from "@/redux/store";
import { useFetch } from "@/hooks/useFetch";
import { deleteStepAttachment } from "@/redux/slices/create-roadmap/createRoadmapSlice";
import { RoadmapStepAttachmentType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";

const PreviewAttachments = ({
	attachments,
	stepId,
	readOnly,
}: {
	attachments: RoadmapStepAttachmentType[];
	stepId: string;
	readOnly?: boolean;
}) => {
	const { renderUploadedFile } = useRenderPreviewFile();
	const dispatch = useAppDispatch();
	const { fetchData } = useFetch();

	const handleRemoveUploadedFile = async (attachmentId: string) => {
		await fetchData("DELETE", `roadmap/step/attachment/${attachmentId}`).then(
			() => {
				dispatch(deleteStepAttachment({ stepId, attachmentId }));
			}
		);
	};

	return (
		<div>
			<LightGallery
				speed={500}
				plugins={[lgVideo]}
				videojs
				elementClassNames={"flex flex-wrap items-start gap-2"}
			>
				{attachments?.map(attachment => {
					if (attachment.type === "IMAGE") {
						return (
							<a
								key={attachment.id}
								href={attachment.url}
								className="group relative min-w-[72px] w-[72px] min-h-[72px] h-[72px] border-2 border-grey-primary flex-jc-c rounded-md"
							>
								{!readOnly ? (
									<button
										onClick={() => handleRemoveUploadedFile(attachment.id)}
										className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition duration-200 z-10"
									>
										{CROSS_ATTACHMENT_ICON}
									</button>
								) : null}

								{renderUploadedFile(attachment)}
							</a>
						);
					} else if (attachment.type === "VIDEO") {
						return (
							<a
								key={attachment.id}
								className="relative min-w-[72px] w-[72px] min-h-[72px] h-[72px] group cursor-pointer"
								data-video={`{"source": [{"src":"${attachment.url}", "type":"video/mp4"}], "tracks": [{"src": "https://www.lightgalleryjs.com/videos/title.txt", "kind":"captions", "srclang": "en", "label": "English", "default": "true"}], "attributes": {"preload": false, "controls": true}}`}
								data-sub-html={attachment.key}
							>
								{!readOnly ? (
									<button
										onClick={() => handleRemoveUploadedFile(attachment.id)}
										className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition duration-200 z-10"
									>
										{CROSS_ATTACHMENT_ICON}
									</button>
								) : null}

								{renderUploadedFile(attachment)}
							</a>
						);
					} else {
						return (
							<div
								className="relative min-w-[72px] w-[72px] min-h-[72px] h-[72px] group"
								key={attachment.id}
							>
								{!readOnly ? (
									<button
										onClick={() => handleRemoveUploadedFile(attachment.id)}
										className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition duration-200"
									>
										{CROSS_ATTACHMENT_ICON}
									</button>
								) : null}

								{renderUploadedFile(attachment)}
							</div>
						);
					}
				})}
			</LightGallery>
		</div>
	);
};

export default PreviewAttachments;
