import './globals.css';

export const metadata = {
  metadataBase: new URL('https://ut-official-hp.vercel.app'),
  title: '株式会社ユニークトラッシュ | オリジナル業務用ウェブアプリ制作',
  description:
    '現場のクセをアプリに。オリジナルの業務用Webアプリ制作・HP制作、そしてレガシーシステムを現代に引っ越しさせる『システムリフォーム』。株式会社ユニークトラッシュ。',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  openGraph: {
    type: 'website',
    siteName: '株式会社ユニークトラッシュ',
    locale: 'ja_JP',
    title: '株式会社ユニークトラッシュ | オリジナル業務用ウェブアプリ制作',
    description:
      '現場のクセをアプリに。オリジナル業務用Webアプリ制作・HP制作・システムリフォーム（AI移行）。',
    url: '/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '業務のクセ、まるごとアプリに。— Uniq Trash inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社ユニークトラッシュ | オリジナル業務用ウェブアプリ制作',
    description:
      '現場のクセをアプリに。オリジナル業務用Webアプリ制作・HP制作・システムリフォーム（AI移行）。',
    images: ['/og-image.png'],
  },
};

export const viewport = {
  themeColor: '#f6f2e9',
};

// GA4 — 本番ID（G-XXXXXXXXXX 形式）に差替えるまで送信されない
const GA_SNIPPET = `
(function(){
  var GA_ID = 'G-XXXXXXXXXX';
  if (!GA_ID || GA_ID.indexOf('XXXX') !== -1) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800;900&family=Archivo+Black&family=Space+Mono:wght@400;700&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: GA_SNIPPET }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
