import React from 'react';
import { Shield, Award, CheckCircle, FileCheck } from 'lucide-react';
import companyCertificate from "../assets/certificate.png"


export default function Certifications() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
            <Shield size={16} strokeWidth={2.5} />
            <span>Licensed & Certified</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Trusted & Verified Business
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Fully registered and certified to operate. Your trust and safety are our priority.
          </p>
        </div>

        {/* Certifications Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${cert.color} rounded-xl mb-4 shadow-lg`}>
                  <Icon className="text-white" size={28} strokeWidth={2} />
                </div>
                <div className="mb-3">
                  <h3 className="text-lg font-black text-gray-900 mb-1">{cert.title}</h3>
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">{cert.subtitle}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{cert.description}</p>
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                  {cert.badge}
                </div>
              </div>
            );
          })}
        </div>  */}

        {/* Certificate Display Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 sm:p-12 border-2 border-emerald-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-6 shadow-lg">
                <FileCheck size={16} strokeWidth={2.5} />
                <span>Official Documentation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
                Our Business Registration Certificate
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are a fully registered company with the Corporate Affairs Commission (CAC) of Nigeria. 
                Our business operates with complete transparency and adheres to all regulatory requirements.
              </p>
              
              {/* Certificate Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} strokeWidth={2.5} />
                  <div>
                    <p className="font-bold text-gray-900">Company Name</p>
                    <p className="text-sm text-gray-600">Graciee's Foodstuffs Exports</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} strokeWidth={2.5} />
                  <div>
                    <p className="font-bold text-gray-900">Registration Number</p>
                    <p className="text-sm text-gray-600">RC 7735402</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} strokeWidth={2.5} />
                  <div>
                    <p className="font-bold text-gray-900">Registration Date</p>
                    <p className="text-sm text-gray-600">July 22, 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} strokeWidth={2.5} />
                  <div>
                    <p className="font-bold text-gray-900">Registered Address</p>
                    <p className="text-sm text-gray-600">Rayfield Rd, Jos 930103, Plateau, Nigeria</p>
                  </div>
                </div>
              </div>
            
            </div>

            {/* Right Side - Certificate Image */}
            <div className="relative">
              {/* Certificate Frame */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border-8 border-gray-100 transform hover:scale-105 transition-transform">
                
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-yellow-500 text-emerald-900 p-4 rounded-full shadow-xl z-10">
                  <Award size={32} strokeWidth={2.5} />
                </div>
                
                {/* Certificate Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 overflow-hidden">
         
                  <img
                    src = {companyCertificate}
                    alt="CAC Registration Certificate"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="text-center p-8">
                          <div class="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <p class="text-gray-600 font-semibold mb-2">Official CAC Certificate</p>
                          <p class="text-sm text-gray-500">Upload your certificate image to display here</p>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Certificate Info Footer */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 font-medium">
                    Issued by Corporate Affairs Commission, Nigeria
                  </p>
                  <p className="text-xs text-emerald-600 font-bold mt-1">
                    Valid & Up-to-date
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-200 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-200 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-black text-emerald-700 mb-1">100%</div>
            <p className="text-sm text-gray-600 font-semibold">Legit Business</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-black text-emerald-700 mb-1">4+</div>
            <p className="text-sm text-gray-600 font-semibold">Years Operating</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-black text-emerald-700 mb-1">5000+</div>
            <p className="text-sm text-gray-600 font-semibold">Satisfied Customers</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-black text-emerald-700 mb-1">4.8★</div>
            <p className="text-sm text-gray-600 font-semibold">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}