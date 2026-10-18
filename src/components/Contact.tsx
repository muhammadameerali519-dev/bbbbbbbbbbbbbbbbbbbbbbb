import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import Squircle from './ui/Squircle';

export default function Contact() {
  const handleCall = () => {
    window.open('tel:+923076553100');
  };

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/923076553100?text=Hello%20Vee%20Bite!%20I%20have%20a%20question%20regarding%20the%20menu%20or%20locations.');
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-[#0D0E11] px-4 md:px-6 overflow-hidden">
      {/* Decorative Ambient Lighting */}
      <div className="absolute left-1/4 bottom-1/4 w-[450px] h-[450px] bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <Squircle size="xs" variant="gold">
              <MapPin className="h-3 w-3 text-black" />
            </Squircle>
            <span className="font-sans text-[10px] tracking-[0.35em] text-gold uppercase font-bold">
              Visit or Call
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white uppercase">
            GET IN <span className="text-gold">TOUCH</span>
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </div>

        {/* Bento Grid Layout for Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          
          {/* Left Block: Contact Info Bento Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 rounded-3xl luxury-card-3d relative"
          >
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start gap-4">
                <Squircle size="md" variant="dark" className="border-gold/30 shrink-0">
                  <MapPin className="h-5 w-5 text-gold" />
                </Squircle>
                <div>
                  <h4 className="font-display text-lg tracking-wider text-white">Our Location</h4>
                  <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed mt-1">
                    Near Rizwan Book Depot, Main Market, Model Town, Gujranwala, Pakistan.
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <Squircle size="md" variant="dark" className="border-gold/30 shrink-0">
                  <Clock className="h-5 w-5 text-gold" />
                </Squircle>
                <div>
                  <h4 className="font-display text-lg tracking-wider text-white">Operating Hours</h4>
                  <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed mt-1">
                    Daily: 12:00 PM to 2:00 AM (Midnight)
                  </p>
                  <span className="inline-block font-sans text-[9px] text-gold uppercase font-bold tracking-widest mt-1 bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                    Open for late-night cravings!
                  </span>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-4">
                <Squircle size="md" variant="dark" className="border-gold/30 shrink-0">
                  <Phone className="h-5 w-5 text-gold" />
                </Squircle>
                <div>
                  <h4 className="font-display text-lg tracking-wider text-white">Direct Phone Call</h4>
                  <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed mt-1 font-mono">
                    +92 307 655 3100
                  </p>
                </div>
              </div>
            </div>

            {/* Instant Action 3D Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-10 pt-6 border-t border-white/8">
              <button
                onClick={handleCall}
                style={{ borderRadius: '16px' }}
                className="luxury-button-dark flex items-center justify-center gap-2 font-sans text-[11px] uppercase tracking-wider py-3.5 font-bold cursor-pointer"
              >
                <Phone className="h-3.5 w-3.5 text-gold" />
                <span>Call Kitchen</span>
              </button>

              <button
                onClick={handleWhatsAppChat}
                style={{ borderRadius: '16px' }}
                className="luxury-button-gold flex items-center justify-center gap-2 font-sans text-[11px] uppercase tracking-wider py-3.5 font-bold cursor-pointer"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </motion.div>

          {/* Right Block: Embedded Map Bento Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl overflow-hidden luxury-card-3d relative min-h-[420px]"
          >
            <div className="absolute inset-0 w-full h-full">
              <iframe
                title="Vee Bite Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.291763784196!2d74.1956557!3d32.1693452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2982d5555555%3A0x2db4df4df4e286bb!2sModel%20Town%2C%20Gujranwala%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714545232958!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: '420px',
                  filter: 'invert(92%) hue-rotate(180deg) brightness(95%) contrast(90%)',
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
