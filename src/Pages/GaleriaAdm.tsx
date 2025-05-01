import styles from "./GaleriaAdm.module.css";
import { RegistroAntesDepois } from "../components/Administracao/Galeria/RegistroAntesDepois";

export default function GaleriaAdm() {
  return (
    <div className={styles.container}>
      <RegistroAntesDepois />
    </div>
  );
}