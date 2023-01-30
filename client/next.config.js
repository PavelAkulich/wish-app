/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_BASE_URL_DEV: process.env.NEXT_PUBLIC_BASE_URL_DEV,
  }
}

module.exports = nextConfig
