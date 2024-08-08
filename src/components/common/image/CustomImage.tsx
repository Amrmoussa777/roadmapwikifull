"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { isValidUrl } from "@/helpers/isValidUrl";

interface ValidatedImageProps extends ImageProps {}

const CustomImage: React.FC<ValidatedImageProps> = ({
	src,
	alt,
	...imageProps
}) => {
	const [validSrc, setValidSrc] = useState<string | StaticImport | null>(src);
	console.log(src);

	useEffect(() => {
		if (typeof src !== "string") {
			setValidSrc(src);
		} else if (isValidUrl(src)) {
			setValidSrc(src);
		} else if (!isValidUrl(src)) {
			setValidSrc(null);
		}
	}, [src]);

	return validSrc ? (
		<Image src={validSrc} alt={alt || ""} {...imageProps} />
	) : (
		<div
			className={`bg-gray-100 sm:rounded-[12px] p-[18px] animate-pulse ${imageProps.className}`}
		/>
	);
};

export default CustomImage;
