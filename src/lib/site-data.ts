export const CLINIC = {
  name: "Odonto Aurora",
  short: "Odonto Aurora",
  tagline: "Odontologia contemporânea no Jardim Aurora, São Paulo",
  phone: "(11) 4002-8922",
  phoneHref: "tel:+551140028922",
  whatsapp: "5511940028922",
  whatsappMessage: "Olá! Vim pelo site da Odonto Aurora e gostaria de agendar uma avaliação.",
  address: "Rua das Palmeiras, 245 — Jardim Aurora, São Paulo/SP — CEP 04567-000",
  hours: [{ day: "Segunda a Sexta", time: "08h às 18h" }],
};

export const whatsappLink = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(CLINIC.whatsappMessage)}`;

export function whatsappLinkFor(subject: string) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${subject} na Odonto Aurora.`)}`;
}

export const NAV = [
  { id: "clinica", label: "A clínica" },
  { id: "tratamentos", label: "Tratamentos" },
  { id: "experiencia", label: "Experiência" },
  { id: "tecnologia", label: "Tecnologia" },
  { id: "especialistas", label: "Especialistas" },
  { id: "faq", label: "Dúvidas" },
];

export const PROCEDIMENTOS = [
  {
    slug: "implantes",
    number: "01",
    title: "Implantes dentários",
    description: "Reconstrução precisa, planejada para devolver segurança ao sorrir e mastigar.",
    detail: "Cirurgia guiada e reabilitação personalizada",
  },
  {
    slug: "protocolo",
    number: "02",
    title: "Protocolo sobre implantes",
    description: "Uma solução fixa para reabilitar a arcada com conforto, função e naturalidade.",
    detail: "Planejamento completo, do diagnóstico à prótese",
  },
  {
    slug: "facetas",
    number: "03",
    title: "Facetas & estética",
    description: "Proporção, textura e cor desenhadas com sutileza para preservar sua identidade.",
    detail: "Estética responsável e resultados naturais",
  },
  {
    slug: "invisalign",
    number: "04",
    title: "Alinhadores transparentes",
    description: "Movimentos planejados digitalmente em uma jornada discreta e confortável.",
    detail: "Previsibilidade em cada etapa",
  },
  {
    slug: "reabilitacao",
    number: "05",
    title: "Reabilitação oral",
    description: "Visão integrada para recuperar saúde, equilíbrio estético e qualidade de vida.",
    detail: "Cuidado multidisciplinar coordenado",
  },
];

export const TECNOLOGIA = [
  { title: "Scanner intraoral", text: "Imagens digitais detalhadas, sem moldagens convencionais." },
  {
    title: "Planejamento digital",
    text: "Decisões clínicas mais claras e visualização cuidadosa das etapas.",
  },
  { title: "Impressão 3D", text: "Guias e modelos produzidos com agilidade e alta precisão." },
  {
    title: "Cirurgia guiada",
    text: "Procedimentos planejados a partir da anatomia de cada paciente.",
  },
];

export const ETAPAS = [
  {
    step: "01",
    title: "Primeira conversa",
    text: "Entendemos sua história, suas prioridades e o que você deseja transformar.",
  },
  {
    step: "02",
    title: "Diagnóstico",
    text: "Exames e registros digitais revelam o cenário clínico com precisão.",
  },
  {
    step: "03",
    title: "Plano de cuidado",
    text: "Você recebe uma proposta clara, com possibilidades, etapas e investimento.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    text: "Conduzimos o tratamento e preservamos o resultado ao longo do tempo.",
  },
];

export const DEPOIMENTOS = [
  {
    name: "R. Almeida",
    role: "Avaliação publicada no Google",
    text: "Profissionalismo, cuidado e muita clareza durante todo o atendimento. A equipe me deixou segura em cada etapa.",
  },
  {
    name: "Beatriz Nogueira",
    role: "Avaliação publicada no Google",
    text: "A experiência foi acolhedora desde a recepção. Ambiente impecável e profissionais muito atenciosos.",
  },
  {
    name: "Fernanda Rocha",
    role: "Avaliação publicada no Google",
    text: "Um atendimento cuidadoso, pontual e transparente. Senti confiança desde a primeira consulta.",
  },
];

export const EQUIPE = [
  {
    name: "Implantodontia",
    role: "Cirurgia e reabilitação",
    bio: "Planejamento minucioso para reconstruções funcionais e naturais.",
  },
  {
    name: "Estética dental",
    role: "Facetas e clareamento",
    bio: "Estética responsável, guiada pela harmonia de cada rosto.",
  },
  {
    name: "Ortodontia",
    role: "Alinhadores e aparelhos",
    bio: "Movimentos precisos com acompanhamento próximo de toda a evolução.",
  },
  {
    name: "Clínica integrada",
    role: "Prevenção e cuidado contínuo",
    bio: "Uma visão completa da saúde bucal para decisões mais conscientes.",
  },
];

export const FAQ = [
  {
    q: "Como funciona a primeira avaliação?",
    a: "Começamos com uma conversa cuidadosa, exame clínico e, quando indicado, registros digitais. Depois, apresentamos possibilidades de tratamento com etapas e investimento claros.",
  },
  {
    q: "Vocês atendem convênio?",
    a: "O atendimento é particular. Nossa equipe pode orientar sobre formas de pagamento e documentação para solicitação de reembolso, quando aplicável.",
  },
  {
    q: "Os tratamentos podem ser parcelados?",
    a: "Sim. As condições são definidas de acordo com o plano de cuidado e apresentadas antes do início do tratamento.",
  },
  {
    q: "Como agendar uma avaliação?",
    a: "Clique em qualquer botão de agendamento e fale com a recepção pelo WhatsApp. Você poderá escolher o melhor dia e horário disponível.",
  },
];
