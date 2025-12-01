import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true, // 👈 important for static export
	},
	trailingSlash: true,
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: "https",
	// 			hostname: "test.3arbitk.com",
	// 		},
	// 		{
	// 			protocol: "https",
	// 			hostname: "app.3arbitk.com",
	// 		},
	// 		{
	// 			protocol: "https",
	// 			hostname: "3arbitk.com",
	// 		},
	// 		{
	// 			protocol: "https",
	// 			hostname: "cdn-icons-png.flaticon.com",
	// 		},
	// 	],
	// },
};

export default withNextIntl(nextConfig);
