import { Link } from "react-router-dom";
import styles from "./AtalhosRapidos.module.css";

export function AtalhosRapidos() {
  return (
    <div className={styles.atalhos}>
      <Link to="/adm/galeria" className={styles.link}>
        <button className={styles.botao}>Editar Galeria</button>
      </Link>
      <Link to="/adm/landingPage" className={styles.link}>
        <button className={styles.botao}>Editar Landing Page</button>
      </Link>
      <Link to="#" className={styles.link}>
        <button className={styles.botao}>Configurações</button>
      </Link>
    </div>
  );
}
