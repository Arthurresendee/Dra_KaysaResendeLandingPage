import styles from './Home.module.css'; 
import ImgHome from '../../assets/ImgHome.jpg';
import { HorarioFuncionamento } from './HorarioFuncionamento';

export function Home() {
  return (
    <div className={styles.sectionHome}>
      <div className={styles.backgroundWrapper}>
        <img className={styles.backgroundImage} src={ImgHome} alt="Imagem da Home" />
      </div>
      <div className={styles.overlayContent}>
        <HorarioFuncionamento />
      </div>
    </div>
  );
}
