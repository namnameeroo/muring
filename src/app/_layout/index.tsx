"use client";
export * from "./MessageBox";
export * from "./PageLayout";
export * from "./ServiceGrid";
import { useRouter } from "next/navigation";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  backButton?: boolean;
  rightButton?: React.ReactNode;
  className?: string;
}

export function PageLayout({
  children,
  title,
  backButton = true,
  rightButton,
  className,
}: PageLayoutProps) {
  const router = useRouter();

  return (
    <div className={`min-h-screen bg-white ${className || ""}`}>
      {(title || backButton || rightButton) && (
        <div className="sticky top-0 z-10 flex h-14 items-center border-b border-gray-100 bg-white px-4">
          {/* {backButton && (
            <button onClick={() => router.back()}>
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
          )} */}

          {title && (
            <h1 className="flex-1 text-center text-lg font-bold">{title}</h1>
          )}

          {rightButton && <div className="ml-auto">{rightButton}</div>}
        </div>
      )}

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
