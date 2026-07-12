import { DEALS, Deal } from '../types';
import { Tag, Sparkles, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

export default function Deals() {
  const { addToCart } = useCart();

  const getTagStyles = (tag: string) => {
    switch (tag) {
      case 'Family':
        return 'bg-red/10 text-red border-red/25';
      case 'Solo':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25';
      case 'Combo':
        return 'bg-gold/10 text-gold border-gold/25';
      case 'Special':
      default:
        return 'bg-purple-500/10 text-purple-400 border-purple-500/25';
    }
  };

  return (
    <section
      id="deals"
      className="relative w-full py-24 bg-[#0A0A0A] border-t border-b border-gold/10 px-6 overflow-hidden"
    >
      {/* Decorative Gold Rings */}
      <div className="absolute right-1/4 top-1/3 w-80 h-80 rounded-full border border-gold/5 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase font-bold mb-2">Exclusive Combos</span>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white">
            MONEY SAVING <span className="text-gold">DEALS</span>
          </h2>
          <p className="font-serif italic text-gold-dark/80 text-sm md:text-base mt-2">
            Perfect combinations crafted to satisfy your cravings at premium discounts
          </p>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gold to-transparent mt-4"></div>
        </div>

        {/* Deals Ticket Grid: Responsive Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {DEALS.map((deal, idx) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx % 2 * 0.1 }}
              className="flex flex-col sm:flex-row rounded-3xl bg-[#171512] border border-gold/20 overflow-hidden shadow-2xl hover:border-gold/40 transition-all duration-300 relative group"
            >
              {/* Left Column: Ticket Stub / Brand */}
              <div className="sm:w-1/3 bg-gold/5 flex flex-col justify-center items-center p-6 border-b sm:border-b-0 sm:border-r-2 border-dashed border-gold/20 relative overflow-hidden">
                {/* Background Food Image with Overlay */}
                {deal.image && (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover opacity-60 filter brightness-[0.7] group-hover:scale-[1.05] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-[#171512]/80"></div>
                  </div>
                )}

                {/* Visual punches on stub edges */}
                <div className="absolute -bottom-3 -right-3 h-6 w-6 rounded-full bg-[#0A0A0A] hidden sm:block border border-gold/5 z-10"></div>
                <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-[#0A0A0A] hidden sm:block border border-gold/5 z-10"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 border border-gold/30 mb-3 text-gold shadow-md backdrop-blur-sm">
                    <Tag className="h-5 w-5" />
                  </div>

                  <span className="font-display text-2xl tracking-widest text-white mt-1">
                    VEE <span className="text-gold">BITE</span>
                  </span>
                  <span className={`font-sans text-[8px] uppercase tracking-widest px-2.5 py-1 rounded-full border mt-3 font-bold backdrop-blur-sm ${getTagStyles(deal.tag)}`}>
                    {deal.tag} Package
                  </span>
                </div>
              </div>

              {/* Right Column: Content and Claims */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between relative">
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-display text-2xl tracking-wider text-white group-hover:text-gold transition-colors duration-300">
                      {deal.name}
                    </h3>
                    {deal.badge && (
                      <span className="inline-flex items-center gap-1 text-[8px] font-sans font-bold uppercase tracking-widest text-gold border border-gold/30 bg-gold/5 px-2.5 py-1 rounded">
                        <Sparkles className="h-2.5 w-2.5" />
                        {deal.badge}
                      </span>
                    )}
                  </div>

                  <p className="font-serif text-cream/80 leading-relaxed text-sm md:text-base mt-4 font-semibold italic">
                    {deal.description}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">
                  <div className="flex flex-col">
                    <span className="font-sans text-[8px] tracking-widest text-gold-dark uppercase font-bold">
                      Combo Price
                    </span>
                    <span className="font-mono text-lg md:text-xl font-black text-gold tracking-tight mt-1">
                      {typeof deal.price === 'number' ? `Rs. ${deal.price}` : deal.price}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(deal, 'deal', typeof deal.price === 'number' ? deal.price : parseInt(String(deal.price).replace(/\D/g, ''), 10))}
                    className="flex items-center gap-1.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-sans text-[10px] uppercase tracking-widest px-4.5 py-2.5 transition-all duration-300 font-bold shadow-md cursor-pointer hover:scale-[1.02]"
                  >
                    <span>Add to Basket</span>
                    <ShoppingBag className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
