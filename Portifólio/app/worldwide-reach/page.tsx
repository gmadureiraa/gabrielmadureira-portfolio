import { FadeIn } from "@/components/magicui/fade-in";
import BlurIn from "@/components/magicui/blur-in";

export default async function WorldwideReach() {
  return (
    <div className="mt-10 w-full max-w-2xl mx-auto px-6">
      <BlurIn duration={0.5}>
        <FadeIn direction="up">
          <div className="flex flex-col items-start">
            <div className="text-4xl font-bold text-center">
              Alcance Mundial
            </div>
            <div className="font-thin">
              Clique em um deployment para ver o projeto.
            </div>
          </div>
        </FadeIn>
      </BlurIn>

      <BlurIn duration={0.5}>
        <FadeIn direction="down">
          <section className="mt-10">
            <div className="text-2xl font-bold">Nuvem</div>

            <div>
              Deployments em nuvem são a forma mais comum de implantar um projeto.
              Incluem AWS, Google Cloud e Azure.
            </div>

            <ul className="list-disc ml-10 mt-2">
              <li>Vercel</li>
              <li>AWS</li>
              <li>Azure</li>
              <li>Docker</li>
              <li>Linode</li>
              <li>Digital Ocean</li>
            </ul>
          </section>

          <section className="mt-5">
            <div className="text-2xl font-bold">Edge</div>

            <div>
              Deployments edge aproveitam a computação distribuída para aproximar dados e
              serviços dos usuários, reduzindo a latência e melhorando os tempos de
              resposta. Esta abordagem é particularmente benéfica para aplicações
              em tempo real e serviços que requerem processamento e entrega rápida
              de dados. Ao minimizar a distância que os dados percorrem, deployments
              edge melhoram a experiência do usuário e também podem reduzir custos
              de banda.
            </div>
          </section>

          <section className="mt-5">
            <div className="text-2xl font-bold">On-Prem</div>

            <div>
              Deployments on-premises são hospedados localmente nos próprios
              servidores e infraestrutura da empresa. Esta abordagem fornece às organizações
              maior controle sobre seus dados e aplicações, permitindo
              que atendam requisitos específicos de segurança e conformidade. Embora
              deployments on-premises ofereçam segurança e privacidade aprimoradas, eles
              requerem recursos significativos para manter e gerenciar, tornando-os
              menos flexíveis e escaláveis que deployments em nuvem ou edge.
            </div>
          </section>
        </FadeIn>
      </BlurIn>
    </div>
  );
}
