import { ArrowUpRight, Instagram as InstagramIcon } from "lucide-react";
import instagramPosts, { instagramProfile } from "@/data/instagram";

export default function Instagram() {
  return (
    <section id="atualizacoes" className="py-24 md:py-36 border-t border-border relative">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-8">
            <span className="eyebrow text-gold">05 — Atualizações</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Conteúdo recente <br />
              direto do <span className="italic text-gold">Amazonas.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-muted-foreground text-sm md:text-base">
            Registros, análises e pautas publicadas no perfil oficial de Wick Ryan no Instagram.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <article
              key={post.shortcode}
              className="group relative border border-border bg-card/40 hover:border-gold/50 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <span className="eyebrow text-gold/80 text-[0.7rem]">{post.date}</span>
                <InstagramIcon className="h-4 w-4 text-gold" strokeWidth={1.4} />
              </div>

              <div className="relative bg-background">
                <iframe
                  src={`https://www.instagram.com/${post.type === "reel" ? "reel" : "p"}/${post.shortcode}/embed/`}
                  title={post.title}
                  loading="lazy"
                  scrolling="no"
                  allowFullScreen
                  className="w-full h-[480px] border-0 block"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-5">
                <h3 className="font-display text-xl leading-snug">{post.title}</h3>
                <a
                  href={`https://www.instagram.com/${post.type === "reel" ? "reel" : "p"}/${post.shortcode}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-gold transition"
                >
                  Ver mais no Instagram
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="absolute left-0 bottom-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a href={instagramProfile} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Seguir @wickryanam <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
