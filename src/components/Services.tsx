import { useState } from "react";
import {
  Briefcase,
  TrendingUp,
  FileText,
  AlertCircle,
  Calculator,
  UserCheck,
  Hammer,
  Wrench,
  Users,
  ThumbsUp,
  TrendingDown,
  ClipboardList,
  Layers,
  Scale,
  Zap,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES, ServiceItem } from "../data";

// Helper function to map service items to their representative lucide icons safely
function getServiceIcon(id: string) {
  switch (id) {
    case "s1": return Briefcase;
    case "s2": return TrendingUp;
    case "s3": return FileText;
    case "s4": return AlertCircle;
    case "s5": return Calculator;
    case "s6": return UserCheck;
    case "s7": return Hammer;
    case "s8": return Wrench;
    case "s9": return Users;
    case "s10": return ThumbsUp;
    case "s11": return TrendingDown;
    case "s12": return Users; // generic replacement for handshake
    case "s13": return ClipboardList;
    case "s14": return Layers;
    case "s15": return Scale;
    case "s16": return Zap;
    default: return CheckCircle;
  }
}

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'adm' | 'fin' | 'man' | 'rel'>('all');

  const categories = [
    { label: "Todos os Serviços", id: "all" },
    { label: "Administrativo", id: "adm" },
    { label: "Financeiro", id: "fin" },
    { label: "Obras e Manutenção", id: "man" },
    { label: "Relações e Moradores", id: "rel" },
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (activeFilter === "all") return true;
    return service.category === activeFilter;
  });

  return (
    <section id="servicos" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-navy-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-navy-400 uppercase tracking-widest block">
            Portfólio de Atuação
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Serviços de Gestão de Alta Performance
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Uma administração focada em resultados práticos, oferecendo soluções completas e customizadas para garantir o perfeito funcionamento estrutural, financeiro e social do seu condomínio.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="services-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as any)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-white text-navy-950 border-white shadow-xl"
                  : "glass-dark text-slate-300 border-white/10 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          id="services-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const Icon = getServiceIcon(service.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.02 }}
                  key={service.id}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:bg-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-navy-950/50 group transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Animated Icon Container */}
                    <div className="w-12 h-12 bg-navy-950 border border-white/10 text-navy-300 group-hover:text-navy-950 group-hover:bg-white group-hover:border-white flex items-center justify-center rounded-xl transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-white group-hover:text-navy-300 transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold font-mono tracking-wider text-slate-500 uppercase group-hover:text-navy-300 transition-all duration-300">
                    <span>
                      {service.category === 'adm' && 'Administrativo'}
                      {service.category === 'fin' && 'Financeiro'}
                      {service.category === 'man' && 'Obras & Manutenção'}
                      {service.category === 'rel' && 'Comunicação'}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      ✓
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
