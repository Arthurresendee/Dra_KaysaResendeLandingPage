import styles from "./Conteudo.module.css";
import imagemDra from "../../assets/kaysaabout.jpg";
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
          <ScrollAnimation direction="top">
            <h1 className={styles.titulo}>{conteudoCompleto.titulo}</h1>
          </ScrollAnimation>

          <div className={styles.container}>
            <div className={styles.imageWrapper}>
              <ScrollAnimation direction="left">
                <img 
                  src={imagemDra} 
                  alt="Dra. Kaysa" 
                  className={styles.image}
                />
              </ScrollAnimation>
            </div>

            <div className={styles.textContent}>
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