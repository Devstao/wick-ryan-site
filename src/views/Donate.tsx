import amazonImg from "@/assets/amazon-river.jpg";
import jaguarImg from "@/assets/jaguar.png";
import patternImg from "@/assets/amazon-pattern.jpg";
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";

export default function Donate() {
  return (
    <section id="doacao" className="relative py-24 md:py-36 overflow-hidden border-y border-border">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `url(${patternImg})`, backgroundSize: "600px" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(252,193,4,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(252,193,4,0.10), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="eyebrow text-gold">06 — Apoio</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Faça sua <span className="text-gold-gradient text-glow-soft">doação!</span>
            </h2>

            <div className="mt-8 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Estamos dando os primeiros passos de um projeto que nasce com propósito, coragem e
                vontade de fazer a diferença. Esta pré-campanha está sendo construída com muito
                trabalho e dedicação, mas também precisa do apoio de pessoas que acreditam em um{" "}
                <span className="text-foreground font-medium">Amazonas mais livre</span>.
              </p>
              <p>
                Cada contribuição, independentemente do valor, ajuda a fortalecer essa caminhada,
                ampliar o alcance das nossas ideias e tornar esse projeto cada vez mais forte.
              </p>
              <p>
                Se você acredita em mudança, compromisso com as próximas gerações e na construção
                de um futuro melhor, este é o momento de participar.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="https://apoiar.me/wickryan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-base"
              >
                <Heart className="h-4 w-4" />
                Fazer uma doação
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Ou acesse diretamente:{" "}
              <a
                href="https://apoiar.me/wickryan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-4 hover:text-gold-bright break-all"
              >
                https://apoiar.me/wickryan
              </a>
            </p>

            <div className="mt-12 pt-8 border-t border-gold/30">
              <p className="font-display text-2xl md:text-3xl leading-tight text-glow-soft">
                <span className="text-gold-gradient">
                  Juntos por um Amazonas mais livre
                </span>{" "}
                🐆🚀
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 border border-gold/40" aria-hidden />
              <div className="absolute -inset-10 bg-gold/10 blur-3xl rounded-full -z-10" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={amazonImg}
                  alt="Rio Amazonas ao entardecer — símbolo de esperança e transformação para o Amazonas" loading="lazy" decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <img
                  src={jaguarImg}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute right-0 bottom-0 w-[280px] opacity-20"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-4 w-4 text-gold" />
                    <span className="eyebrow text-gold">Participação cidadã</span>
                  </div>
                  <p className="font-display text-xl md:text-2xl leading-tight">
                    Cada apoio constrói o futuro da nossa região.
                  </p>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -right-6 h-24 w-24 bg-gold shadow-[0_0_60px_rgba(252,193,4,0.55)]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
