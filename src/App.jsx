import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import Certifications from './components/Certifications'; // NEW
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import WhatsAppCTA from './components/WhatsAppCTA';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CartProvider>
      <div className="font-sans antialiased">
        <Navigation scrolled={scrolled} onCartClick={() => setCartOpen(true)} />
        <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        <Hero />
        <FeaturedProducts />
        <WhyChooseUs />
        <Certifications /> {/* NEW SECTION */}
        <HowItWorks />
        <Testimonials />
        <WhatsAppCTA />
        <Footer />
      </div>
    </CartProvider>
  );
}