const BASE_URL = 'http://gmerola.com.br/psicocare/api';


interface LoginResponse {
  token: string;
  nome: string;
}

interface LoginPayload {
  email: string;
  senha: string;
}

interface UsuarioCadastro {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  nascimento: string;
}

/**
 * Função genérica para requisições à API
 */
const apiFetch = async (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: object,
  token?: string
): Promise<any> => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.erro || 'Erro na requisição');
  }

  return await response.json();
};

/**
 * Login de usuário
 */
export const login = async ({ email, senha }: LoginPayload): Promise<LoginResponse> => {
  return await apiFetch('/auth/login', 'POST', { email, senha });
};

/**
 * Cadastro de novo usuário
 */
export const cadastrarUsuario = async (dados: UsuarioCadastro): Promise<any> => {
  return await apiFetch('/usuarios', 'POST', dados);
};

/**
 * GET com autenticação
 */
export const getComToken = async (endpoint: string, token: string): Promise<any> => {
  return await apiFetch(endpoint, 'GET', undefined, token);
};
