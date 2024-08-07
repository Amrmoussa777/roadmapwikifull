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

	const [loading, setLoading] = useState(true); // To track image loading state

	useEffect(() => {
		let isMounted = true; // To avoid setting state after unmount
		if (typeof src !== "string") {
			setValidSrc(src);
		} else if (isValidUrl(src)) {
			setValidSrc(src);
		} else if (!isValidUrl(src)) {
			setValidSrc(placeholderImage);
		}
		setLoading(false);

		return () => {
			isMounted = false;
		};
	}, [src]);

	if (loading) return null; // Optional: You can display a loader here

	return <Image src={validSrc} alt={alt || ""} {...imageProps} />;
};

export default CustomImage;
