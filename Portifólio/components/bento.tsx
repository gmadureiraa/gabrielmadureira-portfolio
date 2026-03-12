"use client";

import Image from "next/image";
import { AnimatedBeamMultipleOutputs } from "@/components/animated-beam-multiple-outputs";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import BlurIn from "@/components/magicui/blur-in";
import { EmailForm } from "@/components/email-form";
import { FadeIn } from "@/components/magicui/fade-in";
import GlobeAndStars from "@/components/globe-and-stars";
import Hero from "@/components/hero";
import Marquee from "@/components/magicui/marquee";
import Technologies from "@/components/technologies";
import ThemeToggle from "@/components/theme-toggle";
import Orbit from "@/components/orbit";
import RetroGrid from "@/components/magicui/retro-grid";

import { cn } from "@/lib/utils";
import { defaultDomains } from "@/lib/data";
import { RippleCard } from "./ui/ripper-card";
import { motion } from "framer-motion";
import GitHubStars from "@/components/github-stars";
import ProjectPosts from "@/components/project-posts";
import Link from "next/link";

const features = [
  {
    Icon: "",
    name: "",
    description: "",
    href: "",
    cta: "",
    className: "col-span-3 md:col-span-2",
    background: (
      <>
        <div
          id="hero"
          className="absolute right-0 top-0 h-full w-full border-none transition-all duration-300 ease-out"
        >
          <Hero />
        </div>

        <div className="absolute right-0 top-0 z-50">
          <FadeIn direction="down">
            <ThemeToggle />
          </FadeIn>
        </div>
      </>
    ),
  },
  {
    Icon: "",
    name: "Eu sou o Madureira",
    description:
      "Empresário Full-Stack em Marketing para cripto e finanças: copywriter, estrategista e growth hacker.",
    className: "col-span-3 md:col-span-1",
    href: "",
    cta: "",
    background: (
      <div>
        <div className="absolute right-0 top-0 h-3/4 w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_50%)] group-hover:scale-105">
          <BlurIn duration={0.5} className="h-full">
            <Image
              className="object-cover object-center h-full w-full"
              src={
                process.env.AVATAR_URL ||
                "https://avatars.githubusercontent.com/u/129111669?v=4"
              }
              alt="imagem do avatar"
              width={200}
              height={200}
              priority // Load image immediately
              quality={75} // Adjust quality for optimization
              placeholder="blur" // Placeholder to improve perceived performance
              blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
            />
          </BlurIn>
        </div>

        <FadeIn
          direction="right"
          framerProps={{
            show: { transition: { delay: 1.5 } },
          }}
        >
          <div className="absolute top-2 right-2 bg-background rounded-lg px-4 py-2 text-xs text-neutral-500 dark:text-neutral-300 max-w-3/4 w-fit">
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full animate-pulse ${
                  process.env.NEXT_PUBLIC_AVAILABLE_FOR_FREELANCE == "true"
                    ? "bg-emerald-400"
                    : "bg-yellow-400"
                }`}
              ></div>
              <div className="">
                {process.env.NEXT_PUBLIC_AVAILABLE_FOR_FREELANCE == "true"
                  ? "disponível"
                  : "em projeto"}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    ),
  },

  {
    Icon: "",
    name: "Pensamentos",
    description: "",
    href: "/projects",
    cta: "Ver projetos",
    className: "col-span-3 md:col-span-1",
    background: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <Marquee
          className="absolute h-2/3 top-10 [--duration:40s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] w-full"
          pauseOnHover
        >
          {defaultDomains.map((f, idx) => (
            <a
              href={`/tags/${f.slug}`}
              key={idx}
              className={cn(
                "relative w-40 h-full cursor-pointer overflow-hidden rounded-xl border p-4 hover:-translate-y-1",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu transition-all duration-300 ease-out hover:blur-none"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-lg font-bold dark:text-white ">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </a>
          ))}
        </Marquee>
      </motion.div>
    ),
  },
  {
    Icon: "",
    name: "Full-Stack Marketing",
    description: "Um pouco sobre o meu trabalho como Full-Stack Marketing.",
    href: "/projects?area=Marketing",
    cta: "Ver projetos",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="absolute right-0 top-0 w-[80%] origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_70%)] md:[mask-image:linear-gradient(to_top,transparent_50%,#000_70%)] group-hover:-translate-y-5 group-hover:scale-105">
        <FadeIn direction="up">
          <div className="flex flex-wrap gap-4 justify-center items-center p-4">
            <Technologies
              customSlugs={[
                "bitcoin",
                "ethereum",
                "solana",
                "openai",
                "canva",
                "html5",
                "css3",
                "javascript",
                "react",
                "nextdotjs",
                "beehiiv",
                "medium",
                "substack",
                "notion",
                "googleanalytics",
                "obsidian",
                "linkedin",
                "x",
                "instagram",
                "youtube",
                "docker",
                "github",
                "gitlab",
                "mysql",
                "postgresql",
                "typescript",
                "tailwindcss",
                "vercel",
                "digitalocean",
                "amazonaws",
                "stripe",
                "svelte",
                "python",
                "django",
                "mongodb",
                "prisma",
                "huggingface",
                "tensorflow",
                "nodedotjs"
              ]}
            />
          </div>
        </FadeIn>
      </div>
    ),
  },
  {
    Icon: "",
    name: "Automação & Análise",
    description: "Ferramentas avançadas de automação, análise de dados e métricas para otimizar resultados.",
    href: "/projects?area=IA e Automações",
    cta: "Ver projetos",
    className: "col-span-3 md:col-span-2",
    background: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <AnimatedBeamMultipleOutputs className="absolute right-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] md:[mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105" />
      </motion.div>
    ),
  },
  {
    Icon: "",
    name: "Kaleidos",
    description: "Minha agência de marketing e IA.",
    className: "col-span-3 md:col-span-1",
    href: "https://kaleidos.com.br",
    cta: "Conheça a Kaleidos",
    background: (
      <div className="absolute w-full h-full right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_25%,#000_70%)] group-hover:scale-105">
        <Orbit />
        {/* Logo da Kaleidos no centro */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
            <Image 
              src="/Logos-11.svg" 
              alt="Kaleidos logo" 
              width={32} 
              height={32} 
              className="h-8 w-8"
            />
          </div>
        </div>
      </div>
    ),
  },



  {
    Icon: "",
    name: "Projetos",
    description:
      "Uma coleção dos meus projetos, estudos e pensamentos sobre tecnologia, marketing e criptomoedas.",
    className: "col-span-3 md:col-span-3",
    href: "/projects",
    cta: "Ver tudo",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[102%]">
        <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]">
            <div className="text-7xl font-semibold w-full flex justify-center items-center h-2/3 transition-all duration-300">
              <div className="flex items-center gap-2">
                <ProjectPosts />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    Icon: "",
    name: "",
    description: "",
    className: "col-span-3 md:col-span-1",
    href: "/now",
    cta: "Ideias",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[105%]">
        <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]">
            <RippleCard />
          </div>
        </div>
      </div>
    ),
  },

  {
    Icon: "",
    name: "",
    description: "",
    className: "col-span-3 md:col-span-2",
    href: "",
    cta: "",
    background: (
      <div
        id="contact-form"
        className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_0%)]"
      >
        <div className="absolute inset-0 z-50 flex justify-center items-center gap-5 p-5">
          <div className="max-w-sm w-full flex flex-col gap-2 overflow-y-auto">
            <div className="text-5xl md:text-6xl font-semibold text-neutral-700 dark:text-neutral-300 w-full flex justify-start">
              <BlurIn duration={0.5} className="h-full">
                Vamos conversar.
              </BlurIn>
            </div>
            <div className="w-full flex justify-center text-neutral-500 dark:text-neutral-400 text-sm">
              Deixe seu email para começarmos uma conversa. Vou entrar em contato em breve.
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              *Seu email nunca será compartilhado com ninguém.
            </div>
            <div className="">
              <EmailForm />
            </div>
            
            {/* Redes Sociais */}
            <div className="mt-4 pt-4 border-t border-neutral-700">
              <div className="text-xs text-neutral-400 mb-2 text-center">
                Ou conecte-se diretamente:
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com/madureira0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/madureira0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-madureira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <RetroGrid />
      </div>
    ),
  },
];

export function Bento() {
  return (
    <>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </>
  );
}
