import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-gray-300 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary rounded flex items-center justify-center text-sm transform -rotate-3">گ</span>
              گام‌برتر
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              ما در گام‌برتر متعهد هستیم که بهترین کفش‌های ورزشی و روزمره را با بالاترین کیفیت و بهترین قیمت به شما ارائه دهیم. راحتی پاهای شما اولویت ماست.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">دسترسی سریع</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-primary transition-colors">فروشگاه</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">درباره ما</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">تماس با ما</Link></li>
              <li><Link to="/profile" className="hover:text-primary transition-colors">حساب کاربری</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">سوالات متداول</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">دسته‌بندی‌ها</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop?category=men" className="hover:text-primary transition-colors">مردانه</Link></li>
              <li><Link to="/shop?category=women" className="hover:text-primary transition-colors">زنانه</Link></li>
              <li><Link to="/shop?category=kids" className="hover:text-primary transition-colors">بچگانه</Link></li>
              <li><Link to="/shop?category=sport" className="hover:text-primary transition-colors">ورزشی</Link></li>
              <li><Link to="/shop?category=formal" className="hover:text-primary transition-colors">رسمی</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">تماس با ما</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>تهران، میدان ونک، خیابان ولیعصر، برج گام‌برتر، طبقه ۵</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span dir="ltr">021 - 8888 1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span>info@gambreter.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>© ۱۴۰۳ تمامی حقوق برای فروشگاه گام‌برتر محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
