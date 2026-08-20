import jaguarImg from "@/assets/jaguar.png";
import heroImg from "@/assets/wick-hero.jpg";
import ElectoralBanner from "@/components/ElectoralBanner";

import {
    ArrowUpRight
} from "lucide-react";



export default function Hero() {
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
                    <ElectoralBanner />
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