import generateCustomFileName from "@/components/user-profile/components/file-upload/helpers/generateCustomFileName";
import { CROSS_ICON } from "@public/icons/userProfile";
import React from "react";

const FileUploadedItem = ({ file }: { file: File }) => {
	const { name, size } = file;
	const sizeInMB = (size / 1048576).toFixed(2);

	const { finalFileName } = generateCustomFileName(name, 25);

	return (
		<li className="flex-jb-c gap-2 bg-grey-ghostWhite text-primary-ceruleanBlue border-[1.5px] py-2 px-4 rounded-md mt-2">
			<div>
				<span className="line-clamp-1 text-ellipsis overflow-hidden">
					{finalFileName}
				</span>
				<span className="block font-semibold text-sm text-dark-jungleGreen">
					{sizeInMB} KB
				</span>
			</div>

			<button className="[&:hover>svg>path]:fill-red-600 transition-all">
				{CROSS_ICON}
			</button>
		</li>
	);
};

export default FileUploadedItem;
