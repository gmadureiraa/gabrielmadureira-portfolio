// ProjectPosts.tsx

"use client";

import { useState, useEffect } from "react";
import ProjectShowcaseVertical from "@/components/project-showcase-vertical";

const ProjectPosts = () => {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    // Projetos hardcoded - apenas seus projetos reais
    const hardcodedProjects = [
      {
        name: "Jornal Cripto",
        body: "Plataforma de notícias e análise do mercado cripto. Fundado e desenvolvido como CEO, oferecendo conteúdo especializado e análises técnicas para investidores.",
        slug: "jornal-cripto",
        image: "/images/thumbnail.png",
        area: "Crypto"
      },
      {
        name: "Kaleidos Digital",
        body: "Agência digital especializada em marketing para criptomoedas e fintech. Cofundador e responsável por estratégias de crescimento e automação.",
        slug: "kaleidos-digital",
        image: "/images/thumbnail.png",
        area: "Marketing"
      },
      {
        name: "Defiverso",
        body: "Plataforma de conteúdo e estratégias para o mercado DeFi. Desenvolvimento de estratégias de marketing e copywriting especializado.",
        slug: "defiverso",
        image: "/images/thumbnail.png",
        area: "Crypto"
      },
      {
        name: "Investidor 4.20",
        body: "Copywriter estratégico para Lucas Amendola, criando conteúdo persuasivo e estratégias de marketing para o mercado de investimentos.",
        slug: "investidor-420",
        image: "/images/thumbnail.png",
        area: "Marketing"
      },
      {
        name: "Not Crypto Wallet Tracker",
        body: "Ferramenta de rastreamento de carteiras cripto para análise de mercado e estratégias de investimento.",
        slug: "not-crypto-wallet-tracker",
        image: "/images/thumbnail.png",
        area: "Programação e Dev"
      },
      {
        name: "Portfolio Website",
        body: "Site pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS. Design moderno e responsivo com animações suaves.",
        slug: "portfolio-website",
        image: "/images/thumbnail.png",
        area: "Programação e Dev"
      },
      {
        name: "Automações de Marketing e N8N",
        body: "Sistema de automação para marketing de criptomoedas usando N8N, incluindo gestão de redes sociais, análise de dados e estratégias de crescimento.",
        slug: "automacoes-marketing-n8n",
        image: "/images/thumbnail.png",
        area: "IA e Automações"
      }
    ];

    // Misturar e pegar os primeiros 6 projetos
    const shuffled = hardcodedProjects.sort(() => 0.5 - Math.random());
    setFiles(shuffled.slice(0, 6));
  }, []);

  return <ProjectShowcaseVertical projects={files} />;
};

export default ProjectPosts;
