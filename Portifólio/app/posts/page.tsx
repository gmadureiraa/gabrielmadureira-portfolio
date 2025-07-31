"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchPosts } from "@/lib/fetchers";

export default function PostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchPosts();
      if (postsData?.postsData) {
        const formattedPosts = postsData.postsData.map((post: any) => ({
          id: post.slug,
          title: post.data.title,
          description: post.data.description,
          category: post.data.category || "Geral",
          date: post.data.date || "2024-01-01",
          slug: post.slug,
          image: post.data.image || "/images/thumbnail.png"
        }));
        setPosts(formattedPosts);
        setFilteredPosts(formattedPosts);
      }
    };

    getPosts();
  }, []);

  const categories = ["Todos", "Cripto", "Marketing", "Copywriting", "Tecnologia", "Reflexões", "Geral"];

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === "Todos") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === category));
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
            Posts & Pensamentos
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Compartilhando insights, reflexões e experiências sobre marketing digital, 
            criptomoedas, tecnologia e estratégias de negócio.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-400 font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-neutral-100 hover:text-blue-400 transition-colors">
                    <a href={`/posts/${post.slug}`}>
                      {post.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-neutral-400 line-clamp-3">
                    {post.description}
                  </CardDescription>
                  <div className="mt-4">
                    <a
                      href={`/posts/${post.slug}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      Ler mais →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-neutral-400 text-lg">
              Nenhum post encontrado para a categoria selecionada.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
} 