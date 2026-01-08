import React from 'react';
import { ShoppingBag } from 'lucide-react';
import companyLogo from "../assets/company-logo-removebg-preview.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11  from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center shadow-lg">
                            <img src={companyLogo} alt="Company Logo" />
                          </div>
              <span className="text-2xl font-black">Graciee's Foodstuff Export</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nigeria's premium foodstuff supplier. Quality you can trust.
            </p>
          </div>
          
          <div>
            <h3 className="font-black text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-white transition-colors">Why Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-black text-base mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Rayfield Rd, Jos 930103, Plateau, Nigeria</li>
              <li>📞 +234 801 234 5678</li>
              <li>✉️ gracenancy042@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-black text-base mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mon - Sat: 8am - 8pm</li>
              <li>Sunday: 10am - 6pm</li>
              <li className="text-emerald-400 font-bold">WhatsApp: 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Graciee's Foodstuff Export. All rights reserved. Built with 💚 for Nigerian families.</p>
        </div>
      </div>
    </footer>
  );
}