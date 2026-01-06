import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleFavorite, favorites } = useStore();
  const isFav = favorites.includes(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Defaulting to first size/color for quick add
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(product.id);
  };

  return (
    <Link to={`/product/${product.id}`} className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative overflow-hidden">
      
      {/* Badges */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
            جدید
          </span>
        )}
        {product.oldPrice && (
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
            {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-square mb-4 bg-gray-50 rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button 
            onClick={handleFavorite}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${isFav ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:text-red-500'}`}
          >
            <Heart size={20} fill={isFav ? "currentColor" : "none"} />
          </button>
          <button 
            onClick={handleAddToCart}
            className="w-10 h-10 bg-white text-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-gray-500 font-medium">{product.category}</span>
          <div className="flex items-center gap-1 text-yellow-400 text-xs">
            <Star size={12} fill="currentColor" />
            <span className="text-gray-400">({product.rating})</span>
          </div>
        </div>
        
        <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2 line-clamp-2 leading-relaxed group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
                {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through decoration-red-400">
                    {product.oldPrice.toLocaleString('fa-IR')}
                    </span>
                )}
                <div className="flex items-center gap-1">
                    <span className="font-bold text-lg text-gray-900">
                    {product.price.toLocaleString('fa-IR')}
                    </span>
                    <span className="text-xs text-gray-500 font-light">تومان</span>
                </div>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
