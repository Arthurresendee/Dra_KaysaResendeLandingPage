import styles from "./Galeria.module.css";
import { ImagemGaleriaSection } from "../components/Section-galeria/ImagemGaleriaSection";

export function Galeria() {
  return (
    <main className={styles.galeria}>
      <ImagemGaleriaSection />
    </main>
  );
} 