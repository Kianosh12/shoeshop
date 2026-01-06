import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, CheckCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cartTotal, clearCart, addToast } = useStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      clearCart();
      addToast('سفارش شما با موفقیت ثبت شد', 'success');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      
      {/* Steps */}
      <div className="flex items-center justify-between mb-10 relative">
         <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10"></div>
         <div className={`flex flex-col items-center bg-f9fafb gap-2 ${step >= 1 ? 'text-primary' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 bg-white ${step >= 1 ? 'border-primary' : 'border-gray-300'}`}>
                <Truck size={20} />
            </div>
            <span className="text-xs font-bold bg-[#f9fafb] px-2">اطلاعات ارسال</span>
         </div>
         <div className={`flex flex-col items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 bg-white ${step >= 2 ? 'border-primary' : 'border-gray-300'}`}>
                <CreditCard size={20} />
            </div>
            <span className="text-xs font-bold bg-[#f9fafb] px-2">پرداخت</span>
         </div>
         <div className={`flex flex-col items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 bg-white ${step >= 3 ? 'border-primary' : 'border-gray-300'}`}>
                <CheckCircle size={20} />
            </div>
            <span className="text-xs font-bold bg-[#f9fafb] px-2">اتمام</span>
         </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">جزئیات سفارش</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-700">نام و نام خانوادگی</label>
                 <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-700">شماره موبایل</label>
                 <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" dir="ltr" />
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">آدرس کامل</label>
              <textarea required rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"></textarea>
           </div>

           <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">کد پستی</label>
              <input type="text" required className="w-full md:w-1/2 px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" dir="ltr" />
           </div>

           <div className="pt-6 border-t border-gray-100">
             <div className="flex items-center gap-4 mb-6">
                <input type="radio" name="payment" id="online" defaultChecked className="w-5 h-5 text-primary focus:ring-primary accent-primary" />
                <label htmlFor="online" className="flex flex-col cursor-pointer">
                   <span className="font-bold text-gray-800">پرداخت اینترنتی</span>
                   <span className="text-xs text-gray-500">پرداخت با کلیه کارت‌های عضو شتاب</span>
                </label>
             </div>
             
             <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl mb-6">
                <span className="font-bold text-gray-700">مبلغ نهایی:</span>
                <span className="font-black text-xl text-primary">{cartTotal.toLocaleString('fa-IR')} تومان</span>
             </div>

             <button 
               type="submit" 
               disabled={loading}
               className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-wait' : ''}`}
             >
               {loading ? 'در حال پردازش...' : 'پرداخت و ثبت نهایی'}
             </button>
           </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
