import './Auth.css'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { register, reset } from '../../slices/authSlice'

import Message from '../../components/Message'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const dispatch = useDispatch()

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name,
      email,
      password,
      confirmPassword,
    }

    console.log(user)
    dispatch(register(user))
  }

  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Register to see your friend's photos.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}  
        />
        {loading
          ? <input type="submit" value="Loading..." disabled />
          : <input type="submit" value="Register" />}
        {error && <Message msg={error} type="error" />}
      </form>
      <p>Already have an account? <Link to="/login">Click here.</Link></p>
    </div>
  )
}

export default Register