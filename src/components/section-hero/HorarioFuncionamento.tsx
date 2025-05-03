import styles from "./HorarioFuncionamento.module.css";

const whatsappLink =
  "https://api.whatsapp.com/send?phone=5534984224848&text=Ol%C3%A1,%20quero%20fazer%20um%20agendamento!";

export function HorarioFuncionamento() {
  return (
    <div className={styles.container}>
      <p>
        Horário de funcionamento: <strong>08:00</strong> às{" "}
        <strong>12:00</strong> / <strong>14:00</strong> às{" "}
        <strong>18:30</strong>
      </p>
      <a
        href={whatsappLink}
        className={styles.contact_button}
        target="_blank"
        rel="noopener noreferrer"
      >
        Agendar horário
      </a>
    </div>
  );
}
