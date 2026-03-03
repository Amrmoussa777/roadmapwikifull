/** @type {import('next').NextConfig} */
const supabaseHostname = (() => {
	try {
		const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
		return url ? new URL(url).hostname : null;
	} catch {
		return null;
	}
})();

const nextConfig = {
	images: {
		domains: [
			"commondatastorage.googleapis.com",
			"picsum.photos",
			"roadmap-bucket-storage.s3.us-east-1.amazonaws.com",
			...(supabaseHostname ? [supabaseHostname] : []),
		],
	},
};

export default nextConfig;
