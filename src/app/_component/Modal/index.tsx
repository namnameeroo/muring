import ClearIcon from "@mui/icons-material/Clear";

export default function Modal({
  open = false,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    open && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50">
        <div className="max-h-[80vh] max-w-3xl overflow-y-auto rounded-lg bg-white p-6">
          <div className="mb-6 flex justify-end">
            <button onClick={onClose}>
              <ClearIcon className="text-gray-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}
