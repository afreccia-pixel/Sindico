import visitaTecnicaImg from "./assets/images/visita_tecnica_inspecao_1783966033561.jpg";
import inspecaoInfraImg from "./assets/images/inspecao_infraestrutura_1783966050934.jpg";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'adm' | 'fin' | 'man' | 'rel';
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  condo: string;
  text: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'assembleia' | 'reuniao' | 'manutencao' | 'condominio';
  imageUrl: string;
  description: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Alessandro Freccia",
  title: "Síndico Profissional",
  location: "Balneário Camboriú e Itajaí (Praia Brava) - SC",
  experienceYears: 20,
  phone: "+55 (47) 99111-9910",
  whatsappLink: "https://wa.me/5547991119910?text=Ol%C3%A1%20Alessandro,%20gostaria%20de%20solicitar%20uma%20proposta%20de%20gest%C3%A3o%20condominial.",
  email: "portalcamboriu@gmail.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  address: "Rua 2870, 399, Balneário Camboriú - SC, Brasil",
  aboutText: "Com mais de 10 anos de experiência consolidada em administração, gestão patrimonial, negociações estratégicas, planejamento financeiro rigoroso e mediação de conflitos, Alessandro Freccia oferece um modelo de gestão moderna focado na transparência absoluta, eficiência de custos e valorização contínua do patrimônio do condomínio. Atua de forma ativa, presencial e orientada a resultados, transformando a convivência e a infraestrutura dos edifícios em Balneário Camboriú e Itajaí (Praia Brava).",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Administração Completa do Condomínio",
    description: "Gestão técnica integrada, aplicando metodologias modernas e acompanhamento integral de todas as rotinas administrativas cotidianas com maestria.",
    category: "adm",
  },
  {
    id: "s2",
    title: "Gestão Financeira & Planejamento",
    description: "Controle rigoroso do fluxo de caixa, otimização de contas, projeções financeiras e blindagem do caixa do condomínio contra imprevistos.",
    category: "fin",
  },
  {
    id: "s3",
    title: "Prestação de Contas Clara",
    description: "Relatórios mensais detalhados, acessíveis e transparentes para auditoria do conselho fiscal e livre consulta por todos os condôminos.",
    category: "fin",
  },
  {
    id: "s4",
    title: "Controle Ativo de Inadimplência",
    description: "Cobrança amigável de forma ágil e humanizada, além de parcerias com assessorias jurídicas especializadas para resoluções eficientes.",
    category: "fin",
  },
  {
    id: "s5",
    title: "Planejamento Orçamentário",
    description: "Projeção realista de custos e receitas anuais, definindo previsões de fundos de reserva coerentes para evitar cotas extras desnecessárias.",
    category: "fin",
  },
  {
    id: "s6",
    title: "Contratação & Gestão de Funcionários",
    description: "Recrutamento seletivo, treinamento contínuo, escala de folgas e otimização da equipe de segurança, portaria e limpeza predial.",
    category: "adm",
  },
  {
    id: "s7",
    title: "Gestão & Fiscalização de Obras",
    description: "Mediação de concorrências comerciais, auditoria de propostas e fiscalização presencial de cronogramas e entregas de reformas.",
    category: "man",
  },
  {
    id: "s8",
    title: "Gestão de Manutenções Preventivas",
    description: "Calendário fixo de vistorias técnicas periódicas em elevadores, bombas, para-raios, portões e geradores, minimizando corretivas custosas.",
    category: "man",
  },
  {
    id: "s9",
    title: "Assembleias Produtivas",
    description: "Condução profissional, democrática e pacífica de assembleias ordinárias e extraordinárias, focando no progresso e resolução de pautas.",
    category: "rel",
  },
  {
    id: "s10",
    title: "Atendimento Humanizado aos Condôminos",
    description: "Canais diretos e eficazes para receber sugestões, dúvidas ou reclamações, garantindo retorno célere, educado e resolutivo.",
    category: "rel",
  },
  {
    id: "s11",
    title: "Redução Inteligente de Custos",
    description: "Auditoria analítica de contratos antigos e despesas fixas de concessionárias, telefonia e energia para renegociações mais baratas.",
    category: "fin",
  },
  {
    id: "s12",
    title: "Negociação com Fornecedores",
    description: "Poder de barganha corporativa com grandes prestadores de serviços, obtendo as melhores cotações sem abrir mão da alta qualidade.",
    category: "fin",
  },
  {
    id: "s13",
    title: "Gestão Atenta de Contratos",
    description: "Monitoramento de vencimentos, reajustes anuais baseados em índices oficiais e revisão preventiva de cláusulas jurídicas protetivas.",
    category: "adm",
  },
  {
    id: "s14",
    title: "Implantação Prática de Processos",
    description: "Criação de manuais operacionais claros, regimentos internos e cartilhas de boa convivência para harmonizar o dia a dia predial.",
    category: "adm",
  },
  {
    id: "s15",
    title: "Adequação Estrita às Normas",
    description: "Garantia de conformidade total do condomínio com a legislação vigente, normas da ABNT, exigências do Corpo de Bombeiros e NR's.",
    category: "adm",
  },
  {
    id: "s16",
    title: "Gestão Proativa de Emergências",
    description: "Plano de contingência estruturado e prontidão profissional para agir rapidamente frente a incidentes hidráulicos, elétricos ou de segurança.",
    category: "man",
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: "d1",
    title: "Transparência Total",
    description: "Prestação de contas mensal com relatórios estruturados e documentação digitalizada de fácil acesso para todos os moradores.",
  },
  {
    id: "d2",
    title: "Atendimento Personalizado",
    description: "Presença física regular no condomínio e canal de comunicação direto com o síndico, eliminando burocracias e intermediários.",
  },
  {
    id: "d3",
    title: "Economia Real para o Condomínio",
    description: "Auditoria contínua de despesas e renegociação estratégica de contratos, gerando comprovadamente economias substanciais.",
  },
  {
    id: "d4",
    title: "Comunicação Ágil",
    description: "Respostas rápidas a e-mails, ofícios e mensagens de WhatsApp, mantendo o conselho e moradores sempre bem informados.",
  },
  {
    id: "d5",
    title: "Relatórios Gerenciais Claros",
    description: "Indicadores de desempenho do condomínio enviados trimestralmente, facilitando o acompanhamento financeiro e de metas.",
  },
  {
    id: "d6",
    title: "Planejamento Estratégico",
    description: "Cronograma plurianual de melhorias e investimentos estruturados, visando a valorização patrimonial gradual e programada.",
  },
  {
    id: "d7",
    title: "Gestão Humanizada",
    description: "Resolução de conflitos pautada no diálogo, empatia e respeito mútuo, promovendo um ambiente de convivência mais leve e amigável.",
  },
  {
    id: "d8",
    title: "Responsabilidade e Ética",
    description: "Cumprimento rigoroso da convenção condominial, do regimento interno e da legislação, com isenção e integridade absoluta.",
  },
  {
    id: "d9",
    title: "Organização Administrativa",
    description: "Digitalização de arquivos, processos otimizados e facilidade na marcação de espaços comuns e controle de acessos prediais.",
  },
  {
    id: "d10",
    title: "Tecnologia Integrada",
    description: "Utilização de ferramentas digitais modernas para acompanhamento de ordens de serviço, vistorias prediais e enquetes rápidas.",
  },
];

export const TIMELINE: TimelineStep[] = [
  {
    step: 1,
    title: "Diagnóstico do Condomínio",
    description: "Vistoria física detalhada de toda a infraestrutura e leitura minuciosa da convenção, regimento interno e contratos vigentes.",
  },
  {
    step: 2,
    title: "Levantamento Financeiro",
    description: "Auditoria do fluxo de caixa recente, análise das taxas de inadimplência e identificação imediata de ralos financeiros.",
  },
  {
    step: 3,
    title: "Planejamento Estratégico",
    description: "Apresentação de um plano de ação prioritário ao Conselho, contendo cronograma de manutenções, metas de economia e melhorias.",
  },
  {
    step: 4,
    title: "Implantação das Melhorias",
    description: "Execução coordenada das medidas aprovadas, renegociação de contratos, padronização da equipe e ativação dos novos canais de atendimento.",
  },
  {
    step: 5,
    title: "Acompanhamento Contínuo",
    description: "Visitas presenciais periódicas, reuniões de feedback com o Conselho e emissão regular de relatórios de desempenho e prestação de contas.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Ricardo Mendes",
    role: "Presidente do Conselho",
    condo: "Residencial Mar Azul",
    text: "A gestão do Alessandro transformou nosso condomínio. Em menos de 6 meses, reduzimos as despesas fixas em 18% sem perder qualidade nos serviços e finalmente conseguimos reformar a área de lazer sem taxas extras absurdas.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Mariana Vasconcellos",
    role: "Conselheira Fiscal",
    condo: "Condomínio Villa Bella",
    text: "Como conselheira, prezo muito pela clareza nas contas. O Alessandro Freccia implementou relatórios excelentes de prestação de contas e nos atende com agilidade ímpar. Um profissional sério, ético e extremamente organizado.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Roberto Silveira",
    role: "Morador há 12 anos",
    condo: "Edifício Sol Nascente",
    text: "Tivemos vários síndicos moradores e a convivência era desgastante. Ter um síndico profissional do gabarito do Alessandro trouxe neutralidade, segurança jurídica e melhorias constantes na nossa manutenção predial. Excelente!",
    rating: 5,
  },
  {
    id: "t4",
    name: "Cláudia Schmidt",
    role: "Proprietária",
    condo: "Spazio di Milano",
    text: "O atendimento dele aos moradores é muito humano e transparente. Quando tivemos uma infiltração grave na garagem, ele resolveu prontamente com o fornecedor da obra anterior, poupando custos adicionais ao condomínio.",
    rating: 5,
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    title: "Assembleia de Condomínio",
    category: "assembleia",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    description: "Condução transparente e pacífica de assembleias ordinárias para deliberações e prestação de contas.",
  },
  {
    id: "g2",
    title: "Reunião de Conselho Técnico",
    category: "reuniao",
    imageUrl: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800",
    description: "Discussões periódicas com o conselho consultivo para definição de diretrizes e alocação de investimentos.",
  },
  {
    id: "g3",
    title: "Visita Técnica e Inspeção de Obras",
    category: "manutencao",
    imageUrl: visitaTecnicaImg,
    description: "Acompanhamento presencial minucioso das manutenções preventivas e fiscalização de reformas em andamento.",
  },
  {
    id: "g4",
    title: "Inspeção Geral de Infraestrutura",
    category: "manutencao",
    imageUrl: inspecaoInfraImg,
    description: "Checklists presenciais detalhados nas áreas comuns, garagens e casas de máquinas para evitar sinistros.",
  },
  {
    id: "g5",
    title: "Condomínio Comercial de Alto Padrão",
    category: "condominio",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "Modelo de gestão operacional focado em segurança robusta, eficiência energética e manutenção predial impecável.",
  },
  {
    id: "g6",
    title: "Residencial Frente Mar em BC",
    category: "condominio",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    description: "Gestão focada na preservação estrutural contra a maresia, controle rígido de portaria e valorização de alto luxo.",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "O que faz um Síndico Profissional?",
    answer: "O síndico profissional é um gestor externo especializado que assume as responsabilidades civis, criminais e administrativas do condomínio. Ele planeja o orçamento, gerencia funcionários, fiscaliza prestadores de serviços, garante a conservação do patrimônio e busca mediar conflitos de forma isenta e técnica.",
  },
  {
    id: "f2",
    question: "Qual a diferença entre um síndico morador e um síndico profissional?",
    answer: "A principal diferença é o preparo técnico e a isenção. O síndico profissional tem formação específica na área e lida com o condomínio de forma corporativa e profissional. Além disso, por não morar no local, ele garante total neutralidade nas decisões, evitando desgastes pessoais com vizinhos ou favoritismos.",
  },
  {
    id: "f3",
    question: "Como funciona a contratação do Alessandro Freccia como síndico profissional?",
    answer: "A contratação ocorre formalmente por meio de eleição em Assembleia Geral de Condôminos, conforme rege o Código Civil brasileiro. Antes disso, realizamos uma visita técnica e financeira preliminar para elaboração de uma proposta comercial que atenda à realidade e demandas específicas do seu condomínio.",
  },
  {
    id: "f4",
    question: "Qual a carga horária de visitas presenciais ao condomínio?",
    answer: "A carga horária é personalizada na proposta e estabelecida em contrato, variando de acordo com o tamanho e complexidade do condomínio (por exemplo, de 1 a 3 visitas semanais fixas de algumas horas, além do acompanhamento remoto permanente). Em situações emergenciais ou de grandes obras, realizamos visitas extras conforme necessário.",
  },
  {
    id: "f5",
    question: "Como é feita a prestação de contas mensal aos moradores?",
    answer: "A prestação de contas é totalmente transparente. Mensalmente, enviamos uma pasta física ou digital detalhada com todos os balancetes, extratos e comprovantes ao Conselho Fiscal para auditoria. Uma vez aprovada, o resumo da prestação de contas é disponibilizado digitalmente a todos os condôminos por meio do portal ou aplicativo da administradora parceira.",
  },
  {
    id: "f6",
    question: "O síndico profissional realiza a gestão financeira diretamente ou através de administradora?",
    answer: "Trabalhamos de forma integrada. A gestão técnica e a tomada de decisões financeiras (aprovação de pagamentos, seleção de orçamentos) são executadas por mim, enquanto as tarefas operacionais contábeis, como emissão de boletos, folha de pagamento e conciliação bancária de rotina, contam com o apoio da administradora parceira do condomínio.",
  },
  {
    id: "f7",
    question: "Como é feita a gestão e cobrança de inadimplência no condomínio?",
    answer: "Adotamos uma postura ágil e humanizada. Logo após o vencimento, são feitos contatos amigáveis e respeitosos para facilitação de acordos de parcelamento. Caso não haja evolução em prazo razoável, encaminhamos o débito para a assessoria jurídica especializada contratada pelo condomínio para as providências legais de cobrança judicial.",
  },
  {
    id: "f8",
    question: "Qual o papel do síndico profissional em obras de grande porte?",
    answer: "O síndico coordena todo o processo: desde o levantamento técnico das necessidades, cotações de engenharia com critérios claros, montagem de pastas de orçamentos para apresentação e votação em assembleia, até a posterior fiscalização do cronograma físico-financeiro da empreiteira vencedora, com apoio de profissionais especializados se a obra exigir.",
  },
  {
    id: "f9",
    question: "Como é a comunicação do Alessandro com os moradores e conselho?",
    answer: "A comunicação é ágil e contínua. Para o Conselho Consultivo e Fiscal, mantemos um grupo dinâmico de comunicação rápida para tomada de decisões diárias. Para os moradores em geral, utilizamos canais oficiais definidos (e-mail, aplicativo do condomínio, livro de ocorrências) e emitimos comunicados digitais periódicos para manter todos atualizados.",
  },
  {
    id: "f10",
    question: "Como o síndico profissional atua na redução de custos do condomínio?",
    answer: "Realizamos uma auditoria analítica nos primeiros 30 dias de gestão. Revisamos todos os contratos vigentes (segurança, elevadores, seguros, manutenção, etc.) para identificar cobranças indevidas e buscar renegociações em patamares mais competitivos. Também implantamos rotinas de eficiência energética, controle de água e automações para eliminar desperdícios.",
  },
  {
    id: "f11",
    question: "Em caso de emergências de noite ou final de semana, há suporte?",
    answer: "Sim, absolutamente. O condomínio recebe um plano de contingência claro com telefones de plantão das prestadoras de serviço homologadas (elevadores, bombas, portões, elétrica). Adicionalmente, oferecemos canais de contato emergencial com a equipe de gestão para que incidentes críticos de infraestrutura ou segurança sejam rapidamente intermediados e solucionados.",
  },
  {
    id: "f12",
    question: "Alessandro possui seguro de responsabilidade civil para síndicos?",
    answer: "Sim. Como síndico profissional de alto padrão, todas as nossas gestões contam com respaldo e coberturas de Seguro de Responsabilidade Civil Profissional para Síndicos, o que garante total segurança patrimonial e jurídica para o condomínio em caso de eventuais perdas decorrentes de atos administrativos involuntários.",
  },
  {
    id: "f13",
    question: "O síndico profissional interfere em problemas pessoais e conflitos entre vizinhos?",
    answer: "O papel do síndico é intervir quando a conduta de um morador interfere diretamente no sossego, saúde ou segurança coletiva e infringe o Regulamento Interno ou a Convenção. Nesses casos, aplicam-se advertências ou multas imparciais. Em desavenças estritamente pessoais entre vizinhos que não violam as regras do condomínio, atuamos como mediadores amigáveis para orientar a solução pacífica.",
  },
  {
    id: "f14",
    question: "Qual a abrangência geográfica de atendimento do Alessandro Freccia?",
    answer: "Atuamos focados de forma exclusiva em Balneário Camboriú - SC e Itajaí - Praia Brava. Essa concentração regional é essencial para garantir nossa presença física ágil, rápida e frequente em todos os condomínios sob nossa administração profissional.",
  },
  {
    id: "f15",
    question: "Como funciona a transição da atual gestão (síndico anterior) para a sua gestão?",
    answer: "A transição é realizada de forma profissional e tranquila. Nós cuidamos de tudo em conjunto com a administradora: fazemos a conferência minuciosa de toda a documentação legal, contratos, contas a pagar, senhas de sistemas, pastas de prestações de contas, laudos de engenharia e termos de vistoria para que a nova gestão inicie sem qualquer interrupção das atividades operacionais.",
  }
];
