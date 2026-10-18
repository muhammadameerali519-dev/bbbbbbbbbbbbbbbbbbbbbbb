import { useState } from 'react';
import { DEALS } from '../types';
import { Tag, Sparkles, ShoppingBag, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import Squircle from './ui/Squircle';

export default function Deals() {
  const { addToCart } = useCart();
  const [addedDealId, setAddedDealId] = useState<string | null>(null);

  const getTagVariant = (tag: string): 'crimson' | 'emerald' | 'gold' | 'glass' => {
    switch (tag) {
      case 'Family':
        return 'crimson';
      case 'Solo':
        return 'emerald';
      case 'Combo':
        return 'gold';
      default:
        return 'glass';
    }
  };

  const handleAddDeal = (deal: typeof DEALS[0]) => {
    const priceNum = typeof deal.price === 'number' ? deal.price : parseInt(String(deal.price).replace(/\D/g, ''), 10);
    addToCart(deal, 'deal', priceNum);
    setAddedDealId(deal.id);
    setTimeout(() => setAddedDealId(null), 1200);
  };

  return (
    <section
      id="deals"
      className="relative w-full py-24 bg-[#140D0E] border-t border-b border-gold/15 px-4 md:px-6 overflow-hidden"
    >
      {/* Decorative Subtle Ambient Rings */}
      <div className="absolute right-1/4 top-1/3 w-96 h-96 rounded-full border border-gold/10 blur-[90px] bg-red/5 pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <Squircle size="xs" variant="gold">
              <Tag className="h-3 w-3 text-black" />
            </Squircle>
            <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-bold">
              Unbeatable Value
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white uppercase">
            MONEY SAVING <span className="text-gold">DEALS</span>
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </div>

        {/* Deals Ticket Grid with 3D Depth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {DEALS.map((deal, idx) => {
            const isAdded = addedDealId === deal.id;
            return (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row rounded-3xl luxury-card-3d overflow-hidden relative group min-h-[230px]"
              >
                {/* Left Column: Image Container */}
                <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden bg-black/60 shrink-0">
                  {deal.image ? (
                    <img
                      src={deal.image}
                      alt={deal.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gold/5">
                      <Squircle size="lg" variant="dark">
                        <Tag className="h-6 w-6 text-gold" />
                      </Squircle>
                    </div>
                  )}

                  {/* Brand Tag absolute positioned */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <Squircle
                      size="xs"
                      variant={getTagVariant(deal.tag)}
                      className="px-2.5 py-1 text-[9px] font-sans font-bold uppercase tracking-widest"
                    >
                      {deal.tag}
                    </Squircle>
                  </div>
                </div>

                {/* Perforated ticket separator line */}
                <div className="hidden sm:block w-px border-l-2 border-dashed border-gold/25 my-6 relative shrink-0">
                  <div className="absolute -top-7 -left-1.5 h-3 w-3 rounded-full bg-[#140D0E] border border-gold/20" />
                  <div className="absolute -bottom-7 -left-1.5 h-3 w-3 rounded-full bg-[#140D0E] border border-gold/20" />
                </div>

                {/* Right Column: Content and Actions */}
                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between relative bg-gradient-to-br from-[#1A1613] to-[#12110F]">
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-display text-2xl tracking-wider text-white group-hover:text-gold transition-colors duration-200">
                        {deal.name}
                      </h3>
                      {deal.badge && (
                        <div className="inline-flex items-center gap-1.5 text-[9px] font-sans font-bold uppercase tracking-wider text-gold border border-gold/30 bg-gold/10 px-2.5 py-0.5 rounded-lg">
                          <Sparkles className="h-2.5 w-2.5" />
                          <span>{deal.badge}</span>
                        </div>
                      )}
                    </div>

                    <p className="font-sans text-xs md:text-sm text-white/90 leading-relaxed mt-2.5 font-medium">
                      {deal.description}
                    </p>
                  </div>

                  {/* Bottom Row */}
                  <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-sans text-[8px] tracking-widest text-gold-dark uppercase font-bold">
                        Deal Price
                      </span>
                      <span className="font-mono text-xl md:text-2xl font-black text-gold tracking-tight mt-0.5 tabular-nums">
                        {typeof deal.price === 'number' ? `Rs. ${deal.price}` : deal.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddDeal(deal)}
                      style={{ borderRadius: '16px' }}
                      className={`flex items-center gap-2 px-4 py-2.5 font-sans text-[11px] uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer shadow-md ${
                        isAdded
                          ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                          : 'luxury-button-gold'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-white" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-3.5 w-3.5" />
                          <span>Add to Basket</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
