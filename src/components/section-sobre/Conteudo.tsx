import styles from './Conteudo.module.css'

import imagemDra from '../../assets/kaysaabout.jpg'
import { ScrollAnimation } from "../ScrollAnimation";


export interface Paragrafo {
   conteudo: string
}

export interface Content {
   titulo: string;
   topicos: Paragrafo[];
}

export interface ConteudoFinal {
   conteudoCompleto: Content
}

export function Conteudo({ conteudoCompleto }: ConteudoFinal) {
   return (
      <div className={styles.conteudo}>
         <div className={styles.container}>

            <div className={styles.imagem}>
               <ScrollAnimation>
                  <img src={imagemDra} alt="Dra. Kaysa" />

               </ScrollAnimation>
            </div>
            <div className={styles.texto}>
         <ScrollAnimation>

               <h1 className={styles.titulo}>{conteudoCompleto.titulo}</h1>
               <ul className={styles.lista}>
                  {conteudoCompleto.topicos.map((topico, index) => (
                     <ScrollAnimation>

                        <li key={index} className={styles.paragrafo}>{topico.conteudo}</li>
                     </ScrollAnimation>
                  ))}
               </ul>
         </ScrollAnimation>

            </div>
         </div>
      </div>
   );
}


