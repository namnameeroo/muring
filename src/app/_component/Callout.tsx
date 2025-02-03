export default function Callout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-4xl bg-blue-200 text-center break-keep ${className}`}
    >
      {children}
    </div>
  );
}
