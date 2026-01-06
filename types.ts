export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  category: string;
  image: string;
  images: string[];
  colors: string[];
  sizes: number[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  description: string;
  brand: string;
  gender: 'men' | 'women' | 'kids';
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
  selectedColor: string;
}

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  brands: string[];
  gender: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
