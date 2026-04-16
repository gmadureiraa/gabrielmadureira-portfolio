"use client";

import React, { useState, useEffect, Suspense } from "react";
import { FadeIn } from "@/components/magicui/fade-in";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
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
  externalUrl?: string;
}

const PROJECT_ENTRIES: ContentItem[] = [
  {
    id: 7,
    title: "Kaleidos Digital",
    description: "Minha agência de marketing digital para cripto e fintech. Clientes incluem projetos de crypto, DeFi e fintech. O negócio que sustenta tudo.",
    technologies: ["Marketing", "IA", "Growth", "Copywriting"],
    area: ["Marketing", "Crypto"],
    status: "Ativo",
    slug: "kaleidos-digital",
    image: "/images/thumbnail.png",
    type: "Projeto",
    date: "2024-01-01",
    externalUrl: "https://kaleidos.com.br",
  },
  {
    id: 6,
    title: "KAI Kreator",
    description: "Criadores de conteúdo perdem horas organizando posts em planilhas. KAI automatiza o pipeline inteiro: da ideia à publicação, com IA que sugere horários, formatos e copy.",
    technologies: ["React", "TypeScript", "Supabase", "IA"],
    area: ["Programacao e Dev", "IA e Automacoes"],
    status: "Em desenvolvimento",
    slug: "kai-kreator",
    image: "/images/projects/kai-kreator.png",
    type: "Projeto",
    date: "2026-03-17",
  },
  {
    id: 4,
    title: "DeFi Radar",
    description: "Investidores cripto precisam de dados em tempo real para tomar decisões rápidas. DeFi Radar consolida preços, gas, movimentação de baleias e alertas em 16 páginas — tudo em um dashboard único.",
    technologies: ["React", "Three.js", "CoinGecko", "Recharts"],
    area: ["Programacao e Dev", "Crypto"],
    status: "Ativo",
    slug: "defi-radar",
    image: "/images/projects/defi-radar.png",
    type: "Projeto",
    date: "2026-03-25",
    externalUrl: "https://radar-blond-zeta.vercel.app",
  },
  {
    id: 3,
    title: "Kaleidos Pay",
    description: "Agências perdem tempo cobrando manualmente. Kaleidos Pay unifica PIX, cartão e cripto em um dashboard — cobranças recorrentes, gráficos de receita, zero planilha.",
    technologies: ["Next.js", "Supabase", "Asaas API", "MetaMask", "Recharts"],
    area: ["Programacao e Dev", "Crypto"],
    status: "Ativo",
    slug: "kaleidos-pay",
    image: "/images/projects/kaleidos-pay.png",
    type: "Projeto",
    date: "2026-03-28",
    externalUrl: "https://pay.kaleidos.com.br",
  },
  {
    id: 1,
    title: "Stable Vault",
    description: "Onde colocar stablecoins para render com segurança? Stable Vault compara rendimentos reais de dezenas de protocolos via DeFiLlama e sugere a estratégia ideal para seu perfil de risco.",
    technologies: ["Next.js", "TypeScript", "Recharts", "DeFiLlama API"],
    area: ["Programacao e Dev", "Crypto"],
    status: "Ativo",
    slug: "stable-vault",
    image: "/images/projects/stable-vault.png",
    type: "Projeto",
    date: "2026-04-05",
    externalUrl: "https://stable-vault.vercel.app",
  },
  {
    id: 9,
    title: "Jornal Cripto",
    description: "Portal de análise cripto que atingiu 10k visitas/mês organicamente. Newsletter 2x/semana com insights em tempo real. O projeto que me colocou no mapa do mercado cripto.",
    technologies: ["Next.js", "SEO", "Email Marketing", "n8n"],
    area: ["Crypto", "Marketing"],
    status: "Ativo",
    slug: "jornal-cripto",
    image: "/images/thumbnail.png",
    type: "Projeto",
    date: "2023-10-01",
  },
  {
    id: 2,
    title: "Folio — Wallet Tracker",
    description: "Gerenciar carteiras em 16 blockchains diferentes é caótico. Folio escaneia tudo, consolida preços reais, gráficos históricos, PnL e NFTs em um tracker com Smart Allocator por IA.",
    technologies: ["React", "TypeScript", "CoinGecko", "DeFiLlama", "Recharts"],
    area: ["Programacao e Dev", "Crypto"],
    status: "Ativo",
    slug: "wallet-tracker",
    image: "/images/projects/wallet-tracker.png",
    type: "Projeto",
    date: "2026-04-01",
    externalUrl: "https://wallet-tracker-orcin.vercel.app",
  },
  {
    id: 13,
    title: "Viral Hunter",
    description: "Encontrar tendências no YouTube antes da concorrência. Viral Hunter descobre vídeos virais por nicho, analisa thumbnails, sugere temas e monitora o que seus competidores estão fazendo.",
    technologies: ["React", "Supabase", "YouTube API", "Recharts"],
    area: ["Programacao e Dev", "Marketing"],
    status: "Ativo",
    slug: "viral-hunter",
    image: "/images/projects/viral-hunter.png",
    type: "Projeto",
    date: "2026-03-01",
  },
  {
    id: 5,
    title: "Rabito",
    description: "Manter hábitos é difícil sem feedback visual. Rabito transforma consistência em jogo: streaks, mood tracking, analytics e gamificação que fazem você voltar todo dia.",
    technologies: ["Next.js", "Zustand", "Recharts", "Framer Motion"],
    area: ["Programacao e Dev"],
    status: "Ativo",
    slug: "rabito",
    image: "/images/projects/rabito.png",
    type: "Projeto",
    date: "2026-04-05",
    externalUrl: "https://rabito-ashen.vercel.app",
  },
  {
    id: 14,
    title: "Postflow",
    description:
      "Criadores e times perdem tempo alternando entre planilhas, rascunhos e cada rede social. Postflow centraliza calendário, filas de conteúdo e automações para publicar com consistência.",
    technologies: ["Next.js", "TypeScript", "Supabase", "APIs sociais"],
    area: ["Programacao e Dev", "Marketing"],
    status: "Em desenvolvimento",
    slug: "postflow",
    image: "/images/projects/postflow.jpg",
    type: "Projeto",
    date: "2026-04-10",
  },
  {
    id: 8,
    title: "O Futuro do Trabalho Automático",
    description: "Um manifesto sobre o que acontece quando IA faz 90% do trabalho operacional. Escalabilidade, criação humana e por que Renda Básica Universal vai ser inevitável.",
    technologies: ["Ensaio", "IA", "Futuro", "UBI"],
    area: ["IA e Automacoes", "Programacao e Dev"],
    status: "Publicado",
    slug: "manifesto-ia",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    type: "Artigo",
    date: "2026-04-10",
  },
];

const PROJECT_TOTAL = PROJECT_ENTRIES.length;
const PROJETO_TOTAL = PROJECT_ENTRIES.filter((i) => i.type === "Projeto").length;
const ARTIGO_TOTAL = PROJECT_ENTRIES.filter((i) => i.type === "Artigo").length;

const TYPE_COLORS: Record<ItemType, string> = {
  Projeto: "bg-green-500/10 text-green-400 border-green-500/20",
  Artigo: "bg-purple-500/10 text-purple-400 border-purple-500/20",
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
  const [filteredItems, setFilteredItems] = useState<ContentItem[]>(PROJECT_ENTRIES);
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
    let filtered = PROJECT_ENTRIES;
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

  const areas = ["Marketing", "IA e Automacoes", "Crypto", "Programacao e Dev"];

  const getItemHref = (item: ContentItem) =>
    item.externalUrl ? item.externalUrl : `/projects/${item.slug}`;

  const getItemTarget = (item: ContentItem) =>
    item.externalUrl ? "_blank" : undefined;

  const getItemRel = (item: ContentItem) =>
    item.externalUrl ? "noopener noreferrer" : undefined;

  const getFirstArea = (item: ContentItem) =>
    Array.isArray(item.area) ? item.area[0] : item.area;

  // ── Grid card ──────────────────────────────────────────────────
  const GridCard = ({ item }: { item: ContentItem }) => (
    <div className={cn(
      "group flex flex-col overflow-hidden rounded-2xl border bg-background hover:shadow-xl hover:shadow-black/20 transition-all duration-300",
      "border-neutral-800 hover:border-neutral-600"
    )}>
      {item.image && (
        <div className="relative w-full aspect-[3/2] sm:aspect-[16/10] min-h-[200px] overflow-hidden border-b border-neutral-800 bg-neutral-950">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 34rem"
            priority={item.id === 7}
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6 relative z-10">
        <div className="flex items-start justify-between mb-4 gap-2">
          <div className="flex flex-wrap gap-1">
            <span className={cn("text-xs px-2 py-1 rounded-full flex items-center gap-1.5 font-semibold border", TYPE_COLORS[item.type])}>
              {item.type === "Artigo" ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              )}
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
        <p className="text-neutral-400 text-sm mb-4 line-clamp-3 flex-1">{item.description}</p>
        <div className="flex flex-wrap gap-1 mb-4 mt-auto">
          {item.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs bg-neutral-800/50 text-neutral-400 px-2 py-1 rounded border border-neutral-700/50">
              {tech}
            </span>
          ))}
          {item.technologies.length > 3 && (
            <span className="text-xs text-neutral-600 px-2 py-1">+{item.technologies.length - 3}</span>
          )}
        </div>
        <a href={getItemHref(item)} target={getItemTarget(item)} rel={getItemRel(item)} className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-medium mt-2">
          {item.externalUrl ? "Abrir link" : item.type === "Artigo" ? "Ler artigo" : "Ver projeto"}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {item.externalUrl ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            )}
          </svg>
        </a>
      </div>
    </div>
  );

  // ── List row ───────────────────────────────────────────────────
  const ListRow = ({ item }: { item: ContentItem }) => (
    <a
      href={getItemHref(item)}
      target={getItemTarget(item)}
      rel={getItemRel(item)}
      className={cn(
        "group flex items-center gap-3 px-3 sm:px-4 py-3 rounded-xl border transition-all duration-200",
        "border-neutral-800/60 hover:border-neutral-700 hover:bg-neutral-900/30 bg-transparent"
      )}
    >
      {item.image ? (
        <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-top"
            sizes="80px"
          />
        </div>
      ) : (
        <div className={cn("shrink-0 w-1 self-stretch min-h-[3.5rem] rounded-full bg-green-500/50")} />
      )}

      <h3 className="flex-1 text-sm sm:text-base font-medium text-neutral-300 group-hover:text-neutral-100 transition-colors line-clamp-2 sm:truncate">
        {item.title}
      </h3>

      <div className="flex items-center gap-2 shrink-0">
        <span className={cn("text-xs px-2 py-0.5 rounded-full border", TYPE_COLORS[item.type])}>
          {item.type}
        </span>
        <span className="text-xs text-neutral-600 hidden sm:block">{getFirstArea(item)}</span>
        <span className="text-xs text-neutral-600 w-20 text-right">
          {item.date
            ? new Date(item.date).toLocaleDateString("pt-BR", { month: "short", year: "numeric" })
            : item.status}
        </span>
      </div>

      <svg className="shrink-0 w-3.5 h-3.5 text-neutral-700 group-hover:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );

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
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
              {PROJETO_TOTAL}+ projetos. Em produção ou em evolução.
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              De dashboards DeFi a automação de conteúdo — cada item tem página, demo ou link para explorar.
            </p>
          </FadeIn>

          {/* Type filter + view toggle */}
          <FadeIn direction="up" className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            {/* Type pills */}
            <div className="flex gap-2 flex-wrap">
              {[
                { label: "Tudo", value: "Todos", count: PROJECT_TOTAL },
                { label: "Projetos", value: "Projeto", count: PROJETO_TOTAL },
                { label: "Artigos", value: "Artigo", count: ARTIGO_TOTAL },
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
              <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
                {filteredItems.map((item) => (
                  <GridCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-3 max-w-4xl mx-auto">
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
