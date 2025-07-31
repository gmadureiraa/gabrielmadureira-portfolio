"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchPosts } from "@/lib/fetchers";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import BlurIn from "@/components/magicui/blur-in";
import { FadeIn } from "@/components/magicui/fade-in";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ProjectsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const searchParams = useSearchParams();

  const projects = [
    {
      id: 1,
      title: "Jornal Cripto",
      description: "Plataforma de notícias e análise do mercado cripto. Fundado e desenvolvido como CEO, oferecendo conteúdo especializado e análises técnicas para investidores.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SEO", "Marketing Digital"],
      area: ["Crypto", "Marketing", "Programação e Dev", "IA e Automações"],
      status: "Ativo",
      slug: "jornal-cripto",
      image: "/images/thumbnail.png"
    },
    {
      id: 2,
      title: "Kaleidos Digital",
      description: "Agência digital especializada em marketing para criptomoedas e fintech. Cofundador e responsável por estratégias de crescimento e automação.",
      technologies: ["Marketing Digital", "Automação", "Copywriting", "SEO", "Analytics", "Growth Hacking"],
      area: ["Marketing", "IA e Automações", "Crypto"],
      status: "Ativo",
      slug: "kaleidos-digital",
      image: "/images/thumbnail.png"
    },
    {
      id: 3,
      title: "Defiverso",
      description: "Plataforma de conteúdo e estratégias para o mercado DeFi. Desenvolvimento de estratégias de marketing e copywriting especializado.",
      technologies: ["DeFi", "Copywriting", "Marketing Digital", "Content Strategy", "Social Media"],
      area: ["Crypto", "Marketing"],
      status: "Ativo",
      slug: "defiverso",
      image: "/images/thumbnail.png"
    },
    {
      id: 4,
      title: "Investidor 4.20 (Lucas Amendola)",
      description: "Copywriter estratégico para Lucas Amendola, criando conteúdo persuasivo e estratégias de marketing para o mercado de investimentos.",
      technologies: ["Copywriting", "Marketing Digital", "Investment", "Content Strategy", "Social Media"],
      area: ["Marketing", "Crypto"],
      status: "Ativo",
      slug: "investidor-420",
      image: "/images/thumbnail.png"
    },
    {
      id: 5,
      title: "Not Crypto Wallet Tracker",
      description: "Ferramenta de rastreamento de carteiras cripto para análise de mercado e estratégias de investimento.",
      technologies: ["Blockchain", "React", "TypeScript", "API Integration", "Analytics"],
      area: "Programação e Dev",
      status: "Ativo",
      slug: "not-crypto-wallet-tracker",
      image: "/images/thumbnail.png"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Site pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS. Design moderno e responsivo com animações suaves.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      area: "Programação e Dev",
      status: "Ativo",
      slug: "portfolio-website",
      image: "/images/thumbnail.png"
    },
    {
      id: 7,
      title: "Automações de Marketing e N8N",
      description: "Sistema de automação para marketing de criptomoedas usando N8N, incluindo gestão de redes sociais, análise de dados e estratégias de crescimento.",
      technologies: ["N8N", "Automation", "Marketing Digital", "API Integration", "Social Media", "Analytics"],
      area: "IA e Automações",
      status: "Ativo",
      slug: "automacoes-marketing-n8n",
      image: "/images/thumbnail.png"
    }
  ];

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchPosts();
      if (postsData?.postsData) {
        const formattedPosts = postsData.postsData.map((post: any) => ({
          id: `post-${post.slug}`,
          title: post.data.title,
          description: post.data.description,
          area: post.data.category || "Geral",
          date: post.data.date || "2024-01-01",
          slug: post.slug,
          image: post.data.image || "/images/thumbnail.png",
          technologies: [post.data.category || "Geral"]
        }));
        setPosts(formattedPosts);
      }
    };

    getPosts();
  }, []);

  // Inicializar filtros baseado nos parâmetros da URL
  useEffect(() => {
    const areaParam = searchParams.get('area');
    if (areaParam) {
      setSelectedAreas([areaParam]);
    }
  }, [searchParams]);

  useEffect(() => {
    const allItems = [...projects, ...posts];
    let filtered = allItems;

    if (selectedAreas.length > 0 && !selectedAreas.includes("Todos")) {
      // Modo AND: mostra apenas projetos que contêm TODAS as áreas selecionadas
      filtered = filtered.filter(item => {
        // Se o item tem apenas uma área (string), só deve aparecer se exatamente essa área estiver selecionada
        if (typeof item.area === 'string') {
          return selectedAreas.length === 1 && selectedAreas.includes(item.area);
        }
        // Se o item tem múltiplas áreas (array), verifica se contém todas as selecionadas
        if (Array.isArray(item.area)) {
          return selectedAreas.every(selectedArea => item.area.includes(selectedArea));
        }
        return false;
      });
    }

    setFilteredItems(filtered);
  }, [selectedAreas, posts]);

  const areas = ["Todos", "Crypto", "Marketing", "Programação e Dev", "IA e Automações"];

  const ProjectCard = ({ item, index }: { item: any; index: number }) => (
    <div
      className={cn(
        "col-span-1 md:col-span-1 lg:col-span-1",
        "group relative overflow-hidden rounded-xl border bg-background p-6 hover:shadow-xl transition-all duration-300",
        "border-neutral-800 hover:border-neutral-700"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-neutral-800/50" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-wrap gap-1">
            {Array.isArray(item.area) ? (
              item.area.slice(0, 2).map((area: string, idx: number) => (
                <span key={idx} className="text-xs text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded-full font-medium">
                  {area}
                </span>
              ))
            ) : (
              <span className="text-xs text-neutral-400 bg-neutral-800/50 px-3 py-1 rounded-full font-medium">
                {item.area}
              </span>
            )}
            {Array.isArray(item.area) && item.area.length > 2 && (
              <span className="text-xs text-neutral-500 px-2 py-1">
                +{item.area.length - 2}
              </span>
            )}
          </div>
          <span className="text-xs text-neutral-500 px-3 py-1 rounded-full font-medium">
            {item.status || "Ativo"}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-neutral-100 mb-3 group-hover:text-neutral-200 transition-colors">
          {item.title}
        </h3>
        
        <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
          {item.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {item.technologies.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="text-xs bg-neutral-800/50 text-neutral-300 px-2 py-1 rounded border border-neutral-700"
            >
              {tech}
            </span>
          ))}
          {item.technologies.length > 3 && (
            <span className="text-xs text-neutral-500 px-2 py-1">
              +{item.technologies.length - 3} mais
            </span>
          )}
        </div>
        
        <a
          href={item.slug.startsWith('posts/') ? `/${item.slug}` : `/projects/${item.slug}`}
          className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-neutral-200 transition-colors duration-200 font-medium"
        >
          Ver detalhes
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <div className="w-full flex items-center justify-center max-w-7xl mx-auto">
      <div className="flex flex-col items-center overflow-hidden w-full">
        <div className="w-full py-2 px-2 lg:py-10 lg:px-4">
          {/* Back Button */}
          <FadeIn direction="down" className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para home
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn direction="down" className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
              Projetos
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Uma coleção dos meus projetos, estudos e pensamentos sobre tecnologia, marketing digital e o que me der vontade.
            </p>
          </FadeIn>



          {/* Areas Filter */}
          <FadeIn direction="up" className="flex flex-wrap justify-center gap-3 mb-12">
            {areas.map((area, index) => (
              <button
                key={area}
                onClick={() => {
                  if (area === "Todos") {
                    setSelectedAreas([]);
                  } else {
                    setSelectedAreas(prev => 
                      prev.includes(area) 
                        ? prev.filter(a => a !== area)
                        : [...prev, area]
                    );
                  }
                }}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                  "border border-neutral-700 hover:border-neutral-600",
                  (selectedAreas.length === 0 && area === "Todos") || selectedAreas.includes(area)
                    ? "bg-white text-neutral-900 border-white shadow-lg font-semibold"
                    : "bg-neutral-900/50 text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-300"
                )}
              >
                {area}
              </button>
            ))}
          </FadeIn>



          {/* Projects Grid */}
          <FadeIn direction="up">
            <BentoGrid className="max-w-7xl mx-auto">
              {filteredItems.map((item, index) => (
                <ProjectCard key={item.id} item={item} index={index} />
              ))}
            </BentoGrid>
          </FadeIn>

          {filteredItems.length === 0 && (
            <FadeIn direction="up" className="text-center py-16">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 max-w-md mx-auto">
                <p className="text-neutral-400 text-lg mb-4">
                  Nenhum projeto encontrado para a área selecionada.
                </p>
                <button
                  onClick={() => setSelectedAreas([])}
                  className="text-neutral-300 hover:text-neutral-200 transition-colors"
                >
                  Ver todos os projetos
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
} 