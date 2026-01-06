import React from 'react';
import { useStore } from '../context/StoreContext';
import { CheckCircle, XCircle, Info } from 'lucide-react';

const ToastContainer: React.FC = () => {
  const { toasts } = useStore();

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white min-w-[300px] animate-slide-in-left ${
            toast.type === 'success'
              ? 'bg-green-600'
              : toast.type === 'error'
              ? 'bg-red-600'
              : 'bg-blue-600'
          }`}
        >
          {toast.type === 'success' && <CheckCircle size={20} />}
          {toast.type === 'error' && <XCircle size={20} />}
          {toast.type === 'info' && <Info size={20} />}
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
