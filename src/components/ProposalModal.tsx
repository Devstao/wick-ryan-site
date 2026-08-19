import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProposalModalProps {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
}

export default function ProposalModal({ trigger, title, children }: ProposalModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl w-[calc(100%-2rem)] max-h-[90vh] p-0 border border-border bg-background">
        <DialogHeader className="p-6 pb-0 text-left">
          <DialogTitle className="font-display text-2xl md:text-3xl text-foreground">
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-120px)] px-6 pb-6">
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
            {children}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
