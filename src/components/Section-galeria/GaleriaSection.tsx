import { PlanoDeFundo } from "../PlanoDeFundo";
import styles from "./Galeria.module.css";
import ImgFundo from "../../assets/backgroundSobre.jpg";
import { ImagemGaleriaSection } from "./ImagemGaleriaSection";
import { IrParaGaleriaSection } from "./IrParaGaleriaSection";

export function GaleriaSection() {
  return (
    <PlanoDeFundo imagemDeFundoURL={ImgFundo} heightSessao="80vh">
      <div className={styles.galeriaContainer}>
        <div className={styles.sectionEsquerda}>
          <ImagemGaleriaSection />
        </div>
        <div className={styles.sectionDireita}>
          <IrParaGaleriaSection />
        </div>
      </div>
    </PlanoDeFundo>
  );
}
