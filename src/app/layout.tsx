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
  title: "OpenClaw 使用文档",
  description: "OpenClaw AI Agent 网关平台使用指南 - 从零开始，手把手教你安装和配置",
  keywords: ["OpenClaw", "AI Agent", "飞书", "网关", "文档"],
  authors: [{ name: "OpenClaw" }],
  creator: "OpenClaw",
  publisher: "OpenClaw",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "OpenClaw 使用文档",
    description: "OpenClaw AI Agent 网关平台使用指南 - 从零开始，手把手教你安装和配置",
    siteName: "OpenClaw 文档",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw 使用文档",
    description: "OpenClaw AI Agent 网关平台使用指南",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 获取当前路径
  const path = typeof window !== 'undefined' ? window.location.pathname : '';

  // 生成 canonical URL
  const canonicalUrl = `https://openclaw-study.vercel.app${path}`;

  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
