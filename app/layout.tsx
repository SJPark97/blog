import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SJ의 개발 블로그",
  description: "프론트엔드, Vue, TypeScript, Next.js 중심 기술 블로그",
  openGraph: {
    title: "SJ의 개발 블로그",
    description: "프론트엔드 기술과 실전 경험을 기록합니다.",
    url: siteUrl,
    siteName: "SJ Dev Blog",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "SJ의 개발 블로그 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SJ의 개발 블로그",
    description: "프론트엔드 기술과 실전 경험을 기록합니다.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="_axGjF6qTadizKarWMCBApiwHebDB7p8Qt-c6m-K6F8" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}