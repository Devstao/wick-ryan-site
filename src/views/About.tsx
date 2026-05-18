import jaguarImg from "@/assets/jaguar.png";
import aboutImg from "@/assets/wick-about.jpg";
import timeline from "@/data/timeline";


export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-36 relative overflow-hidden">
      <img
        src={jaguarImg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 w-[520px] opacity-[0.04] scale-x-[-1]"
      />
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 relative">
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="relative">
              <img
                src={aboutImg}
                alt="Wick Ryan em momento institucional"
                width={900}
                height={1100}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div
                className="absolute -bottom-6 -right-6 h-32 w-32 border border-gold"
                aria-hidden
              />
              <div className="absolute -top-4 -left-4 px-3 py-1 bg-gold text-background text-xs font-semibold tracking-widest uppercase">
                Amazonas · 1999
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow text-gold">01 — Biografia</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Do Alto Solimões à <br />
            construção de uma <br />
            <span className="italic text-gold">visão regional.</span>
          </h2>

          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
            <p>
              <span className="text-foreground font-medium">Nascido em 1999</span> em Benjamin
              Constant, no coração do Alto Solimões, Wick Ryan cresceu em uma família matriarcal —
              formado pela presença determinante da mãe e da avó, que ensinaram desde cedo o valor
              do trabalho, da palavra e da independência.
            </p>
            <p>
              Em 2016, mudou-se para Manaus para estudar no Colégio Militar da Polícia Militar, onde
              absorveu disciplina, responsabilidade e o sentido público de servir. No ano seguinte,
              foi para a Bolívia cursar Medicina, ampliando sua visão de mundo sem jamais perder a
              conexão com a Amazônia.
            </p>
            <p>
              De volta à capital amazonense, construiu sua trajetória do zero — atuou no comércio,
              na logística urbana, no mercado de crédito consignado e, em 2022, fundou sua própria
              promotora financeira. Hoje atua também em design e comunicação, sempre atento à
              realidade econômica e social do Amazonas.
            </p>
            <p className="text-foreground">
              É essa trajetória de superação e independência que sustenta a presença pública de
              Wick: uma voz amazonense contemporânea, comprometida com inovação, sustentabilidade e
              desenvolvimento regional.
            </p>
          </div>

          <div className="mt-14">
            <span className="eyebrow text-gold">Linha do tempo</span>
            <ol className="mt-6 border-l border-gold/50 space-y-6 pl-6">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-background" />
                  <div className="font-display text-xl text-gold">{t.year}</div>
                  <div className="text-sm text-muted-foreground">{t.text}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
