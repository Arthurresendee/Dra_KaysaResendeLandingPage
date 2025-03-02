import { useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./RegistroPaciente.module.css";

interface Imagem {
  preview: string;
  name?: string;
  type?: string;
  size?: number;
}

interface Registro {
  nome: string;
  imagens: Imagem[];
}

export default function RegistroPaciente() {
  const [nome, setNome] = useState<string>("");
  const [imagens, setImagens] = useState<Imagem[]>([]);
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [editandoIndex, setEditandoIndex] = useState<number | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length + imagens.length > 3) {
      alert("Você pode adicionar no máximo 3 imagens.");
      return;
    }
    const novasImagens: Imagem[] = acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setImagens([...imagens, ...novasImagens]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    },
    multiple: true,
  });

  const criarRegistro = () => {
    if (!nome || imagens.length !== 3) {
      alert("Preencha o nome e adicione 3 imagens.");
      return;
    }
    
    if (editandoIndex !== null) {
      // Atualiza o registro existente
      const novosRegistros = [...registros];
      novosRegistros[editandoIndex] = { nome, imagens };
      setRegistros(novosRegistros);
      setEditandoIndex(null);
    } else {
      // Cria um novo registro
      setRegistros([...registros, { nome, imagens }]);
    }
    
    // Limpa o formulário
    setNome("");
    setImagens([]);
  };

  const iniciarEdicao = (index: number) => {
    const registro = registros[index];
    setNome(registro.nome);
    setImagens([...registro.imagens]);
    setEditandoIndex(index);
  };

  const cancelarEdicao = () => {
    setNome("");
    setImagens([]);
    setEditandoIndex(null);
  };

  const excluirRegistro = (index: number) => {
    const novosRegistros = registros.filter((_, i) => i !== index);
    setRegistros(novosRegistros);
    
    if (editandoIndex === index) {
      cancelarEdicao();
    }
  };

  const removerImagem = (index: number) => {
    const novasImagens = imagens.filter((_, i) => i !== index);
    setImagens(novasImagens);
  };

  return (
    <div className={styles.container}>
      <h2>{editandoIndex !== null ? "Editar Registro" : "Registro de Paciente"}</h2>
      <input 
        type="text" 
        placeholder="Nome da Paciente" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)}
        className={styles.input}
      />
      
      <div {...getRootProps()} className={styles.dropzone}>
        <input {...getInputProps()} />
        <p>Arraste ou clique para adicionar até 3 imagens</p>
      </div>
      
      <div className={styles.previewContainer}>
        {imagens.map((file, index) => (
          <div key={index} className={styles.previewWrapper}>
            <img src={file.preview} alt={`Prévia ${index + 1}`} className={styles.preview} />
            <button 
              onClick={() => removerImagem(index)} 
              className={styles.removeButton}
              type="button"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      
      <div className={styles.buttonGroup}>
        <button onClick={criarRegistro} className={styles.button}>
          {editandoIndex !== null ? "Salvar Alterações" : "Criar"}
        </button>
        {editandoIndex !== null && (
          <button onClick={cancelarEdicao} className={styles.buttonSecondary}>
            Cancelar
          </button>
        )}
      </div>
      
      <h3>Registros Criados</h3>
      <div className={styles.registrosContainer}>
        {registros.map((registro, index) => (
          <div key={index} className={styles.registroCard}>
            <div className={styles.registroHeader}>
              <h4>{registro.nome}</h4>
              <div className={styles.registroActions}>
                <button 
                  onClick={() => iniciarEdicao(index)} 
                  className={styles.actionButton}
                  title="Editar"
                >
                  ✏️
                </button>
                <button 
                  onClick={() => excluirRegistro(index)} 
                  className={styles.actionButton}
                  title="Excluir"
                >
                  🗑️
                </button>
              </div>
            </div>
            <div className={styles.miniaturasContainer}>
              {registro.imagens.map((img, imgIndex) => (
                <img 
                  key={imgIndex} 
                  src={img.preview} 
                  alt={`Imagem ${imgIndex + 1} de ${registro.nome}`} 
                  className={styles.miniatura}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}