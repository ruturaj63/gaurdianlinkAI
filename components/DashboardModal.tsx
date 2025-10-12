
interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DashboardModal({ isOpen, onClose }: DashboardModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Detailed Reports</h2>
        <p>Full report data here (e.g., PDF export in prod).</p>
        <button onClick={onClose} className="mt-4 text-blue-500">Close</button>
      </div>
    </div>
  );
}