"use client";

import React, { useState, useEffect, Suspense } from "react";
import { BentoGrid } from "@/components/magicui/bento-grid";
import { FadeIn } from "@/components/magicui/fade-in";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type ItemType = "Projeto" | "Artigo";
type ViewMode = "grid" | "list";

interface ContentItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  area: string | string[];
  status?: string;
  slug: string;
  image: string;
  type: ItemType;
  date?: string;
}

const projects: ContentItem[] = [
  {
    id: 1,
    title: "Kaleidos Digital",
    description: "Agência de marketing digital especializada em cripto e web3. R$602k faturados em 2025. Clientes como Crypto.com, Mercado Bitcoin e Ledger. Em transição para consultoria boutique de alto ticket em 2026.",
    technologies: ["Marketing Digital", "IA e Automação", "Copywriting", "Growth Hacking", "Analytics"],
    area: ["Marketing", "IA e Automações", "Crypto"],
    status: "Ativo",
    slug: "kaleidos-digital",
    image: "/images/thumbnail.png",
    type: "Projeto",
  },
  {
    id: 2,
    title: "KAI APP",
    description: "Plataforma SaaS de gestão de marketing com IA. Backend em Supabase, frontend em Next.js. Sistema de planejamento, biblioteca de conteúdo, automações e métricas por cliente.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "IA", "Python"],
    area: ["Programação e Dev", "IA e Automações", "Marketing"],
    status: "Em desenvolvimento",
    slug: "kaleidos-digital",
    image: "/images/thumbnail.png",
    type: "Projeto",
  },
  {
    id: 3,
    title: "GOS — Gabriel Operating System",
    description: "Sistema operacional pessoal: vault Obsidian + Claude Code + agentes AGNO. Gerencia clientes, projetos, conteúdo e automações. O próprio site que você está visitando é um produto do GOS.",
    technologies: ["Obsidian", "Claude Code", "Python", "AGNO", "TypeScript", "MCP Servers"],
    area: ["IA e Automações", "Programação e Dev"],
    status: "Ativo",
    slug: "automacoes-marketing-n8n",
    image: "/images/thumbnail.png",
    type: "Projeto",
  },
  {
    id: 4,
    title: "Jornal Cripto",
    description: "Portal de análise e educação financeira em cripto. 10k visitas/mês no pico, 16+ meses de operação. Pivotou de notícias para análise profunda. Foco atual: 1.000 subscribers de email.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Email Marketing"],
    area: ["Crypto", "Marketing", "Programação e Dev"],
    status: "Ativo",
    slug: "jornal-cripto",
    image: "/images/thumbnail.png",
    type: "Projeto",
  },
  {
    id: 5,
    title: "Defiverso",
    description: "Comunidade e plataforma de educação em DeFi. Conteúdo, estratégias e análise para o mercado de finanças descentralizadas.",
    technologies: ["DeFi", "Copywriting", "Marketing Digital", "Content Strategy", "Social Media"],
    area: ["Crypto", "Marketing"],
    status: "Ativo",
    slug: "defiverso",
    image: "/images/thumbnail.png",
    type: "Projeto",
  },
  {
    id: 6,
    title: "Not Crypto Wallet Tracker",
    description: "Ferramenta de rastreamento de carteiras cripto. Integração com múltiplas chains, análise de portfólio e alertas de movimentação.",
    technologies: ["Blockchain", "React", "TypeScript", "API Integration", "Analytics"],
    area: ["Programação e Dev", "Crypto"],
    status: "Ativo",
    slug: "not-crypto-wallet-tracker",
    image: "/images/thumbnail.png",
    type: "Projeto",
  },
  {
    id: 7,
    title: "Automações com Claude Code e AGNO",
    description: "Sistema multi-agente especializado: 13 agentes (dev, copy, strategy, marketing, research, seo...) + times orquestrados. Elimina trabalho operacional repetitivo da agência.",
    technologies: ["Python", "AGNO", "Claude API", "MCP", "Automação", "Multi-agent"],
    area: ["IA e Automações", "Programação e Dev"],
    status: "Ativo",
    slug: "automacoes-marketing-n8n",
    image: "/images/thumbnail.png",
    type: "Projeto",
  },
  {
    id: 101,
    title: "Context Engineering: como gerencio 5 clientes com 1 pessoa e IA",
    description: "Não é sobre o prompt. É sobre o contexto que você dá para a IA antes do prompt. Como estruturo o trabalho da Kaleidos com context engineering.",
    technologies: ["Context Engineering", "Claude", "Produtividade", "IA"],
    area: ["IA e Automações", "Marketing"],
    status: "Publicado",
    slug: "context-engineering-gestao-5-clientes",
    image: "/images/thumbnail.png",
    type: "Artigo",
    date: "2026-03-10",
  },
  {
    id: 102,
    title: "5 Skills do Claude que me economizam 16 horas por semana",
    description: "Não uso o Claude como chatbot — uso como sistema de agentes. Aqui estão as 5 skills que mais eliminaram trabalho repetitivo da minha semana.",
    technologies: ["Claude Code", "Skills", "Automação", "Produtividade"],
    area: ["IA e Automações"],
    status: "Publicado",
    slug: "5-skills-claude-que-usam-menos-tempo",
    image: "/images/thumbnail.png",
    type: "Artigo",
    date: "2026-03-05",
  },
  {
    id: 103,
    title: "Meta vai automatizar 100% dos anúncios. O que isso muda?",
    description: "Zuckerberg quer automatizar completamente a criação de anúncios. Não é sobre substituir pessoas — é sobre o que muda na sua estratégia.",
    technologies: ["Meta Ads", "Automação", "Marketing Digital", "IA"],
    area: ["Marketing", "IA e Automações"],
    status: "Publicado",
    slug: "meta-ads-100-automacao-o-que-isso-significa",
    image: "/images/thumbnail.png",
    type: "Artigo",
    date: "2026-03-01",
  },
  {
    id: 104,
    title: "R$602k de faturamento e uma crise de identidade de agência",
    description: "2025 foi o melhor ano financeiro da Kaleidos. E o ano em que percebi que o modelo não escala. O que aprendi e para onde vamos em 2026.",
    technologies: ["Agência", "Negócios", "Escalabilidade", "Estratégia"],
    area: ["Marketing"],
    status: "Publicado",
    slug: "kaleidos-r602k-o-que-aprendi",
    image: "/images/thumbnail.png",
    type: "Artigo",
    date: "2026-02-15",
  },
  {
    id: 105,
    title: "16 meses, 10k visitas/mês e o fracasso que mais me ensinou",
    description: "Criei o Jornal Cripto, cheguei a 10k visitas/mês, postei 5x/semana durante meses — e quase abandonei tudo. O que aprendi sobre distribuição e posicionamento.",
    technologies: ["Content Marketing", "SEO", "Distribuição", "Posicionamento"],
    area: ["Marketing", "Crypto"],
    status: "Publicado",
    slug: "jornal-cripto-16-meses-fracasso",
    image: "/images/thumbnail.png",
    type: "Artigo",
    date: "2026-01-20",
  },
];

const TYPE_COLORS: Record<ItemType, string> = {
  Projeto: "bg-green-500/10 text-green-400 border-green-500/20",
  Artigo: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

function GridIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function ProjectsContent() {
  const [filteredItems, setFilteredItems] = useState<ContentItem[]>(projects);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("Todos");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const searchParams = useSearchParams();

  useEffect(() => {
    const areaParam = searchParams.get("area");
    if (areaParam) setSelectedAreas([areaParam]);
    const typeParam = searchParams.get("type");
    if (typeParam) setSelectedType(typeParam);
  }, [searchParams]);

  useEffect(() => {
    let filtered = projects;
    if (selectedType !== "Todos") {
      filtered = filtered.filter((item) => item.type === selectedType);
    }
    if (selectedAreas.length > 0) {
      filtered = filtered.filter((item) => {
        if (typeof item.area === "string") return selectedAreas.length === 1 && selectedAreas.includes(item.area);
        if (Array.isArray(item.area)) return selectedAreas.every((a) => item.area.includes(a));
        return false;
      });
    }
    setFilteredItems(filtered);
  }, [selectedAreas, selectedType]);

  const areas = ["Marketing", "IA e Automações", "Crypto", "Programação e Dev"];

  const getItemHref = (item: ContentItem) =>
    item.type === "Artigo" ? `/posts/${item.slug}` : `/projects/${item.slug}`;

  const getFirstArea = (item: ContentItem) =>
    Array.isArray(item.area) ? item.area[0] : item.area;

  // ── Grid card ──────────────────────────────────────────────────
  const GridCard = ({ item }: { item: ContentItem }) => (
    <div className={cn(
      "group relative overflow-hidden rounded-xl border bg-background p-6 hover:shadow-xl transition-all duration-300",
      "border-neutral-800 hover:border-neutral-700"
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-neutral-800/50" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4 gap-2">
          <div className="flex flex-wrap gap-1">
            <span className={cn("text-xs px-2 py-1 rounded-full font-semibold border", TYPE_COLORS[item.type])}>
              {item.type}
            </span>
            <span className="text-xs text-neutral-500 bg-neutral-800/50 px-2 py-1 rounded-full">
              {getFirstArea(item)}
            </span>
          </div>
          <span className="text-xs text-neutral-600 shrink-0">
            {item.date
              ? new Date(item.date).toLocaleDateString("pt-BR", { month: "short", year: "numeric" })
              : item.status}
          </span>
        </div>
        <h3 className="text-lg font-bold text-neutral-100 mb-3 group-hover:text-neutral-200 transition-colors leading-snug">
          {item.title}
        </h3>
        <p className="text-neutral-400 text-sm mb-4 line-clamp-3">{item.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {item.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs bg-neutral-800/50 text-neutral-400 px-2 py-1 rounded border border-neutral-700/50">
              {tech}
            </span>
          ))}
          {item.technologies.length > 3 && (
            <span className="text-xs text-neutral-600 px-2 py-1">+{item.technologies.length - 3}</span>
          )}
        </div>
        <a href={getItemHref(item)} className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-medium">
          {item.type === "Artigo" ? "Ler artigo" : "Ver detalhes"}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );

  // ── List row ───────────────────────────────────────────────────
  const ListRow = ({ item }: { item: ContentItem }) => (
    <a
      href={getItemHref(item)}
      className={cn(
        "group flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200",
        "border-neutral-800/60 hover:border-neutral-700 hover:bg-neutral-900/30 bg-transparent"
      )}
    >
      <div className={cn(
        "shrink-0 w-0.5 self-stretch rounded-full",
        item.type === "Artigo" ? "bg-pink-500/50" : "bg-green-500/50"
      )} />

      <h3 className="flex-1 text-sm font-medium text-neutral-300 group-hover:text-neutral-100 transition-colors truncate">
        {item.title}
      </h3>

      <div className="flex items-center gap-2 shrink-0">
        <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium border", TYPE_COLORS[item.type])}>
          {item.type}
        </span>
        <span className="text-xs text-neutral-600 hidden sm:block">
          {getFirstArea(item)}
        </span>
        <span className="text-xs text-neutral-600 w-20 text-right">
          {item.date
            ? new Date(item.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })
            : item.status}
        </span>
      </div>

      <svg className="shrink-0 w-3.5 h-3.5 text-neutral-700 group-hover:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );

  const projectCount = projects.filter((p) => p.type === "Projeto").length;
  const articleCount = projects.filter((p) => p.type === "Artigo").length;

  return (
    <div className="w-full flex items-center justify-center max-w-7xl mx-auto">
      <div className="flex flex-col items-center overflow-hidden w-full">
        <div className="w-full py-2 px-2 lg:py-10 lg:px-4">

          {/* Back */}
          <FadeIn direction="down" className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para home
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn direction="down" className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">Building.</h1>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              O que estou construindo, o que aprendi e o que penso.
            </p>
          </FadeIn>

          {/* Type filter + view toggle */}
          <FadeIn direction="up" className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            {/* Type pills */}
            <div className="flex gap-2 flex-wrap">
              {[
                { label: "Tudo", value: "Todos", count: projects.length },
                { label: "Projetos", value: "Projeto", count: projectCount },
                { label: "Artigos", value: "Artigo", count: articleCount },
              ].map(({ label, value, count }) => (
                <button
                  key={value}
                  onClick={() => { setSelectedType(value); setSelectedAreas([]); }}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border flex items-center gap-1.5",
                    selectedType === value
                      ? "bg-white text-neutral-900 border-white shadow font-semibold"
                      : "bg-neutral-900/50 text-neutral-400 border-neutral-700 hover:border-neutral-600 hover:text-neutral-300"
                  )}
                >
                  {label}
                  <span className={cn(
                    "text-xs px-1.5 py-0.5 rounded-full",
                    selectedType === value ? "bg-neutral-200 text-neutral-700" : "bg-neutral-800 text-neutral-500"
                  )}>
                    {count}
                  </span>
                </button>
              ))}
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-1.5 rounded-md transition-all duration-200",
                  viewMode === "grid"
                    ? "bg-neutral-700 text-neutral-100"
                    : "text-neutral-500 hover:text-neutral-300"
                )}
                title="Visualização em grade"
              >
                <GridIcon />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-1.5 rounded-md transition-all duration-200",
                  viewMode === "list"
                    ? "bg-neutral-700 text-neutral-100"
                    : "text-neutral-500 hover:text-neutral-300"
                )}
                title="Visualização em lista"
              >
                <ListIcon />
              </button>
            </div>
          </FadeIn>

          {/* Area filter */}
          <FadeIn direction="up" className="flex flex-wrap gap-2 mb-8">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() =>
                  setSelectedAreas((prev) =>
                    prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
                  )
                }
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border",
                  selectedAreas.includes(area)
                    ? "bg-neutral-700 text-neutral-100 border-neutral-600"
                    : "bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-700 hover:text-neutral-400"
                )}
              >
                {area}
              </button>
            ))}
          </FadeIn>

          {/* Content */}
          <FadeIn direction="up">
            {viewMode === "grid" ? (
              <BentoGrid className="max-w-7xl mx-auto">
                {filteredItems.map((item) => (
                  <GridCard key={item.id} item={item} />
                ))}
              </BentoGrid>
            ) : (
              <div className="flex flex-col gap-2 max-w-4xl mx-auto">
                {filteredItems.map((item) => (
                  <ListRow key={item.id} item={item} />
                ))}
              </div>
            )}
          </FadeIn>

          {filteredItems.length === 0 && (
            <FadeIn direction="up" className="text-center py-16">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 max-w-md mx-auto">
                <p className="text-neutral-400 mb-4">Nenhum item encontrado.</p>
                <button
                  onClick={() => { setSelectedAreas([]); setSelectedType("Todos"); }}
                  className="text-neutral-300 hover:text-neutral-200 transition-colors text-sm"
                >
                  Ver tudo
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <div className="w-full flex items-center justify-center py-20">
        <div className="animate-pulse text-neutral-600">Carregando...</div>
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}
