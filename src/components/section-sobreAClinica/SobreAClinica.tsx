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
    <section className={styles.sobreClinica}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ScrollAnimation direction="bottom">
            <h1 className={styles.titulo}>{object.titulo}</h1>
          </ScrollAnimation>
          
          <ScrollAnimation direction="bottom">
            <p className={styles.subtitulo}>{object.subtitulo}</p>
          </ScrollAnimation>
        </div>

        <div className={styles.videoWrapper}>
          <ScrollAnimation direction="bottom">
            <div className={styles.videoContainer}>
              <iframe
                src={object.urlVideo}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={styles.video}
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}