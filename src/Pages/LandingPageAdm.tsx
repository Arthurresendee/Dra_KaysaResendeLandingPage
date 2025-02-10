import styles from "./LandingPageAdm.module.css";
import ListaCards from "../components/Administracao/landingPage/ListaCards";
import FormularioTopico from "../components/Administracao/landingPage/FormularioTopico";
import { FormularioCard } from "../components/Administracao/landingPage/FormularioCard";
import { useTopicoManager } from "../Hooks/useTopicoManager";

export function LandingPageAdm() {
  const {
    topicos,
    adicionarTopico,
    excluirTopico,
    adicionarCard,
    editarCard,
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
              <button onClick={() => excluirTopico(topico.id)}>Excluir Tópico</button>
            </div>
            <FormularioCard
              onAdicionar={(novoCard) => adicionarCard(topico.id, novoCard)}
            />
            <ListaCards
              cards={topico.cards}
              onEditar={(cardEditado) => editarCard(topico.id, cardEditado)}
              onExcluir={(tituloCard) => excluirCard(topico.id, tituloCard)}
            />
          </section>
        ))}
      </main>
    </div>
  );
}
