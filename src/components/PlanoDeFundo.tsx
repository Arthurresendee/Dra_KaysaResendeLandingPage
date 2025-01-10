import React from "react";
import styles from "./PlanoDeFundo.module.css";

type BackgroundSessao = {
  children: React.ReactNode;
  imagemDeFundo: string;
  min_height?:string;
};

export function PlanoDeFundo({ children, imagemDeFundo, min_height }: BackgroundSessao) {
  const backgroundStyle = {
    backgroundImage: `url(${imagemDeFundo})`,
    minHeight: min_height || "100vh"
  };

  return (
    <div className={styles.section_home} style={backgroundStyle}>
      {children}
    </div>
  );
}
