import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ManifestoIA() {
  return (
    <main className="min-h-screen py-16 px-6 flex flex-col items-center bg-background">
      <div className="w-full max-w-3xl mb-8">
        <Link href="/projects?type=Artigo" className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para Projetos
        </Link>
      </div>

      <article className="prose prose-invert prose-neutral prose-lg lg:prose-xl w-full max-w-3xl prose-headings:font-bold prose-headings:tracking-tight prose-a:text-green-500 hover:prose-a:text-green-400 prose-img:rounded-2xl prose-img:border prose-img:border-neutral-800">
        
        <h1 className="text-4xl md:text-5xl mb-6">O Futuro do Trabalho Automático e as Empresas de Uma Pessoa Só</h1>
        
        <div className="flex items-center gap-4 text-sm text-neutral-400 mb-10 pb-10 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Image
              src="https://avatars.githubusercontent.com/u/129111669?v=4"
              alt="Gabriel Madureira"
              width={32}
              height={32}
              className="rounded-full my-0"
            />
            <span className="font-medium text-neutral-300">Por Gabriel Madureira</span>
          </div>
          <span>•</span>
          <span>10 de Abril de 2026</span>
          <span>•</span>
          <span className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full border border-purple-500/20 font-semibold text-xs">
            Ensaio
          </span>
        </div>

        <p className="lead text-xl text-neutral-300">
          Nós já cruzamos o horizonte de eventos da produtividade humana. A Inteligência Artificial deixou de ser uma ferramenta pontual para se tornar uma infraestrutura global, uma forma de <strong>eletricidade cognitiva</strong> extremamente barata e infinitamente escalável.
        </p>

        <p>
          Se a internet democratizou a distribuição e o acesso à informação, a IA generativa está, silenciosamente e em ritmo assustador, democratizando a <strong>execução e a produção intelectual</strong>. Há uma década, construir uma plataforma envolvia recrutar um time de programadores, analistas de QA, designers e copywriters. Hoje? Uma única pessoa operando agentes de IA altamente orquestrados consegue arquitetar, programar, testar, lançar e escalar negócios sozinha. Essa é a era da "Empresa de Um Bilhão de Dólares e Um Funcionário Só".
        </p>

        <h2>Escalabilidade Perfeita vs Trabalho Assalariado</h2>
        <p>
          O que vemos no mercado tradicional hoje ainda é um artefato da revolução industrial, o cérebro humano servindo como uma "API de processamento de texto e dados" glorificada, lendo e copiando documentos numa cadeia hierárquica imensa para tomar uma decisão mediana. Mas a IA executa essa mesma lógica sem cansaço, sem folga, a cem milésimos de centavo por segundo.
        </p>
        <p>
          Neste admirável novo mundo, um profissional focado apenas na execução técnica básica correrá o risco sério de obsolescência rápida. As "Hard Skills" mecânicas perdem o status mágico. As novas <strong>Super Skills</strong> são as capacidades de estruturar sistemas modulares, realizar automações, fazer as perguntas certas e entender profundamente de Psicologia e Comportamento Humano na outra ponta para construir produtos que gerem valor real.
        </p>

        <figure>
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80" alt="Inteligência artificial abstract code network render" />
          <figcaption className="text-center">A eletricidade cognitiva preenchendo as engrenagens silenciosas do software global.</figcaption>
        </figure>

        <h2>O Paradoxo da Renda e o Argumento para a UBI</h2>
        <p>
          Claro que quando automatizamos massivamente setores cruciais que proveem o senso de propósito, além do salário, de milhões de seres humanos ao longo de suas vidas, entramos no debate sócio-econômico do século: se ninguém "trabalha" em funções manuais e processuais, como compramos os produtos revolucionários gerados pelas fábricas de IA?
        </p>
        <p>
          É aqui que a Renda Básica Universal (Universal Basic Income — UBI) não apenas levanta como um conceito utópico de esquerda ou uma teoria acadêmica morta, mas surge como uma resposta necessária ao <strong>design final do Capitalismo Automático</strong>.
        </p>
        <ul>
          <li><strong>Não é caridade; é lubrificante econômico.</strong> UBI se torna a precondição para manter as próprias empresas operando num sistema em que a automação extirpou a classe consumidora que pagava impostos no modo fordista.</li>
          <li>A riqueza imensurável que será gerada por aglomerados autônomos de IA pode e vai reduzir o custo basal da vida — energia, alimentação, tecnologia — a uma fração do preço atual, contanto que haja distribuição nos trilhos certos por meio de novos modelos de economia tokenizada.</li>
        </ul>

        <h2>O Que Nos Resta Criar?</h2>
        <p>
          E sem nossa devoção cega às 8 horas diárias de planilhas? Quando a nossa labuta básica evaporar, seremos forçados a enfrentar o maior medo primitivo do século 21: a convivência com nós mesmos e com o nosso verdadeiro propósito criativo.
        </p>
        <p>
          Vamos mergulhar em curadoria. Na cultura pura. Nas artes conectadas à imersão Web3. Jogaremos. Escreveremos. Construiremos comunidades profundas e voltaremos a ser curadores da essência do que, no final de qualquer otimização ou algorítmo de aprendizado não-supervisionado profundo, ainda é e sempre foi a marca registrada da nossa espécie: <strong>a criação contínua de significados, e os elos absurdos, imprevisíveis e ineficientes que fazemos com as pessoas que amamos.</strong>
        </p>
        <p>
          Até chegar lá, meu trabalho é aproveitar a crista da onda — unificar esses agentes, turbinar growth por algoritmos, fazer código escalar e preparar a fundação de empresas e ecossistemas resilientes em tempos incertos e hiper-automatizados.
        </p>
        
        <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm m-0">Gabriel Madureira • Full-Stack Marketer</p>
        </div>
      </article>
    </main>
  );
}
