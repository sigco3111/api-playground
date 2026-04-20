import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "📡 API Playground — 실시간 공개 API 실험실",
  description:
    "무료 공개 API 100+를 한 곳에서 테스트하는 플레이그라운드. 고양이 사진, 날씨, 우주 사진, 랜덤 명언 등 다양한 API를 실시간으로 호출해보세요.",
  keywords: ["API", "playground", "free API", "public API", "REST API", "개발자 도구"],
  openGraph: {
    title: "📡 API Playground",
    description: "무료 공개 API 100+를 한 곳에서 테스트하세요",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <body className="bg-slate-950 text-white antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
