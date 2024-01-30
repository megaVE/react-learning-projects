import styles from "./Login.module.css"

import { useState, useEffect } from "react"

import { useAuthentication } from "../../hooks/useAuthentication"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
      e.preventDefault()
  
      setError("")

      const user = { email, password }

      const res = await login(user)
  }

  useEffect(() => {
      if(authError) {
          setError(authError)
      }
  }, [authError])

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <p>Sign in to use the blog</p>
      <form onSubmit={handleSubmit}>
          <label>
              <span>E-mail:</span>
              <input
                  type="email"
                  name="email"
                  placeholder="User email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
          </label>
          <label>
              <span>Password:</span>
              <input
                  type="password"
                  name="password"
                  placeholder="User password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
          </label>
          {loading
              ? (<button className="btn" disabled>Loading</button>)
              : (<button className="btn">Login</button>)
          }
          {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Login