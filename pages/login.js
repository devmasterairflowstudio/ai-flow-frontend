import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const handleLogin = async () => {
  try {
    const res = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    console.log("Status:", res.status);
    console.log("Resposta JSON:", data);

    if (res.ok && data.access_token) {
      setMessage("Login bem-sucedido!");
    } else {
      setMessage("Credenciais inválidas.");
    }
  } catch (error) {
    console.error("Erro de login:", error);
    setMessage("Erro ao conectar com a API.");
  }
};

  return (
    <div style={{ padding: "40px" }}>
      <h1>Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Entrar</button>
      <p>{message}</p>
    </div>
  )
}