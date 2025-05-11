import styles from "./Conteudo.module.css";
import kaysaImage from "../../assets/kaysaabout.jpg";
import { ScrollAnimation } from "../ScrollAnimation";

export interface Paragrafo {
  conteudo: string;
}

export interface Content {
  titulo: string;
  topicos: Paragrafo[];
}

export function Conteudo({ conteudoCompleto }: { conteudoCompleto: Content }) {
  return (
    <section className={styles.conteudo}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.imageWrapper}>
              <ScrollAnimation direction="left">
                <img
                  src={kaysaImage}
                  alt="Dra. Kaysa"
                  className={styles.image}
                />
              </ScrollAnimation>
            </div>

            <div className={styles.textContent}>
              <ScrollAnimation direction="top">
                <div className={styles.tituloBox}>
                  <h1 className={styles.titulo}>{conteudoCompleto.titulo}</h1>
                </div>
              </ScrollAnimation>
              {conteudoCompleto.topicos.map((topico, index) => (
                <ScrollAnimation key={index} direction="left">
                  <div className={styles.paragraphWrapper}>
                    <p className={styles.paragraph}>{topico.conteudo}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
