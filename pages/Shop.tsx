import React, { useState, useMemo } from 'react';
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { PRODUCTS, BRANDS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const Shop: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');
  const [priceRange, setPriceRange] = useState<number>(10000000);
  const [sortOption, setSortOption] = useState<string>('newest');

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    if (selectedCategory !== 'همه') {
      result = result.filter(p => p.category === selectedCategory);
    }

    result = result.filter(p => p.price <= priceRange);

    if (sortOption === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOption === 'popular') {
      result = [...result].sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [selectedBrands, selectedCategory, priceRange, sortOption]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
           <h1 className="text-3xl font-bold text-gray-800 mb-2">فروشگاه</h1>
           <p className="text-gray-500 text-sm">{filteredProducts.length} محصول پیدا شد</p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700"
          >
            <Filter size={18} /> فیلترها
          </button>
          
          <div className="relative group ml-auto md:ml-0">
             <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pr-8 pl-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-sm"
             >
               <option value="newest">جدیدترین</option>
               <option value="popular">محبوب‌ترین</option>
               <option value="price-low">ارزان‌ترین</option>
               <option value="price-high">گران‌ترین</option>
             </select>
             <ChevronDown size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        
        {/* Sidebar Filters */}
        <aside className={`w-64 flex-shrink-0 space-y-8 ${isFilterOpen ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden md:block'}`}>
          <div className="md:hidden flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">فیلترها</h2>
            <button onClick={() => setIsFilterOpen(false)} className="p-2 bg-gray-100 rounded-full"><ChevronDown size={20} className="transform rotate-180" /></button>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">دسته‌بندی</h3>
            <div className="space-y-2">
              {CATEGORIES.map(cat => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="category" 
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                    className="w-4 h-4 text-primary focus:ring-primary border-gray-300" 
                  />
                  <span className={`text-sm group-hover:text-primary transition-colors ${selectedCategory === cat ? 'text-primary font-bold' : 'text-gray-600'}`}>
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">برند</h3>
            <div className="space-y-2">
              {BRANDS.map(brand => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="w-4 h-4 text-primary rounded focus:ring-primary border-gray-300"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">محدوده قیمت</h3>
            <input 
              type="range" 
              min="0" 
              max="10000000" 
              step="100000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>۰ تومان</span>
              <span>{priceRange.toLocaleString('fa-IR')} تومان</span>
            </div>
          </div>

           {/* Apply Button Mobile */}
           <button 
             onClick={() => setIsFilterOpen(false)}
             className="md:hidden w-full bg-primary text-white py-3 rounded-xl font-bold mt-8"
           >
             مشاهده نتایج
           </button>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">محصولی با این مشخصات یافت نشد.</p>
              <button 
                onClick={() => {setSelectedCategory('همه'); setSelectedBrands([]); setPriceRange(10000000);}}
                className="mt-4 text-primary hover:underline"
              >
                پاک کردن فیلترها
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Shop;
