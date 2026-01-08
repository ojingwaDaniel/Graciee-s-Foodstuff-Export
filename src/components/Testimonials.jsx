import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Adebayo Johnson",
    location: "Jos, Plateau",
    text: "The quality is exceptional! I've been ordering rice and beans from them for 6 months now. Always fresh, always on time.",
    rating: 5,
    avatar: "AJ"
  },
  {
    name: "Chioma Okafor",
    location: "Jos, Plateau",
    text: "Best foodstuff supplier in Jos. Their WhatsApp ordering is so convenient, and the prices are fair for the quality.",
    rating: 5,
    avatar: "CO"
  },
  {
    name: "Ibrahim Musa",
    location: "Abuja",
    text: "I run a restaurant and order in bulk. Their palm oil and spices are premium quality. Highly recommend!",
    rating: 5,
    avatar: "IM"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            Join thousands of satisfied customers across Nigeria
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} strokeWidth={2} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-sm sm:text-base leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center text-white font-black shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-black text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}