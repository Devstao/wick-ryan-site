import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/wick-hero.jpg";
import aboutImg from "@/assets/wick-about.jpg";
import amazonImg from "@/assets/amazon-river.jpg";
import {
  ArrowUpRight,
  Waves,
  Zap,
  Scale,
  Recycle,
  Lightbulb,
  Leaf,
  MapPin,
  Rocket,
  Cpu,
  ShieldCheck,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wick Ryan — Empreendedor e Liderança para a Amazônia" },
      {
        name: "description",
        content:
          "Wick Ryan: jovem empreendedor amazônida com visão estratégica para infraestrutura, energia sustentável e desenvolvimento da Amazônia e do Brasil.",
      },
      { property: "og:title", content: "Wick Ryan — Liderança para a Amazônia" },
      {
        property: "og:description",
        content:
          "Empreendedor, designer e defensor de soluções inovadoras para o desenvolvimento da Amazônia.",
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
          jobTitle: "Empreendedor e Liderança Política",
          birthPlace: "Benjamin Constant, Amazonas, Brasil",
          description:
            "Empreendedor, designer e defensor de soluções inovadoras para o desenvolvimento da Amazônia.",
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
      "Plano nacional de hidrovias e dragagem sistemática, com ampliação de canais hidroviários, fortalecimento da infraestrutura portuária e criação de linhas de crédito para renovação das frotas.",
  },
  {
    icon: Zap,
    n: "02",
    title: "Energia Sustentável",
    text:
      "Plano Nacional de Fazendas Aquáticas para geração de energia em meandros abandonados, promovendo inovação energética e aproveitamento sustentável dos recursos naturais.",
  },
  {
    icon: Scale,
    n: "03",
    title: "Responsabilidade Ambiental",
    text:
      "Implementação da Lei de Responsabilização Ambiental de Gestores Públicos, fortalecendo transparência, fiscalização e compromisso ambiental na administração pública.",
  },
  {
    icon: Recycle,
    n: "04",
    title: "Waste-to-Energy",
    text:
      "Implantação da indústria Waste-to-Energy com foco em recuperação energética de resíduos sólidos e reaproveitamento de rejeitos para a indústria asfáltica.",
  },
];

const values = [
  { icon: Lightbulb, title: "Inovação", text: "Soluções modernas para desafios históricos da região." },
  { icon: Leaf, title: "Sustentabilidade", text: "Desenvolvimento que respeita a floresta e seu povo." },
  { icon: MapPin, title: "Desenvolvimento Regional", text: "Amazônia no centro da agenda nacional." },
  { icon: Rocket, title: "Empreendedorismo", text: "Geração de oportunidades e renda local." },
  { icon: Cpu, title: "Tecnologia", text: "Conectividade e ferramentas digitais para todos." },
  { icon: ShieldCheck, title: "Responsabilidade Pública", text: "Gestão ética, transparente e fiscalizável." },
];

const timeline = [
  { year: "2001", text: "Nasce em Benjamin Constant, Amazonas." },
  { year: "2016", text: "Ingressa no Colégio Militar da PM em Manaus." },
  { year: "2017", text: "Inicia o curso de Medicina na Bolívia." },
  { year: "2019", text: "Retorna a Manaus e inicia atuação empreendedora." },
  { year: "2020", text: "Entra no mercado de crédito consignado." },
  { year: "2022", text: "Funda sua promotora financeira e atua em design." },
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/75 backdrop-blur-md border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16">
        <a href="#top" className="flex items-baseline gap-2 font-display text-lg tracking-tight">
          <span className="font-medium">Wick</span>
          <span className="text-muted-foreground">Ryan</span>
          <span className="ml-2 h-1 w-1 rounded-full bg-amazon" />
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
          <a href="#plano" className="hover:text-foreground transition">Plano</a>
          <a href="#valores" className="hover:text-foreground transition">Valores</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-1.5 text-sm border border-foreground/80 px-4 py-2 hover:bg-foreground hover:text-background transition"
        >
          Conversar <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-20 md:pb-28">
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="eyebrow">Amazonas · Brasil</span>
            <span className="hairline w-16" />
            <span className="eyebrow">Edição 2026</span>
          </div>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[88px] leading-[0.95] tracking-tight">
            Uma nova<br />
            <span className="italic font-light">geração</span> de <br />
            liderança <br />
            <span className="text-amazon">amazônida.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Wick Ryan — empreendedor, designer e defensor de soluções inovadoras
            para o desenvolvimento sustentável da Amazônia e do Brasil.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-amazon transition-colors"
            >
              Conheça a trajetória <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#plano"
              className="inline-flex items-center gap-2 border border-foreground/80 px-6 py-3.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Plano de Governo
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-in">
          <div className="absolute -inset-4 border border-border" aria-hidden />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-gold/80" aria-hidden />
          <img
            src={heroImg}
            alt="Retrato profissional de Wick Ryan"
            width={1024}
            height={1280}
            className="relative w-full aspect-[4/5] object-cover grayscale-[15%]"
          />
          <div className="absolute top-6 right-6 bg-background/90 backdrop-blur px-4 py-3 border border-border">
            <div className="eyebrow">Idade</div>
            <div className="font-display text-2xl">26 anos</div>
          </div>
        </div>
      </div>

      <div className="container-x mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
        {[
          ["—", "Benjamin Constant"],
          ["2022", "Fundou promotora financeira"],
          ["+5", "Setores de atuação"],
          ["1", "Visão para a Amazônia"],
        ].map(([k, v]) => (
          <div key={v}>
            <div className="font-display text-3xl">{k}</div>
            <div className="text-xs text-muted-foreground mt-1">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Inovação", "Amazônia", "Hidrovias", "Energia", "Sustentabilidade", "Tecnologia", "Empreendedorismo"];
  const row = [...words, ...words];
  return (
    <section className="border-y border-border py-6 overflow-hidden bg-foreground text-background">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl flex items-center gap-12">
            {w} <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-36">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="relative">
              <img
                src={aboutImg}
                alt="Wick Ryan em momento reflexivo"
                width={900}
                height={1100}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 border border-amazon" aria-hidden />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow">01 — Sobre</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Da floresta para a <br />
            <span className="italic">linha de frente</span> do <br />
            empreendedorismo.
          </h2>

          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
            <p>
              <span className="text-foreground font-medium">Wick Ryan, 26 anos,</span> nasceu
              em Benjamin Constant, no interior do Amazonas, e construiu sua trajetória com base
              em disciplina, independência e espírito empreendedor — formado por uma família matriarcal
              em que mãe e avó foram pilares.
            </p>
            <p>
              Em 2016, mudou-se para Manaus para estudar no Colégio Militar da Polícia Militar,
              fortalecendo valores de responsabilidade e liderança. No ano seguinte, iniciou Medicina
              na Bolívia, ampliando sua visão de mundo.
            </p>
            <p>
              De volta a Manaus em 2019, atuou em vestuário e delivery, ingressou no crédito consignado
              em 2020 e, em 2022, fundou sua própria promotora financeira — somando ao percurso o design
              gráfico e a comunicação visual.
            </p>
            <p className="text-foreground">
              Hoje, representa uma nova geração de líderes amazônidas: conectados com tecnologia,
              desenvolvimento sustentável e soluções modernas para a região.
            </p>
          </div>

          <div className="mt-14">
            <span className="eyebrow">Linha do tempo</span>
            <ol className="mt-6 border-l border-border space-y-6 pl-6">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[31px] top-2 h-2 w-2 rounded-full bg-amazon ring-4 ring-background" />
                  <div className="font-display text-xl">{t.year}</div>
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
    <section id="plano" className="relative py-24 md:py-36 bg-foreground text-background">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="eyebrow text-background/60">02 — Plano de Governo</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Propostas para um Amazonas <br />
              mais forte, sustentável e <br />
              <span className="italic text-gold">conectado ao futuro.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-background/70 text-sm md:text-base">
            Quatro frentes estratégicas que unem infraestrutura, energia limpa,
            responsabilidade ambiental e inovação industrial para a região.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-background/10 border border-background/10">
          {proposals.map(({ icon: Icon, n, title, text }) => (
            <article
              key={n}
              className="group relative bg-foreground p-8 md:p-12 transition-colors hover:bg-background/5"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="eyebrow text-background/50">{n}</span>
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">{title}</h3>
              <p className="text-background/70 leading-relaxed text-sm md:text-base max-w-md">
                {text}
              </p>
              <ArrowUpRight className="absolute bottom-8 right-8 h-5 w-5 text-background/40 group-hover:text-gold transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section id="valores" className="py-24 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">03 — Valores e Visão</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Princípios que guiam <br />
            cada <span className="italic">decisão.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group p-8 md:p-10 border-r border-b border-border hover:bg-secondary/60 transition-colors"
            >
              <Icon className="h-7 w-7 text-amazon mb-6" strokeWidth={1.4} />
              <h3 className="font-display text-2xl mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
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
        alt="Rio amazônico ao amanhecer"
        width={1600}
        height={900}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/75" />
      <div className="container-x relative">
        <div className="max-w-4xl">
          <span className="eyebrow text-background/60">04 — Vamos juntos</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl text-background leading-[1.02]">
            “O futuro da Amazônia exige <span className="italic text-gold">inovação</span>,
            responsabilidade e <span className="italic text-gold">coragem</span> para transformar.”
          </h2>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:contato@wickryan.com.br"
              className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-4 text-sm font-medium hover:bg-gold transition-colors"
            >
              Entre em contato <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#plano"
              className="inline-flex items-center gap-2 border border-background/60 text-background px-7 py-4 text-sm font-medium hover:bg-background hover:text-foreground transition-colors"
            >
              Reler o plano
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container-x grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-display text-3xl">Wick Ryan</div>
          <p className="mt-4 text-muted-foreground max-w-sm text-sm leading-relaxed">
            Liderança jovem, amazônida e estratégica — comprometida com inovação,
            sustentabilidade e desenvolvimento regional.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-4">Navegação</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-amazon">Sobre</a></li>
            <li><a href="#plano" className="hover:text-amazon">Plano de Governo</a></li>
            <li><a href="#valores" className="hover:text-amazon">Valores</a></li>
            <li><a href="#contato" className="hover:text-amazon">Contato</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow mb-4">Acompanhe</div>
          <div className="flex gap-3">
            {[Instagram, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social"
                className="h-11 w-11 grid place-items-center border border-border hover:bg-foreground hover:text-background transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-border flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Wick Ryan. Todos os direitos reservados.</div>
        <div>Manaus · Amazonas · Brasil</div>
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
