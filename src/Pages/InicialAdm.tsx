import styles from "./InicialAdm.module.css";
import { AtalhosRapidos } from "../components/Administracao/Inicial/AtalhosRapidos";
import { BoasVindas } from "../components/Administracao/Inicial/BoasVindas";
import { ConfiguracoesGerais } from "../components/Administracao/Inicial/ConfiguracoesGerais";
import { UltimasAtualizacoes } from "../components/Administracao/Inicial/UltimasAtualizacoes";
import { VisaoGeral } from "../components/Administracao/Inicial/VisaoGeral";

export function InicialAdm() {
  return (
    <div className={styles.container}>
      <BoasVindas />
      <div className={styles.row}>
        <VisaoGeral />
        <AtalhosRapidos />
      </div>
      <div className={styles.row}>
        <UltimasAtualizacoes />
        <ConfiguracoesGerais />
      </div>
    </div>
  );
}
