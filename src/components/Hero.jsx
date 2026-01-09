import React from 'react';
import { Phone, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1600&q=80')] bg-cover bg-center opacity-20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-emerald-900 px-4 py-2 rounded-full font-bold text-xs sm:text-sm mb-6 shadow-lg">
          <span className="text-base">✨</span>
          <span>Premium Quality • 5,000+ Happy Customers</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
          Fresh Foodstuff<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
            Delivered to Your Door
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl leading-relaxed font-light">
          Bringing Quality Ingredients To Your Table 
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-bold hover:from-emerald-700 hover:to-emerald-800 transition-all hover:scale-105 shadow-2xl"
          >
            <span>Shop Now</span>
            <ChevronRight size={22} strokeWidth={3} />
          </a>
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
          >
            <Phone size={22} strokeWidth={3} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">300+</div>
            <div className="text-sm sm:text-base text-gray-300 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">100+</div>
            <div className="text-sm sm:text-base text-gray-300 font-medium">Orders Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">4.8★</div>
            <div className="text-sm sm:text-base text-gray-300 font-medium">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}