import React from "react";
import styles from "./PlanoDeFundo.module.css";

type BackgroundSessao = {
  children: React.ReactNode;
  imagemDeFundoURL?: string;
  heightSessao?:string;
};

export function PlanoDeFundo({ children, imagemDeFundoURL, heightSessao}: BackgroundSessao) {
  const backgroundStyle = {
    backgroundImage: `url(${imagemDeFundoURL})`,
    height: heightSessao || "100vh"
  };

  return (
    <div className={styles.section_home} style={backgroundStyle}>
      {children}
    </div>
  );
}
