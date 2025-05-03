import styles from "./TopicoSection.module.css";
import { ScrollAnimation } from "../ScrollAnimation";
import { TopicoType } from "../../../types/types"; // Importando os tipos

export function TopicoSection({ topicos }: TopicoType) {
  return (
    <div className={styles.topicos}>
      {topicos.map((topico) => (
        <ScrollAnimation key={`topico-${topico.id}`}>
          <div className={styles.container}>
            <h2 className={styles.TituloTopico}>{topico.tituloTopico}</h2>
            <div className={styles.containerCards}>
              {topico.cards.map((card) => (
                <ScrollAnimation key={`card-${card.id}`}>
                  <div className={styles.card}>
                    <h3>{card.titulo}</h3>
                    <p>{card.texto}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
}
