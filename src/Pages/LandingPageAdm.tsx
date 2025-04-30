import { useState } from "react";
import styles from "./LandingPageAdm.module.css";
import ListaCards from "../components/Administracao/landingPage/ListaCards";
import FormularioTopico from "../components/Administracao/landingPage/FormularioTopico";
import { useTopicoManager } from "../Hooks/useTopicoManager";
import { FormularioCard } from "../components/Administracao/landingPage/FormularioCard";
import { useNavigate } from "react-router-dom";

export function LandingPageAdm() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const {
    topicos,
    adicionarTopico,
    excluirTopico,
    adicionarCard,
    excluirCard,
  } = useTopicoManager();

  const handleLogin = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Administração</h1>
      </header>

      <div className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}></div>

      <aside className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Menu</h2>
          <button className={styles.closeButton} onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} onClick={handleLogin}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
              Login
            </a>
          </li>
        </ul>
      </aside>

      <main className={styles.main}>
        <section className={styles.formSection}>
          <h2>Novo Tópico</h2>
          <FormularioTopico onAdicionar={adicionarTopico} />
        </section>

        <div className={styles.topicosGrid}>
          {topicos.map((topico) => (
            <section key={topico.id} className={styles.topicoSection}>
              <div className={styles.topicoHeader}>
                <h2>{topico.tituloTopico}</h2>
                <button onClick={() => excluirTopico(topico.id)}>
                  Excluir
                </button>
              </div>
              
              <div className={styles.cardFormSection}>
                <h3>Adicionar Card</h3>
                <FormularioCard
                  topicoId={topico.id}
                  onAdicionar={(novoCard) => adicionarCard(topico.id, novoCard)}
                />
              </div>

              <ListaCards
                cards={topico.cards}
                onExcluir={(tituloCard) => excluirCard(topico.id, tituloCard)}
              />
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
