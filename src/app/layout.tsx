import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "앱 미리보기 안내",
  description: "원하는 앱을 만들고 미리보는 방법을 안내합니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
