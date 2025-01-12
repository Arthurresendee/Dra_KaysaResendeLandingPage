import styles from './IrParaGaleriaSection.module.css';

export function IrParaGaleriaSection() {
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h1>Agora chegou a sua Hora!</h1>
            </div>
            <div className={styles.titulo}>
                <p>
                    Quanto vale para você ter um <strong>Sorriso Perfeito</strong>, 
                    aumentar sua <strong>Autoestima</strong> e perder o medo de 
                    <strong> Sorrir</strong>?
                </p>
            </div>
            <div className={styles.botaoContainer}>
                <a href="/depoimentos" className={styles.botao}>
                    Ver Depoimentos e Antes & Depois
                </a>
            </div>
        </div>
    );
}
