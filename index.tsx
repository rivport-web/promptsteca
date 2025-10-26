import { useAuth } from "../components/AuthProvider"
import Link from "next/link"

export default function Home() {
  const { user } = useAuth()

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📚 Promptsteca</h1>

      {!user ? (
        <>
          <p>No has iniciado sesión.</p>
          <Link href="/login">➡️ Ir a Login</Link>
        </>
      ) : (
        <>
          <p>Hola, {user.email}</p>
          <Link href="/prompts">✨ Ver mis prompts</Link>
        </>
      )}
    </div>
  )
}
