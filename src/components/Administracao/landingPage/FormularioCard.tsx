import React, { useState } from "react";
import { Card } from "../../../types/types";
import styles from "./FormularioCard.module.css";

interface FormularioCardProps {
   onAdicionar: (card: Omit<Card, "id"> & { topicoId: number }) => void;
   topicoId: number;
 }
 
 export function FormularioCard({ onAdicionar, topicoId }: FormularioCardProps) {
   const [titulo, setTitulo] = useState("");
   const [texto, setTexto] = useState("");
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     if (titulo && texto) {
       // Inclui o topicoId ao adicionar um card
       onAdicionar({ titulo, texto, topicoId });
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
 