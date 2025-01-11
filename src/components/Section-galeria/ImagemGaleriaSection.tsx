import styles from './ImagemGaleriaSection.module.css';
import Imagem from '../../assets/ImagemGaleriaMenor.jpeg';

export function ImagemGaleriaSection() {
    return (
        <div className={styles.imagemContainer}>
            <img src={Imagem} alt="Galeria de Fotos" className={styles.imagem} />
        </div>
    );
}
