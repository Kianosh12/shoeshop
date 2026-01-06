import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Truck, ShieldCheck, Heart, Share2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useStore } from '../context/StoreContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === Number(id));
  const { addToCart, toggleFavorite, favorites } = useStore();

  const [mainImage, setMainImage] = useState(product?.image || '');
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">محصول یافت نشد</h2>
            <button onClick={() => navigate('/shop')} className="text-primary hover:underline">بازگشت به فروشگاه</button>
        </div>
    );
  }

  const isFav = favorites.includes(product.id);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('لطفا سایز و رنگ را انتخاب کنید');
      return;
    }
    addToCart(product, selectedSize, selectedColor);
    // Optionally reset qty back to 1
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
        <span className="cursor-pointer hover:text-primary" onClick={() => navigate('/')}>خانه</span> / 
        <span className="cursor-pointer hover:text-primary" onClick={() => navigate('/shop')}>فروشگاه</span> / 
        <span className="text-gray-800 font-bold">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative group">
            <img src={mainImage} alt={product.title} className="w-full h-full object-cover object-center" />
             <div className="absolute top-4 right-4 z-10">
                {product.isNew && (
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    جدید
                </span>
                )}
             </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setMainImage(img)}
                className={`aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${mainImage === img ? 'border-primary opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-4">
             <div>
                <h1 className="text-3xl font-black text-gray-900 mb-2 leading-tight">{product.title}</h1>
                <div className="flex items-center gap-2 text-sm">
                   <span className="text-gray-500">دسته: {product.category}</span>
                   <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                   <span className="text-gray-500">برند: {product.brand}</span>
                </div>
             </div>
             <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-100">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-gray-800">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.reviews} نظر)</span>
             </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

          {/* Pricing */}
          <div className="flex items-end gap-4 mb-8">
             {product.oldPrice && (
                 <span className="text-xl text-gray-400 line-through decoration-red-400 decoration-2">
                     {product.oldPrice.toLocaleString('fa-IR')}
                 </span>
             )}
             <div className="flex items-center gap-1 text-primary">
                 <span className="text-4xl font-black">{product.price.toLocaleString('fa-IR')}</span>
                 <span className="text-lg text-gray-500 font-medium">تومان</span>
             </div>
          </div>

          <div className="h-px bg-gray-200 mb-8"></div>

          {/* Options */}
          <div className="space-y-6 mb-8">
            
            {/* Colors */}
            <div>
              <span className="block text-sm font-bold text-gray-800 mb-3">رنگ انتخاب شده:</span>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === color ? 'border-primary ring-2 ring-primary/30' : 'border-transparent hover:scale-110'}`}
                    style={{ backgroundColor: color }}
                  >
                     {selectedColor === color && <span className="block w-2 h-2 bg-white rounded-full shadow-sm"></span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
               <div className="flex justify-between mb-3">
                  <span className="block text-sm font-bold text-gray-800">سایز (اروپا):</span>
                  <button className="text-xs text-primary underline">راهنمای سایز</button>
               </div>
               <div className="grid grid-cols-5 gap-3">
                 {product.sizes.map(size => (
                   <button
                     key={size}
                     onClick={() => setSelectedSize(size)}
                     className={`py-3 rounded-lg border text-sm font-bold transition-all ${
                       selectedSize === size 
                       ? 'border-primary bg-primary text-white shadow-lg shadow-primary/30' 
                       : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                     }`}
                   >
                     {size}
                   </button>
                 ))}
               </div>
            </div>

          </div>

          {/* Actions */}
          <div className="mt-auto flex gap-4">
             <div className="flex items-center bg-gray-100 rounded-xl px-2">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:text-primary"><Minus size={18} /></button>
                <span className="w-8 text-center font-bold text-lg">{qty.toLocaleString('fa-IR')}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3 hover:text-primary"><Plus size={18} /></button>
             </div>
             
             <button 
                onClick={handleAddToCart}
                disabled={!selectedSize || !selectedColor}
                className="flex-grow bg-secondary hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-3"
             >
                <ShoppingBag size={20} />
                افزودن به سبد خرید
             </button>
             
             <button 
                onClick={() => toggleFavorite(product.id)}
                className={`p-4 rounded-xl border-2 transition-colors ${isFav ? 'border-red-500 bg-red-50 text-red-500' : 'border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200'}`}
             >
                <Heart size={24} fill={isFav ? "currentColor" : "none"} />
             </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
             <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck size={20} className="text-primary" /> ارسال سریع و رایگان
             </div>
             <div className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={20} className="text-primary" /> ضمانت اصالت کالا
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
