import patternImg from "@/assets/amazon-pattern.jpg";
import amazonImg from "@/assets/amazon-river.jpg";
import jaguarImg from "@/assets/jaguar.png";
import aboutImg from "@/assets/wick-about.jpg";
import candidatoImg from "@/assets/wick-candidato.jpg";
import heroImg from "@/assets/wick-hero.jpg";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Cpu,
  Instagram,
  Leaf,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Recycle,
  Rocket,
  Scale,
  ShieldCheck,
  Waves,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wick Ryan — Uma visão moderna para o Amazonas" },
      {
        name: "description",
        content:
          "Wick Ryan, empreendedor amazonense. Ideias, inovação e desenvolvimento regional para o futuro da Amazônia.",
      },
      { property: "og:title", content: "Wick Ryan — Uma visão moderna para o Amazonas" },
      {
        property: "og:description",
        content:
          "Visão estratégica, identidade amazônica e desenvolvimento regional. Conheça a trajetória e as ideias de Wick Ryan.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Wick Ryan",
          jobTitle: "Empreendedor e Voz Pública Amazonense",
          birthDate: "1999",
          birthPlace: "Benjamin Constant, Amazonas, Brasil",
          description:
            "Empreendedor amazonense dedicado ao desenvolvimento regional, à inovação e à sustentabilidade da Amazônia.",
        }),
      },
    ],
  }),
  component: Index,
});

const proposals = [
  {
    icon: Waves,
    n: "01",
    title: "Hidrovias e Infraestrutura",
    text:
      "Defesa de um plano nacional de hidrovias e dragagem dos rios amazônicos, com portos modernos no interior e logística eficiente para integrar o estado.",
  },
  {
    icon: Zap,
    n: "02",
    title: "Energia Limpa e Regional",
    text:
      "Estímulo a fazendas aquáticas e matrizes renováveis adaptadas à realidade amazônica, levando energia digna e oportunidades às comunidades ribeirinhas.",
  },
  {
    icon: Scale,
    n: "03",
    title: "Responsabilidade Ambiental",
    text:
      "Defesa da responsabilização efetiva de gestores públicos por crimes e omissões ambientais, com transparência, dados abertos e fiscalização contínua.",
  },
  {
    icon: Recycle,
    n: "04",
    title: "Indústria Verde e Inovação",
    text:
      "Indústrias Waste-to-Energy e cadeias produtivas sustentáveis: transformar resíduos em energia, gerar empregos qualificados e cidades mais limpas.",
  },
];

const values = [
  { icon: Lightbulb, title: "Renovação de Ideias", text: "Pensamento contemporâneo aplicado aos desafios da Amazônia." },
  { icon: Leaf, title: "Floresta de Pé", text: "Desenvolvimento que preserva o bioma e valoriza quem vive dele." },
  { icon: MapPin, title: "Identidade Amazônica", text: "O Amazonas como protagonista das decisões nacionais." },
  { icon: Rocket, title: "Empreendedorismo", text: "Ambiente de negócios que gera renda e oportunidade local." },
  { icon: Cpu, title: "Inovação Pública", text: "Tecnologia, dados e conectividade a serviço da sociedade." },
  { icon: ShieldCheck, title: "Compromisso Institucional", text: "Postura ética, transparente e dedicada ao interesse público." },
];

const timeline = [
  { year: "1999", text: "Nasce em Benjamin Constant, no Alto Solimões." },
  { year: "2016", text: "Ingressa no Colégio Militar da PM em Manaus." },
  { year: "2017", text: "Inicia o curso de Medicina na Bolívia." },
  { year: "2019", text: "Retorna a Manaus e inicia sua trajetória empreendedora." },
  { year: "2020", text: "Atua no mercado de crédito consignado." },
  { year: "2022", text: "Funda sua promotora financeira e expande para design." },
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/75 backdrop-blur-md border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16">
        <a href="#top" className="flex items-baseline gap-2 font-display text-lg tracking-tight">
          <span className="font-medium">Wick</span>
          <span className="text-gold">Ryan</span>
          <span className="ml-2 h-1.5 w-1.5 rounded-full bg-gold" />
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-gold transition">Biografia</a>
          <a href="#plano" className="hover:text-gold transition">Ideias</a>
          <a href="#valores" className="hover:text-gold transition">Visão</a>
          <a href="#contato" className="hover:text-gold transition">Contato</a>
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-flex btn-gold text-xs"
        >
          Falar com Wick <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden bg-cinema">
      {/* Decorative jaguar silhouette */}
      <img
        src={jaguarImg}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -left-24 bottom-10 w-[460px] opacity-[0.06] hidden md:block"
      />
      <div className="absolute top-24 right-10 w-72 h-72 rounded-full bg-gold/20 blur-[120px]" aria-hidden />
      <div className="absolute -top-10 left-1/3 w-[520px] h-[520px] rounded-full bg-gold/10 blur-[140px]" aria-hidden />

      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-end relative">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_14px_rgba(252,193,4,0.8)]" />
            <span className="eyebrow text-gold/90">Amazonas · Brasil</span>
            <span className="hairline w-16" />
            <span className="eyebrow">Voz pública</span>
          </div>
          <p className="font-tech text-sm sm:text-base md:text-lg mb-5 tracking-[0.18em] uppercase">
            Por um <span className="font-extrabold text-gold text-glow">AMAZONAS</span> mais{" "}
            <span className="font-extrabold text-gold text-glow">LIVRE</span>
          </p>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[88px] leading-[0.95] tracking-tight">
            Uma visão moderna <br />
            para o <span className="text-gold-gradient text-glow-soft">Amazonas.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Wick Ryan</span> — empreendedor
            amazonense nascido em 1999, no Alto Solimões. Ideias, inovação e desenvolvimento
            regional para uma Amazônia mais forte, sustentável e conectada ao futuro.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#sobre" className="btn-gold">
              Conheça a trajetória <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#plano" className="btn-ghost-gold">
              Ideias e iniciativas
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-in">
          <div className="absolute -inset-4 border border-gold/40" aria-hidden />
          <div className="absolute -inset-10 bg-gold/10 blur-3xl rounded-full -z-10" aria-hidden />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-gold shadow-[0_0_60px_rgba(252,193,4,0.55)]" aria-hidden />
          <img
            src={heroImg}
            alt="Retrato institucional de Wick Ryan, empreendedor amazonense"
            width={1024}
            height={1280}
            className="relative w-full aspect-[4/5] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          />
          <div className="absolute top-6 right-6 bg-background/80 backdrop-blur-md px-4 py-3 border border-gold/40 shadow-[0_0_30px_-8px_rgba(252,193,4,0.5)]">
            <div className="eyebrow text-gold">Origem</div>
            <div className="font-display text-2xl">Amazonas</div>
          </div>
        </div>
      </div>

      <div className="container-x mt-20 relative">
        <div className="divider-gold mb-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
          {[
            ["1999", "Nascido em Benjamin Constant"],
            ["3", "Países na trajetória: BR·CO·PE"],
            ["03", "Frentes de atuação: negócios, design e voz pública"],
            ["AM", "Raiz e atuação no Amazonas"],
          ].map(([k, v]) => (
            <div key={v} className="px-6 first:pl-0 last:pr-0 flex flex-col items-start">
              <div className="font-tech text-4xl md:text-5xl font-bold text-gold text-glow-soft leading-none">
                {k}
              </div>
              <div className="eyebrow mt-3 text-[0.65rem]">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "Visão Regional",
    "Renovação de Ideias",
    "Identidade Amazônica",
    "Inovação Pública",
    "Hidrovias",
    "Energia Limpa",
    "Sustentabilidade",
  ];
  const row = [...words, ...words];
  return (
    <section className="border-y border-gold/40 py-6 overflow-hidden bg-gold text-background">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl flex items-center gap-12 font-medium">
            {w} <span className="h-2 w-2 rounded-full bg-background" />
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
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
              <div className="absolute -bottom-6 -right-6 h-32 w-32 border border-gold" aria-hidden />
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
              Constant, no coração do Alto Solimões, Wick Ryan cresceu em uma família matriarcal
              — formado pela presença determinante da mãe e da avó, que ensinaram desde cedo o
              valor do trabalho, da palavra e da independência.
            </p>
            <p>
              Em 2016, mudou-se para Manaus para estudar no Colégio Militar da Polícia Militar,
              onde absorveu disciplina, responsabilidade e o sentido público de servir. No ano
              seguinte, foi para a Bolívia cursar Medicina, ampliando sua visão de mundo sem
              jamais perder a conexão com a Amazônia.
            </p>
            <p>
              De volta à capital amazonense, construiu sua trajetória do zero — atuou no
              comércio, na logística urbana, no mercado de crédito consignado e, em 2022,
              fundou sua própria promotora financeira. Hoje atua também em design e
              comunicação, sempre atento à realidade econômica e social do Amazonas.
            </p>
            <p className="text-foreground">
              É essa trajetória de superação e independência que sustenta a presença pública
              de Wick: uma voz amazonense contemporânea, comprometida com inovação,
              sustentabilidade e desenvolvimento regional.
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

function Plan() {
  return (
    <section id="plano" className="relative py-24 md:py-36 border-y border-border">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${patternImg})`, backgroundSize: "600px" }}
        aria-hidden
      />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="eyebrow text-gold">02 — Ideias e Iniciativas</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              O futuro da <span className="text-gold">Amazônia</span> <br />
              exige novas <span className="italic">soluções.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-muted-foreground text-sm md:text-base">
            Quatro eixos de pensamento que articulam infraestrutura, energia limpa,
            responsabilidade ambiental e inovação para o desenvolvimento regional.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {proposals.map(({ icon: Icon, n, title, text }) => (
            <article
              key={n}
              className="group relative bg-background p-8 md:p-12 transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="eyebrow text-gold">{n}</span>
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-md">
                {text}
              </p>
              <ArrowUpRight className="absolute bottom-8 right-8 h-5 w-5 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              <div className="absolute left-0 top-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section id="valores" className="py-24 md:py-36 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow text-gold">03 — Visão</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Princípios que orientam <br />
            uma presença pública <span className="italic text-gold">contemporânea.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group p-8 md:p-10 border-r border-b border-border hover:bg-card transition-colors relative"
            >
              <Icon className="h-7 w-7 text-gold mb-6" strokeWidth={1.4} />
              <h3 className="font-display text-2xl mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="relative py-24 md:py-40 overflow-hidden">
      <img
        src={amazonImg}
        alt=""
        aria-hidden
        width={1600}
        height={900}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/85" />
      <img
        src={jaguarImg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 w-[520px] opacity-[0.08]"
      />
      <div className="container-x relative">
        <div className="max-w-4xl">
          <span className="eyebrow text-gold">04 — Contato</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02]">
            Amazonas, identidade <br />
            e <span className="italic text-gold">transformação.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-muted-foreground text-base md:text-lg">
            Diálogo aberto com instituições, lideranças, empreendedores e cidadãos que
            acreditam em uma Amazônia mais inovadora, sustentável e conectada ao futuro.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:contato@wickryan.com.br"
              className="btn-gold"
            >
              Entrar em contato <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#plano"
              className="btn-ghost-gold"
            >
              Reler as ideias
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-16 relative">
      <div className="container-x grid md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-5">
          <div className="font-display text-3xl">
            Wick <span className="text-gold">Ryan</span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm text-sm leading-relaxed">
            Empreendedor amazonense. Voz pública dedicada à inovação, à sustentabilidade
            e ao desenvolvimento regional do Amazonas.
          </p>
          <p className="mt-6 font-display text-lg text-gold">
            Uma visão moderna para o Amazonas.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-4 text-gold">Navegação</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-gold">Biografia</a></li>
            <li><a href="#plano" className="hover:text-gold">Ideias e Iniciativas</a></li>
            <li><a href="#valores" className="hover:text-gold">Visão</a></li>
            <li><a href="#contato" className="hover:text-gold">Contato</a></li>
          </ul>
        </div>

        <div className="md:col-span-4 flex flex-col items-start md:items-end">
          <div className="eyebrow mb-4 text-gold">Acompanhe</div>
          <div className="flex gap-3 mb-8">
            {[Instagram, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social"
                className="h-11 w-11 grid place-items-center border border-border hover:bg-gold hover:text-background hover:border-gold transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <img
            src={candidatoImg}
            alt="Pré-candidato"
            className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-border flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Wick Ryan. Todos os direitos reservados.</div>
        <div>Manaus · Amazonas · Brasil</div>
        <div>Um projeto <a href="https://devstao.dev" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition"> DEVstão </a></div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Plan />
      <Values />
      <CTA />
      <Footer />
    </main>
  );
}
