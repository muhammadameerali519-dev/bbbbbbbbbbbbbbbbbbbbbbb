import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Sparkles, ChevronDown, Utensils, Tag, Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../types';
import Squircle from './ui/Squircle';

export default function Hero() {
  const { addToCart } = useCart();
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleExploreMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToBasket = (itemId: string, sizeLabel?: string) => {
    const item = MENU_ITEMS.find((i) => i.id === itemId);
    if (item) {
      let price = 0;
      if (typeof item.price === 'number') {
        price = item.price;
      } else if (sizeLabel && item.price[sizeLabel]) {
        price = item.price[sizeLabel];
      } else {
        const firstSize = Object.keys(item.price)[0];
        price = item.price[firstSize];
      }
      addToCart(item, 'menu', price, sizeLabel);
      setAddedItem(itemId);
      setTimeout(() => setAddedItem(null), 1200);
    }
  };

  const handleOrderSpecialCombo = () => {
    const deal = {
      id: 'deal-2',
      name: 'Deal 2',
      image: 'https://pizzabank.pk/admin-panel/laravel_code/storage/app/public/menuitems/5RfBTEVqhImQQTNDATevaSqzLBKqI93dJ5BQu231.png',
    };
    addToCart(deal, 'deal', 2200);
    setAddedItem('deal-2');
    setTimeout(() => setAddedItem(null), 1200);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full bg-[#080808] pt-28 pb-12 px-4 md:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Layered 3D Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gold/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-gold-dark/10 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[260px] h-[260px] rounded-full bg-red/5 blur-[120px] pointer-events-none" />

      {/* Floating subtle ambient shimmer particles */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold"
            style={{
              top: `${(i * 17) % 95}%`,
              left: `${(i * 23) % 95}%`,
              width: `${(i % 3) * 2 + 3}px`,
              height: `${(i % 3) * 2 + 3}px`,
              animation: `float-particle ${7 + (i % 5)}s infinite ease-in-out`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-25px) scale(1.3); opacity: 0.7; }
        }
      `}</style>

      {/* Bento Grid Container with 3D Depth */}
      <div className="mx-auto max-w-7xl w-full z-10 flex-1 flex flex-col justify-center gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full items-stretch">
          
          {/* Card 1: HERO Brand Block (Spans 8 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-8 luxury-card-3d rounded-3xl relative overflow-hidden flex flex-col justify-end p-8 md:p-12 group min-h-[460px] lg:min-h-[540px]"
          >
            {/* Multi-layered cinematic scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/80 z-10" />

            {/* Vibrant food backdrop with smooth hover zoom */}
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
              alt="Artisan Pizza & Fast Food"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.15] transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Giant watermark EST. 2023 */}
            <div className="absolute top-0 right-0 p-8 z-20 select-none pointer-events-none">
              <span className="font-display text-5xl md:text-7xl font-black italic text-gold/15 tracking-widest">
                EST. 2023
              </span>
            </div>

            {/* Apple-style Squircle Badge */}
            <div className="relative z-20 self-start mb-4">
              <div
                style={{ borderRadius: '16px' }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#171512]/80 backdrop-blur-md border border-gold/30 border-t-white/20 text-gold shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
              >
                <Squircle size="xs" variant="gold">
                  <Sparkles className="h-3 w-3 text-black" />
                </Squircle>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-extrabold text-gold-light">
                  Crafted In Gujranwala
                </span>
              </div>
            </div>

            {/* Brand Typography */}
            <div className="relative z-20 space-y-3.5 max-w-2xl">
              <h1 className="font-display text-5xl md:text-8xl font-black leading-[0.88] tracking-tight text-white uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                AUTHENTIC <br />
                PAKISTANI <span className="text-gold">FAST FOOD</span>
              </h1>

              <p className="font-sans text-sm md:text-base font-medium text-white/95 leading-relaxed drop-shadow-md">
                Founded by <span className="text-gold font-bold">Muhammad Haris</span> with an uncompromising obsession with quality, fresh dough, real cheese pulls, and legendary flavor.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <button
                  onClick={handleExploreMenu}
                  style={{ borderRadius: '18px' }}
                  className="luxury-button-gold flex items-center gap-2.5 px-6 py-3.5 font-sans text-xs uppercase tracking-widest font-bold cursor-pointer"
                >
                  <Squircle size="xs" variant="dark" className="border-gold/40">
                    <ShoppingBag className="h-3.5 w-3.5 text-gold" />
                  </Squircle>
                  <span>Explore Menu</span>
                </button>

                <a
                  href="#deals"
                  style={{ borderRadius: '18px' }}
                  className="luxury-button-dark flex items-center gap-2 px-5 py-3.5 font-sans text-xs uppercase tracking-widest font-semibold cursor-pointer"
                >
                  <span>View Deals</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Stack: Card 2 & Card 3 */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-5 justify-between">
            
            {/* Card 2: TRENDING NOW */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="luxury-card-3d rounded-3xl p-6 flex flex-col justify-between flex-1 relative overflow-hidden group"
            >
              <div>
                {/* Header Title with Squircle Icon */}
                <div className="flex items-center justify-between mb-4 border-b border-white/8 pb-3">
                  <div className="flex items-center gap-2.5">
                    <Squircle size="xs" variant="crimson">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    </Squircle>
                    <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">
                      Trending Now
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">
                    Hot Kitchen
                  </span>
                </div>

                {/* List of high-contrast items */}
                <div className="space-y-3">
                  {/* Item 1 - Mighty Zinger */}
                  <div
                    onClick={() => handleAddToBasket('burger-mighty-zinger')}
                    style={{ borderRadius: '20px' }}
                    className="flex items-center justify-between p-2.5 bg-black/50 hover:bg-gold/10 border border-gold/15 hover:border-gold/35 cursor-pointer transition-all duration-200 group/item"
                  >
                    <div className="flex items-center min-w-0">
                      <div
                        style={{ borderRadius: '16px' }}
                        className="w-12 h-12 bg-black/60 border border-gold/25 overflow-hidden shrink-0 mr-3 shadow-inner"
                      >
                        <img
                          src="https://static.tossdown.com/images/d3360ae1-bc13-4b00-9909-99a0ddf78a9d.webp"
                          alt="Mighty Zinger"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-white font-sans tracking-wide block truncate group-hover/item:text-gold transition-colors">
                          Mighty Zinger
                        </span>
                        <span className="text-[9px] text-white/60 uppercase tracking-widest mt-0.5 block">
                          Double Crispy Stack
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end shrink-0 ml-2">
                      <span className="font-mono text-gold text-xs font-bold tabular-nums">
                        Rs. 600
                      </span>
                      <span className="text-[9px] text-gold uppercase tracking-widest mt-1 font-bold flex items-center gap-1 group-hover/item:text-white">
                        {addedItem === 'burger-mighty-zinger' ? (
                          <Check className="h-3 w-3 text-emerald-400" />
                        ) : (
                          <Plus className="h-3 w-3" />
                        )}
                        {addedItem === 'burger-mighty-zinger' ? 'Added' : 'Add'}
                      </span>
                    </div>
                  </div>

                  {/* Item 2 - Chicken Tikka Pizza */}
                  <div
                    onClick={() => handleAddToBasket('pizza-tikka', 'Large 14"')}
                    style={{ borderRadius: '20px' }}
                    className="flex items-center justify-between p-2.5 bg-black/50 hover:bg-gold/10 border border-gold/15 hover:border-gold/35 cursor-pointer transition-all duration-200 group/item"
                  >
                    <div className="flex items-center min-w-0">
                      <div
                        style={{ borderRadius: '16px' }}
                        className="w-12 h-12 bg-black/60 border border-gold/25 overflow-hidden shrink-0 mr-3 shadow-inner"
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOwjDBS0gMStSOHINwQJ-nJSWrNIEHVQT29FfS3gQ8MyRYnEAwVlsBgPYF&s=10"
                          alt="Tikka Pizza"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-white font-sans tracking-wide block truncate group-hover/item:text-gold transition-colors">
                          Tikka Pizza
                        </span>
                        <span className="text-[9px] text-white/60 uppercase tracking-widest mt-0.5 block">
                          Large 14" Cheese Pull
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end shrink-0 ml-2">
                      <span className="font-mono text-gold text-xs font-bold tabular-nums">
                        Rs. 1400
                      </span>
                      <span className="text-[9px] text-gold uppercase tracking-widest mt-1 font-bold flex items-center gap-1 group-hover/item:text-white">
                        {addedItem === 'pizza-tikka' ? (
                          <Check className="h-3 w-3 text-emerald-400" />
                        ) : (
                          <Plus className="h-3 w-3" />
                        )}
                        {addedItem === 'pizza-tikka' ? 'Added' : 'Add'}
                      </span>
                    </div>
                  </div>

                  {/* Item 3 - Chicken Malai Boti Pizza */}
                  <div
                    onClick={() => handleAddToBasket('pizza-malai-boti', 'Medium 10"')}
                    style={{ borderRadius: '20px' }}
                    className="flex items-center justify-between p-2.5 bg-black/50 hover:bg-gold/10 border border-gold/15 hover:border-gold/35 cursor-pointer transition-all duration-200 group/item"
                  >
                    <div className="flex items-center min-w-0">
                      <div
                        style={{ borderRadius: '16px' }}
                        className="w-12 h-12 bg-black/60 border border-gold/25 overflow-hidden shrink-0 mr-3 shadow-inner"
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6mO-YsWyAFqCIxbTR_B56Bc2TKZtKawuISnlmndPJw&s=10"
                          alt="Malai Boti Pizza"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-white font-sans tracking-wide block truncate group-hover/item:text-gold transition-colors">
                          Malai Boti Pizza
                        </span>
                        <span className="text-[9px] text-white/60 uppercase tracking-widest mt-0.5 block">
                          Medium 10" Rich Cream
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end shrink-0 ml-2">
                      <span className="font-mono text-gold text-xs font-bold tabular-nums">
                        Rs. 1000
                      </span>
                      <span className="text-[9px] text-gold uppercase tracking-widest mt-1 font-bold flex items-center gap-1 group-hover/item:text-white">
                        {addedItem === 'pizza-malai-boti' ? (
                          <Check className="h-3 w-3 text-emerald-400" />
                        ) : (
                          <Plus className="h-3 w-3" />
                        )}
                        {addedItem === 'pizza-malai-boti' ? 'Added' : 'Add'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleExploreMenu}
                className="mt-4 flex items-center justify-center gap-2 text-[10px] tracking-widest uppercase font-bold text-white/60 hover:text-gold transition-colors pt-3 border-t border-white/8 cursor-pointer w-full text-center"
              >
                <Squircle size="xs" variant="dark" className="border-gold/20">
                  <Utensils className="h-3 w-3 text-gold" />
                </Squircle>
                <span>Browse Full Food Menu</span>
              </button>
            </motion.div>

            {/* Card 3: SPECIAL COMBO DEAL */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={handleOrderSpecialCombo}
              className="bg-gradient-to-br from-[#FFD54F] via-[#FFC107] to-[#E5A900] rounded-3xl p-6 text-black flex flex-col justify-between relative overflow-hidden cursor-pointer group shadow-[0_20px_45px_rgba(255,193,7,0.35)] hover:scale-[1.015] active:scale-[0.985] transition-all duration-300 border border-white/40"
            >
              <div className="space-y-1 relative z-10">
                <div className="flex items-center justify-between">
                  <div
                    style={{ borderRadius: '12px' }}
                    className="inline-flex items-center gap-1.5 text-[9px] font-sans font-black uppercase tracking-[0.2em] bg-black text-white px-3 py-1 shadow-md"
                  >
                    <Tag className="h-2.5 w-2.5 text-gold" />
                    <span>Special Deal</span>
                  </div>

                  <span className="font-mono text-xs uppercase font-extrabold tracking-wider bg-black/10 px-2 py-0.5 rounded-lg">
                    {addedItem === 'deal-2' ? '✓ Added' : 'Instant Add'}
                  </span>
                </div>

                <h3 className="font-display text-4xl font-black uppercase leading-[0.95] mt-3 tracking-tight group-hover:text-black/85 transition-colors">
                  PIZZA + BURGER <br />COMBO
                </h3>

                <p className="text-xs font-bold uppercase tracking-wider text-black/80 mt-1">
                  1 Large Pizza + 2 Zinger + 1L Drink
                </p>
              </div>

              <div className="mt-5 flex items-baseline justify-between relative z-10 pt-3 border-t border-black/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-black/70">
                    Combo Price:
                  </span>
                  <span className="text-3xl font-black font-mono tracking-tighter text-black ml-1">
                    Rs. 2200
                  </span>
                </div>

                <Squircle size="sm" variant="dark" className="border-black/30">
                  <ShoppingBag className="h-4 w-4 text-gold" />
                </Squircle>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Gentle bounce scroll down indicator */}
      <motion.div
        className="mx-auto mt-7 flex flex-col items-center gap-1 cursor-pointer select-none"
        onClick={handleExploreMenu}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark font-bold">
          Scroll to Menu
        </span>
        <ChevronDown className="h-4 w-4 text-gold" />
      </motion.div>
    </section>
  );
}
