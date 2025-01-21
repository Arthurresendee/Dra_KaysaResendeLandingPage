import styles from './Hero.module.css'; 
import ImgHero from '../../assets/ImgHero.jpg';
import { HorarioFuncionamento } from './HorarioFuncionamento';

export function Hero() {
  return (
    <div className={styles.sectionHero}>
      <div className={styles.backgroundWrapper}>
        <img className={styles.backgroundImage} src={ImgHero} alt="Imagem Hero" />
      </div>
      <div className={styles.overlayContent}>
        <HorarioFuncionamento />
      </div>
    </div>
  );
}
