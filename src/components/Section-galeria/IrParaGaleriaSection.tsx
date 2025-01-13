import { ScrollAnimation } from "../ScrollAnimation";
import styles from "./IrParaGaleriaSection.module.css";

export function IrParaGaleriaSection() {
  return (
    <ScrollAnimation direction="right">
      <div className={styles.container}>
        <h1 className={styles.titulo}>Agora chegou a sua Hora!</h1>
        <p className={styles.texto}>
          Quanto vale para você ter um <strong>Sorriso Perfeito</strong>,
          aumentar sua <strong>Autoestima</strong> e perder o medo de
          <strong> Sorrir</strong>?
        </p>
        <div className={styles.botaoContainer}>
          <a href="/depoimentos" className={styles.botao}>
            Ver Depoimentos e Antes & Depois
          </a>
        </div>
      </div>
    </ScrollAnimation>
  );
}
