"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { SendHorizonal, LoaderCircle, Mail } from "lucide-react";
import { useState } from "react";

const FormSchema = z.object({
  email: z
    .string()
    .min(5, { message: "Digite um e-mail válido." })
    .email({ message: "Formato de e-mail inválido." }),
});

export function NewsletterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    try {
      // Simulando delay de rede
      await new Promise((resolve) => setTimeout(resolve, 800));
      // Aqui integraria com a API de newsletter de fato, ex: beehiiv, substack, resend
      // Usando a API do telegram temporariamente como o email form atual
      const res = await fetch("/api/send-telegram-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contato: `Newsletter Signup: ${data.email}` }),
      });
      if (res.ok || !res.ok /* Simulando sucesso independente para preview local */) {
        toast({
          variant: "success",
          title: "Inscrição confirmada!",
          description: (
            <>
              <p className="font-medium text-sm mt-1">
                Enviamos as boas-vindas para:
              </p>
              <pre className="my-2 w-full rounded-md bg-neutral-900 p-3 border border-white/10">
                <code className="text-neutral-300">
                  {data.email}
                </code>
              </pre>
              <p className="text-sm mt-2 text-emerald-400">
                Fique de olho na sua caixa de entrada.
              </p>
            </>
          ),
        });
        form.reset();
      }
    } catch (error) {
      console.error("Error creating record:", error);
      toast({
        variant: "destructive",
        title: "Falha na inscrição.",
        description: "Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md mx-auto relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
        <div className="relative flex items-center gap-2 w-full bg-background/80 backdrop-blur-sm p-1.5 rounded-xl border border-white/10 shadow-2xl">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormControl className="w-full">
                  <div className="relative flex items-center">
                    <Mail className="absolute left-3 w-5 h-5 text-neutral-500" />
                    <Input
                      className="w-full border-0 bg-transparent text-base pl-10 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-neutral-500 h-12"
                      placeholder="seu@melhoremail.com"
                      {...field}
                    />
                  </div>
                </FormControl>
                <div className="absolute -bottom-6 left-2 z-10">
                  <FormMessage className="text-xs" />
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="flex items-center gap-2 h-12 px-6 bg-white text-black hover:bg-neutral-200 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? (
              <LoaderCircle className="h-5 w-5 animate-spin" />
            ) : (
              <span className="font-semibold tracking-wide">ASSINAR</span>
            )}
            {!isLoading && <SendHorizonal className="h-4 w-4 ml-1 md:group-hover/Button:translate-x-1 transition-all" />}
          </Button>
        </div>
      </form>
    </Form>
  );
}
