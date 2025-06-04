import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "test.3arbitk.com",
			},
			{
				protocol: "https",
				hostname: "app.3arbitk.com",
			},
			{
				protocol: "https",
				hostname: "3arbitk.com",
			},
			{
				protocol: "https",
				hostname: "cdn-icons-png.flaticon.com",
			},
		],
	},
};

export default withNextIntl(nextConfig);
