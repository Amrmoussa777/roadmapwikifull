/** @type {import('next').NextConfig} */
const nextConfig = {
	 typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: [
			"commondatastorage.googleapis.com",
			"picsum.photos",
			"roadmap-bucket-storage.s3.us-east-1.amazonaws.com",
		],
	},
};

export default nextConfig;
