import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
           <ShoppingBag size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">سبد خرید شما خالی است</h2>
        <p className="text-gray-500 mb-8">به نظر می‌رسد هنوز محصولی انتخاب نکرده‌اید.</p>
        <Link to="/shop" className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/30 transition-all">
          مشاهده محصولات
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">سبد خرید</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Cart Items List */}
        <div className="lg:w-2/3 space-y-4">
          {cart.map((item) => (
            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4">
              
              {/* Image */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 rounded-xl flex-shrink-0 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Details */}
              <div className="flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <div>
                     <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">{item.title}</h3>
                     <p className="text-xs text-gray-500 mb-2">{item.brand}</p>
                     <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span className="flex items-center gap-1">رنگ: <span className="w-3 h-3 rounded-full border border-gray-200" style={{backgroundColor: item.selectedColor}}></span></span>
                        <span className="w-px h-3 bg-gray-300"></span>
                        <span>سایز: {item.selectedSize}</span>
                     </div>
                   </div>
                   <button 
                     onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                     className="text-gray-400 hover:text-red-500 transition-colors p-1"
                   >
                     <Trash2 size={18} />
                   </button>
                </div>

                <div className="flex justify-between items-end">
                   <div className="flex items-center bg-gray-100 rounded-lg px-2 h-9">
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, -1)} 
                        className="p-1 hover:text-primary disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, 1)} 
                        className="p-1 hover:text-primary"
                      >
                        <Plus size={14} />
                      </button>
                   </div>
                   <div className="text-left">
                     <span className="font-bold text-gray-900 text-lg">{(item.price * item.quantity).toLocaleString('fa-IR')}</span>
                     <span className="text-xs text-gray-500 mr-1">تومان</span>
                   </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:w-1/3">
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-gray-800 text-lg mb-6">خلاصه سفارش</h3>
              
              <div className="space-y-4 mb-6">
                 <div className="flex justify-between text-sm text-gray-600">
                    <span>مجموع اقلام</span>
                    <span>{cartTotal.toLocaleString('fa-IR')} تومان</span>
                 </div>
                 <div className="flex justify-between text-sm text-gray-600">
                    <span>هزینه ارسال</span>
                    <span className="text-green-600">رایگان</span>
                 </div>
                 <div className="flex justify-between text-sm text-gray-600">
                    <span>تخفیف</span>
                    <span>۰ تومان</span>
                 </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                 <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800">مبلغ قابل پرداخت</span>
                    <div className="text-left">
                        <span className="font-black text-xl text-primary">{cartTotal.toLocaleString('fa-IR')}</span>
                        <span className="text-xs text-gray-500 mr-1">تومان</span>
                    </div>
                 </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-secondary hover:bg-gray-800 text-white font-bold py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 group"
              >
                 تکمیل خرید <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
