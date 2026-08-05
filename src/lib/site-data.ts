export const CLINIC = {
  name: "Odonto Aurora",
  short: "Odonto Aurora",
  tagline: "Odontologia moderna e humanizada no Jardim Aurora, São Paulo",
  phone: "(11) 4002-8922",
  phoneHref: "tel:+551140028922",
  whatsapp: "5511940028922",
  whatsappMessage:
    "Olá! Vim pelo site da Odonto Aurora e gostaria de agendar uma consulta.",
  address: "Rua das Palmeiras, 245 — Jardim Aurora, São Paulo/SP — CEP 04567-000",
  hours: [{ day: "Segunda a Sexta", time: "08h às 18h" }],
};

export const whatsappLink = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(
  CLINIC.whatsappMessage,
)}`;

export function whatsappLinkFor(subject: string) {
  const message = `Olá! Gostaria de saber mais sobre ${subject} na Odonto Aurora.`;
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { id: "sobre", label: "A Clínica" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "tratamentos", label: "Tratamentos" },
  { id: "resultados", label: "Resultados" },
  { id: "tecnologia", label: "Tecnologia" },
  { id: "equipe", label: "Equipe" },
  { id: "faq", label: "Dúvidas" },
];

export const TRUST_BAR = [
  "Implantes Dentários",
  "Facetas Dentárias",
  "Invisalign",
  "Prótese Dentária",
  "Emergência Odontológica",
];

export const DIFERENCIAIS = [
  {
    title: "Atendimento humanizado",
    text: "Escuta atenta e explicação clara de cada etapa do seu tratamento.",
  },
  {
    title: "Tecnologia moderna",
    text: "Equipamentos digitais que trazem mais precisão, conforto e agilidade.",
  },
  {
    title: "Equipe especializada",
    text: "Profissionais qualificados dedicados a cada área da odontologia.",
  },
  {
    title: "Estrutura confortável",
    text: "Ambiente acolhedor, pensado para o seu bem-estar durante a visita.",
  },
  {
    title: "Planejamento personalizado",
    text: "Cada sorriso é único — o tratamento é desenhado para o seu caso.",
  },
  {
    title: "Localização privilegiada",
    text: "No coração do Jardim Aurora, de fácil acesso em São Paulo.",
  },
];

export type Procedimento = {
  slug: string;
  title: string;
  description: string;
};

export const PROCEDIMENTOS: Procedimento[] = [
  {
    slug: "implante-dentario",
    title: "Implante Dentário",
    description: "Substitui a raiz do dente com segurança e resultado natural.",
  },
  {
    slug: "facetas-dentarias",
    title: "Facetas Dentárias",
    description: "Lâminas finas que transformam a estética do seu sorriso.",
  },
  {
    slug: "invisalign",
    title: "Invisalign",
    description: "Alinhadores transparentes e removíveis, quase imperceptíveis.",
  },
  {
    slug: "aparelho-ortodontico",
    title: "Aparelho Ortodôntico",
    description: "Correção do alinhamento dentário com acompanhamento contínuo.",
  },
  {
    slug: "clareamento-dental",
    title: "Clareamento Dental",
    description: "Sorriso mais branco com técnicas seguras e eficazes.",
  },
  {
    slug: "limpeza-dental",
    title: "Limpeza Dental",
    description: "Profilaxia profissional para manter a saúde bucal em dia.",
  },
  {
    slug: "tratamento-de-canal",
    title: "Tratamento de Canal",
    description: "Trata a raiz do dente e elimina a dor com precisão.",
  },
  {
    slug: "protese-dentaria",
    title: "Prótese Dentária",
    description: "Recupera função e estética com prótese sob medida.",
  },
  {
    slug: "protese-protocolo",
    title: "Prótese Protocolo",
    description: "Reabilitação fixa sobre implantes para arcadas completas.",
  },
  {
    slug: "consulta-geral",
    title: "Consulta Geral",
    description: "Avaliação completa da sua saúde bucal com nossa equipe.",
  },
  {
    slug: "emergencia-odontologica",
    title: "Emergência Odontológica",
    description: "Atendimento rápido para dor e urgências odontológicas.",
  },
];

export const TECNOLOGIA = [
  {
    title: "Scanner Intraoral",
    text: "Moldagem digital em minutos, sem desconforto e com precisão micrométrica.",
  },
  {
    title: "Radiografia Digital",
    text: "Diagnóstico imediato na tela, com até 90% menos radiação.",
  },
  {
    title: "Planejamento Digital",
    text: "Você visualiza o resultado do seu sorriso antes de iniciar o tratamento.",
  },
  {
    title: "Impressão 3D",
    text: "Modelos, guias cirúrgicos e provisórios produzidos na própria clínica.",
  },
  {
    title: "Fotografia Odontológica",
    text: "Documentação profissional para acompanhar cada evolução do caso.",
  },
  {
    title: "Planejamento de Implantes",
    text: "Cirurgia guiada por tomografia, mais segura e previsível.",
  },
];

export const ETAPAS = [
  { step: "01", title: "Agendamento", text: "Fale com a nossa equipe pelo WhatsApp e escolha o melhor horário." },
  { step: "02", title: "Avaliação", text: "Exame clínico completo, radiografias digitais e escuta das suas queixas." },
  { step: "03", title: "Planejamento", text: "Plano de tratamento digital, com prazos, etapas e valores transparentes." },
  { step: "04", title: "Tratamento", text: "Execução com tecnologia, conforto e controle de dor em cada sessão." },
  { step: "05", title: "Acompanhamento", text: "Consultas de manutenção para manter o resultado por muitos anos." },
];

export const DEPOIMENTOS = [
  {
    name: "R. Almeida",
    role: "Avaliação no Google",
    text: "O Dr. Marcelo é um profissional excepcional, assim como toda a equipe da clínica. Atendimento de qualidade e muita confiança.",
  },
  {
    name: "Beatriz Nogueira",
    role: "Avaliação no Google",
    text: "Atendimento acolhedor desde a recepção e excelentes profissionais.",
  },
  {
    name: "Fernanda Rocha",
    role: "Avaliação no Google",
    text: "Atendimento e profissionalismo de primeira linha.",
  },
];

export const EQUIPE = [
  {
    name: "Implantodontia",
    role: "Cirurgia e reabilitação oral",
    bio: "Planejamento cuidadoso para implantes e próteses, com foco em segurança e resultado natural.",
  },
  {
    name: "Estética Dental",
    role: "Facetas e clareamento",
    bio: "Sorrisos naturais com técnicas modernas de facetas e clareamento dental.",
  },
  {
    name: "Ortodontia",
    role: "Aparelhos e Invisalign",
    bio: "Acompanhamento contínuo para o alinhamento ideal do seu sorriso.",
  },
  {
    name: "Odontologia Geral",
    role: "Consultas e emergências",
    bio: "Atendimento completo, da prevenção às urgências odontológicas.",
  },
];

export const FAQ = [
  {
    q: "Quanto custa uma consulta?",
    a: "A avaliação inicial inclui exame clínico e plano de tratamento digital, com valor informado pelo WhatsApp. Cada tratamento tem orçamento apresentado antes do início, sem surpresas.",
  },
  {
    q: "Vocês atendem convênio?",
    a: "Atendemos no formato particular. Confirme condições de pagamento com a nossa recepção pelo WhatsApp antes de agendar.",
  },
  {
    q: "Como funciona o implante?",
    a: "Um pino de titânio substitui a raiz do dente e recebe uma coroa personalizada. O planejamento é feito por tomografia, com anestesia local e recuperação tranquila.",
  },
  {
    q: "O clareamento dói?",
    a: "O protocolo atual utiliza dessensibilizantes que reduzem muito a sensibilidade. A maioria dos pacientes relata apenas leve sensação passageira nas primeiras horas.",
  },
  {
    q: "Quanto tempo dura um aparelho?",
    a: "Em média de 12 a 24 meses, variando conforme a complexidade do caso, a técnica escolhida e a colaboração nas manutenções.",
  },
  {
    q: "Posso parcelar?",
    a: "Sim. Trabalhamos com parcelamento facilitado, com condições definidas de acordo com o plano de tratamento.",
  },
  {
    q: "Como agendar?",
    a: "Basta clicar em qualquer botão de WhatsApp do site. Nossa equipe responde em poucos minutos durante o horário comercial.",
  },
];

export const STATS = [
  { value: 1200, suffix: "+", label: "avaliações no Google" },
  { value: 100, suffix: "%", label: "atendimento humanizado" },
  { value: 100, suffix: "%", label: "estrutura moderna" },
  { value: 100, suffix: "%", label: "tecnologia odontológica" },
];

export const SELOS = [
  "CRO-SP ativo",
  "Protocolos de biossegurança ANVISA",
  "Esterilização com autoclave rastreada",
  "Equipe em educação continuada",
];
