module.exports = {
	reactStrictMode: true,
	images: {
		domains: [
			"https://www.pngall.com",
			"www.researchgate.net",
			"png.pngtree.com",
			"toppng.com",
			"wwww.pngall.com",
			"w7.pngwing.com",
		],
	},
	async rewrites() {
		return [
			{
				source: "/pages/index.js",
				destination: "https://assessment-edvora.herokuapp.com",
			},
		];
	},
};
