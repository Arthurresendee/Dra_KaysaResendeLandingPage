import styles from './Conteudo.module.css'

import imagemDra from '../../assets/kaysaabout.jpg'

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
               <img src={imagemDra} alt="Dra. Kaysa" />
            </div>
            <div className={styles.texto}>
               <h1 className={styles.titulo}>{conteudoCompleto.titulo}</h1>
               <ul className={styles.lista}>
                  {conteudoCompleto.topicos.map((topico, index) => (
                     <li key={index} className={styles.paragrafo}>{topico.conteudo}</li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}


