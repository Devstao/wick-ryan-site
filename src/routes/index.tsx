import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/wick-hero.jpg";
import aboutImg from "@/assets/wick-about.jpg";
import amazonImg from "@/assets/amazon-river.jpg";
import jaguarImg from "@/assets/jaguar.png";
import patternImg from "@/assets/amazon-pattern.jpg";
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
      { title: "Wick Ryan — Juntos por uma Amazonas mais livre" },
      {
        name: "description",
        content:
          "Wick Ryan, jovem liderança amazonense nascido em 1999. Renovação política, desenvolvimento regional e orgulho do povo do Amazonas.",
      },
      { property: "og:title", content: "Wick Ryan — Juntos por uma Amazonas mais livre" },
      {
        property: "og:description",
        content:
          "Liderança jovem, popular e amazônida. Conheça a trajetória, propostas e visão de Wick Ryan para o Amazonas.",
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
          jobTitle: "Liderança Política e Empreendedor",
          birthDate: "1999",
          birthPlace: "Benjamin Constant, Amazonas, Brasil",
          slogan: "Juntos por uma Amazonas mais livre",
          description:
            "Jovem liderança amazonense, defensor do desenvolvimento sustentável e da renovação política do Amazonas.",
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
      "Plano nacional de hidrovias e dragagem dos rios, com ampliação de canais, fortalecimento dos portos do interior e crédito acessível para renovação das frotas regionais.",
  },
  {
    icon: Zap,
    n: "02",
    title: "Energia para o Povo",
    text:
      "Plano de Fazendas Aquáticas para gerar energia limpa nos meandros dos rios, levando luz, renda e dignidade para comunidades ribeirinhas.",
  },
  {
    icon: Scale,
    n: "03",
    title: "Responsabilidade Pública",
    text:
      "Lei de Responsabilização Ambiental de Gestores Públicos: transparência, fiscalização e compromisso real com a floresta e com quem vive dela.",
  },
  {
    icon: Recycle,
    n: "04",
    title: "Indústria Verde",
    text:
      "Indústria Waste-to-Energy para transformar resíduos em energia e em insumos para a indústria asfáltica — gerando empregos e cidades mais limpas.",
  },
];

const values = [
  { icon: Lightbulb, title: "Renovação", text: "Política nova, com gente nova, ideias novas e coragem." },
  { icon: Leaf, title: "Floresta de Pé", text: "Desenvolvimento que respeita a Amazônia e o seu povo." },
  { icon: MapPin, title: "Orgulho Amazônida", text: "O Amazonas no centro das decisões do Brasil." },
  { icon: Rocket, title: "Oportunidade", text: "Empreender, gerar emprego e renda no nosso chão." },
  { icon: Cpu, title: "Inovação Pública", text: "Tecnologia e conectividade para todo o estado." },
  { icon: ShieldCheck, title: "Compromisso", text: "Gestão ética, transparente e perto da população." },
];

const timeline = [
  { year: "1999", text: "Nasce em Benjamin Constant, no interior do Amazonas." },
  { year: "2016", text: "Ingressa no Colégio Militar da PM em Manaus." },
  { year: "2017", text: "Inicia o curso de Medicina na Bolívia." },
  { year: "2019", text: "Retorna a Manaus e começa a empreender." },
  { year: "2020", text: "Entra no mercado de crédito consignado." },
  { year: "2022", text: "Funda sua promotora financeira e atua em design." },
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
          <a href="#sobre" className="hover:text-gold transition">Sobre</a>
          <a href="#plano" className="hover:text-gold transition">Plano</a>
          <a href="#valores" className="hover:text-gold transition">Valores</a>
          <a href="#contato" className="hover:text-gold transition">Contato</a>
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-1.5 text-sm bg-gold text-background px-4 py-2 font-medium hover:bg-foreground hover:text-background transition"
        >
          Junte-se <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* Decorative jaguar silhouette */}
      <img
        src={jaguarImg}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -left-24 bottom-10 w-[460px] opacity-[0.06] hidden md:block"
      />
      <div className="absolute top-24 right-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl" aria-hidden />

      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-end relative">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="eyebrow text-gold/90">Amazonas · Brasil</span>
            <span className="hairline w-16" />
            <span className="eyebrow">Movimento 2026</span>
          </div>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-[88px] leading-[0.95] tracking-tight">
            Juntos por uma <br />
            <span className="text-gold">Amazonas</span> <br />
            mais <span className="italic font-light">livre.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Wick Ryan</span> — jovem liderança
            amazonense, nascido no interior do Amazonas em 1999. Renovação política, orgulho
            regional e coragem para transformar o nosso estado.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 bg-gold text-background px-6 py-3.5 text-sm font-semibold hover:bg-foreground transition-colors"
            >
              Conheça a trajetória <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#plano"
              className="inline-flex items-center gap-2 border border-foreground/40 px-6 py-3.5 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
            >
              Plano de Governo
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-in">
          <div className="absolute -inset-4 border border-gold/40" aria-hidden />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-gold" aria-hidden />
          <img
            src={heroImg}
            alt="Retrato de Wick Ryan, liderança jovem amazonense"
            width={1024}
            height={1280}
            className="relative w-full aspect-[4/5] object-cover"
          />
          <div className="absolute top-6 right-6 bg-background/90 backdrop-blur px-4 py-3 border border-gold/40">
            <div className="eyebrow text-gold">Nascido em</div>
            <div className="font-display text-2xl">1999</div>
          </div>
        </div>
      </div>

      <div className="container-x mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8 relative">
        {[
          ["1999", "Nascido em Benjamin Constant"],
          ["+10", "Anos empreendendo no AM"],
          ["62", "Municípios do Amazonas"],
          ["1", "Compromisso com o povo"],
        ].map(([k, v]) => (
          <div key={v}>
            <div className="font-display text-3xl text-gold">{k}</div>
            <div className="text-xs text-muted-foreground mt-1">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Amazonas Livre", "Renovação", "Floresta de Pé", "Orgulho Amazônida", "Hidrovias", "Energia do Povo", "Inovação"];
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
          <span className="eyebrow text-gold">01 — Quem é Wick Ryan</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Do interior do <span className="text-gold">Amazonas</span> <br />
            para a linha de frente <br />
            da <span className="italic">renovação.</span>
          </h2>

          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
            <p>
              <span className="text-foreground font-medium">Nascido em 1999</span>, em Benjamin
              Constant, no coração do Alto Solimões, Wick Ryan cresceu em uma família matriarcal
              — formado pela força da mãe e da avó, que ensinaram desde cedo o valor do trabalho,
              da palavra e da fé no próprio caminho.
            </p>
            <p>
              Em 2016, mudou-se para Manaus para estudar no Colégio Militar da Polícia Militar,
              onde aprendeu disciplina, responsabilidade e o sentido de servir. No ano seguinte,
              foi para a Bolívia cursar Medicina, ampliando sua visão de mundo sem nunca esquecer
              de onde veio.
            </p>
            <p>
              De volta à capital amazonense, começou do zero — vendendo roupas, fazendo delivery,
              entrando no crédito consignado e, em 2022, fundando sua própria promotora financeira.
              Hoje atua também com design e comunicação, sempre conectado à realidade do povo do
              Amazonas.
            </p>
            <p className="text-foreground">
              É essa trajetória de superação, fé e independência que move Wick: representar uma
              nova geração de lideranças amazônidas — popular, moderna e comprometida com a
              floresta, com a cidade e, acima de tudo, com a gente.
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
            <span className="eyebrow text-gold">02 — Plano de Governo</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Propostas para um <span className="text-gold">Amazonas</span> <br />
              mais forte, sustentável e <br />
              <span className="italic">conectado ao futuro.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-muted-foreground text-sm md:text-base">
            Quatro frentes que unem infraestrutura, energia limpa,
            responsabilidade ambiental e inovação para o nosso povo.
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
          <span className="eyebrow text-gold">03 — Valores</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Princípios que guiam <br />
            cada <span className="italic text-gold">decisão.</span>
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
          <span className="eyebrow text-gold">04 — Movimento</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02]">
            “Juntos por uma <span className="text-gold">Amazonas</span> <br />
            mais <span className="italic">livre.”</span>
          </h2>
          <p className="mt-8 max-w-2xl text-muted-foreground text-base md:text-lg">
            Some-se a esse movimento de renovação política, orgulho amazônida e
            desenvolvimento com responsabilidade. O futuro do Amazonas é construído
            por todos nós.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:contato@wickryan.com.br"
              className="inline-flex items-center gap-2 bg-gold text-background px-7 py-4 text-sm font-semibold hover:bg-foreground transition-colors"
            >
              Entre em contato <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#plano"
              className="inline-flex items-center gap-2 border border-foreground/60 px-7 py-4 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
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
    <footer className="border-t border-border py-16 relative">
      <div className="container-x grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-display text-3xl">
            Wick <span className="text-gold">Ryan</span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm text-sm leading-relaxed">
            Liderança jovem, amazônida e popular — comprometida com renovação,
            sustentabilidade e desenvolvimento do nosso estado.
          </p>
          <p className="mt-6 font-display text-lg text-gold">
            Juntos por uma Amazonas mais livre.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-4 text-gold">Navegação</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-gold">Sobre</a></li>
            <li><a href="#plano" className="hover:text-gold">Plano de Governo</a></li>
            <li><a href="#valores" className="hover:text-gold">Valores</a></li>
            <li><a href="#contato" className="hover:text-gold">Contato</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow mb-4 text-gold">Acompanhe</div>
          <div className="flex gap-3">
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
