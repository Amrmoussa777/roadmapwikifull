/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"commondatastorage.googleapis.com",
			"picsum.photos",
			"roadmap-bucket-storage.s3.us-east-1.amazonaws.com",
		],
	},
};

export default nextConfig;
