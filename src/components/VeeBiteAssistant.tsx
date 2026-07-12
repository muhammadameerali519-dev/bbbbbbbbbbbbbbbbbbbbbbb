import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, ChefHat, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYaJA1wzgtlc9OBGWTaqFdKHdbg1mAacC4JsotaplWjEJG-pKqxN_XEw&s=10";

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

export default function VeeBiteAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: "Assalam-o-Alaikum! Welcome to VEE BITE! 🍕 I'm your hospitality guide. How can I assist you with our delicious pizzas and zingers today? Ask me about deals, timing, or click below for instant answers! 😊",
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    { label: '🔥 Best Sellers', text: 'What are your best sellers and popular dishes?' },
    { label: '🍕 Hot Deals', text: 'Show me your money saving combos and deals' },
    { label: '⏰ Timings', text: 'What are your operational timings and delivery details?' },
    { label: '📍 Location', text: 'Where is Vee Bite located?' },
    { label: '💬 Order in Urdu', text: 'Urdu mein btaein order kaise karein?' },
  ];

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend,
          history: messages, // Send session history for contextual chat
        }),
      });

      if (!response.ok) {
        throw new Error('Network error calling Vee Bite assistant.');
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: data.text || 'I am happy to guide you! Please ask me about our menu items.' },
      ]);
    } catch (error) {
      console.error('Error with chatbot:', error);
      // Fallback response if the backend is compiling/starting
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Vee Bite kitchen is currently receiving busy queries! 🍔 To order directly or ask anything, please WhatsApp Haris Bin Zahid directly at 0307 655 3100 or tap the green pulsing WhatsApp button on the bottom right. Eat Good, Feel Good!',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="veebite-ai-assistant-panel"
            className="w-[320px] sm:w-[380px] h-[480px] rounded-3xl bg-[#171512] border border-gold/25 shadow-2xl flex flex-col overflow-hidden mb-4 relative"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#171512] to-[#261E16] p-4 border-b border-gold/15 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-gold/15 border border-gold/35 flex items-center justify-center overflow-hidden text-gold shadow-inner">
                  <img
                    src={logo}
                    alt="Vee Bite Logo"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wider text-white">
                    VEE BITE <span className="text-gold">ASSISTANT</span>
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold">Online Chef</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-cream/50 hover:text-gold transition-colors duration-200 h-8 w-8 rounded-full hover:bg-white/5 flex items-center justify-center"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Chat Body messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0A0A0A]/40 scrollbar-thin">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl p-3.5 text-xs md:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gold text-[#0A0A0A] font-medium rounded-tr-none shadow-md'
                        : 'bg-[#171512] text-cream border border-gold/10 rounded-tl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#171512] text-cream border border-gold/10 rounded-2xl rounded-tl-none p-3.5 text-xs flex items-center gap-2">
                    <div className="flex gap-1.5 items-center">
                      <span className="h-2 w-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                      <span className="h-2 w-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                      <span className="h-2 w-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                    </div>
                    <span className="text-[10px] tracking-wider text-gold-dark font-semibold uppercase">Chef is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies section */}
            <div className="p-2 bg-[#171512] border-t border-gold/10 flex gap-1.5 overflow-x-auto scrollbar-none shrink-0">
              {quickReplies.map((reply) => (
                <button
                  key={reply.label}
                  onClick={() => handleSendMessage(reply.text)}
                  className="shrink-0 font-sans text-[10px] tracking-wider text-gold hover:text-[#0A0A0A] border border-gold/30 hover:bg-gold hover:border-gold rounded-lg px-2.5 py-1.5 transition-all duration-300 font-semibold cursor-pointer"
                >
                  {reply.label}
                </button>
              ))}
            </div>

            {/* Input Form Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-3 bg-[#171512] border-t border-gold/15 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask our Chef anything..."
                className="flex-1 rounded-xl bg-black border border-gold/15 focus:border-gold/50 text-cream text-xs px-4 py-3 focus:outline-none transition-colors"
                maxLength={400}
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="bg-gold disabled:opacity-40 hover:bg-gold-dark text-[#0A0A0A] h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#171512] hover:bg-gold border border-gold hover:text-[#0A0A0A] text-gold h-14 rounded-full px-5 shadow-2xl transition-all duration-300 font-semibold uppercase tracking-widest text-xs cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <MessageSquare className="h-5 w-5 animate-pulse group-hover:rotate-12 transition-transform" />
          <Sparkles className="absolute -top-2 -right-2 h-3.5 w-3.5 text-gold group-hover:text-[#0A0A0A]" />
        </div>
        <span>Ask Chef</span>
      </motion.button>
    </div>
  );
}
