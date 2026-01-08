import React from 'react';

const steps = [
  { number: "01", title: "Browse Products", description: "Explore our premium foodstuff selection and add to chart" },
  { number: "02", title: "Click on order via whatsapp'", description: "Select your desired quantity" },
  { number: "03", title: "Confirm Order", description: "We'll confirm pricing and delivery" },
  { number: "04", title: "Receive Fresh", description: "Fast delivery to your doorstep" }
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            How Ordering Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            Simple, fast, and convenient
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-5xl sm:text-6xl font-black text-emerald-200 mb-4">{step.number}</div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-emerald-300 to-emerald-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}