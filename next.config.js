/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
	trailingSlash: true, // optional but helps with Netlify/GitHub Pages
	images: {
		unoptimized: true, // if you're using <Image> but want static output
	},
}

module.exports = nextConfig
