import { PlanoDeFundo } from '../PlanoDeFundo';
import styles from './Galeria.module.css';
import ImgFundo from '../../assets/backgroundSobre.jpg';
import { ImagemGaleriaSection } from './ImagemGaleriaSection';
import { IrParaGaleriaSection } from './IrParaGaleriaSection';

export function Galeria() {
    return (
        <PlanoDeFundo imagemDeFundoURL={ImgFundo} min_height="60vh">
            <div className={styles.galeriaContainer}>
                <div className={styles.sectionEsquerda}>
                    <ImagemGaleriaSection />
                </div>
                <div className={styles.sectionDireita}>
                    <IrParaGaleriaSection />
                </div>
            </div>
        </PlanoDeFundo>
    );
}
