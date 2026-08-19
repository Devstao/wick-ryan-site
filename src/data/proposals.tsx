import { ReactNode } from "react";
import { Recycle, Scale, Waves, Zap } from "lucide-react";

export interface Proposal {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  n: string;
  title: string;
  text: string;
  modalTitle: string;
  content: ReactNode;
}

export default [
  {
    icon: Waves,
    n: "01",
    title: "Hidrovias e Infraestrutura",
    text: "Defesa de um plano nacional de hidrovias e dragagem dos rios amazônicos, com portos modernos no interior e logística eficiente para integrar o estado.",
    modalTitle: "🚢 Plano Nacional de Hidrovias da Amazônia",
    content: (
      <>
        <p>
          A Amazônia possui a maior rede hidrográfica do planeta, mas ainda é subutilizada como eixo
          de desenvolvimento. Este projeto propõe a criação de um sistema moderno e integrado de
          hidrovias, com a implantação de HUBs portuários estratégicos nos principais municípios
          localizados nas calhas dos rios do Amazonas. Esses polos funcionarão como centros
          logísticos, conectando transporte de cargas e passageiros, impulsionando o comércio
          regional e fortalecendo a economia local.
        </p>
        <p>
          A proposta também inclui a criação e ampliação de canais de navegação, com obras de
          dragagem, sinalização e gestão inteligente das vias fluviais, garantindo que os rios
          sejam navegáveis durante todo o ano, inclusive nos períodos de seca — seguindo modelos
          eficientes como o do sistema hidroviário do Paraguai.
        </p>
        <p>
          Além disso, será implantado um sistema de bilhetagem eletrônica, trazendo mais
          organização, transparência e segurança ao transporte de passageiros.
        </p>
        <p>
          Com a redução dos custos logísticos — hoje um dos principais fatores que encarecem
          produtos no interior — o projeto tem potencial para gerar uma queda no custo de vida entre
          20% e 30%, especialmente em alimentos, combustíveis e itens essenciais, além de gerar
          empregos e integrar regiões isoladas.
        </p>
      </>
    ),
  },
  {
    icon: Zap,
    n: "02",
    title: "Energia Limpa e Regional",
    text: "Estímulo a fazendas aquáticas e matrizes renováveis adaptadas à realidade amazônica, levando energia digna e oportunidades às comunidades ribeirinhas.",
    modalTitle: "⚡ Projeto de Autonomia Energética Interiorana do Amazonas",
    content: (
      <>
        <p>
          Milhares de famílias no interior ainda convivem com energia cara, instável ou inexistente.
          Este projeto propõe levar energia limpa, contínua e acessível por meio de fontes
          renováveis, especialmente a energia solar, adaptada à realidade amazônica.
        </p>
        <p>
          A proposta atuará como linha auxiliar à legislação vigente, como a Lei nº 14.300/2022
          (Marco Legal da Geração Distribuída), a Lei nº 9.074/1995, a Lei nº 12.187/2009 (Política
          Nacional sobre Mudança do Clima) e normas da ANEEL, ampliando sua aplicação no interior.
        </p>
        <p>
          Um dos grandes diferenciais é a implantação de usinas solares flutuantes, com painéis
          instalados sobre estruturas na água, em meandros livres, lagos e áreas de baixa correnteza.
          Essa solução permite gerar energia sem desmatamento, aproveitando áreas ociosas e
          aumentando a eficiência pela refrigeração natural da água.
        </p>
        <p>
          O projeto também inclui miniusinas comunitárias, incentivo à geração distribuída e
          capacitação de mão de obra local, reduzindo a dependência de combustíveis caros e
          poluentes.
        </p>
        <p>
          Além disso, é um pilar fundamental para a interiorização industrial do Amazonas. Com
          energia estável e mais barata, torna-se viável a instalação de pequenas e médias indústrias
          no interior, promovendo:
        </p>
        <ul>
          <li>agregação de valor à produção local;</li>
          <li>geração de empregos;</li>
          <li>descentralização econômica;</li>
          <li>fortalecimento da bioeconomia.</li>
        </ul>
        <p>
          Com isso, o interior passa a produzir riqueza, e não apenas consumir. O projeto também
          contribui para a redução do custo de vida, ao baratear energia, produção e serviços.
        </p>
      </>
    ),
  },
  {
    icon: Scale,
    n: "03",
    title: "Responsabilidade Ambiental",
    text: "Defesa da responsabilização efetiva de gestores públicos por crimes e omissões ambientais, com transparência, dados abertos e fiscalização contínua.",
    modalTitle: "⚖️ Lei de Responsabilização Ambiental de Gestores Públicos",
    content: (
      <>
        <p>
          A proteção da Amazônia não pode depender apenas de discurso — precisa de lei, prazo e
          punição. Este projeto se fundamenta na Constituição Federal, especialmente no Art. 225, que
          garante o direito ao meio ambiente ecologicamente equilibrado, e no Art. 37, que impõe aos
          gestores públicos os princípios da legalidade, moralidade, eficiência e responsabilidade.
        </p>
        <p>
          A proposta estabelece que prefeitos e gestores públicos terão prazo máximo de 120 dias para
          apresentar e iniciar a execução de planos concretos para a desativação de lixões a céu
          aberto, em conformidade com o Plano Nacional de Resíduos Sólidos.
        </p>
        <p>
          Será obrigatória a apresentação de um plano com metas, cronograma e transparência pública,
          permitindo o acompanhamento por órgãos de controle e pela sociedade.
        </p>
        <p>O descumprimento implicará sanções rigorosas, incluindo:</p>
        <ul>
          <li>responsabilização por improbidade administrativa;</li>
          <li>cassação do mandato;</li>
          <li>inelegibilidade por até 8 anos, nos termos da legislação eleitoral e da Lei da Ficha Limpa.</li>
        </ul>
        <p>
          A proposta também fortalece a fiscalização, com auditorias periódicas e integração entre
          órgãos ambientais, tribunais de contas e Ministério Público.
        </p>
        <p>
          Com isso, garantimos que a lei seja cumprida na prática, reduzindo danos ambientais,
          melhorando a saúde pública e evitando desperdício de recursos.
        </p>
      </>
    ),
  },
  {
    icon: Recycle,
    n: "04",
    title: "Indústria Verde e Inovação",
    text: "Indústrias Waste-to-Energy e cadeias produtivas sustentáveis: transformar resíduos em energia, gerar empregos qualificados e cidades mais limpas.",
    modalTitle: "♻️ Programa Nacional Waste to Energy – Amazônia Sustentável",
    content: (
      <>
        <p>
          O lixo, que hoje é um dos maiores problemas ambientais e de saúde pública do Amazonas, pode
          se tornar uma solução econômica e energética. O projeto se apoia em diagnósticos de órgãos
          de controle, como relatórios do Ministério Público de Contas do Amazonas (MPC-AM) em
          conjunto com o IPAAM, que apontam a realidade crítica dos lixões a céu aberto em diversos
          municípios.
        </p>
        <p>
          Exemplos como os lixões de Iranduba, Benjamin Constant, Atalaia do Norte, entre outros,
          evidenciam um problema estrutural que impacta diretamente a saúde da população, contamina o
          solo e os rios e trava o desenvolvimento regional.
        </p>
        <p>
          A proposta consiste na implantação de usinas de transformação de resíduos sólidos em
          energia (Waste to Energy), adaptadas à realidade amazônica. Essas unidades permitirão dar
          destino adequado ao lixo, eliminar lixões e gerar energia elétrica a partir dos resíduos.
        </p>
        <p>
          Além disso, os rejeitos do processo serão reaproveitados na indústria asfáltica e na
          construção civil, criando uma nova cadeia produtiva sustentável.
        </p>
        <p>
          O projeto também terá forte impacto na economia, com a geração de empregos qualificados no
          interior, na capital e na região metropolitana, envolvendo operação de usinas, logística,
          engenharia e reaproveitamento de materiais.
        </p>
        <p>
          Mais do que resolver o problema do lixo, o programa transforma um passivo ambiental em ativo
          econômico, promovendo:
        </p>
        <ul>
          <li>melhoria da saúde pública;</li>
          <li>preservação ambiental;</li>
          <li>geração de energia;</li>
          <li>desenvolvimento regional sustentável.</li>
        </ul>
      </>
    ),
  },
] as Proposal[];
