/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'aceternity.com',
			},
			{
				hostname: 'images.unsplash.com',
			}
		],
	},
};

export default nextConfig;
