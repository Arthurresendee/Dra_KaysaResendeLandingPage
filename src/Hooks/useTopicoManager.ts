import { useState } from "react";

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

export const useTopicoManager = () => {
  const [topicos, setTopicos] = useState<Topico[]>([]);

  const adicionarTopico = (tituloTopico: string) => {
    const novoTopico: Topico = {
      id: topicos.length + 1,
      tituloTopico,
      cards: [],
    };
    setTopicos([...topicos, novoTopico]);
  };

  const excluirTopico = (idTopico: number) => {
    if (window.confirm("Tem certeza de que deseja excluir este tópico?")) {
      setTopicos((prevTopicos) => prevTopicos.filter((topico) => topico.id !== idTopico));
    }
  };

  const adicionarCard = (idTopico: number, novoCard: Omit<Card, "id">) => {
    const novoCardComId: Card = {
      ...novoCard,
      id: Math.max(...topicos.flatMap((topico) => topico.cards.map((card) => card.id)), 0) + 1, // Gerando id único para o card
    };
    setTopicos((prevTopicos) =>
      prevTopicos.map((topico) =>
        topico.id === idTopico
          ? { ...topico, cards: [...topico.cards, novoCardComId] }
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
                card.id === cardEditado.id ? cardEditado : card // Comparando pelo id do card
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
              cards: topico.cards.filter((card) => card.id !== idCard), // Comparando pelo id do card
            }
          : topico
      )
    );
  };

  return {
    topicos,
    adicionarTopico,
    excluirTopico,
    adicionarCard,
    editarCard,
    excluirCard,
  };
};
