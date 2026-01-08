import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Our Premium Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Handpicked selection of the finest foodstuff. Quality you can trust, prices you'll love.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}