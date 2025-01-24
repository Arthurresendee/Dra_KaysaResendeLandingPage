import React, { useState } from "react";
import { Card } from "../../../Hooks/useTopicoManager";
import styles from "./FormularioCard.module.css";

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
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label}>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Texto:</label>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className={styles.textarea}
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        Adicionar Card
      </button>
    </form>
  );
}
