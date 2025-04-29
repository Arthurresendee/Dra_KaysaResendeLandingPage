import styles from "./LandingPageAdm.module.css";
import ListaCards from "../components/Administracao/landingPage/ListaCards";
import FormularioTopico from "../components/Administracao/landingPage/FormularioTopico";
import { useTopicoManager } from "../Hooks/useTopicoManager";
import { FormularioCard } from "../components/Administracao/landingPage/FormularioCard";

export function LandingPageAdm() {
  const {
    topicos,
    adicionarTopico,
    excluirTopico,
    adicionarCard,
    excluirCard,
  } = useTopicoManager();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Administração da Landing Page</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.formSection}>
          <h2>Adicionar Novo Tópico</h2>
          <FormularioTopico onAdicionar={adicionarTopico} />
        </section>

        {topicos.map((topico) => (
          <section key={topico.id} className={styles.topicoSection}>
            <div className={styles.topicoHeader}>
              <h2>{topico.tituloTopico}</h2>
              <button onClick={() => excluirTopico(topico.id)}>
                Excluir Tópico
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
      </main>
    </div>
  );
}
