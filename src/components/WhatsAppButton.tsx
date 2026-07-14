import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-40"
      id="floating-whatsapp-container"
    >
      <a
        href={PERSONAL_INFO.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="relative bg-emerald-600 hover:bg-emerald-500 text-white p-4 sm:p-4.5 rounded-full flex items-center justify-center border border-emerald-500 shadow-2xl transition-all duration-300 group whatsapp-glow cursor-pointer"
        title="Falar no WhatsApp com Alessandro Freccia"
      >
        {/* Hover label tooltip */}
        <span className="absolute right-14 glass-dark border border-white/10 text-slate-100 font-bold text-xs px-3.5 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          Falar com Alessandro
        </span>
        
        {/* Pulsing visual circles */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping group-hover:bg-emerald-500/40" />

        <Phone className="w-6 h-6 text-emerald-100 fill-emerald-100 group-hover:scale-110 transition-transform" />
      </a>
    </motion.div>
  );
}
