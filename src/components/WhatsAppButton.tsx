import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    const whatsappUrl = 'https://wa.me/923076553100?text=Hello%20Vee%20Bite!%20I%20visited%20your%20website%20and%20want%20to%20order%20some%20fresh%20food.';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <aside aria-label="WhatsApp quick order" className="fixed bottom-6 right-6 z-40 flex items-center justify-center">
      {/* Outer ambient glow */}
      <div
        style={{ borderRadius: '26%' }}
        className="absolute h-15 w-15 bg-emerald-500/25 blur-lg pointer-events-none animate-pulse"
      />

      {/* Apple-style Luxury Squircle WhatsApp Button */}
      <button
        onClick={handleClick}
        style={{ borderRadius: '24%' }}
        className="relative flex h-14 w-14 items-center justify-center bg-gradient-to-b from-[#34D399] via-[#10B981] to-[#047857] text-white shadow-[0_12px_28px_rgba(16,185,129,0.4),inset_0_1px_1px_rgba(255,255,255,0.45)] border border-emerald-400/40 border-t-white/60 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
        aria-label="Direct WhatsApp Order"
        title="Direct WhatsApp Order"
      >
        <MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6" />

        {/* Delicate tooltip for desktop on hover */}
        <span
          style={{ borderRadius: '12px' }}
          className="absolute right-16 px-3 py-1.5 bg-[#171512]/95 backdrop-blur-md border border-gold/30 text-gold text-[10px] font-sans font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg"
        >
          Chat & Order
        </span>
      </button>
    </aside>
  );
}
