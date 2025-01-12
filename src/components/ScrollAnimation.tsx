import React, { useEffect, useRef, useState } from "react";
import styles from "./ScrollAnimation.module.css";

interface ScrollAnimationProps {
  children: React.ReactNode;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0); // Rastreamento do último scroll

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const currentScrollY = window.scrollY; // Obter posição atual do scroll
        const isScrollingDown = currentScrollY > lastScrollY; // Verificar direção do scroll

        if (entry.isIntersecting) {
          if (isScrollingDown) {
            entry.target.classList.add(styles.visibleFromBottom);
            entry.target.classList.remove(styles.visibleFromTop);
          } else {
            entry.target.classList.add(styles.visibleFromTop);
            entry.target.classList.remove(styles.visibleFromBottom);
          }
        } else {
          // Quando o elemento sai da tela, resetamos para o estado inicial
          entry.target.classList.remove(styles.visibleFromBottom);
          entry.target.classList.remove(styles.visibleFromTop);
        }

        setLastScrollY(currentScrollY); // Atualizar o último valor do scroll
      },
      { threshold: 0.1 }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [lastScrollY]);

  return (
    <div ref={elementRef} className={styles.hidden}>
      {children}
    </div>
  );
};
