import type { Metadata } from "next";
// import { Jua } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

// const jua = Jua({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-jua",
// });

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
    <html
      lang="ko"
      className={`${pretendard.variable} font-pretendard ${pretendard.className}`}
    >
      <body className={`${pretendard.className} font-pretendard`}>
        {children}
        <Script
          id="daum-post"
          src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
          type="text/javascript"
        />
      </body>
    </html>
  );
}
