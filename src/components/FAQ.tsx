import { useState } from "react";
import { ChevronDown, Search, HelpCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("f1"); // Open first item by default
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-navy-900 border-t border-b border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-10 bottom-10 w-80 h-80 bg-navy-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-navy-400 uppercase tracking-widest block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Encontre respostas diretas sobre o funcionamento da sindicância profissional, rotinas de visitas, prestação de contas, seguros e responsabilidades civis.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div className="relative max-w-lg mx-auto mb-10" id="faq-search">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Digite sua dúvida (ex: visitas, contas, inadimplência)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass-dark border border-white/10 text-sm text-white placeholder-slate-500 pl-11 pr-4 py-3.5 rounded-xl focus:border-white focus:outline-none transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-500 hover:text-slate-300"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-list">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: idx * 0.01 }}
                  className="glass-card rounded-2xl overflow-hidden hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-3 text-slate-200 hover:text-white transition-all duration-300">
                      <HelpCircle className="w-4 h-4 text-navy-400 shrink-0" />
                      <span className="text-sm sm:text-base font-bold leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`p-1.5 rounded-lg glass-light border border-white/5 text-slate-400 hover:text-white transition-all transform shrink-0 duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Answer Content with smooth height animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pl-12">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* No search results fallback */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12 glass-dark border border-dashed border-white/10 rounded-2xl space-y-3">
              <AlertCircle className="w-8 h-8 text-slate-500 mx-auto" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">Nenhum resultado encontrado</p>
                <p className="text-xs text-slate-500">Tente buscar por termos mais genéricos como "obra", "síndico", ou "visitas".</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
