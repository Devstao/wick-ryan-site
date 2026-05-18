import values_wick from "@/data/values_wick";

const values = values_wick

import {
    ArrowUpRight
} from "lucide-react";


// Views


export default function Nav() {
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
                    href="https://chat.whatsapp.com/FkjIQLO5J1W1K4YRoKlPOB?mode=gi_t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex btn-gold text-xs"
                >
                    Falar com Wick <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
            </div>
        </header>
    );
}
