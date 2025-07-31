import React from "react";
import Image from "next/image";

function SkillBar({ skill, level }: { skill: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-neutral-200">{skill}</span>
        <span className="text-sm text-neutral-400">{level}%</span>
      </div>
      <div className="w-full bg-neutral-800 rounded-full h-2">
        <div
          className="bg-neutral-600 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function SobreMim() {
  const skills = [
    { skill: "Copywriting", level: 95 },
    { skill: "SEO", level: 90 },
    { skill: "React", level: 85 },
    { skill: "Cripto Marketing", level: 92 },
    { skill: "Design", level: 80 },
    { skill: "Automação", level: 75 },
  ];

  const experiences = [
    {
      company: "Kaleidos Digital",
      role: "Cofundador",
      period: "Set 2023 - Presente",
      duration: "1 ano 11 meses",
      description: "Cofundador da agência digital especializada em marketing para criptomoedas e fintech.",
      type: "Tempo integral"
    },
    {
      company: "Jornal Cripto",
      role: "Fundador e CEO",
      period: "Out 2022 - Presente",
      duration: "2 anos 10 meses",
      description: "Fundador e CEO do Jornal Cripto, plataforma de notícias e análise do mercado cripto.",
      type: "Remota"
    },
    {
      company: "Mercado Bitcoin",
      role: "Redator e Copywriter",
      period: "Jul 2023 - Jan 2025",
      duration: "1 ano 7 meses",
      description: "Redator e copywriter especializado em conteúdo para o maior exchange de criptomoedas do Brasil.",
      type: "Tempo integral"
    },
    {
      company: "Crypto.com",
      role: "Copywriter Social Media",
      period: "2023 - 2024",
      duration: "1 ano",
      description: "Copywriter para redes sociais da Crypto.com, criando conteúdo estratégico para o mercado brasileiro.",
      type: "Freelance"
    },
    {
      company: "Defiverso e Investidor 4.20",
      role: "Copywriter Estratégista",
      period: "2023 - 2024",
      duration: "1 ano",
      description: "Copywriter estratégico para Lucas Amendola, criando conteúdo persuasivo para o mercado de investimentos.",
      type: "Freelance"
    },
    {
      company: "Orlando On Crypto",
      role: "Copywriter",
      period: "Ago 2023 - Set 2024",
      duration: "1 ano 2 meses",
      description: "Copywriter especializado em conteúdo cripto para Orlando On Crypto.",
      type: "Freelance"
    },
    {
      company: "Trevo Digital",
      role: "Líder de Projetos",
      period: "Mai 2023 - Jul 2023",
      duration: "3 meses",
      description: "Liderança de projetos digitais e estratégias de marketing para clientes diversos.",
      type: "Tempo integral"
    },
    {
      company: "CriptoFacil",
      role: "Redator",
      period: "Out 2022 - Jul 2023",
      duration: "10 meses",
      description: "Redator freelancer especializado em estratégia digital e conteúdo sobre criptomoedas.",
      type: "Freelance"
    },
    {
      company: "Grupo CriptoNinja",
      role: "Copywriter",
      period: "Ago 2022 - Jul 2023",
      duration: "1 ano",
      description: "Copywriter para o Grupo CriptoNinja, criando conteúdo estratégico para o mercado cripto.",
      type: "Meio período"
    },
    {
      company: "CopyFinance",
      role: "CEO",
      period: "Ago 2022 - Jul 2023",
      duration: "1 ano",
      description: "CEO da CopyFinance, empresa especializada em copywriting para o mercado financeiro.",
      type: "Tempo integral"
    },
    {
      company: "Unifesp - Universidade Federal de São Paulo",
      role: "Estudante de Graduação",
      period: "Mar 2019 - Jul 2023",
      duration: "4 anos 5 meses",
      description: "Graduação em São José dos Campos, São Paulo.",
      type: "Tempo integral"
    },
    {
      company: "Loja Green Habit",
      role: "Criador e Diretor",
      period: "Jan 2020 - Dez 2021",
      duration: "2 anos",
      description: "Criador e gerente da Loja Green Habit, responsável pelo desenvolvimento do site e gerenciamento de estoque.",
      type: "Meio período"
    },
    {
      company: "Enactus Unifesp São José dos Campos",
      role: "Diretor de Marketing",
      period: "Jan 2020 - Jan 2021",
      duration: "1 ano 1 mês",
      description: "Diretor de marketing responsável por criação de conteúdo criativo e liderança de equipe.",
      type: "Meio período"
    }
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="max-w-6xl w-full space-y-8">
        {/* Hero Section */}
        <div className="bg-background rounded-xl shadow-lg p-8 border border-neutral-800">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h6 className="text-sm font-light text-neutral-100/50 mb-2">bem-vindo</h6>
              <h1 className="text-3xl font-bold text-neutral-100 mb-4">
                Eu sou o <span className="text-neutral-300">Madureira</span>
              </h1>
              
              <p className="text-base font-light text-neutral-300 leading-relaxed mb-6">
                Full-Stack Marketer para o mercado Cripto/financeiro. Copywriter e marketing com foco em conteúdo, 
                desenvolvimento web, design e um pouco mais...
              </p>
              
              <div className="flex gap-3 mb-6">
                <a href="https://www.instagram.com/ogabrielmadureira/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-neutral-800 hover:bg-neutral-700 rounded-lg p-3 transition-all duration-200 hover:scale-105 border border-neutral-700">
                    <svg className="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </button>
                </a>
                <a href="https://x.com/madureira_eth" target="_blank" rel="noopener noreferrer">
                  <button className="bg-neutral-800 hover:bg-neutral-700 rounded-lg p-3 transition-all duration-200 hover:scale-105 border border-neutral-700">
                    <svg className="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-madureira/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-neutral-800 hover:bg-neutral-700 rounded-lg p-3 transition-all duration-200 hover:scale-105 border border-neutral-700">
                    <svg className="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </a>
                <button className="bg-neutral-800 hover:bg-neutral-700 rounded-lg p-3 transition-all duration-200 hover:scale-105 border border-neutral-700">
                  <svg className="w-5 h-5 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="https://avatars.githubusercontent.com/u/129111669?v=4"
                alt="Gabriel Madureira profile image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Skills and Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          <div className="bg-background rounded-xl shadow-lg p-6 border border-neutral-800">
            <h2 className="text-xl font-bold mb-6 text-neutral-100">Habilidades Técnicas</h2>
            {skills.map((s) => (
              <SkillBar key={s.skill} skill={s.skill} level={s.level} />
            ))}
          </div>

          {/* Technologies */}
          <div className="bg-background rounded-xl shadow-lg p-6 border border-neutral-800">
            <h2 className="text-xl font-bold mb-6 text-neutral-100">Tecnologias</h2>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">Bitcoin</span>
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">Ethereum</span>
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">React</span>
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">Next.js</span>
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">TypeScript</span>
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">Tailwind CSS</span>
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">SEO</span>
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">Copywriting</span>
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">Canva</span>
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">Notion</span>
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">Analytics</span>
              <span className="bg-neutral-800 px-3 py-2 rounded-lg text-center border border-neutral-700">Automação</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-background rounded-xl shadow-lg p-6 border border-neutral-800">
          <h2 className="text-xl font-bold mb-6 text-neutral-100">Experiência Profissional</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-neutral-600 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold text-neutral-200">{exp.role}</h3>
                  <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                    {exp.type}
                  </span>
                </div>
                <h4 className="font-medium text-neutral-300 mb-1">{exp.company}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <span className="text-sm text-neutral-400">{exp.period}</span>
                  <span className="text-xs text-neutral-500">•</span>
                  <span className="text-sm text-neutral-400">{exp.duration}</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Let's get to work! Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-background rounded-xl shadow-lg p-6 border border-neutral-800">
            <h2 className="text-2xl font-bold mb-6 text-neutral-100">Let's get to work!</h2>
            
            {/* Contact Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-neutral-200">Detalhes de Contato</h3>
              <a 
                href="mailto:contato@gabrielmadureira.com"
                className="inline-flex items-center gap-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-4 py-3 rounded-lg transition-colors duration-200 border border-neutral-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                email me
              </a>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-neutral-200">Redes Sociais</h3>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://linkedin.com/in/gabrielmadureira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-3 py-2 rounded-lg transition-colors duration-200 border border-neutral-700"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  in LinkedIn
                </a>
                
                <a 
                  href="https://github.com/engageintellect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-3 py-2 rounded-lg transition-colors duration-200 border border-neutral-700"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Github
                </a>
                
                <a 
                  href="https://medium.com/@gabrielmadureira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-3 py-2 rounded-lg transition-colors duration-200 border border-neutral-700"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                  Medium
                </a>
                
                <a 
                  href="https://discord.gg/gabrielmadureira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-3 py-2 rounded-lg transition-colors duration-200 border border-neutral-700"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                  Discord
                </a>
              </div>
            </div>
          </div>

          {/* Now Section */}
          <div className="bg-background rounded-xl shadow-lg p-6 border border-neutral-800">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold text-neutral-100">Now</h2>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-neutral-200">O que é "Now"?</h3>
                              <p className="text-neutral-300 font-semibold mb-2">
                  Transformando Investimentos Imobiliários com Solana
                </p>
                <p className="text-sm text-neutral-400">
                  Como a startup Homebase usa tecnologia blockchain para revolucionar oportunidades de investimento imobiliário, tornando o investimento em propriedades acessível a todos através de tokenização e smart contracts.
                </p>
            </div>

            <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700">
              <h4 className="text-sm font-semibold text-neutral-200 mb-2">Foco Atual:</h4>
              <ul className="text-sm text-neutral-400 space-y-1">
                <li>• Integração blockchain para imóveis</li>
                <li>• Desenvolvimento de smart contracts</li>
                <li>• Estratégias de tokenização</li>
                <li>• Protocolos DeFi para investimento imobiliário</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact - Usando o mesmo estilo da página inicial */}
        <div className="bg-background rounded-xl shadow-lg p-8 border border-neutral-800">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-300 mb-4">
              Vamos conversar.
            </h2>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              Deixe seu email para começarmos uma conversa. Vou entrar em contato em breve.
            </p>
            <p className="text-sm text-neutral-500 mb-8">
              *Seu email nunca será compartilhado com ninguém.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <a 
                href="mailto:contato@gabrielmadureira.com"
                className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-center py-3 px-4 rounded-lg transition-colors duration-200 border border-neutral-700"
              >
                Enviar Email
              </a>
              
              <a 
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-center py-3 px-4 rounded-lg transition-colors duration-200 border border-neutral-700"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 