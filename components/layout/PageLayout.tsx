import { useRouter } from "next/router";
import { PageLayoutProps } from "./types";
import classNames from "classnames";
// import { LeftArrowIcon } from "@/components/icons";
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
      {/* Header */}
      {(title || backButton || rightButton) && (
        <header className="sticky top-0 z-10 flex h-14 items-center border-b border-gray-100 bg-white px-4">
          {backButton && (
            <button onClick={() => router.back()} className="-ml-2 p-2">
              {/* <LeftArrowIcon /> */}
              <span className="text-2xl font-bold">{"<"}</span>
            </button>
          )}
          {title && (
            <h1 className="flex-1 text-center text-lg font-bold">{title}</h1>
          )}
          {rightButton && <div className="ml-auto">{rightButton}</div>}
        </header>
      )}

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
