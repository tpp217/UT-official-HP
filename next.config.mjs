// 正規ドメイン。canonical / OGP / sitemap はすべてここに集約する
const CANONICAL_ORIGIN = 'https://uniq-trash.com';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // 旧 .html URL を新ルートへ恒久リダイレクト
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      // www は apex へ寄せる（重複インデックス防止）
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.uniq-trash.com' }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
      // 本番ビルドのみ *.vercel.app（本番エイリアス・デプロイ固有URL）を正規ドメインへ寄せる。
      // プレビューデプロイも *.vercel.app なので、VERCEL_ENV で本番に限定してプレビュー確認を壊さない
      ...(process.env.VERCEL_ENV === 'production'
        ? [
            {
              source: '/:path*',
              has: [{ type: 'host', value: '.*\\.vercel\\.app' }],
              destination: `${CANONICAL_ORIGIN}/:path*`,
              permanent: true,
            },
          ]
        : []),
    ];
  },
};

export default nextConfig;
