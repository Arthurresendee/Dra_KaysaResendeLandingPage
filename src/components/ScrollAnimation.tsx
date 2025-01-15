import React, { useEffect, useRef, useState } from "react";
import styles from "./ScrollAnimation.module.css";

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: "bottom" | "top" | "left" | "right";
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, direction = "bottom" }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY;

        if (entry.isIntersecting) {

          const animationClass = isScrollingDown
            ? styles[`visibleFrom${capitalize(direction)}`]
            : styles[`visibleFrom${capitalize(direction)}`];

          entry.target.classList.add(animationClass);
        } else {
          entry.target.classList.remove(
            styles.visibleFromBottom,
            styles.visibleFromTop,
            styles.visibleFromLeft,
            styles.visibleFromRight
          );
        }

        setLastScrollY(currentScrollY);
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
  }, [direction, lastScrollY]);

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div ref={elementRef} className={`${styles.hidden} ${styles[`hiddenFrom${capitalize(direction)}`]}`}>
      {children}
    </div>
  );
};
