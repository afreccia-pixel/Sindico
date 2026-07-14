import { Clipboard, LineChart, FileSpreadsheet, Activity, Layers } from "lucide-react";
import { motion } from "motion/react";
import { TIMELINE } from "../data";

function getStepIcon(step: number) {
  switch (step) {
    case 1: return Clipboard;
    case 2: return LineChart;
    case 3: return FileSpreadsheet;
    case 4: return Layers;
    case 5: return Activity;
    default: return Clipboard;
  }
}

export default function Timeline() {
  return (
    <section id="processo" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute left-1/2 top-1/2 w-80 h-80 bg-navy-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono font-bold text-navy-400 uppercase tracking-widest block">
            Metodologia Integrada
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nosso Processo de Trabalho
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Uma abordagem estruturada em etapas lógicas, planejadas e transparentes, garantindo uma transição tranquila, sem percalços e com resultados imediatos nos primeiros meses.
          </p>
        </div>

        {/* Timeline body */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-400 via-white/10 to-accent-green transform sm:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-12 sm:space-y-16">
            {TIMELINE.map((step, idx) => {
              const Icon = getStepIcon(step.step);
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`flex flex-col sm:flex-row items-start sm:items-center relative ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge (Circle Marker) */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-navy-950 border-2 border-white flex items-center justify-center transform -translate-x-[15px] sm:-translate-x-1/2 z-10 shadow-lg">
                    <span className="text-[11px] font-bold font-mono text-white">
                      {step.step}
                    </span>
                  </div>

                  {/* Spacer for desktop layout alignment */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8 group"
                  >
                    <div className="p-6 glass-card rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 shadow-md group-hover:shadow-2xl group-hover:shadow-navy-950/40">
                      <div className="flex items-center space-x-3.5 mb-4">
                        <div className="p-2.5 bg-navy-950 border border-white/10 text-navy-300 rounded-xl group-hover:text-navy-950 group-hover:bg-white group-hover:border-white transition-all duration-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">
                            Etapa 0{step.step}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-navy-300 transition-all duration-300">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
