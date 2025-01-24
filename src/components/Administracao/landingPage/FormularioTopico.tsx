import React, { useState } from "react";

interface FormularioTopicoProps {
  onAdicionar: (tituloTopico: string) => void;
}

export default function FormularioTopico({ onAdicionar }: FormularioTopicoProps) {
  const [titulo, setTitulo] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (titulo.trim() === "") return;
    onAdicionar(titulo.trim());
    setTitulo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Digite o título do tópico"
        required
      />
      <button type="submit">Adicionar Tópico</button>
    </form>
  );
}
