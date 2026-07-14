import {
  FileText,
  Building2,
  TrendingUp,
  Coins,
  Users,
  MessageSquare,
  ClipboardList,
  Wrench,
  Hammer,
  ShieldCheck,
  ThumbsUp,
  Award,
} from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";

export default function About() {
  const expertiseList = [
    { title: "Administração", icon: FileText, desc: "Processos e conformidade jurídica impecável." },
    { title: "Gestão de Condomínios", icon: Building2, desc: "Acompanhamento geral e governança qualificada." },
    { title: "Planejamento Financeiro", icon: TrendingUp, desc: "Visão estratégica e sustentabilidade do caixa." },
    { title: "Controle Orçamentário", icon: Coins, desc: "Gestão analítica e eliminação de desperdícios." },
    { title: "Gestão de Pessoas", icon: Users, desc: "Liderança construtiva de colaboradores e terceiros." },
    { title: "Mediação de Conflitos", icon: MessageSquare, desc: "Isenção e diálogo pacífico entre condôminos." },
    { title: "Contratação e Fiscalização", icon: ClipboardList, desc: "Auditoria rígida de fornecedores homologados." },
    { title: "Manutenção Preventiva", icon: Wrench, desc: "Vistorias periódicas para blindar a infraestrutura." },
    { title: "Gestão de Obras", icon: Hammer, desc: "Fiscalização ativa de prazos, contratos e entregas." },
    { title: "Segurança Patrimonial", icon: ShieldCheck, desc: "Protocolos robustos de acesso física e eletrônica." },
    { title: "Atendimento aos Condôminos", icon: ThumbsUp, desc: "Canal rápido, humanizado e focado em soluções." },
  ];

  return (
    <section id="sobre" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-navy-800/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-96 h-96 bg-navy-950/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* About Narrative Text */}
          <div className="lg:col-span-5 space-y-6" id="about-narrative">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-navy-400 uppercase tracking-widest block">
                Trajetória & Liderança
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Uma Década de Excelência em Gestão Condominial
              </h2>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              A administração moderna de condomínios exige mais do que apenas assinar papéis; demanda 
              <span className="text-white font-semibold"> conhecimento técnico aprofundado, responsabilidade jurídica, isenção política e liderança ativa</span>. 
              Alessandro Freccia traz na sua bagagem mais de 10 anos de atuação profissional sólida, gerindo condomínios residenciais e comerciais de alta complexidade.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm">
              Sua filosofia de trabalho baseia-se na transparência contábil inegociável, economia gerada por meio de auditoria em contratos, manutenção preventiva impecável para valorização de patrimônio e, principalmente, uma comunicação humanizada e pacífica que resolve desavenças internas com empatia e autoridade moral.
            </p>

            {/* Quote badge */}
            <div className="glass-card border-l-4 border-navy-400 p-5 rounded-r-xl space-y-2 shadow-xl">
              <p className="text-sm italic text-slate-300 leading-relaxed">
                "Gerir um condomínio é zelar pelo maior patrimônio físico e familiar das pessoas. Cada decisão deve ser transparente, planejada estrategicamente e voltada ao benefício coletivo."
              </p>
              <div className="flex items-center space-x-2 text-xs font-bold font-mono text-navy-300 uppercase">
                <Award className="w-4 h-4" />
                <span>Alessandro Freccia — Diretor Geral</span>
              </div>
            </div>
          </div>

          {/* Core Areas Grid */}
          <div className="lg:col-span-7 space-y-6" id="about-skills-grid">
            <div className="space-y-1">
              <h3 className="font-display text-xl font-bold text-white">
                Minhas Áreas de Domínio Técnico
              </h3>
              <p className="text-xs text-slate-400">
                Competências chaves aplicadas diariamente para garantir a alta performance operacional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertiseList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="p-4 glass-card rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 group flex items-start space-x-3.5 shadow-md"
                  >
                    <div className="p-2.5 bg-navy-950 border border-white/10 text-navy-300 rounded-xl group-hover:text-navy-950 group-hover:bg-white group-hover:border-white transition-all shrink-0 duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-navy-300 transition-all duration-300">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
