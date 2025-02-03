import type { Metadata } from "next";
import { Jua } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "400 900",
  variable: "--font-pretendard",
});

const jua = Jua({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "무링",
  description: "MoveLink 무링 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={`${pretendard.className} ${jua.className}`}>
        {children}
      </body>
    </html>
  );
}
