import styles from "./ImagemGaleriaSection.module.css";
import Imagem from "../../assets/ImagemGaleria.jpeg";
import { ScrollAnimation } from "../ScrollAnimation";

export function ImagemGaleriaSection() {
  return (
    <div className={styles.imagemContainer}>
      <ScrollAnimation direction="left">
         <img src={Imagem} alt="Galeria de Fotos" className={styles.imagem} />

      </ScrollAnimation>
    </div>
  );
}
