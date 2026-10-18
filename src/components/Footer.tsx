import { Facebook, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import Squircle from './ui/Squircle';

const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYaJA1wzgtlc9OBGWTaqFdKHdbg1mAacC4JsotaplWjEJG-pKqxN_XEw&s=10";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-[#060606] border-t border-gold/15 py-14 md:py-18 px-6 overflow-hidden">
      {/* Decorative Gold Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div
                style={{ borderRadius: '24%' }}
                className="flex h-11 w-11 items-center justify-center border border-gold/30 bg-[#171512] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
              >
                <img
                  src={logo}
                  alt="Vee Bite Logo"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-display text-2xl tracking-[0.1em] text-white">
                VEE <span className="text-gold">BITE</span>
              </span>
            </div>
            <p className="font-serif italic text-gold-dark text-sm tracking-wide">
              Eat Good, Feel Good
            </p>
            <p className="font-sans text-xs text-white/60 leading-relaxed max-w-sm">
              We are Gujranwala's premier fast-food destination. Founded in 2023 by Haris Bin Zahid, bringing dual cheese-stuffed crust pizzas, mighty zingers, artisanal wraps, and authentic Pakistani flavor straight to your table.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm tracking-[0.2em] text-white uppercase font-bold">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#hero" className="font-sans text-xs text-white/60 hover:text-gold transition-colors duration-200">
                Home
              </a>
              <a href="#menu" className="font-sans text-xs text-white/60 hover:text-gold transition-colors duration-200">
                Menu
              </a>
              <a href="#deals" className="font-sans text-xs text-white/60 hover:text-gold transition-colors duration-200">
                Combo Deals
              </a>
              <a href="#our-story" className="font-sans text-xs text-white/60 hover:text-gold transition-colors duration-200">
                Our Story
              </a>
              <a href="#contact" className="font-sans text-xs text-white/60 hover:text-gold transition-colors duration-200">
                Contact & Location
              </a>
            </div>
          </div>

          {/* Column 3: Social & Phone Connect with Apple Squircle Icons */}
          <div className="space-y-4">
            <h4 className="font-display text-sm tracking-[0.2em] text-white uppercase font-bold">
              Connect With Us
            </h4>
            <p className="font-sans text-xs text-white/60 leading-relaxed">
              Main Market, Model Town, Gujranwala.<br />
              WhatsApp: 0307 655 3100
            </p>

            {/* Apple-style Squircle Social Buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Profile"
              >
                <Squircle size="sm" variant="dark" className="border-gold/25 hover:border-gold hover:text-gold">
                  <Facebook className="h-4 w-4" />
                </Squircle>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
              >
                <Squircle size="sm" variant="dark" className="border-gold/25 hover:border-gold hover:text-gold">
                  <Instagram className="h-4 w-4" />
                </Squircle>
              </a>

              <a
                href="https://wa.me/923076553100"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Direct"
              >
                <Squircle size="sm" variant="dark" className="border-gold/25 hover:border-gold hover:text-gold">
                  <MessageCircle className="h-4 w-4" />
                </Squircle>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyrights and Mandatory Credits */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-sans text-[11px] text-white/40 tracking-wider uppercase">
              VEE BITE © {new Date().getFullYear()} All Rights Reserved.
            </p>
            <p className="font-sans text-[11px] text-gold-dark uppercase tracking-[0.2em] font-semibold mt-1">
              Website Created By Fast Target Co. — 0314 8418849
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            title="Scroll to top"
            aria-label="Scroll to top"
            style={{ borderRadius: '18px' }}
            className="flex h-10 w-10 items-center justify-center bg-[#171512] border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all duration-200 cursor-pointer shadow-md active:scale-90"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
