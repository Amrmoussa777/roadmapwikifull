import React from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";
import LightGallery from "lightgallery/react";
import lgVideo from "lightgallery/plugins/video";
import { CROSS_ATTACHMENT_ICON, FILE_ICON } from "@public/icons/roadmapSteps";
import { useRenderPreviewFile } from "@/components/builder/roadmap-steps/file-upload/hooks/useRenderPreviewFile";
import { RoadmapStepAttachmentType } from "@/redux/slices/roadmaps/types/roadmap-preview-slice-types";
import { LocalAttachmentTypes } from "@/components/conversation/types/index.types";

const PreviewAttachments = ({
	attachments,
	handleRemoveUploadedFile,
	readOnly,
}: {
	attachments: RoadmapStepAttachmentType[] | LocalAttachmentTypes[];
	handleRemoveUploadedFile?: (attachmentId: string) => void;
	readOnly?: boolean;
}) => {
	const { renderUploadedFile } = useRenderPreviewFile();

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
								href={
									attachment.localFile
										? URL.createObjectURL(attachment.localFile)
										: attachment.url
								}
								className="relative group min-w-[72px] w-[72px] min-h-[72px] h-[72px] bg-white flex-jc-c rounded-md"
							>
								{renderUploadedFile(attachment)}

								{!readOnly && handleRemoveUploadedFile ? (
									<button
										onClick={() => handleRemoveUploadedFile(attachment.id)}
										className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition duration-200 z-50"
									>
										{CROSS_ATTACHMENT_ICON}
									</button>
								) : null}
							</a>
						);
					} else if (attachment.type === "VIDEO") {
						return (
							<a
								key={attachment.id}
								className="relative min-w-[72px] w-[72px] min-h-[72px] h-[72px] bg-white rounded-md group cursor-pointer"
								data-video={`{"source": [{"src":"${attachment.url}", "type":"video/mp4"}], "tracks": [{"src": "https://www.lightgalleryjs.com/videos/title.txt", "kind":"captions", "srclang": "en", "label": "English", "default": "true"}], "attributes": {"preload": false, "controls": true}}`}
								data-sub-html={attachment.key}
							>
								{!readOnly && handleRemoveUploadedFile ? (
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
							<a
								href={`https://api.iconify.design/ic:sharp-insert-drive-file.svg?color=%23ffffff`}
								className="relative min-w-[72px] w-[72px] min-h-[72px] h-[72px] rounded-md bg-white group"
								key={attachment.id}
							>
								{!readOnly && handleRemoveUploadedFile ? (
									<button
										onClick={() => handleRemoveUploadedFile(attachment.id)}
										className="absolute right-1 top-1 opacity-0 group-hover:opacity-100 transition duration-200"
									>
										{CROSS_ATTACHMENT_ICON}
									</button>
								) : null}

								{renderUploadedFile(attachment)}
							</a>
						);
					}
				})}
			</LightGallery>
		</div>
	);
};

export default PreviewAttachments;
