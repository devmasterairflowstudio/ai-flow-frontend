
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Flow Studio</title>
      </Head>
      <main style={{padding: "40px", textAlign: "center"}}>
        <h1>Bem-vindo ao AI Flow Studio</h1>
        <p>Acesse seu painel após o login.</p>
        <a href="/login">Ir para Login</a>
      </main>
    </>
  )
}
