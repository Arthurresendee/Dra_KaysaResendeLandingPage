import { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

// Configuração do Axios
const api = axios.create({
  baseURL: 'https://api.drakaysa.com.br',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true
});

interface LoginResponse {
  usuario: {
    _id: string;
    user: string;
    createdAt: string;
    updatedAt: string;
  };
  token: string;
  message: string;
}

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post<LoginResponse>('/api/auth/login', {
        user: usuario,
        senha: senha
      });
      
      // Armazena o token no localStorage
      localStorage.setItem('token', response.data.token);
      // Armazena os dados do usuário no localStorage (opcional)
      localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
      
      alert(response.data.message); // "Login realizado com sucesso"
      window.location.href = 'https://adm.drakaysa.com.br/';
    } catch (err) {
      setError('Usuário ou senha incorretos');
      console.error('Erro ao fazer login:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.titulo}>Entre na sua conta</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="usuario">Usuário</label>
            <input
              id="usuario"
              name="usuario"
              type="text"
              required
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              required
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={styles.botaoLogin}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 