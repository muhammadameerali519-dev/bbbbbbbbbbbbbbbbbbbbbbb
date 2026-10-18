import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Squircle from './ui/Squircle';

export default function CartDrawer() {
  const {
    cartItems,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useCart();

  const [distance, setDistance] = useState<number | string>(2);
  const [deliveryAddress, setDeliveryAddress] = useState('');

  // Calculate delivery charge: Rs. 60 base up to 2km, Rs. 30 per km afterwards
  const distanceNum = Number(distance) || 0;
  const deliveryCharge = distanceNum > 0
    ? (distanceNum <= 2 ? 60 : 60 + Math.ceil((distanceNum - 2) * 30))
    : 0;

  const totalWithDelivery = cartTotal + deliveryCharge;

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let message = `*VEE BITE ORDER DETAILS*\n`;
    message += `------------------------------------\n`;

    cartItems.forEach((item, index) => {
      const sizeStr = item.sizeLabel ? ` (${item.sizeLabel})` : '';
      message += `*${index + 1}. ${item.name}${sizeStr}*\n`;
      message += `   Qty: ${item.quantity} x Rs. ${item.price} = *Rs. ${item.quantity * item.price}*\n`;
    });

    message += `------------------------------------\n`;
    message += `*Subtotal:* Rs. ${cartTotal}\n`;
    message += `*Delivery Distance:* ${distanceNum} km\n`;
    message += `*Delivery Charges:* Rs. ${deliveryCharge}\n`;

    if (deliveryAddress.trim()) {
      message += `*Delivery Address:* ${deliveryAddress.trim()}\n`;
    }

    message += `------------------------------------\n`;
    message += `*Total Bill:* *Rs. ${totalWithDelivery}*\n\n`;
    message += `Please confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923076553100?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md bg-[#12110F] border-l border-gold/20 shadow-[0_0_50px_rgba(0,0,0,0.9)] z-50 flex flex-col h-full"
          >
            {/* Header */}
            <div className="p-6 border-b border-gold/15 flex items-center justify-between bg-[#171512]/90">
              <div className="flex items-center gap-3">
                <Squircle size="sm" variant="gold">
                  <ShoppingBag className="h-4 w-4 text-black" />
                </Squircle>
                <div>
                  <h3 className="font-display text-xl text-white tracking-wider uppercase">
                    Your Basket
                  </h3>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-gold-dark font-bold block">
                    {cartItems.length} {cartItems.length === 1 ? 'variety' : 'varieties'} selected
                  </span>
                </div>
              </div>

              <Squircle
                size="sm"
                variant="dark"
                onClick={() => setIsOpen(false)}
                title="Close Basket"
                className="cursor-pointer border-white/10 hover:border-gold/30"
              >
                <X className="h-4 w-4 text-white" />
              </Squircle>
            </div>

            {/* Cart Items Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <Squircle size="xl" variant="dark" className="border-gold/20 mb-4">
                    <ShoppingBag className="h-8 w-8 text-gold/40" />
                  </Squircle>
                  <h4 className="font-display text-2xl text-white tracking-wide">
                    Basket is Empty
                  </h4>
                  <p className="font-sans text-xs text-white/50 max-w-[240px] mt-2 leading-relaxed">
                    Add our freshly baked pizzas, crispy zingers, or money-saving deals to get started!
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    style={{ borderRadius: '14px' }}
                    className="luxury-button-gold mt-6 px-5 py-2.5 font-sans text-[10px] uppercase tracking-widest font-bold cursor-pointer"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    style={{ borderRadius: '20px' }}
                    className="flex gap-4 p-4 bg-[#1A1714] border border-gold/15 hover:border-gold/30 transition-all shadow-md"
                  >
                    {/* Item Image or Squircle Placeholder */}
                    <div
                      style={{ borderRadius: '16px' }}
                      className="h-16 w-16 bg-black/50 border border-gold/20 overflow-hidden shrink-0 flex items-center justify-center"
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <ShoppingBag className="h-6 w-6 text-gold/50" />
                      )}
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-sans text-xs font-bold text-white truncate uppercase tracking-wider">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-white/30 hover:text-red transition-colors p-1 cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        {item.sizeLabel && (
                          <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-gold/15 text-gold font-sans text-[9px] font-bold uppercase tracking-wider">
                            {item.sizeLabel}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                        {/* Apple Squircle Quantity Controls */}
                        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                            title="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="font-mono text-xs font-bold text-white px-2 min-w-[20px] text-center tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                            title="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-mono text-sm font-black text-gold tabular-nums">
                          Rs. {item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gold/15 bg-[#171512] space-y-4">
                {/* Distance & Address Selection */}
                <div
                  style={{ borderRadius: '20px' }}
                  className="p-4 bg-black/45 border border-gold/15 space-y-3.5 shadow-inner"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gold">
                      <Squircle size="xs" variant="gold">
                        <MapPin className="h-3 w-3 text-black" />
                      </Squircle>
                      <span className="font-sans text-xs font-bold uppercase tracking-wider">
                        Delivery Fare Calculator
                      </span>
                    </div>
                    <span className="font-sans text-[8px] text-white/50 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      Vee Bite Express
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="font-sans text-[9px] text-white/70 uppercase tracking-widest font-bold">
                        Delivery Distance (KM)
                      </label>
                      <span className="font-mono text-xs font-bold text-gold tabular-nums">
                        {distanceNum} km
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="0.5"
                        max="20"
                        step="0.5"
                        value={distance}
                        onChange={(e) => setDistance(parseFloat(e.target.value))}
                        className="flex-1 accent-gold h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex items-center gap-1 bg-black/60 border border-white/10 px-2 py-1 rounded-lg w-[76px] justify-center">
                        <input
                          type="number"
                          min="0.1"
                          max="100"
                          step="0.1"
                          value={distance}
                          onChange={(e) => {
                            const val = e.target.value;
                            setDistance(val === '' ? '' : parseFloat(val));
                          }}
                          className="w-10 bg-transparent text-white font-mono text-[11px] font-bold text-center focus:outline-none"
                        />
                        <span className="font-sans text-[8px] text-white/40 font-bold uppercase">KM</span>
                      </div>
                    </div>
                    <p className="font-sans text-[8px] text-white/40 italic">
                      Base fare Rs. 60 (up to 2 km) + Rs. 30 per additional km
                    </p>
                  </div>

                  <div className="h-[1px] w-full bg-white/5" />

                  <div className="space-y-1.5">
                    <label className="block font-sans text-[9px] text-white/70 uppercase tracking-widest font-bold">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Street, House/Flat Number, Block, Phase"
                      className="w-full bg-[#12110F]/90 border border-white/10 rounded-xl px-3 py-2 font-sans text-xs text-white placeholder-white/20 focus:outline-none focus:border-gold/40 transition-all"
                    />
                  </div>
                </div>

                {/* Subtotals & Grand Total */}
                <div className="space-y-2">
                  <div className="flex justify-between font-sans text-xs text-white/70">
                    <span>Subtotal</span>
                    <span className="font-mono tabular-nums">Rs. {cartTotal}</span>
                  </div>
                  <div className="flex justify-between font-sans text-xs text-white/70">
                    <span>Delivery Fee ({distanceNum} km)</span>
                    <span className="font-mono text-gold tabular-nums">Rs. {deliveryCharge}</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/5 my-1" />
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-sans text-[9px] text-gold-dark uppercase font-bold tracking-widest block">
                        Total Payable
                      </span>
                      <span className="font-display text-2xl text-gold font-black tabular-nums">
                        Rs. {totalWithDelivery}
                      </span>
                    </div>
                    <button
                      onClick={clearCart}
                      className="text-[9px] uppercase font-sans tracking-wider text-white/40 hover:text-red transition-all cursor-pointer border border-white/5 hover:border-red/20 px-2.5 py-1.5 rounded-lg"
                    >
                      Clear Basket
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  style={{ borderRadius: '16px' }}
                  className="w-full luxury-button-gold flex items-center justify-center gap-2.5 py-3.5 font-sans text-xs uppercase tracking-widest font-bold cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send Order via WhatsApp</span>
                </button>

                <p className="font-sans text-[9px] text-center text-white/40 leading-relaxed">
                  Your order items and estimated distance fare will be dispatched to our kitchen via WhatsApp for swift confirmation.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
