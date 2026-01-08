import React from 'react';
import { Shield, Truck, Award, Phone } from 'lucide-react';

const whyChooseUs = [
  {
    icon: Shield,
    title: "100% Quality Guaranteed",
    description: "All products inspected and certified before delivery"
  },
  {
  icon: Truck,
  title: "Worldwide Delivery",
  description: "We deliver to any location worldwide with fast and reliable shipping."
}


  {
    icon: Award,
    title: "Premium Products",
    description: "Finest quality foodstuff from trusted suppliers"
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Easy ordering via WhatsApp. Quick responses guaranteed."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Why Choose Graciee's Foodstuff?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            Your trusted partner for premium foodstuff in Nigeria
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl mb-5 shadow-lg">
                  <Icon className="text-white" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}