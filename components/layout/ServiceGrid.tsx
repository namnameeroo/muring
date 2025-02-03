import React from "react";

interface ServiceGridProps {
  items: {
    id: string;
    label: string;
    onClick: () => void;
    isSelected?: boolean;
  }[];
  columns?: number;
  gap?: number;
  className?: string;
}

export function ServiceGrid({
  items,
  columns = 2,
  gap = 8,
  className,
}: ServiceGridProps) {
  return (
    <div
      className={`grid grid-cols-${columns} gap-${gap} px-6 ${className || ""}`}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={item.onClick}
          data-selected={item.isSelected}
          className={`rounded-lg border border-gray-200 bg-white p-4 text-center text-gray-700 transition-all duration-200 hover:bg-gray-100 data-[selected=true]:border-0 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
