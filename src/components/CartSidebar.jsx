import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getCartTotal, getCartCount } = useCart();

  const generateWhatsAppMessage = () => {
    if (cartItems.length === 0) return '';

    let message = `Hello! I'd like to place an order:\n\n`;
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Quantity: ${item.quantity} ${item.unit}\n`;
      message += `   Price: ₦${(item.price * item.quantity).toLocaleString()}\n\n`;
    });

    message += `*Total: ₦${getCartTotal().toLocaleString()}*\n\n`;
    message += `Please confirm availability and delivery details. Thank you!`;

    return message;
  };

  const sendWhatsAppOrder = () => {
    const phone = "2348101338296"; 
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <ShoppingBag className="text-emerald-700" size={24} strokeWidth={2.5} />
              <h2 className="text-xl font-black text-gray-900">Your Cart</h2>
              {getCartCount() > 0 && (
                <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-bold">
                  {getCartCount()}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="text-gray-300 mb-4" size={64} strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 text-sm">Add some products to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-xl p-4 relative">
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-2 right-2 p-1 hover:bg-red-100 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} className="text-red-600" />
                    </button>

                    {/* Product Info */}
                    <div className="flex gap-4 mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-black text-sm text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-xs text-gray-600">{item.unit}</p>
                        <p className="text-sm font-bold text-emerald-700 mt-1">
                          ₦{item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 bg-white border-2 border-gray-200 rounded-lg hover:border-emerald-500 transition-colors"
                        >
                          <Minus size={14} strokeWidth={2.5} />
                        </button>
                        <span className="w-12 text-center font-bold text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 bg-white border-2 border-gray-200 rounded-lg hover:border-emerald-500 transition-colors"
                        >
                          <Plus size={14} strokeWidth={2.5} />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">Subtotal</p>
                        <p className="font-black text-emerald-700">
                          ₦{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Clear Cart Button */}
                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="w-full text-sm text-red-600 font-semibold py-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Clear All Items
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Footer with Total and Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-black text-emerald-700">
                  ₦{getCartTotal().toLocaleString()}
                </span>
              </div>
              
              <button
                onClick={sendWhatsAppOrder}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 rounded-xl font-black hover:from-emerald-700 hover:to-emerald-800 transition-all hover:scale-105 shadow-lg"
              >
                <Phone size={20} strokeWidth={2.5} />
                <span>Order via WhatsApp</span>
              </button>
              
              <p className="text-xs text-center text-gray-600 mt-3">
                You'll be redirected to WhatsApp to complete your order
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}