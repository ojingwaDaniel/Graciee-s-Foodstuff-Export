import React, { useState } from 'react';
import { Phone, Star, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    
    // Reset success message after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setQuantity(1);
    }, 2000);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        {product.badge && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-emerald-900 px-3 py-1.5 rounded-full text-xs font-black z-10 shadow-lg">
            {product.badge}
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Product Info */}
      <div className="p-5 sm:p-6">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">{product.category}</span>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500 fill-yellow-500" size={14} strokeWidth={2} />
            <span className="text-sm font-bold text-gray-900">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
        </div>
        
        {/* Product Name */}
        <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 leading-tight">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 font-medium">{product.unit}</p>
        
        {/* Price */}
        <div className="mb-5">
          <span className="text-3xl sm:text-4xl font-black text-emerald-700">₦{product.price.toLocaleString()}</span>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mb-4">
          <label className="text-sm text-gray-700 font-bold">Qty:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-20 px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-semibold text-center"
          />
        </div>
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={showSuccess}
          className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold transition-all shadow-lg text-sm sm:text-base ${
            showSuccess
              ? 'bg-green-600 text-white'
              : 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 hover:scale-105'
          }`}
        >
          {showSuccess ? (
            <>
              <Check size={18} strokeWidth={2.5} />
              <span>Added to Cart!</span>
            </>
          ) : (
            <>
              <ShoppingCart size={18} strokeWidth={2.5} />
              <span>Add to Cart</span>
            </>
          )}
              </button>
              
      </div>
    </div>
  );
}