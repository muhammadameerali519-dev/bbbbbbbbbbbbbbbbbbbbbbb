import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, PhoneCall, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import Squircle from './ui/Squircle';

const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYaJA1wzgtlc9OBGWTaqFdKHdbg1mAacC4JsotaplWjEJG-pKqxN_XEw&s=10";

export default function Header() {
  const { cartCount, setIsOpen: setIsOpenCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Deals', href: '#deals' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleWhatsAppRedirect = () => {
    const whatsappUrl = 'https://wa.me/923076553100?text=Hello%20Vee%20Bite!%20I%20want%20to%20place%20a%20delicious%20order.';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <header
        id="main-sticky-header"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 md:px-6 pt-3 pb-2"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-2.5 rounded-2xl md:rounded-3xl border transition-all duration-300 ${
            isScrolled
              ? 'luxury-glass border-gold/30 shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
              : 'bg-[#151311]/85 backdrop-blur-xl border-gold/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
          }`}
        >
          {/* Zone 1: Apple Squircle Brand Lockup */}
          <a href="#hero" className="flex items-center gap-3 group shrink-0">
            <div
              style={{ borderRadius: '24%' }}
              className="relative flex h-10 w-10 md:h-11 md:md-11 items-center justify-center bg-[#171512] border border-gold/35 border-t-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-gold"
            >
              <img
                src={logo}
                alt="Vee Bite Logo"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl tracking-[0.1em] text-white leading-none whitespace-nowrap">
                VEE <span className="text-gold">BITE</span>
              </span>
              <span className="font-sans text-[8px] md:text-[9px] tracking-[0.25em] text-gold-dark uppercase font-bold whitespace-nowrap mt-0.5">
                Eat Good, Feel Good
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean single line typography) */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs tracking-widest text-[#F3E9D2]/85 hover:text-gold uppercase transition-colors duration-200 font-semibold relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Basket & CTA) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Desktop Basket Button */}
            <button
              onClick={() => setIsOpenCart(true)}
              style={{ borderRadius: '18px' }}
              className="hidden md:flex items-center gap-2.5 px-3.5 py-2 border border-gold/25 bg-[#1C1916]/90 hover:bg-[#25211D] text-gold transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.4)] hover:border-gold/45 cursor-pointer active:scale-95"
            >
              <Squircle size="xs" variant="dark" className="border-gold/30">
                <ShoppingBag className="h-3.5 w-3.5 text-gold" />
              </Squircle>
              <span className="font-sans text-[11px] uppercase tracking-wider font-bold">Basket</span>
              {cartCount > 0 && (
                <span className="flex h-5 min-w-[20px] px-1 items-center justify-center rounded-full bg-gradient-to-b from-red-500 to-red-700 text-white text-[10px] font-black shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Desktop Order Now Button */}
            <button
              onClick={handleWhatsAppRedirect}
              style={{ borderRadius: '18px' }}
              className="hidden md:inline-flex items-center gap-2 luxury-button-gold font-sans text-xs uppercase tracking-widest px-4.5 py-2.5 font-bold cursor-pointer"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Order Now</span>
            </button>

            {/* Mobile Basket Squircle Trigger */}
            <div className="relative md:hidden">
              <Squircle
                size="sm"
                variant="dark"
                onClick={() => setIsOpenCart(true)}
                title="View Basket"
                className="cursor-pointer border-gold/30"
              >
                <ShoppingBag className="h-4 w-4 text-gold" />
              </Squircle>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-red text-white text-[9px] font-black shadow-md pointer-events-none">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Mobile Hamburger Squircle */}
            <Squircle
              size="sm"
              variant="dark"
              onClick={() => setIsOpen(!isOpen)}
              title="Toggle Menu"
              className="md:hidden cursor-pointer border-gold/30"
            >
              {isOpen ? <X className="h-4 w-4 text-gold" /> : <MenuIcon className="h-4 w-4 text-gold" />}
            </Squircle>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            className="fixed inset-0 z-40 flex flex-col bg-[#0A0A0A]/95 backdrop-blur-2xl pt-24 px-6 md:hidden"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 text-white hover:text-gold hover:border-gold/30 transition-all font-display text-2xl tracking-widest uppercase"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <span>{link.name}</span>
                  <span className="text-gold text-lg">→</span>
                </motion.a>
              ))}

              <motion.button
                onClick={() => {
                  setIsOpen(false);
                  handleWhatsAppRedirect();
                }}
                className="flex items-center justify-center gap-2.5 luxury-button-gold rounded-2xl py-4 mt-4 font-sans text-xs uppercase tracking-widest font-bold shadow-lg"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call & Order Now</span>
              </motion.button>
            </div>

            <div className="mt-auto mb-8 text-center text-[10px] font-mono tracking-widest text-gold-dark/70">
              VEE BITE • GUJRANWALA • 0307 655 3100
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
