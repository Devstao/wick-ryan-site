import patternImg from "@/assets/amazon-pattern.jpg";
import amazonImg from "@/assets/amazon-river.jpg";
import jaguarImg from "@/assets/jaguar.png";
import proposals from "@/data/proposals";
import values_wick from "@/data/values_wick";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import About from "@/views/About";
import Donate from "@/views/Donate";
import Footer from "@/views/Footer";
import Hero from "@/views/Hero";
import Nav from "@/views/Nav";


const values = values_wick;

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
          <span
            key={i}
            className="font-display text-3xl md:text-5xl flex items-center gap-12 font-medium"
          >
            {w} <span className="h-2 w-2 rounded-full bg-background" />
          </span>
        ))}
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
            Quatro eixos de pensamento que articulam infraestrutura, energia limpa, responsabilidade
            ambiental e inovação para o desenvolvimento regional.
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
            Amazonas, identidade <br />e <span className="italic text-gold">transformação.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-muted-foreground text-base md:text-lg">
            Diálogo aberto com instituições, lideranças, empreendedores e cidadãos que acreditam em
            uma Amazônia mais inovadora, sustentável e conectada ao futuro.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="https://chat.whatsapp.com/FkjIQLO5J1W1K4YRoKlPOB?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Entrar em contato <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#plano" className="btn-ghost-gold">
              Reler as ideias
            </a>
          </div>

          <div className="mt-14 pt-10 border-t border-border/60">
            <span className="eyebrow text-gold/80">Comunidades no WhatsApp</span>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://chat.whatsapp.com/FkjIQLO5J1W1K4YRoKlPOB?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 border border-gold/40 text-gold text-sm font-medium hover:bg-gold hover:text-background transition w-full sm:w-auto justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                Apoiadores Wick Ryan
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://chat.whatsapp.com/J0YiTzxdDlYLa602x2or9L?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 border border-gold/40 text-gold text-sm font-medium hover:bg-gold hover:text-background transition w-full sm:w-auto justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                Denúncias
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Plan />
      <Values />
      <CTA />
      <Donate />
      <Footer />

    </main>
  );
}
