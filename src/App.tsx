import { useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Deals from './components/Deals';
import OurStory from './components/OurStory';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import { motion } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <CartProvider>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <motion.div
          id="veebite-app-root"
          className="relative min-h-screen bg-[#080808] text-[#F3E9D2] overflow-x-hidden selection:bg-gold selection:text-black font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Sticky Header Nav */}
          <Header />

          {/* Hero Section */}
          <Hero />

          {/* Menu Section */}
          <Menu />

          {/* Deals Section */}
          <Deals />

          {/* Our Story Section */}
          <OurStory />

          {/* Contact & Location Section */}
          <Contact />

          {/* Footer */}
          <Footer />

          {/* Floating Luxury Elements */}
          <WhatsAppButton />
          <CartDrawer />
        </motion.div>
      )}
    </CartProvider>
  );
}
