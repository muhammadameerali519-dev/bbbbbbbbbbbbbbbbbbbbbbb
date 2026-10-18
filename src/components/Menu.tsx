import { useState, useEffect, useRef } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../types';
import { ShoppingBag, Check, Flame, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Squircle from './ui/Squircle';

export default function Menu() {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<{ [itemId: string]: string }>({});
  const [activeCategory, setActiveCategory] = useState('regular-pizza');
  const [addedItemMap, setAddedItemMap] = useState<{ [itemId: string]: boolean }>({});
  const observer = useRef<IntersectionObserver | null>(null);

  // Initialize selected sizes for multiple-priced items
  const getSelectedPriceAndSize = (item: MenuItem) => {
    if (typeof item.price === 'number') {
      return { price: item.price, sizeLabel: '' };
    }
    const sizes = Object.keys(item.price);
    const selectedSize = selectedSizes[item.id] || sizes[0];
    return {
      price: item.price[selectedSize],
      sizeLabel: selectedSize,
    };
  };

  const handleSizeChange = (itemId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: size }));
  };

  const handleAddItem = (item: MenuItem, price: number, sizeLabel?: string) => {
    addToCart(item, 'menu', price, sizeLabel);
    setAddedItemMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  // Smooth scroll to target category section
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(`menu-category-${categoryId}`);
    if (element) {
      const offset = 140; // sticky header + horizontal nav offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Monitor scroll position to update active category
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        const topEntry = visibleEntries.reduce((prev, current) => {
          return Math.abs(current.boundingClientRect.top - 140) < Math.abs(prev.boundingClientRect.top - 140)
            ? current
            : prev;
        });

        const categoryId = topEntry.target.id.replace('menu-category-', '');
        setActiveCategory(categoryId);
      }
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-10% 0px -70% 0px',
      threshold: [0, 0.1, 0.2, 0.5, 1.0],
    });

    MENU_CATEGORIES.forEach((category) => {
      const el = document.getElementById(`menu-category-${category.id}`);
      if (el && observer.current) {
        observer.current.observe(el);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="menu" className="relative w-full py-20 bg-[#0E0D0C] px-4 md:px-6">
      {/* Decorative Ambient Glow */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-gold/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gold-dark/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <Squircle size="xs" variant="gold">
              <Sparkles className="h-3 w-3 text-black" />
            </Squircle>
            <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-bold">
              Culinary Selections
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white uppercase">
            EXPLORE THE <span className="text-gold">MENU</span>
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </div>

        {/* Apple-style Segmented Sticky Horizontal Categories Bar */}
        <div className="sticky top-[72px] md:top-[80px] z-30 -mx-4 px-4 py-3 bg-[#0E0D0C]/90 backdrop-blur-xl border-y border-gold/15 overflow-x-auto flex scrollbar-none mb-12 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <div className="mx-auto flex gap-2 max-w-7xl w-full justify-start md:justify-center p-1 bg-[#171512]/90 rounded-2xl border border-white/5">
            {MENU_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  style={{ borderRadius: '14px' }}
                  className={`font-sans text-[10px] md:text-xs uppercase tracking-wider px-4 py-2 transition-all duration-200 font-bold cursor-pointer shrink-0 whitespace-nowrap ${
                    isActive
                      ? 'luxury-button-gold shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stacked Menu Grid spanning full width */}
        <div className="w-full space-y-20">
          {MENU_CATEGORIES.map((category) => {
            const categoryItems = MENU_ITEMS.filter((item) => item.category === category.id);

            if (categoryItems.length === 0) return null;

            return (
              <div
                key={category.id}
                id={`menu-category-${category.id}`}
                className="scroll-mt-36 border-b border-white/8 pb-16 last:border-0 last:pb-0"
              >
                {/* Category Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="font-display text-2xl md:text-3xl tracking-wider text-white uppercase">
                    {category.name}
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/30 via-gold/10 to-transparent" />
                  <span className="font-mono text-xs text-gold font-bold bg-[#171512] border border-gold/20 px-3.5 py-1 rounded-xl uppercase tracking-wider tabular-nums">
                    {categoryItems.length} {categoryItems.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                {/* 3D Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryItems.map((item) => {
                    const isMultiPrice = typeof item.price !== 'number';
                    const { price, sizeLabel } = getSelectedPriceAndSize(item);
                    const isAdded = addedItemMap[item.id];

                    return (
                      <div
                        key={item.id}
                        className="group relative flex flex-col rounded-3xl luxury-card-3d overflow-hidden h-full"
                      >
                        {/* Card Image Wrapper with Graceful Fallback */}
                        {item.image ? (
                          <div
                            className={`relative h-56 w-full overflow-hidden ${
                              ['burger-double-tender', 'burger-chicken'].includes(item.id)
                                ? 'bg-white/95 p-4'
                                : 'bg-black/50'
                            }`}
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                              className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                                ['burger-double-tender', 'burger-chicken'].includes(item.id)
                                  ? 'object-contain'
                                  : 'object-cover filter brightness-95'
                              }`}
                            />

                            {/* Hidden fallback container activated only on error */}
                            <div className="hidden h-full w-full flex-col items-center justify-center bg-[#171512] text-gold/60 p-4 text-center">
                              <Squircle size="md" variant="dark">
                                <ShoppingBag className="h-5 w-5 text-gold" />
                              </Squircle>
                              <span className="text-xs font-bold text-white mt-2">{item.name}</span>
                            </div>

                            {!['burger-double-tender', 'burger-chicken'].includes(item.id) && (
                              <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent pointer-events-none" />
                            )}

                            {/* Apple-style Squircle Badge */}
                            {item.badge && (
                              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-gradient-to-b from-red-600 to-red-800 text-white text-[9px] font-sans uppercase font-black tracking-widest shadow-lg border-t border-white/30">
                                <Flame className="h-3 w-3 animate-pulse text-amber-300" />
                                <span>{item.badge}</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="px-6 pt-6 flex items-center justify-between">
                            {item.badge ? (
                              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-gradient-to-b from-red-600 to-red-800 text-white text-[9px] font-sans uppercase font-black tracking-widest shadow-lg border-t border-white/30">
                                <Flame className="h-3 w-3 animate-pulse text-amber-300" />
                                <span>{item.badge}</span>
                              </div>
                            ) : (
                              <span className="text-[10px] uppercase font-sans tracking-widest text-gold font-bold bg-gold/10 px-2.5 py-1 rounded-xl border border-gold/20">
                                Premium Special
                              </span>
                            )}
                          </div>
                        )}

                        {/* Bento Content Layout */}
                        <div className={`flex-1 flex flex-col p-6 justify-between ${item.image ? 'pt-3' : 'pt-4'}`}>
                          <div>
                            <h3 className="font-display text-2xl tracking-wider text-white group-hover:text-gold transition-colors duration-200">
                              {item.name}
                            </h3>

                            {item.description && (
                              <p className="font-sans text-xs text-white/60 leading-relaxed mt-1.5 line-clamp-2">
                                {item.description}
                              </p>
                            )}

                            {/* Multi-size Segmented Selector */}
                            {isMultiPrice && (
                              <div className="mt-4 mb-2">
                                <span className="font-sans text-[9px] tracking-widest text-gold uppercase font-bold block mb-2">
                                  {item.category === 'cold-drinks' ? 'Bottle Size:' : 'Select Size:'}
                                </span>
                                <div className="flex gap-1.5 p-1 bg-black/40 rounded-xl border border-white/5">
                                  {Object.keys(item.price as { [key: string]: number }).map((size) => {
                                    const isSelected = sizeLabel === size;
                                    return (
                                      <button
                                        key={size}
                                        onClick={() => handleSizeChange(item.id, size)}
                                        style={{ borderRadius: '10px' }}
                                        className={`flex-1 flex items-center justify-center gap-1 font-sans text-[9px] tracking-wider uppercase py-1.5 transition-all cursor-pointer ${
                                          isSelected
                                            ? 'bg-gradient-to-b from-gold via-gold to-amber-600 text-black font-extrabold shadow-sm'
                                            : 'text-white/50 hover:text-white hover:bg-white/5'
                                        }`}
                                      >
                                        {isSelected && <Check className="h-2.5 w-2.5 text-black" />}
                                        <span>{item.category === 'cold-drinks' ? size : size.split(' ')[0]}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Bottom Row: Price & 3D Add Button */}
                          <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between">
                            <div className="flex flex-col">
                              <span className="font-sans text-[8px] tracking-widest text-gold-dark uppercase font-bold">
                                Price
                              </span>
                              <span className="font-mono text-xl font-black text-gold tracking-tight mt-0.5 tabular-nums">
                                Rs. {price}
                              </span>
                            </div>

                            <button
                              onClick={() => handleAddItem(item, price, sizeLabel)}
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
                                  <span>Add To Basket</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
