import styles from "./TopicoSection.module.css";
import { ScrollAnimation } from "../ScrollAnimation";

interface Card {
  titulo: string;
  texto: string;
}

export interface Topico {
  id: number;
  tituloTopico: string;
  cards: Card[];
}

interface TopicoType {
  topicos: Topico[];
}

export function TopicoSection({ topicos }: TopicoType) {
  return (

    <div className={styles.topicos}>
      {topicos.map((topico) => (
        <ScrollAnimation key={topico.id}>
          <div className={styles.container}>
            <h2 className={styles.TituloTopico}>{topico.tituloTopico}</h2>
            <div className={styles.containerCards}>
              {topico.cards.map((card, index) => (
                <ScrollAnimation key={index}>
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
    // </PlanoDeFundo>
  );
}
