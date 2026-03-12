"use client";

import { useState, useEffect } from "react";
import ProjectShowcaseVertical from "@/components/project-showcase-vertical";

const allItems = [
  {
    name: "Kaleidos Digital",
    body: "Agência de marketing digital em cripto e web3. R$602k em 2025.",
    slug: "kaleidos-digital",
    image: "/images/thumbnail.png",
    area: "Marketing",
    type: "Projeto",
  },
  {
    name: "KAI APP",
    body: "Plataforma SaaS de gestão de marketing com IA.",
    slug: "kaleidos-digital",
    image: "/images/thumbnail.png",
    area: "IA e Automações",
    type: "Projeto",
  },
  {
    name: "GOS — Gabriel Operating System",
    body: "Sistema operacional pessoal com Claude Code e AGNO.",
    slug: "automacoes-marketing-n8n",
    image: "/images/thumbnail.png",
    area: "IA e Automações",
    type: "Projeto",
  },
  {
    name: "Jornal Cripto",
    body: "Portal de análise cripto. 10k visitas/mês no pico.",
    slug: "jornal-cripto",
    image: "/images/thumbnail.png",
    area: "Crypto",
    type: "Projeto",
  },
  {
    name: "Context Engineering",
    body: "Como gerencio 5 clientes com 1 pessoa e IA.",
    slug: "context-engineering-gestao-5-clientes",
    image: "/images/thumbnail.png",
    area: "IA e Automações",
    type: "Artigo",
  },
  {
    name: "Meta Ads 100% automatizado",
    body: "O que muda quando a IA cria os seus anúncios.",
    slug: "meta-ads-100-automacao-o-que-isso-significa",
    image: "/images/thumbnail.png",
    area: "Marketing",
    type: "Artigo",
  },
  {
    name: "R$602k e uma crise de agência",
    body: "O melhor ano financeiro e o modelo que não escala.",
    slug: "kaleidos-r602k-o-que-aprendi",
    image: "/images/thumbnail.png",
    area: "Marketing",
    type: "Artigo",
  },
];

const ProjectPosts = () => {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    const shuffled = [...allItems].sort(() => 0.5 - Math.random());
    setFiles(shuffled.slice(0, 6));
  }, []);

  return <ProjectShowcaseVertical projects={files} />;
};

export default ProjectPosts;
