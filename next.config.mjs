/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL, // Access the environment variable here
    },
    images: {
        domains: ['cdn-icons-png.flaticon.com']
    }
};

export default nextConfig;
