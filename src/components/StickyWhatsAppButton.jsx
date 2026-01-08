import React from 'react';
import { Phone } from 'lucide-react';

export default function StickyWhatsAppButton() {
  return (
   <a 
      href="https://wa.me/2348012345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 rounded-full shadow-2xl hover:from-emerald-700 hover:to-emerald-800 transition-all hover:scale-110 z-50 flex items-center gap-2 group"
    >
      <Phone size={24} strokeWidth={2.5} />
      <span className="hidden sm:inline font-black text-sm group-hover:scale-105 transition-transform">Order Now</span>
    </a>
  );
}