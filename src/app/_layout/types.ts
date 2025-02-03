export interface MessageBoxProps {
  children: React.ReactNode;
  className?: string;
}

export interface ServiceItem {
  id: string;
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export interface ServiceGridProps {
  items: ServiceItem[];
  columns?: number;
  gap?: number;
  className?: string;
}
