"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PensamentosCriptoPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="max-w-4xl w-full">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/posts"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Voltar aos posts
          </Link>
        </motion.div>

        {/* Post Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
              Cripto
            </span>
            <span className="text-neutral-500 text-sm">
              15/01/2024
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
            Pensamentos sobre o futuro das criptomoedas
          </h1>
          
          <p className="text-xl text-neutral-400 leading-relaxed">
            Reflexões sobre como a tecnologia blockchain está transformando o mundo financeiro e o que esperar nos próximos anos.
          </p>
        </motion.div>

        {/* Post Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-8">
            <p className="text-neutral-300 leading-relaxed mb-6">
              O mercado de criptomoedas está em constante evolução, e como alguém que trabalha diretamente com essa tecnologia, 
              tenho observado algumas tendências interessantes que podem moldar o futuro do setor.
            </p>
            
            <h2 className="text-2xl font-bold text-neutral-100 mb-4">
              A Massificação da Tecnologia Blockchain
            </h2>
            
            <p className="text-neutral-300 leading-relaxed mb-6">
              Nos últimos anos, vimos uma crescente adoção da tecnologia blockchain por grandes empresas e instituições financeiras. 
              Isso não é apenas uma tendência passageira, mas sim um sinal claro de que a tecnologia veio para ficar.
            </p>
            
            <h3 className="text-xl font-bold text-neutral-100 mb-3">
              Principais Tendências para 2024:
            </h3>
            
            <ul className="list-disc list-inside text-neutral-300 mb-6 space-y-2">
              <li><strong>DeFi 2.0:</strong> Protocolos mais seguros e eficientes</li>
              <li><strong>Regulação:</strong> Maior clareza regulatória global</li>
              <li><strong>Interoperabilidade:</strong> Conexão entre diferentes blockchains</li>
              <li><strong>NFTs Utilitários:</strong> Aplicações práticas além da arte digital</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-neutral-100 mb-4">
              O Papel do Marketing Digital no Ecossistema Cripto
            </h2>
            
            <p className="text-neutral-300 leading-relaxed mb-6">
              Como especialista em marketing digital para o setor cripto, vejo que a educação e a transparência são fundamentais 
              para o crescimento sustentável do mercado. Projetos que investem em marketing responsável e educativo tendem a 
              ter maior sucesso a longo prazo.
            </p>
            
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-300 mb-6">
              &ldquo;O futuro das criptomoedas não está apenas na tecnologia, mas na forma como ela é apresentada e adotada pelo público em geral.&rdquo;
            </blockquote>
            
            <p className="text-neutral-300 leading-relaxed">
              À medida que o mercado amadurece, vejo um futuro promissor onde a tecnologia blockchain será tão comum quanto 
              a internet é hoje. O desafio está em fazer essa transição de forma responsável e inclusiva.
            </p>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-neutral-800"
        >
          <h3 className="text-2xl font-bold text-neutral-100 mb-6">
            Posts Relacionados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/posts/estrategias-marketing-digital"
              className="block p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
            >
              <h4 className="text-lg font-semibold text-neutral-100 mb-2">
                Estratégias de Marketing Digital que funcionam
              </h4>
              <p className="text-neutral-400 text-sm">
                Compartilhando experiências e insights sobre marketing digital...
              </p>
            </Link>
            <Link
              href="/posts/copywriting-persuasivo"
              className="block p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
            >
              <h4 className="text-lg font-semibold text-neutral-100 mb-2">
                O poder do copywriting persuasivo
              </h4>
              <p className="text-neutral-400 text-sm">
                Como criar textos que convertem e engajam seu público-alvo...
              </p>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 