import styles from "./TopicoSection.module.css"
import { TopicoType } from "../../types/types"
import { ScrollAnimation } from "../ScrollAnimation"

export function TopicoSection({ topicos }: TopicoType) {
  return (
    <div className={styles.topicos}>
      {topicos.map((topico, idx) => (
        <div key={`topico-${(topico as any)._id ?? topico.id ?? idx}`} className={styles.container}>
          <div className={styles.tituloContainer}>
            <h2 className={styles.TituloTopico}>{topico.tituloTopico}</h2>
          </div>
          <div className={styles.containerCards}>
            {topico.cards.map((card, cidx) => (
              <ScrollAnimation key={`card-${(card as any)._id ?? card.id ?? cidx}`} direction="left">
                <div className={styles.card}>
                  <h3>{card.titulo}</h3>
                  <p>{card.texto}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
