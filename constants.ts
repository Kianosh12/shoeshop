import { Product } from './types';

// Using Unsplash images for a realistic look
export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'کفش رانینگ نایک ایر زوم',
    price: 4500000,
    oldPrice: 5200000,
    category: 'ورزشی',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=600'
    ],
    colors: ['#ef4444', '#000000', '#ffffff'],
    sizes: [40, 41, 42, 43, 44],
    rating: 4.8,
    reviews: 124,
    isNew: true,
    description: 'کفش رانینگ فوق‌العاده سبک و راحت با تکنولوژی ایر زوم برای حداکثر بازدهی انرژی.',
    brand: 'Nike',
    gender: 'men'
  },
  {
    id: 2,
    title: 'کفش پیاده‌روی آدیداس اولترابوست',
    price: 3800000,
    category: 'ورزشی',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=800',
       'https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=800'
    ],
    colors: ['#000000', '#3b82f6'],
    sizes: [38, 39, 40, 41],
    rating: 4.6,
    reviews: 89,
    description: 'طراحی مدرن و کفی طبی برای استفاده طولانی مدت بدون خستگی.',
    brand: 'Adidas',
    gender: 'women'
  },
  {
    id: 3,
    title: 'کتانی کلاسیک جردن',
    price: 6100000,
    category: 'روزمره',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=600',
    images: ['https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=600'],
    colors: ['#ffffff', '#ef4444'],
    sizes: [41, 42, 43, 44, 45],
    rating: 4.9,
    reviews: 210,
    isNew: true,
    description: 'یک کلاسیک واقعی. مناسب برای استایل‌های خیابانی و بسکتبال.',
    brand: 'Jordan',
    gender: 'men'
  },
  {
    id: 4,
    title: 'کفش دویدن نیوبالانس',
    price: 2900000,
    oldPrice: 3500000,
    category: 'ورزشی',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=600',
    images: ['https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=600'],
    colors: ['#64748b', '#000000'],
    sizes: [40, 41, 42],
    rating: 4.5,
    reviews: 56,
    description: 'تعادل کامل بین راحتی و دوام.',
    brand: 'New Balance',
    gender: 'men'
  },
  {
    id: 5,
    title: 'ونس اولد اسکول',
    price: 1800000,
    category: 'روزمره',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600',
    images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600'],
    colors: ['#000000'],
    sizes: [36, 37, 38, 39, 40, 41, 42],
    rating: 4.7,
    reviews: 340,
    description: 'کفشی که هیچوقت از مد نمی‌افتد. مناسب برای اسکیت و استفاده روزمره.',
    brand: 'Vans',
    gender: 'women'
  },
  {
    id: 6,
    title: 'پوما اسمش',
    price: 2200000,
    category: 'روزمره',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=600',
    images: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=600'],
    colors: ['#ffffff'],
    sizes: [37, 38, 39],
    rating: 4.3,
    reviews: 45,
    description: 'ساده، شیک و راحت.',
    brand: 'Puma',
    gender: 'women'
  }
];

export const BRANDS = ['Nike', 'Adidas', 'Jordan', 'New Balance', 'Vans', 'Puma'];
export const CATEGORIES = ['همه', 'ورزشی', 'روزمره', 'رسمی', 'بوت'];