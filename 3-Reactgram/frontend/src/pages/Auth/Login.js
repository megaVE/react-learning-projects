import './Auth.css'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../slices/authSlice'

import Message from '../../components/Message'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const { loading, error } = useSelector(state => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = { email, password }

    dispatch(login(user))
  }

  useEffect(() => {
    dispatch(reset())
  }, [dispatch])
  
  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">Login to see what is trending.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading
          ? <input type="submit" value="Loading..." disabled />
          : <input type="submit" value="Login" />}
        {error && <Message msg={error} type="error" />}
      </form>
      <p>Don't you have an account yet? <Link to="/register">Click here.</Link></p>
    </div>
  )
}

export default Login