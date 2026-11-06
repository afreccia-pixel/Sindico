import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface FooterProps {
  onScrollTo: (elementId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-8" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid footer links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand block (5-cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onScrollTo("home")}>
              <div className="glass-light p-2 rounded-lg border border-white/10 flex items-center justify-center text-white">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold tracking-wider text-lg text-white block">
                  ALESSANDRO <span className="text-navy-400">FRECCIA</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-medium block">
                  Síndico Profissional
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Mais de 10 anos de experiência sólida em administração condominial de alto padrão, aplicando transparência, redução inteligente de custos e diálogo pacífico em Balneário Camboriú - SC.
            </p>
          </div>

          {/* Quick Shortcuts (3-cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: "Início", id: "home" },
                { label: "Sobre a Trajetória", id: "sobre" },
                { label: "Serviços Prestados", id: "servicos" },
                { label: "Diferenciais", id: "por-que-nos" },
                { label: "Processo de Trabalho", id: "processo" },
                { label: "Perguntas FAQ", id: "faq" },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onScrollTo(link.id)}
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all cursor-pointer font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates brief (4-cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              Fale Conosco
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-navy-400 shrink-0 mt-0.5" />
                <a href={PERSONAL_INFO.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-white transition-all font-semibold">
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-navy-400 shrink-0 mt-0.5" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-all font-semibold break-all">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-navy-400 shrink-0 mt-0.5" />
                <span>{PERSONAL_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Local service coverage */}
        <div className="py-8 border-b border-white/5">
          <h2 className="text-sm font-semibold text-slate-200 mb-3">
            Síndico profissional em Balneário Camboriú e Praia Brava
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
            Alessandro Freccia atende condomínios em Balneário Camboriú e na Praia Brava, em Itajaí.
            A gestão inclui planejamento financeiro, prestação de contas, acompanhamento de
            manutenções e comunicação com moradores e conselho. Solicite uma proposta
            de acordo com as necessidades do seu condomínio.
          </p>
          <a
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm font-semibold text-white underline underline-offset-4"
          >
            Conversar sobre a gestão do condomínio
          </a>
        </div>

        {/* Copyright and signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {currentYear} Alessandro Freccia Síndico Profissional. Todos os direitos reservados.</p>
          <p className="flex items-center space-x-1.5">
            <span>Balneário Camboriú — Santa Catarina</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
