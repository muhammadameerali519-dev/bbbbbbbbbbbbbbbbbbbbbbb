import { motion } from 'motion/react';
import { Award, Heart, ShieldCheck, Sparkles, Quote } from 'lucide-react';
import gourmetPizza from '../assets/images/gourmet_pizza_1783192643518.jpg';
import Squircle from './ui/Squircle';

export default function OurStory() {
  const stats = [
    { icon: Award, label: 'Founded Year', value: '2023', description: 'Established with high ambitions' },
    { icon: Heart, label: 'Customer Reviews', value: '5-Star Quality', description: 'Loved by Gujranwala families' },
    { icon: ShieldCheck, label: 'Standards', value: '100% Halal & Fresh', description: 'Daily sourced premium ingredients' },
  ];

  return (
    <section
      id="our-story"
      className="relative w-full py-24 bg-[#0B0A09] border-t border-b border-gold/15 overflow-hidden px-4 md:px-6"
    >
      {/* Subtle brand watermark background */}
      <div className="absolute right-0 bottom-0 opacity-[0.02] translate-x-1/4 translate-y-1/4 pointer-events-none select-none">
        <span className="font-display text-[260px] text-gold font-bold leading-none">VB</span>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <Squircle size="xs" variant="gold">
              <Sparkles className="h-3 w-3 text-black" />
            </Squircle>
            <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-bold">
              Our Heritage
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white uppercase">
            THE STORY OF <span className="text-gold">VEE BITE</span>
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </div>

        {/* Narrative Container with 3D Depth */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="w-full luxury-card-3d rounded-3xl p-7 md:p-12 flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background Pizza Artistry in corner */}
            <div className="absolute right-0 bottom-0 w-64 md:w-88 h-full pointer-events-none select-none z-0 overflow-hidden opacity-30 md:opacity-40">
              <img
                src={gourmetPizza}
                alt="Gourmet Pizza"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
                className="w-full h-full object-cover object-center filter contrast-[1.15] brightness-[0.7] saturate-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#141210]/70 to-[#141210]" />
            </div>

            {/* Subtle Quote icon */}
            <Quote className="absolute -top-4 -left-2 h-16 w-16 text-gold/10 pointer-events-none z-0" />

            <div className="relative z-10 space-y-6 max-w-2xl">
              <div className="flex items-center gap-2">
                <Squircle size="xs" variant="gold">
                  <Sparkles className="h-3 w-3 text-black" />
                </Squircle>
                <span className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold">
                  Uncompromising Quality
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl italic font-semibold text-gold leading-snug">
                "Built through dedication, hard work, and struggle to bring premium taste to Gujranwala."
              </h3>

              <div className="space-y-4 font-sans text-white/80 leading-relaxed text-sm md:text-base tracking-wide">
                <p>
                  Vee Bite was founded in 2023 by <span className="text-gold font-semibold">Haris Bin Zahid</span>. Built through sheer dedication, relentless hard work, and the struggle to turn an ambitious vision into reality, the mission was simple: serve restaurant-grade fast food infused with an authentic Pakistani punch.
                </p>
                <p>
                  We believe that dining is an emotional journey. That is why every dual cheese-stuffed crust pizza, hand-battered crunchy zinger burger, and toasted wrap is prepared fresh to order with pure passion.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/8 flex items-center gap-4">
              <div className="h-0.5 w-10 bg-gold/40" />
              <p className="font-sans text-[10px] uppercase tracking-widest text-white/50 font-bold">
                ESTABLISHED IN GUJRANWALA, PAKISTAN
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3D Bento Stats Row with Apple Squircle Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="luxury-card-3d rounded-2xl p-6 flex items-center gap-4 group"
              >
                <Squircle size="lg" variant="dark" className="border-gold/30 shrink-0 group-hover:scale-105">
                  <Icon className="h-6 w-6 text-gold" />
                </Squircle>
                <div>
                  <span className="font-display text-2xl text-white tracking-wider uppercase block leading-none tabular-nums">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] text-gold uppercase tracking-widest mt-1.5 font-bold block">
                    {stat.label}
                  </span>
                  <span className="font-sans text-xs text-white/50 mt-0.5 block">
                    {stat.description}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
