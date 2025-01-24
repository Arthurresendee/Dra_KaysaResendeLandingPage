import React, { useState } from "react";
import { Card } from "../../../Pages/LandingPageAdm";

interface FormularioCardProps {
  onAdicionar: (card: Omit<Card, "id">) => void;
}

export function FormularioCard({ onAdicionar }: FormularioCardProps) {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (titulo && texto) {
      onAdicionar({ titulo, texto });
      setTitulo("");
      setTexto("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Texto:</label>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          required
        />
      </div>
      <button type="submit">Adicionar Card</button>
    </form>
  );
}
