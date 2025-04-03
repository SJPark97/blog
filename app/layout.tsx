import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    url: "https://yourdomain.com",
    siteName: "SJ Dev Blog",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SJ의 개발 블로그",
    description: "프론트엔드 기술과 실전 경험을 기록합니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}