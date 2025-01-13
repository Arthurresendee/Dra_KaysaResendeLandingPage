import { ScrollAnimation } from "../ScrollAnimation";
import styles from "./sobreAClinica.module.css";

export interface SobreAClinicaProps {
  titulo: string;
  subtitulo: string;
  urlVideo: string;
}

export interface SobreAClinicaObject {
  object: SobreAClinicaProps;
}

export function SobreAClinica({ object }: SobreAClinicaObject) {
  return (
    <div className={styles.sobre_a_clinica}>
      <div className={styles.sobre_a_clinica_texto}>
        <ScrollAnimation direction="bottom">
          <p className={styles.p1}>{object.titulo}</p>
        </ScrollAnimation>
        <ScrollAnimation direction="bottom">
          <p className={styles.p2}>{object.subtitulo}</p>
        </ScrollAnimation>
      </div>
      <div className={styles.area_video}>
        <iframe
          src={object.urlVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
