import { useState, useEffect } from "react";
import { Menu, X, Phone, Shield } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";

interface HeaderProps {
  onScrollTo: (elementId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", id: "home" },
    { label: "Sobre", id: "sobre" },
    { label: "Serviços", id: "servicos" },
    { label: "Diferenciais", id: "por-que-nos" },
    { label: "Processo", id: "processo" },
    { label: "Galeria", id: "galeria" },
    { label: "FAQ", id: "faq" },
    { label: "Contato", id: "contato" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-dark shadow-xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleLinkClick("home")}
              id="header-logo"
            >
              <div className="bg-navy-900 p-2 rounded-lg border border-white/10 flex items-center justify-center shadow-inner">
                <Shield className="w-6 h-6 text-navy-300" />
              </div>
              <div>
                <span className="font-display font-bold tracking-wider text-xl text-white block">
                  ALESSANDRO <span className="text-navy-400">FRECCIA</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-navy-200 font-semibold block -mt-1">
                  Síndico Profissional
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-md transition-all font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3" id="desktop-cta">
              <button
                onClick={() => handleLinkClick("contato")}
                className="bg-white text-navy-950 hover:bg-slate-100 font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-lg hover:shadow-white/5 cursor-pointer"
              >
                Solicitar Proposta
              </button>
              <a
                href={PERSONAL_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-accent-green hover:bg-[#20ba59] text-white p-2.5 rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-lg shadow-accent-green/20"
                title="Falar no WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2" id="mobile-menu-controls">
              <a
                href={PERSONAL_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="bg-accent-green hover:bg-[#20ba59] text-white p-2 rounded-xl transition-all shadow-lg shadow-accent-green/20"
                title="Falar no WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-all focus:outline-none"
                aria-label="Abrir menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-40 lg:hidden"
            id="mobile-drawer-overlay"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm glass-dark p-6 flex flex-col z-50 h-screen overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="font-display font-bold tracking-wider text-lg text-white block">
                    ALESSANDRO <span className="text-navy-400">FRECCIA</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-navy-200 font-semibold block">
                    Síndico Profissional
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 py-6 flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="w-full text-left px-4 py-3 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-all font-medium flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-navy-400 text-xs font-bold font-mono">→</span>
                  </button>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => handleLinkClick("contato")}
                  className="w-full bg-white text-navy-950 hover:bg-slate-100 font-bold py-3 px-4 rounded-xl text-center transition-all block shadow-lg shadow-white/5"
                >
                  Solicitar Proposta
                </button>
                <a
                  href={PERSONAL_INFO.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-accent-green hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl text-center transition-all flex items-center justify-center space-x-2 shadow-lg shadow-accent-green/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
