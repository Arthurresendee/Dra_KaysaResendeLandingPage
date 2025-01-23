import { AtalhosRapidos } from "../components/administracao/inicial/AtalhosRapidos";
import { BoasVindas } from "../components/administracao/inicial/BoasVindas";
import { ConfiguracoesGerais } from "../components/administracao/inicial/ConfiguracoesGerais";
import { UltimasAtualizacoes } from "../components/administracao/inicial/UltimasAtualizacoes";
import { VisaoGeral } from "../components/administracao/inicial/VisaoGeral";

export function InicialAdm(){
   return (
      <div>
      <BoasVindas />
      <VisaoGeral />
      <AtalhosRapidos />
      <UltimasAtualizacoes />
      <ConfiguracoesGerais />
    </div>
   )
}