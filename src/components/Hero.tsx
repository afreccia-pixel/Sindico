import { Phone, Mail, Trophy, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";
import portraitImg from "../assets/images/Imagemperfil.png";
import skylineImg from "../assets/images/balneario_skyline_1783948783224.jpg";

interface HeroProps {
  onScrollTo: (elementId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-navy-950"
    >
      {/* Background Skyline Image with Luxury Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-navy-950">
        <img
          src={skylineImg}
          alt="Balneário Camboriú Skyline background"
          className="w-full h-full object-cover opacity-30 object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        {/* Subtle animated light orb behind portrait */}
        <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] bg-navy-800/25 rounded-full blur-[120px] -z-10 animate-pulse duration-[10000ms]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6" id="hero-left-content">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 glass-card px-3.5 py-1.5 rounded-full w-fit"
            >
              <Sparkles className="w-4 h-4 text-navy-300" />
              <span className="text-xs uppercase tracking-widest text-navy-200 font-semibold">
                Gestão Condominial de Alto Padrão
              </span>
            </motion.div>

            {/* Main Title and Name */}
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg font-mono font-bold text-navy-400 tracking-wider uppercase"
              >
                Alessandro Freccia
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
              >
                Síndico Profissional em <br />
                <span className="bg-gradient-to-r from-navy-400 via-navy-200 to-white bg-clip-text text-transparent">
                  Balneário Camboriú
                </span>{" "}
                e Região
              </motion.h1>
            </div>

            {/* Subtitle / Core value */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl border-l-2 border-navy-500/50 pl-4"
            >
              Gestão profissional de condomínios com foco em economia, transparência, valorização patrimonial e excelência administrativa.
            </motion.p>

            {/* Home descriptive section */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl"
            >
              Mais de <span className="text-white font-semibold">10 anos de experiência</span> em administração, gestão patrimonial, negociação corporativa, planejamento financeiro rigoroso e resolução pacífica de conflitos, garantindo um condomínio altamente valorizado e seguro.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
              id="hero-actions"
            >
              <button
                onClick={() => onScrollTo("contato")}
                className="bg-white text-navy-950 hover:bg-slate-100 font-bold px-8 py-4 rounded-xl shadow-xl hover:scale-[1.02] transition-all text-center cursor-pointer"
              >
                Solicitar Proposta
              </button>
              <a
                href={PERSONAL_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-accent-green hover:bg-[#20ba59] text-white font-bold px-8 py-4 rounded-xl hover:scale-[1.02] transition-all flex items-center justify-center space-x-3 shadow-lg shadow-accent-green/20 whatsapp-glow cursor-pointer"
              >
                <Phone className="w-5 h-5 text-white fill-white" />
                <span>Falar no WhatsApp</span>
              </a>
            </motion.div>

            {/* Mini Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-navy-900 max-w-lg"
              id="hero-quick-stats"
            >
              <div className="space-y-1">
                <span className="block text-2xl font-bold text-white font-display">20+</span>
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Anos de Gestão
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl font-bold text-navy-400 font-display">100%</span>
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Transparência
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl font-bold text-accent-green font-display">-20%</span>
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Custo Médio
                </span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Content (Portrait of Alessandro) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
            id="hero-portrait-container"
          >
            {/* Visual background framing elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-navy-600/10 to-navy-500/10 rounded-3xl blur-2xl -z-10" />
            
            {/* Elegant luxury photo container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[3/4] glass-dark rounded-3xl p-3 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80 z-10" />
              <img
                src={portraitImg}
                alt="Alessandro Freccia - Síndico Profissional"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
