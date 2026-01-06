import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ToastContainer from './components/ToastContainer';
import { StoreProvider } from './context/StoreContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-[#f9fafb]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<div className="p-20 text-center text-2xl font-bold">صفحه درباره ما</div>} />
              <Route path="/contact" element={<div className="p-20 text-center text-2xl font-bold">صفحه تماس با ما</div>} />
              <Route path="/profile" element={<div className="p-20 text-center text-2xl font-bold">صفحه پروفایل</div>} />
              <Route path="/favorites" element={<div className="p-20 text-center text-2xl font-bold">لیست علاقه‌مندی‌ها</div>} />
            </Routes>
          </main>
          <Footer />
          <ToastContainer />
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
