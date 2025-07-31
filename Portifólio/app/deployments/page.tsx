import { FadeIn } from "@/components/magicui/fade-in";
import BlurIn from "@/components/magicui/blur-in";
import Globe from "@/components/magicui/globe";

export default async function DeploymentsPage() {
  return (
    <div className="mt-10 w-full max-w-2xl mx-auto px-6">
      <BlurIn duration={0.5}>
        <FadeIn direction="up">
          <div className="flex flex-col items-start">
            <div className="text-4xl font-bold text-center">Deployments</div>
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
              Eles são fáceis de configurar e manter, e geralmente são mais
              seguros que outros métodos de deployment. Deployments em nuvem também
              são escaláveis, significando que você pode facilmente adicionar mais
              recursos ao seu projeto conforme ele cresce. Algumas plataformas populares
              de deployment em nuvem incluem AWS, Google Cloud e Azure.
            </div>
          </section>

          <section className="mt-5">
            <div className="text-2xl font-bold">Edge</div>

            <div>
              Lorem sint est ipsum excepteur in Lorem occaecat labore
              exercitation laboris minim ea. Proident eu consectetur commodo
              laborum elit voluptate et adipisicing incididunt amet laboris do.
              Pariatur consectetur dolor aliqua labore. Sunt et exercitation
              fugiat ullamco non mollit dolor ullamco.
            </div>
          </section>

          <section className="mt-5">
            <div className="text-2xl font-bold">On-Prem</div>

            <div>
              Lorem sint est ipsum excepteur in Lorem occaecat labore
              exercitation laboris minim ea. Proident eu consectetur commodo
              laborum elit voluptate et adipisicing incididunt amet laboris do.
              Pariatur consectetur dolor aliqua labore. Sunt et exercitation
              fugiat ullamco non mollit dolor ullamco.
            </div>
          </section>
        </FadeIn>
      </BlurIn>
    </div>
  );
}
