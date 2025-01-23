import { AtalhosRapidos } from "../components/Administracao/Inicial/AtalhosRapidos";
import { BoasVindas } from "../components/Administracao/Inicial/BoasVindas";
import { ConfiguracoesGerais } from "../components/Administracao/Inicial/ConfiguracoesGerais";
import { UltimasAtualizacoes } from "../components/Administracao/Inicial/UltimasAtualizacoes";
import { VisaoGeral } from "../components/Administracao/Inicial/VisaoGeral";

export function Inicial(){
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