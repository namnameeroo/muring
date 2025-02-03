import { MessageBoxProps } from "./types";

export function MessageBox({ children, className }: MessageBoxProps) {
  return (
    <div
      className={`mx-6 my-4 rounded-2xl bg-[rgba(235,245,255,0.8)] p-6 text-center leading-relaxed break-keep text-gray-700 ${className || ""} `}
    >
      {children}
    </div>
  );
}
