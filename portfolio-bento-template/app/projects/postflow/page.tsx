"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function PostflowPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para projetos
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">Postflow</h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Agendamento e automação de posts para redes sociais — do rascunho à publicação, com foco em fluxo e consistência.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-neutral-800 mb-10"
        >
          <Image
            src="/images/projects/postflow.jpg"
            alt="Postflow — interface de planejamento"
            fill
            className="object-cover object-top"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-background border-neutral-800">
            <CardHeader>
              <CardTitle className="text-2xl text-neutral-100">Visão geral</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                Postflow é um produto pessoal para creators e times de marketing: calendário, filas de conteúdo,
                formatos por canal e automações que reduzem atrito entre ideia e post publicado.
              </p>
              <p>
                Stack: Next.js, TypeScript, Supabase e integrações com APIs de redes — evoluindo como hub único para pipeline de conteúdo.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
