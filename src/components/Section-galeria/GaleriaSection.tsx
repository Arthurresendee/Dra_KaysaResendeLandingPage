import { ScrollAnimation } from "../ScrollAnimation";
import styles from "./Galeria.module.css";
import { ImagemGaleriaSection } from "./ImagemGaleriaSection";
import { IrParaGaleriaSection } from "./IrParaGaleriaSection";

export function GaleriaSection() {
  return (
    <div className={styles.galeriaContainer}>
      <div className={styles.sectionEsquerda}>
        <IrParaGaleriaSection />
      </div>
      <div className={styles.sectionDireita}>
        <ImagemGaleriaSection />
      </div>
    </div>
  );
}
