import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Topico } from "../types/types";

export const useTopicoManager = () => {
  const [topicos, setTopicos] = useState<Topico[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5200/api/topico")
      .then((response) => {
        setTopicos(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar tópicos:", error);
      });
  }, []);

  const adicionarTopico = async (tituloTopico: string) => {
    try {
      const response = await axios.post("http://localhost:5200/api/topico", { tituloTopico });
      setTopicos([...topicos, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar tópico:", error);
    }
  };

  const excluirTopico = async (idTopico: number) => {
    if (window.confirm("Tem certeza de que deseja excluir este tópico?")) {
      try {
        await axios.delete(`http://localhost:5200/api/topico/${idTopico}`);
        setTopicos((prevTopicos) => 
          prevTopicos.filter((topico) => topico.id !== idTopico)
        );
      } catch (error) {
        console.error("Erro ao excluir tópico:", error);
      }
    }
  };

  const adicionarCard = async (idTopico: number, novoCard: Omit<Card, "id"> & { topicoId: number }) => {
    try {
      const response = await axios.post(`http://localhost:5200/api/card`, novoCard);
      setTopicos((prevTopicos) =>
        prevTopicos.map((topico) =>
          topico.id === idTopico ? { ...topico, cards: [...topico.cards, response.data] } : topico
        )
      );
    } catch (error) {
      console.error("Erro ao adicionar card:", error);
    }
  };

  const excluirCard = async (idTopico: number, idCard: number) => {
    try {
      await axios.delete(`http://localhost:5200/api/card/${idCard}`);
      setTopicos((prevTopicos) =>
        prevTopicos.map((topico) =>
          topico.id === idTopico
            ? { ...topico, cards: topico.cards.filter((card) => card.id !== idCard) }
            : topico
        )
      );
    } catch (error) {
      console.error("Erro ao excluir card:", error);
    }
  };

  return { topicos, adicionarTopico, excluirTopico, adicionarCard, excluirCard };
};