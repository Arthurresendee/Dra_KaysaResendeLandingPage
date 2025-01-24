import { useState } from "react";
import styles from "./LandingPageAdm.module.css";
import ListaCards from "../components/Administracao/landingPage/ListaCards";
import FormularioTopico from "../components/Administracao/landingPage/FormularioTopico";
import { FormularioCard } from "../components/Administracao/landingPage/FormularioCard";

export interface Card {
   id: number;
   titulo: string;
   texto: string;
 }
 

export interface Topico {
  id: number;
  tituloTopico: string;
  cards: Card[];
}

export function LandingPageAdm() {
  const [topicos, setTopicos] = useState<Topico[]>([]);

  const adicionarTopico = (tituloTopico: string) => {
    const novoTopico: Topico = {
      id: topicos.length + 1,
      tituloTopico,
      cards: [],
    };
    setTopicos([...topicos, novoTopico]);
  };

//   const excluirTopico = (idTopico: number) => {
//    setTopicos((prevTopicos) => prevTopicos.filter((topico) => topico.id !== idTopico));
//  }
 

  const adicionarCard = (idTopico: number, novoCard: Omit<Card, "id">) => {
   setTopicos((prevTopicos) =>
     prevTopicos.map((topico) =>
       topico.id === idTopico
         ? {
             ...topico,
             cards: [
               ...topico.cards,
               { ...novoCard, id: topico.cards.length + 1 },
             ],
           }
         : topico
     )
   );
 };

  const editarCard = (idTopico: number, cardEditado: Card) => {
    setTopicos((prevTopicos) =>
      prevTopicos.map((topico) =>
        topico.id === idTopico
          ? {
              ...topico,
              cards: topico.cards.map((card) =>
                card.titulo === cardEditado.titulo ? cardEditado : card
              ),
            }
          : topico
      )
    );
  };

  const excluirCard = (idTopico: number, idCard: number) => {
   setTopicos((prevTopicos) =>
     prevTopicos.map((topico) =>
       topico.id === idTopico
         ? {
             ...topico,
             cards: topico.cards.filter((card) => card.id !== idCard),
           }
         : topico
     )
   );
 };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Administração da Landing Page</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.formSection}>
          <h2>Adicionar Novo Tópico</h2>
          <FormularioTopico onAdicionar={adicionarTopico} />
        </section>

        {topicos.map((topico) => (
          <section key={topico.id} className={styles.topicoSection}>
            <h2>{topico.tituloTopico}</h2>
            <FormularioCard
              onAdicionar={(novoCard) => adicionarCard(topico.id, novoCard)}
            />
            <ListaCards
              cards={topico.cards}
              onEditar={(cardEditado) => editarCard(topico.id, cardEditado)}
              onExcluir={(tituloCard) => excluirCard(topico.id, tituloCard)}
            />
          </section>
        ))}
      </main>
    </div>
  );
}
