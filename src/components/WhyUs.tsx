import { useState } from "react";
import { Check, ShieldCheck, ChevronRight, TrendingUp, Sparkles, Building2, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { DIFFERENTIALS } from "../data";

export default function WhyUs() {
  const [selectedStat, setSelectedStat] = useState<number>(0);

  const stats = [
    {
      title: "Economia Real",
      value: "25%",
      label: "Redução Média de Despesas",
      description: "Otimização do caixa e auditoria de contratos antigos trazem cortes reais de custos administrativos sem perder qualidade.",
      color: "from-emerald-500 to-teal-400",
      iconColor: "text-emerald-400",
      chartPercentage: 85, // out of 100 on the circular track
    },
    {
      title: "Valorização Patrimonial",
      value: "+30%",
      label: "Aumento no Valor do Imóvel",
      description: "Edifícios sob manutenção predial proativa e vistorias rigorosas elevam o seu valor de mercado imobiliário em Balneário Camboriú.",
      color: "from-blue-500 to-cyan-400",
      iconColor: "text-blue-400",
      chartPercentage: 90,
    },
    {
      title: "Redução de Conflitos",
      value: "85%",
      label: "Disputas Resolvidas Pacificamente",
      description: "A atuação isenta e sem laços emocionais neutraliza atritos internos e estabelece o respeito e convivência pacífica em assembleia.",
      color: "from-amber-500 to-orange-400",
      iconColor: "text-amber-400",
      chartPercentage: 85,
    },
    {
      title: "Eficiência Administrativa",
      value: "95%",
      label: "Solução Rápida de Demandas",
      description: "Padronização de processos, tecnologia integrada e agilidade eliminam a burocracia no retorno a chamados de moradores.",
      color: "from-indigo-500 to-purple-400",
      iconColor: "text-indigo-400",
      chartPercentage: 95,
    },
  ];

  const whyChooseAlessandro = [
    "Mais de 10 anos de experiência qualificada em gestão e administração.",
    "Atendimento presencial e direto pelo próprio síndico, sem intermediários.",
    "Transparência absoluta e incontestável na gestão financeira mensal.",
    "Forte redução de custos operacionais através de negociações estratégicas.",
    "Planejamento rigoroso e periódico de manutenções preventivas.",
    "Uso inteligente de tecnologia e indicadores na administração predial.",
    "Relatórios gerenciais periódicos claros e prestação de contas detalhada.",
    "Atuação regional ágil: Balneário Camboriú e Itajaí - Praia Brava.",
  ];

  return (
    <section id="por-que-nos" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Absolute backgrounds decoration */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-navy-850/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-navy-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* SECTION 1: POR QUE CONTRATAR UM SÍNDICO PROFISSIONAL & CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text panel on left */}
          <div className="lg:col-span-6 space-y-6" id="why-hire-intro">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-navy-400 uppercase tracking-widest block">
                Valor Administrativo
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Por que Contratar um Síndico Profissional?
              </h2>
            </div>
            
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              A complexidade das leis vigentes, exigências técnicas do Corpo de Bombeiros, normas técnicas da ABNT e o controle de orçamentos milionários transformaram a sindicância em uma atividade altamente técnica.
            </p>
            
            <p className="text-slate-400 leading-relaxed text-sm">
              Ao delegar a gestão para um profissional qualificado, o condomínio ganha segurança jurídica, neutralidade política e planejamento estratégico profissionalizado, liberando os moradores de desgastes e gerando valorização imobiliária.
            </p>

            {/* Micro stats chooser */}
            <div className="grid grid-cols-2 gap-4 pt-4" id="stats-interactive-selectors">
              {stats.map((stat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStat(index)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedStat === index
                      ? "bg-navy-950 border-white/20 shadow-xl"
                      : "glass-card hover:bg-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-slate-400">{stat.title}</span>
                    <span className={`text-sm font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </span>
                  </div>
                  <div className="h-1 w-full bg-navy-900 rounded-full mt-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: selectedStat === index ? "100%" : "30%" }}
                      transition={{ duration: 0.5 }}
                      className={`h-full bg-gradient-to-r ${stat.color}`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Interactive SVG Chart Card on right */}
          <div className="lg:col-span-6 flex justify-center" id="interactive-chart-container">
            <div className="w-full max-w-lg glass-dark p-8 rounded-3xl relative overflow-hidden flex flex-col items-center shadow-2xl">
              
              {/* Card heading */}
              <div className="w-full flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-navy-400 animate-ping" />
                  <span className="text-xs text-slate-300 font-bold uppercase tracking-wider font-mono">
                    Impacto Real Comprovado
                  </span>
                </div>
                <HelpCircle className="w-4 h-4 text-slate-400" />
              </div>

              {/* Central Chart Graphics (Progress Dial) */}
              <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
                {/* SVG circular track background */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    className="stroke-white/10 fill-none"
                    strokeWidth="12"
                  />
                  {/* Active segment animated */}
                  <motion.circle
                    cx="96"
                    cy="96"
                    r="80"
                    className={`fill-none stroke-current text-white`}
                    strokeWidth="12"
                    strokeDasharray="502"
                    initial={{ strokeDashoffset: 502 }}
                    animate={{
                      strokeDashoffset: 502 - (502 * stats[selectedStat].chartPercentage) / 100,
                    }}
                    transition={{ type: "spring", duration: 1.2, bounce: 0.1 }}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Text centered inside the dial */}
                <div className="absolute text-center space-y-1">
                  <motion.span
                    key={selectedStat}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="block text-4xl font-extrabold text-white font-display"
                  >
                    {stats[selectedStat].value}
                  </motion.span>
                  <span className="block text-[10px] text-slate-300 uppercase tracking-widest font-mono font-bold">
                    Eficiência
                  </span>
                </div>
              </div>

              {/* Explanatory detail of chosen metric */}
              <motion.div
                key={selectedStat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-3 w-full"
              >
                <div className="space-y-2">
                  <span className={`inline-block text-xs font-extrabold px-3 py-1 bg-white text-navy-950 rounded-full font-mono shadow-md`}>
                    {stats[selectedStat].title}
                  </span>
                  <h3 className="text-lg font-bold text-white">{stats[selectedStat].label}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed px-4">
                  {stats[selectedStat].description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* SECTION 2: POR QUE ESCOLHER ALESSANDRO FRECCIA? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-white/10" id="choose-alessandro-section">
          {/* Column 1: Core credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-navy-400 uppercase tracking-widest block">
                Diferenciais Chave
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Por que escolher <br />
                Alessandro Freccia?
              </h2>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Diferente de grandes assessorias impessoais que delegam sua gestão a estagiários ou assistentes remotos, o síndico Alessandro Freccia acompanha presencialmente cada detalhe administrativo do seu edifício, mantendo contato de linha direta com o morador e conselhos.
            </p>

            <div className="p-5 glass-card rounded-2xl flex items-center space-x-4 shadow-lg">
              <div className="bg-white p-3 rounded-xl text-navy-950 shrink-0">
                <ShieldCheck className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-1">
                <span className="block text-xs text-slate-400 uppercase font-bold tracking-wider font-mono">
                  Isenção & Segurança
                </span>
                <span className="block text-sm font-semibold text-white">
                  Sem intermediários. Decisões técnicas e isentas.
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Highlights Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseAlessandro.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 glass-card rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all flex items-start space-x-3 group shadow-sm"
                >
                  <div className="mt-0.5 bg-accent-green/20 border border-accent-green/30 text-accent-green rounded p-1 group-hover:bg-accent-green group-hover:text-white transition-all duration-300">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 leading-snug group-hover:text-white transition-all">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 3: DIFERENCIAIS GENERALS (10 items) */}
        <div className="space-y-12 pt-8 border-t border-white/10" id="diferenciais">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-navy-400 uppercase tracking-widest block">
              Valores e Práticas
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Diferenciais da Nossa Gestão
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Pilares éticos e metodologias que consolidam uma administração de alto nível e confiança total.
            </p>
          </div>

          {/* Diferenciais Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" id="diferenciais-cards">
            {DIFFERENTIALS.map((dif, idx) => (
              <motion.div
                key={dif.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-5 rounded-2xl flex flex-col hover:bg-white/5 hover:border-white/20 transition-all duration-300 group shadow-sm"
              >
                <div className="flex items-center space-x-2 text-navy-300 font-bold text-sm mb-3">
                  <Sparkles className="w-4 h-4 text-navy-400" />
                  <span className="font-display font-semibold text-white group-hover:text-navy-300 transition-all duration-300">
                    {dif.title}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {dif.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
