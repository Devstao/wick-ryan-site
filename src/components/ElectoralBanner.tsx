import { useEffect, useState } from "react";

/**
 * Propaganda eleitoral — configurações.
 * Ajuste CARGO e PARTIDO conforme o registro oficial da candidatura (exigência do TSE:
 * a propaganda deve identificar candidato, número e partido/coligação).
 */
export const CANDIDATO = "Wick Ryan";
export const NUMERO = "1444";
export const CARGO = "Deputado Federal";
export const PARTIDO = "Missão (14)";

/** Fim da veiculação: 30/09 às 22h (horário de Brasília, UTC-3) = 01:00 UTC de 01/10. */
export const FIM_PROPAGANDA = new Date("2026-10-01T01:00:00Z");

export function propagandaAtiva(now: Date = new Date()) {
  return now.getTime() < FIM_PROPAGANDA.getTime();
}

export default function ElectoralBanner() {
  const [ativo, setAtivo] = useState(() => propagandaAtiva());

  useEffect(() => {
    if (!ativo) return;
    const id = setInterval(() => setAtivo(propagandaAtiva()), 60_000);
    return () => clearInterval(id);
  }, [ativo]);

  if (!ativo) return null;

  return (
    <aside
      aria-label="Propaganda eleitoral"
      className="relative mb-8 border border-gold/50 bg-gold/[0.07] backdrop-blur-sm"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gold/70" aria-hidden />
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 p-5 md:p-6">
        <div className="flex items-center gap-4">
          <div className="font-tech text-4xl md:text-5xl font-extrabold text-gold text-glow leading-none tracking-tight">
            {NUMERO}
          </div>
          <span className="hidden sm:block h-12 w-px bg-gold/40" aria-hidden />
        </div>
        <div className="flex-1">
          <div className="eyebrow text-gold/90">Propaganda eleitoral</div>
          <p className="mt-1 font-display text-xl md:text-2xl leading-tight">
            {CANDIDATO} <span className="text-gold">{NUMERO}</span> — {CARGO}
          </p>
          <p className="mt-1 text-xs md:text-sm text-muted-foreground">
            {PARTIDO} · Eleições 2026 · Confira sua seção e vote no dia da eleição.
          </p>
        </div>
      </div>
      <p className="px-5 md:px-6 pb-4 text-[0.7rem] leading-relaxed text-muted-foreground/80">
        Conteúdo de propaganda eleitoral veiculado nos termos da Lei nº 9.504/1997 e das resoluções
        do TSE. Não é permitida a divulgação de conteúdo falso ou de propaganda em desacordo com a
        legislação eleitoral.
      </p>
    </aside>
  );
}
