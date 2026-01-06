import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, ShieldCheck, Headphones, Repeat } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6 animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-primary/90 text-white rounded-full text-sm font-bold mb-2">
              تخفیف‌های تابستانه 🔥
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              سبک خودت را <br />
              <span className="text-primary">پیدا کن</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed opacity-90">
              جدیدترین کالکشن کفش‌های ورزشی و اسپرت از برترین برندهای جهان با ضمانت اصالت و بهترین قیمت.
            </p>
            <div className="flex gap-4 pt-4">
              <Link to="/shop" className="px-8 py-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/30">
                خرید کنید
              </Link>
              <Link to="/shop?category=sale" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold rounded-lg transition-all flex items-center gap-2">
                مشاهده تخفیف‌ها
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: 'ارسال رایگان', desc: 'برای خریدهای بالای ۱ میلیون' },
            { icon: ShieldCheck, title: 'ضمانت اصالت', desc: 'تضمین اورجینال بودن کالا' },
            { icon: Repeat, title: '۷ روز بازگشت', desc: 'ضمانت بازگشت وجه' },
            { icon: Headphones, title: 'پشتیبانی ۲۴/۷', desc: 'پاسخگویی در تمام ساعات' },
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <feature.icon size={28} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Men" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">مردانه</h2>
                <Link to="/shop?gender=men" className="text-white border-b-2 border-white pb-1 inline-flex items-center gap-2 hover:text-primary hover:border-primary transition-colors">
                  مشاهده محصولات <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Women" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">زنانه</h2>
                <Link to="/shop?gender=women" className="text-white border-b-2 border-white pb-1 inline-flex items-center gap-2 hover:text-primary hover:border-primary transition-colors">
                   مشاهده محصولات <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-primary font-bold text-sm">محصولات منتخب</span>
            <h2 className="text-3xl font-black text-gray-800 mt-1">پیشنهادات ویژه</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-1 text-gray-500 hover:text-primary transition-colors">
            مشاهده همه <ArrowLeft size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <Link to="/shop" className="inline-flex items-center gap-2 text-primary font-bold border-b border-primary pb-1">
             مشاهده همه محصولات <ArrowLeft size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
