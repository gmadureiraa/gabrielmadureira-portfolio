"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchPosts } from "@/lib/fetchers";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const postsData = await fetchPosts();
        if (postsData?.postsData) {
          const foundPost = postsData.postsData.find((p: any) => p.slug === params.slug);
          if (foundPost) {
            setPost(foundPost);
          } else {
            notFound();
          }
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neutral-400">Carregando...</div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

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
              {post.data.category || "Geral"}
            </span>
            <span className="text-neutral-500 text-sm">
              {new Date(post.data.date || "2024-01-01").toLocaleDateString('pt-BR')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-6">
            {post.data.title}
          </h1>
          
          <p className="text-xl text-neutral-400 leading-relaxed">
            {post.data.description}
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
              Este é um exemplo de conteúdo de post. Aqui você pode adicionar o conteúdo completo do seu artigo,
              incluindo parágrafos, listas, imagens e outros elementos de formatação.
            </p>
            
            <h2 className="text-2xl font-bold text-neutral-100 mb-4">
              Subtítulo do Post
            </h2>
            
            <p className="text-neutral-300 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
            
            <ul className="list-disc list-inside text-neutral-300 mb-6 space-y-2">
              <li>Primeiro ponto importante</li>
              <li>Segundo ponto importante</li>
              <li>Terceiro ponto importante</li>
            </ul>
            
            <p className="text-neutral-300 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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