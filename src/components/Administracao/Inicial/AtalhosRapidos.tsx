import styles from "./AtalhosRapidos.module.css";

export function AtalhosRapidos() {
  return (
    <div className={styles.atalhos}>
      <button className={styles.botao}>Editar Galeria</button>
      <button className={styles.botao}>Editar Landing Page</button>
      <button className={styles.botao}>Configurações</button>
    </div>
  );
}
