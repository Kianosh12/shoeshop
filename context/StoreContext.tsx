import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CartItem, Product, User } from '../types';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: number, color: string) => void;
  removeFromCart: (productId: number, size: number, color: string) => void;
  updateQuantity: (productId: number, size: number, color: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  toasts: Toast[];
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  favorites: number[];
  toggleFavorite: (productId: number) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const addToCart = (product: Product, size: number, color: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );
      if (existing) {
        addToast('تعداد محصول در سبد خرید افزایش یافت', 'info');
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      addToast('محصول به سبد خرید اضافه شد');
      return [...prev, { ...product, quantity: 1, selectedSize: size, selectedColor: color }];
    });
  };

  const removeFromCart = (id: number, size: number, color: string) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.selectedSize === size && item.selectedColor === color)));
    addToast('محصول از سبد خرید حذف شد', 'error');
  };

  const updateQuantity = (id: number, size: number, color: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id && item.selectedSize === size && item.selectedColor === color) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const login = (email: string) => {
    setUser({ id: '1', name: 'کاربر مهمان', email });
    addToast('با موفقیت وارد شدید');
  };

  const logout = () => {
    setUser(null);
    addToast('از حساب کاربری خارج شدید', 'info');
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        addToast('از علاقه‌مندی‌ها حذف شد', 'info');
        return prev.filter(fid => fid !== id);
      }
      addToast('به علاقه‌مندی‌ها اضافه شد');
      return [...prev, id];
    });
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        user,
        login,
        logout,
        toasts,
        addToast,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  return context;
};
