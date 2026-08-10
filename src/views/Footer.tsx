import candidatoImg from "@/assets/wick-candidato.jpg";



import {
    Instagram,
    Linkedin,
    Mail
} from "lucide-react";



export default function Footer() {
    return (
        <footer className="border-t border-border py-16 relative">
            <div className="container-x grid md:grid-cols-12 gap-10 mb-16">
                <div className="md:col-span-5">
                    <div className="font-display text-3xl">
                        Wick <span className="text-gold">Ryan</span>
                    </div>
                    <p className="mt-4 text-muted-foreground max-w-sm text-sm leading-relaxed">
                        Empreendedor amazonense. Voz pública dedicada à inovação, à sustentabilidade
                        e ao desenvolvimento regional do Amazonas.
                    </p>
                    <p className="mt-6 font-display text-lg text-gold">
                        Uma visão moderna para o Amazonas.
                    </p>
                </div>

                <div className="md:col-span-3">
                    <div className="eyebrow mb-4 text-gold">Navegação</div>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#sobre" className="hover:text-gold">Biografia</a></li>
                        <li><a href="#plano" className="hover:text-gold">Ideias e Iniciativas</a></li>
                        <li><a href="#valores" className="hover:text-gold">Visão</a></li>
                        <li><a href="#contato" className="hover:text-gold">Contato</a></li>
                    </ul>
                </div>

                <div className="md:col-span-4 flex flex-col items-start md:items-end">
                    <div className="eyebrow mb-4 text-gold">Acompanhe</div>
                    <div className="flex gap-3 mb-8">
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
                    <img
                        src={candidatoImg}
                        alt="Pré-candidato"
                        className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>

            <div className="container-x mt-14 pt-6 border-t border-border flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
                <div>© {new Date().getFullYear()} Wick Ryan. Todos os direitos reservados.</div>
                <div>Manaus · Amazonas · Brasil</div>
                <div>Desenvolvido por <a href="https://robotz.dev" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">Nicholas Silva</a></div>
            </div>
        </footer>
    );
}
