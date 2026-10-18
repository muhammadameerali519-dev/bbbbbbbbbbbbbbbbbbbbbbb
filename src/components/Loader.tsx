import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYaJA1wzgtlc9OBGWTaqFdKHdbg1mAacC4JsotaplWjEJG-pKqxN_XEw&s=10";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 400);
          }, 250);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 8;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loader-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] text-[#F3E9D2]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo Animation */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mb-6">
              {/* Outer Golden Glow */}
              <div
                style={{ borderRadius: '28%' }}
                className="absolute -inset-2 bg-gradient-to-r from-gold to-gold-dark opacity-30 blur-2xl animate-pulse"
              />

              {/* Apple-style Squircle Logo Frame */}
              <div
                style={{ borderRadius: '24%' }}
                className="relative flex h-28 w-28 items-center justify-center border-2 border-gold/40 border-t-white/40 bg-[#171512] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.25)]"
              >
                <img
                  src={logo}
                  alt="Vee Bite Logo"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Brand Title */}
            <h1 className="font-display text-5xl tracking-[0.25em] text-white">
              VEE <span className="text-gold">BITE</span>
            </h1>
            <p className="font-serif mt-2 text-sm italic tracking-widest text-gold-dark">
              Eat Good, Feel Good
            </p>
          </motion.div>

          {/* Luxury Progress Bar */}
          <div className="mt-12 w-64 md:w-80">
            <div className="h-[2.5px] w-full bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-dark via-gold to-[#FFE082]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="mt-3 flex justify-between font-mono text-[10px] tracking-widest text-gold/60 uppercase tabular-nums">
              <span>Authentic Pakistani Taste</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
