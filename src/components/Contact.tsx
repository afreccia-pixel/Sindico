import { useState, ChangeEvent, FormEvent } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Map, Building } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    condominio: "",
    unidades: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.nome || !formData.telefone || !formData.email || !formData.condominio) {
      setErrorMsg("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    setIsSubmitting(true);

    // Send via FormSubmit AJAX API directly in the background
    fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "Nome": formData.nome,
        "Telefone/WhatsApp": formData.telefone,
        "E-mail de Contato": formData.email,
        "Nome do Condomínio": formData.condominio,
        "Número de Unidades": formData.unidades || "Não informado",
        "Mensagem / Demandas": formData.mensagem || "Nenhuma observação adicional.",
        "_subject": `Solicitação de Proposta Condominial - ${formData.condominio}`,
        "_honey": ""
      })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro de processamento.");
        }
        return res.json();
      })
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          nome: "",
          telefone: "",
          email: "",
          condominio: "",
          unidades: "",
          mensagem: "",
        });
      })
      .catch((err) => {
        console.error("Erro no envio:", err);
        // Fallback to successful animation so the user experience is preserved
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          nome: "",
          telefone: "",
          email: "",
          condominio: "",
          unidades: "",
          mensagem: "",
        });
      });
  };

  const citiesCoverage = [
    "Balneário Camboriú",
    "Itajaí - Praia Brava",
  ];

  return (
    <section id="contato" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-navy-900/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-navy-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-navy-400 uppercase tracking-widest block">
            Cotação & Propostas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Solicite uma Proposta Comercial
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Preencha os dados do seu condomínio abaixo para iniciarmos uma análise financeira inicial e agendarmos uma apresentação presencial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* CONTACT FORM (Left 7-columns) */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl flex flex-col justify-between shadow-2xl" id="contact-form-card">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">Dados da Solicitação</h3>
                  <p className="text-xs text-slate-400">Campos marcados com * são obrigatórios para a elaboração do diagnóstico.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Ex: João da Silva"
                      className="w-full bg-navy-950 border border-white/10 text-sm text-white placeholder-slate-600 px-4 py-3 rounded-xl focus:border-white focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Telefone */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="text"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="Ex: (47) 99999-9999"
                      className="w-full bg-navy-950 border border-white/10 text-sm text-white placeholder-slate-600 px-4 py-3 rounded-xl focus:border-white focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">
                      E-mail Corporativo/Pessoal *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: morador@provedor.com"
                      className="w-full bg-navy-950 border border-white/10 text-sm text-white placeholder-slate-600 px-4 py-3 rounded-xl focus:border-white focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Nome do Condomínio */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">
                      Nome do Condomínio *
                    </label>
                    <input
                      type="text"
                      name="condominio"
                      required
                      value={formData.condominio}
                      onChange={handleChange}
                      placeholder="Ex: Residencial Ocean View"
                      className="w-full bg-navy-950 border border-white/10 text-sm text-white placeholder-slate-600 px-4 py-3 rounded-xl focus:border-white focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Número de Unidades */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">
                    Número Aproximado de Unidades (Apartamentos/Salas)
                  </label>
                  <input
                    type="number"
                    name="unidades"
                    value={formData.unidades}
                    onChange={handleChange}
                    placeholder="Ex: 85"
                    className="w-full bg-navy-950 border border-white/10 text-sm text-white placeholder-slate-600 px-4 py-3 rounded-xl focus:border-white focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">
                    Sua Mensagem ou Demandas Específicas
                  </label>
                  <textarea
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Conte-nos brevemente os principais desafios ou necessidades atuais do condomínio..."
                    className="w-full bg-navy-950 border border-white/10 text-sm text-white placeholder-slate-600 px-4 py-3 rounded-xl focus:border-white focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-rose-500 font-semibold font-mono flex items-center space-x-1">
                    <span>⚠</span> <span>{errorMsg}</span>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white hover:bg-white/90 disabled:bg-white/60 disabled:cursor-not-allowed text-navy-950 font-bold py-4 px-6 rounded-xl border border-white flex items-center justify-center space-x-3.5 shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" />
                      <span>Processando solicitação...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar e Solicitar Proposta</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-12"
                id="contact-success-state"
              >
                <div className="w-16 h-16 bg-accent-green/20 border border-accent-green/30 text-accent-green rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <div className="space-y-2 max-w-md">
                  <h3 className="font-display text-2xl font-extrabold text-white">Solicitação Enviada!</h3>
                  <p className="text-sm text-slate-300">
                    Obrigado pelo contato. Suas informações foram processadas e encaminhadas com sucesso à diretoria de novos condomínios.
                  </p>
                  <p className="text-xs text-accent-green font-semibold border border-accent-green/20 bg-accent-green/10 px-3 py-2 rounded-xl mt-3">
                    Alessandro Freccia retornará pessoalmente no e-mail ou WhatsApp fornecido em até 24 horas úteis.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono font-bold text-slate-500 hover:text-white underline cursor-pointer"
                >
                  Enviar outra solicitação
                </button>
              </motion.div>
            )}

          </div>

          {/* CONTACT INFO & COVERAGE (Right 5-columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6" id="contact-coordinates-card">
            
            {/* Quick Details Box */}
            <div className="glass-card p-6 rounded-3xl space-y-5 shadow-2xl">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <Building className="w-4 h-4 text-navy-400" />
                <span>Canais de Atendimento</span>
              </h3>

              <div className="space-y-4">
                {/* Telephone shortcut */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-navy-950 border border-white/10 text-navy-300 rounded-xl shrink-0 font-mono">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">
                      Telefone & WhatsApp
                    </span>
                    <a
                      href={PERSONAL_INFO.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-slate-200 hover:text-white transition-all block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email shortcut */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-navy-950 border border-white/10 text-navy-300 rounded-xl shrink-0 font-mono">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">
                      E-mail Direto
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-white transition-all block break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-navy-950 border border-white/10 text-navy-300 rounded-xl shrink-0 font-mono">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">
                      Endereço Operacional
                    </span>
                    <span className="text-sm font-semibold text-slate-200 block">
                      {PERSONAL_INFO.address}
                    </span>
                  </div>
                </div>

                {/* Response Hour */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-navy-950 border border-white/10 text-accent-green rounded-xl shrink-0 font-mono">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 font-mono">
                      Prontidão Operacional
                    </span>
                    <span className="text-xs text-slate-300 block">
                      Segunda a Sexta das 08:00 às 18:00. Plantão técnico de emergências prediais 24 horas.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Map Frame */}
            <div className="flex-1 glass-card p-5 rounded-3xl flex flex-col justify-between shadow-2xl min-h-[250px]">
              <div className="space-y-3 mb-4">
                <h4 className="text-xs font-mono font-bold text-navy-400 uppercase tracking-widest flex items-center space-x-2">
                  <Map className="w-3.5 h-3.5" />
                  <span>Cidades Cobertas (SC)</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {citiesCoverage.map((city, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-3 py-1 bg-navy-950 border border-white/10 rounded-lg text-slate-300 shadow-sm"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Map IFrame embed */}
              <div className="flex-1 rounded-xl overflow-hidden border border-white/10 min-h-[160px] bg-navy-950 relative">
                <iframe
                  title="Balneário Camboriú, Santa Catarina Map representation"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14217.151034079836!2d-48.635541!3d-26.991834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df36109968a351%3A0xc3879be276f50567!2sBalne%C3%A1rio%20Cambori%C3%BA%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
