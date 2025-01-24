import React, { useState } from "react";
import styles from "./FormularioTopico.module.css";

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
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Digite o título do tópico"
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        Adicionar Tópico
      </button>
    </form>
  );
}