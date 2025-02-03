"use client";
import { Header } from "@/app/_component/Header";
import { Footer } from "@/app/_component/Footer";

export default function MovelinkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
