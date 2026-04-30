/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 旧 .html URL を新ルートへ恒久リダイレクト
  async redirects() {
    return [
      { source: '/privacy.html', destination: '/privacy', permanent: true },
    ];
  },
};

export default nextConfig;
