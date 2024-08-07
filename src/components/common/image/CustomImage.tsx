"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import placeholderImage from "@public/roadmap.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { isValidUrl } from "@/helpers/isValidUrl";

interface ValidatedImageProps extends ImageProps {}

const CustomImage: React.FC<ValidatedImageProps> = ({
	src,
	alt,
	...imageProps
}) => {
	const [validSrc, setValidSrc] = useState<string | StaticImport>(
		placeholderImage
	);

	useEffect(() => {
		if (typeof src !== "string") {
			setValidSrc(src);
		} else if (isValidUrl(src)) {
			setValidSrc(src);
		} else if (!isValidUrl(src)) {
			setValidSrc(placeholderImage);
		}
	}, [src]);

	return <Image src={validSrc} alt={alt || ""} {...imageProps} />;
};

export default CustomImage;
