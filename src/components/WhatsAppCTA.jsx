import React from 'react';
import { Phone, Check } from 'lucide-react';

export default function WhatsAppCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
          <Phone className="text-white" size={40} strokeWidth={2.5} />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Ready to Order?
        </h2>
        <p className="text-lg sm:text-xl text-gray-100 mb-10 leading-relaxed font-medium">
          Chat with us on WhatsApp now. Fast responses, friendly service, premium quality guaranteed.
        </p>
        <a
          href="https://wa.me/2347031572272?text=Hello!%20I'd%20like%20to%20place%20an%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-xl text-base sm:text-lg font-black hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
        >
          <Phone size={24} strokeWidth={3} />
          <span>Start Your Order on WhatsApp</span>
        </a>
        <div className="mt-8 flex items-center justify-center gap-2 text-white">
          <Check size={20} strokeWidth={3} />
          <span className="text-sm sm:text-base font-semibold">Average response time: Under 5 minutes</span>
        </div>
      </div>
    </section>
  );
}