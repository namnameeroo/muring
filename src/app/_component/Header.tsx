import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";

export const Header = () => {
  const navButton = [
    { title: "무링에 대하여", href: "/about" },
    { title: "무링 설명서", href: "/manual" },
    { title: "고객지원", href: "/support" },
    { title: "무링 파트너스", href: "/partners" },
  ];
  return (
    <header className="w-full bg-[#F3F4F8]">
      <div className="px-4 py-4">
        {/* 왜 패딩 안 먹노 */}
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            무링
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center justify-around space-x-8">
            {navButton.map((button) => (
              <Button
                key={button.title}
                className="text-gray-600 hover:text-gray-900"
                disabled
              >
                {button.title}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};
