const BASE_URL = 'http://localhost:3333';

export async function login(email: string, senha: string) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.message || 'Erro no login');

    return data;
  } catch (error) {
    throw error;
  }
}
