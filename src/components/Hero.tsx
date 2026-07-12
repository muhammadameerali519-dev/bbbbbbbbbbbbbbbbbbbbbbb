import { motion } from 'motion/react';
import { ShoppingBag, Sparkles, ChevronDown, Flame, Utensils, Tag, Heart, MapPin } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppRedirect = () => {
    const whatsappUrl = 'https://wa.me/923091830660?text=Hello%20Vee%20Bite!%20I%20visited%20your%20website%2520and%2520want%2520to%2520order%2520your%2520delicious%2520fast%2520food!';
    window.open(whatsappUrl, '_blank');
  };

  const handleExploreMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderDirect = (itemName: string, price: number) => {
    const textMessage = `Hello Vee Bite! I want to order "${itemName}" from the Trending menu - Rs. ${price}. Please confirm my order!`;
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/923091830660?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleOrderSpecialCombo = () => {
    const textMessage = `Hello Vee Bite! I want to order the "Pizza + Burger Special Combo": 1 Large Pizza + 2 Zinger + 1L Drink for Rs. 2000. Please prepare it!`;
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/923091830660?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#0A0A0A] pt-28 pb-12 px-4 md:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Decorative Gold Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gold-dark/5 blur-[150px] pointer-events-none"></div>

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              animation: `float-particle ${Math.random() * 8 + 8}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.15; }
          50% { transform: translateY(-30px) translateX(15px) scale(1.2); opacity: 0.7; }
        }
      `}</style>

      {/* Bento Grid Wrapper */}
      <div className="mx-auto max-w-7xl w-full z-10 flex-1 flex flex-col justify-center gap-4">
        
        {/* Main 12-Column Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 gap-4 w-full">
          
          {/* Card 1: HERO Brand Block (Spans 8 columns, 4 rows on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 lg:col-span-8 lg:row-span-4 bg-[#141210] rounded-3xl border border-gold/20 relative overflow-hidden flex flex-col justify-end p-8 md:p-10 group"
          >
            {/* Dark elegant overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            
            {/* Subtle background image watermark */}
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay opacity-30 transition-transform duration-1000 group-hover:scale-[1.02]"
              style={{ filter: 'brightness(60%) contrast(110%)' }}
            ></div>

            {/* Giant year indicator top right */}
            <div className="absolute top-0 right-0 p-8 z-20 text-right select-none pointer-events-none">
              <span className="font-display text-5xl md:text-7xl font-black italic text-gold opacity-[0.12] tracking-widest">EST. 2023</span>
            </div>

            {/* Sparkles micro-badge */}
            <div className="relative z-20 self-start mb-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-gold font-sans text-[10px] uppercase tracking-[0.2em] font-bold">
                <Sparkles className="h-3 w-3 animate-pulse" />
                <span>Gujranwala's Finest Fast Food</span>
              </div>
            </div>

            {/* Brand Typography */}
            <div className="relative z-20 space-y-3">
              <h1 className="font-display text-5xl md:text-8xl font-black leading-[0.85] tracking-tight text-white uppercase">
                AUTHENTIC <br />
                PAKISTANI <span className="text-gold">FAST FOOD</span>
              </h1>
              
              <p className="font-sans text-sm md:text-lg max-w-lg font-light text-cream/80 leading-relaxed">
                Experience the premium, cheese-stuffed pizzas and mighty crispy zingers of Vee Bite. 
                Founded by <span className="text-gold font-medium">Haris Bin Zahid</span> with a dream of quality and passion.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="flex items-center gap-2 rounded-xl bg-gold hover:bg-gold-dark text-[#0A0A0A] font-sans text-xs uppercase tracking-widest px-6 py-3.5 transition-all duration-300 font-bold shadow-[0_0_20px_rgba(255,193,7,0.25)] hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Order via WhatsApp</span>
                </button>

                <button
                  onClick={handleExploreMenu}
                  className="flex items-center gap-2 rounded-xl border border-gold/40 hover:border-gold hover:bg-gold/5 text-white font-sans text-xs uppercase tracking-widest px-6 py-3.5 transition-all duration-300 font-semibold cursor-pointer"
                >
                  <span>Explore Menu</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: TRENDING NOW (Spans 4 columns, 3 rows on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 lg:col-span-4 lg:row-span-3 bg-[#171512] rounded-3xl border border-gold/30 p-6 flex flex-col justify-between overflow-hidden relative group"
          >
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              {/* Header Title */}
              <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold flex items-center gap-2 mb-6 border-b border-white/5 pb-3">
                <span className="w-2.5 h-2.5 bg-red rounded-full animate-ping"></span>
                <span>Trending Now</span>
              </h3>

              {/* List of high-contrast items */}
              <div className="space-y-3">
                
                {/* Item 1 */}
                <div 
                  onClick={() => handleOrderDirect('Mighty Zinger Burger', 600)}
                  className="flex items-center justify-between p-3 bg-black/45 hover:bg-gold/5 rounded-2xl border-l-4 border-gold cursor-pointer transition-all hover:translate-x-1 border border-transparent hover:border-gold/20"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white font-sans tracking-wide">Mighty Zinger Burger</span>
                    <span className="text-[10px] text-cream/50 uppercase tracking-widest mt-0.5">Double Crispy Stack</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-gold text-xs font-bold bg-gold/10 px-2.5 py-1 rounded-md border border-gold/25">Rs. 600</span>
                    <span className="text-[9px] text-gold uppercase tracking-widest mt-1 font-bold">Order</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div 
                  onClick={() => handleOrderDirect('Chicken Tikka Pizza (Large 14")', 1400)}
                  className="flex items-center justify-between p-3 bg-black/45 hover:bg-gold/5 rounded-2xl border-l-4 border-red cursor-pointer transition-all hover:translate-x-1 border border-transparent hover:border-gold/20"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white font-sans tracking-wide">Chicken Tikka Pizza</span>
                    <span className="text-[10px] text-cream/50 uppercase tracking-widest mt-0.5">Large 14" Cheese Pull</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-gold text-xs font-bold bg-gold/10 px-2.5 py-1 rounded-md border border-gold/25">Rs. 1400</span>
                    <span className="text-[9px] text-gold uppercase tracking-widest mt-1 font-bold">Order</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div 
                  onClick={() => handleOrderDirect('Chicken Malai Boti Pizza (Medium 10")', 1000)}
                  className="flex items-center justify-between p-3 bg-black/45 hover:bg-gold/5 rounded-2xl border-l-4 border-gold cursor-pointer transition-all hover:translate-x-1 border border-transparent hover:border-gold/20"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white font-sans tracking-wide">Chicken Malai Boti Pizza</span>
                    <span className="text-[10px] text-cream/50 uppercase tracking-widest mt-0.5">Creamy Pakistani Special</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-gold text-xs font-bold bg-gold/10 px-2.5 py-1 rounded-md border border-gold/25">Rs. 1000</span>
                    <span className="text-[9px] text-gold uppercase tracking-widest mt-1 font-bold">Order</span>
                  </div>
                </div>

              </div>
            </div>

            <button 
              onClick={handleExploreMenu}
              className="mt-6 flex items-center justify-center gap-2 text-[10px] tracking-widest uppercase font-bold text-cream/60 hover:text-gold transition-colors pt-3 border-t border-white/5 cursor-pointer w-full text-center"
            >
              <Utensils className="h-3 w-3 text-gold" />
              <span>Browse Full Food Menu</span>
            </button>
          </motion.div>

          {/* Card 3: SPECIAL COMBO DEAL (Solid Gold Color, spans 4 columns, 3 rows on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={handleOrderSpecialCombo}
            className="col-span-1 lg:col-span-4 lg:row-span-3 bg-[#FFC107] rounded-3xl p-6 text-black flex flex-col justify-between relative overflow-hidden cursor-pointer group shadow-2xl hover:scale-[1.01] transition-transform duration-300"
          >
            {/* Pattern/Watermark */}
            <div className="absolute -right-4 -top-4 w-28 h-28 bg-black/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-1 relative z-10">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-sans font-black uppercase tracking-[0.2em] bg-black text-white px-3 py-1 rounded-md">
                <Tag className="h-2.5 w-2.5" />
                <span>Special Deal</span>
              </span>
              
              <h3 className="font-display text-4xl md:text-5xl font-black uppercase leading-[0.95] mt-4 tracking-tight group-hover:text-black/85 transition-colors">
                PIZZA + BURGER <br />COMBO
              </h3>
              
              <p className="text-xs font-semibold uppercase tracking-wider text-black/70 mt-1">
                1 Large Pizza + 2 Zinger + 1L Drink
              </p>
            </div>

            <div className="mt-8 flex items-baseline gap-1 relative z-10">
              <span className="text-sm font-bold uppercase tracking-widest text-black/60">Special Price:</span>
              <span className="text-3xl md:text-5xl font-black font-mono tracking-tighter text-black ml-1">Rs. 2000</span>
            </div>

            {/* Dashed stub visual and watermark banner */}
            <div className="absolute bottom-0 right-0 w-24 h-24 flex items-center justify-center border-t border-l border-dashed border-black/20 rounded-tl-3xl bg-black/[0.02]">
              <span className="rotate-45 font-sans font-black text-[10px] tracking-widest uppercase opacity-45 text-black">
                Save BIG
              </span>
            </div>
          </motion.div>

          {/* Card 4: OUR STORY QUOTE (Spans 4 columns, 2 rows on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => handleScrollToSection('our-story')}
            className="col-span-1 lg:col-span-4 lg:row-span-2 bg-[#171512] rounded-3xl border border-gold/20 p-6 flex flex-col justify-between cursor-pointer group hover:border-gold/40 transition-colors"
          >
            <div className="space-y-2">
              <h4 className="font-sans text-xs font-bold text-gold uppercase tracking-[0.2em] flex items-center gap-1.5">
                <Heart className="h-3.5 w-3.5 text-gold" />
                <span>Our Heritage</span>
              </h4>
              <p className="font-serif text-[13px] md:text-sm italic text-cream/70 leading-relaxed">
                "Vee Bite was built through dedication and struggle to serve authentic taste. Every single meal is prepared with extreme passion."
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2 border-t border-white/5 pt-3">
              <div className="w-5 h-px bg-gold/50"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-cream/40 group-hover:text-gold transition-colors">
                Haris Bin Zahid, Founder • Read More
              </span>
            </div>
          </motion.div>

          {/* Card 5: QUICK FIND US / CONTACT INFO (Spans 4 columns, 2 rows on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => handleScrollToSection('contact')}
            className="col-span-1 lg:col-span-4 lg:row-span-2 bg-[#141210] rounded-3xl border border-gold/20 p-6 flex flex-col justify-between cursor-pointer group hover:border-gold/40 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Find Us</span>
                </h4>
                <p className="font-sans text-[11px] text-cream/70 leading-relaxed mt-2">
                  Near Rizwan Book Depot,<br />
                  Main Market, Model Town,<br />
                  Gujranwala, Pakistan
                </p>
              </div>

              {/* Status active beacon */}
              <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md shrink-0">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-[8px] font-black tracking-widest text-emerald-400 uppercase">Open Now</span>
              </div>
            </div>

            {/* Quick Contact Numbers / Timing */}
            <div className="flex items-center justify-between text-[11px] font-mono pt-3 border-t border-white/5 text-cream/40 group-hover:text-gold transition-colors">
              <span className="flex items-center gap-1">
                WhatsApp: 0309 183 0660
              </span>
              <span className="text-[9px] uppercase tracking-wider font-bold">Directions</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bounce scroll down button */}
      <motion.div
        className="mx-auto mt-8 flex flex-col items-center gap-1 cursor-pointer"
        onClick={handleExploreMenu}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold-dark font-semibold">Scroll to Details</span>
        <ChevronDown className="h-4 w-4 text-gold" />
      </motion.div>
    </section>
  );
}
