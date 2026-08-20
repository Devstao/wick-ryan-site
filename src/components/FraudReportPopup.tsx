import { useEffect, useState } from "react";
import { ArrowUpRight, ShieldAlert } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { propagandaAtiva, CANDIDATO, NUMERO, CARGO } from "@/components/ElectoralBanner";

const STORAGE_KEY = "wick-denuncias-popup-lido";
const GRUPO_DENUNCIAS = "https://chat.whatsapp.com/J0YiTzxdDlYLa602x2or9L?mode=gi_t";

export default function FraudReportPopup() {
  const [open, setOpen] = useState(false);
  const [lido, setLido] = useState(false);

  useEffect(() => {
    if (!propagandaAtiva()) return;
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* storage indisponível */
    }
    const id = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(id);
  }, []);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next && lido) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* storage indisponível */
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg w-[calc(100%-1.5rem)] p-0 gap-0 overflow-hidden border border-gold/30 bg-background">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        <DialogHeader className="text-left px-6 md:px-8 pt-8 pb-4">
          <div className="flex items-start gap-4">
            <span className="mt-1 hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
              <ShieldAlert className="h-6 w-6 text-gold" strokeWidth={1.5} />
            </span>
            <div>
              <div className="eyebrow text-gold">Canal de denúncias</div>
              <DialogTitle className="mt-2 font-display text-2xl md:text-3xl leading-tight">
                Viu algo errado na eleição?
              </DialogTitle>
              <DialogDescription className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                Participe da comunidade de {CANDIDATO} <span className="text-gold">{NUMERO}</span> —{" "}
                {CARGO} e denuncie fraudes eleitorais, compra de votos e propaganda irregular de
                outros candidatos. Sua denúncia é encaminhada aos canais competentes.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="px-6 md:px-8 pb-8">
          <a
            href={GRUPO_DENUNCIAS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full justify-center"
          >
            Entrar na comunidade de denúncias <ArrowUpRight className="h-4 w-4" />
          </a>

          <label className="mt-6 flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
            <Checkbox
              checked={lido}
              onCheckedChange={(v) => setLido(v === true)}
              className="mt-0.5 border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-background"
            />
            <span>Marcar como lido e não exibir novamente</span>
          </label>

          <p className="mt-5 text-[0.7rem] leading-relaxed text-muted-foreground/70">
            Conteúdo veiculado nos termos da Lei nº 9.504/1997 e das resoluções do TSE. Denúncias
            falsas podem configurar crime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
