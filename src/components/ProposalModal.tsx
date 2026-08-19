import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProposalModalProps {
  trigger: ReactNode;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

/** Splits a leading emoji (if any) from the title so it can be shown as a badge. */
function splitEmoji(title: string): [string | null, string] {
  const match = title.match(/^(\p{Extended_Pictographic}[\uFE0F\u200D\p{Extended_Pictographic}]*)\s*(.*)$/u);
  if (!match) return [null, title];
  return [match[1], match[2]];
}

export default function ProposalModal({ trigger, title, eyebrow, children }: ProposalModalProps) {
  const [emoji, cleanTitle] = splitEmoji(title);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl w-[calc(100%-1.5rem)] max-h-[88vh] p-0 gap-0 overflow-hidden border border-gold/25 bg-background shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

        <DialogHeader className="relative text-left px-6 md:px-10 pt-8 md:pt-10 pb-6">
          <div className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative flex items-start gap-4">
            {emoji && (
              <span className="mt-1 hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-2xl">
                {emoji}
              </span>
            )}
            <div className="min-w-0">
              {eyebrow && (
                <span className="eyebrow text-gold block mb-2">{eyebrow}</span>
              )}
              <DialogTitle className="font-display text-2xl md:text-4xl leading-[1.15] tracking-tight text-foreground pr-8">
                <span className="sm:hidden mr-2">{emoji}</span>
                {cleanTitle}
              </DialogTitle>
              <div className="mt-5 h-px w-20 bg-gold/60" />
            </div>
          </div>
          <DialogDescription className="sr-only">
            Clique fora ou pressione Esc para fechar.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(88vh-190px)] px-6 md:px-10 pb-10">
          <div
            className="
              max-w-none text-muted-foreground
              [&>p]:text-[0.975rem] md:[&>p]:text-base [&>p]:leading-[1.85] [&>p]:mb-5
              [&>p:first-of-type]:text-foreground/90 [&>p:first-of-type]:text-lg
              [&>p:first-of-type]:leading-relaxed [&>p:first-of-type]:font-light
              [&>p:first-of-type]:border-l-2 [&>p:first-of-type]:border-gold/50
              [&>p:first-of-type]:pl-5 [&>p:first-of-type]:mb-7
              [&>ul]:my-6 [&>ul]:grid [&>ul]:gap-2 sm:[&>ul]:grid-cols-2
              [&>ul>li]:relative [&>ul>li]:list-none [&>ul>li]:rounded-md
              [&>ul>li]:border [&>ul>li]:border-border [&>ul>li]:bg-card/60
              [&>ul>li]:px-4 [&>ul>li]:py-3 [&>ul>li]:pl-9 [&>ul>li]:text-sm
              [&>ul>li]:leading-snug
              [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute
              [&>ul>li]:before:left-4 [&>ul>li]:before:top-[1.15rem]
              [&>ul>li]:before:h-1.5 [&>ul>li]:before:w-1.5
              [&>ul>li]:before:rotate-45 [&>ul>li]:before:bg-gold
              [&_strong]:text-foreground [&_strong]:font-medium
              [&>p:last-child]:mb-0
            "
          >
            {children}
          </div>
        </ScrollArea>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </DialogContent>
    </Dialog>
  );
}
