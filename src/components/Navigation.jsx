import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import companyLogo from "../assets/company-logo-removebg-preview.png"

export default function Navigation({ scrolled, onCartClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-lg transition-all">
              <img 
                src={companyLogo} 
                alt="Graciee's Foodstuff Export Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Company Name - Hidden on mobile, visible from md (768px) and up */}
            <span className={`hidden md:block text-xl lg:text-2xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'}`}>
              Graciee's Foodstuff Export
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className={`text-sm font-semibold tracking-wide ${scrolled ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-emerald-300'} transition-colors`}>
              Products
            </a>
            <a href="#why-us" className={`text-sm font-semibold tracking-wide ${scrolled ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-emerald-300'} transition-colors`}>
              Why Us
            </a>
            <a href="#testimonials" className={`text-sm font-semibold tracking-wide ${scrolled ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-emerald-300'} transition-colors`}>
              Reviews
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className={`relative p-2.5 rounded-xl transition-all hover:scale-105 ${
                scrolled ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <ShoppingCart 
                className={scrolled ? 'text-gray-900' : 'text-white'} 
                size={22} 
                strokeWidth={2.5} 
              />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
            <a
              href="https://wa.me/2347031572272"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-5 py-2.5 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all hover:scale-105 shadow-lg font-semibold text-sm"
            >
              <Phone size={18} strokeWidth={2.5} />
              <span>Contact</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 py-4 space-y-3">
            <a href="#products" className="block text-gray-900 font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#why-us" className="block text-gray-900 font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
            <a href="#testimonials" className="block text-gray-900 font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCartClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-5 py-3 rounded-xl font-semibold"
            >
              <ShoppingCart size={18} />
              <span>View Cart ({getCartCount()})</span>
            </button>
            <a
              href="https://wa.me/2347031572272"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-700 text-white px-5 py-3 rounded-xl font-semibold justify-center"
            >
              <Phone size={18} />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}