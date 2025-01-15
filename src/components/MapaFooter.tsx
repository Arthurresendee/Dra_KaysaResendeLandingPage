import styles from "./MapaFooter.module.css";

type MapaFooterProps = {
  mapaSrc: string;
};

export function MapaFooter({ mapaSrc}: MapaFooterProps) {
  return (
    <div className={styles.mapaContainer}>
      <iframe
        className={styles.iframeMapa}
        src={mapaSrc}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
